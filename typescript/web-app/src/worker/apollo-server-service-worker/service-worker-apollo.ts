/* eslint-env serviceworker */
// https://github.com/stutrek/apollo-server-service-worker/blob/master/src/serviceWorkerApollo.ts
import { GraphQLOptions, runHttpQuery } from "apollo-server-core";

import type { Request as ApolloRequest } from "apollo-server-env";

export async function graphQLServiceWorker(
  request: Request,
  options: GraphQLOptions
) {
  if (!options) {
    throw new Error("Apollo Server requires options.");
  }

  try {
    const { graphqlResponse, responseInit } = await runHttpQuery([], {
      method: request.method.toUpperCase(),
      options,
      query:
        request.method === "POST"
          ? await request.json()
          : JSON.parse(request.url.split("?")[1]),
      request: request as unknown as ApolloRequest,
    });

    const response = new Response(graphqlResponse);

    Object.entries(responseInit.headers ?? {}).forEach(([name, value]) => {
      response.headers.set(name, value as string);
    });

    return response;
  } catch (error) {
    if (error.name !== "HttpQueryError") {
      throw error;
    }
    const response = new Response(error.message, {
      status: error.statusCode,
      statusText: error.statusText,
    });

    if (error.headers) {
      Object.entries(error.headers ?? {}).forEach(([name, value]) => {
        response.headers.set(name, value as string);
      });
    }
    return response;
  }
}
