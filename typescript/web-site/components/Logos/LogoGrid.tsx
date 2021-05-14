import {
  Box,
  Stack,
  Heading,
  Text,
  SimpleGrid,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import * as Logo from "./Brands";

export const LogoGrid = () => {
  return (
    <Box as="section" py="48" bg={mode("gray.50", "gray.800")}>
      <Box
        maxW={{ base: "xl", md: "7xl" }}
        mx="auto"
        px={{ base: "6", md: "8" }}
      >
        <Heading align="center" fontWeight="extrabold" maxW="lg" mx="auto">
          Integrate seamlessly with the best data tools
        </Heading>
        <Text align="center" textAlign="center" maxW="lg" mx="auto" mt="12">
          An added benefit of being <strong>open source</strong> is that
          Labelflow can integrate with a ton of tools in the ecosystem, thanks
          to a clean <strong>API and SDKs</strong>. Image storage, databases,
          data warehouses, deployment tools and AI libraries all work seamlessly
          with Labelflow.
        </Text>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 4 }}
          mt="24"
          spacing="6"
          color={mode("inherit", "white")}
        >
          <Stack
            as="a"
            target="_blank"
            rel="noreferrer"
            href="https://www.python.org/"
            alignItems="center"
            py="6"
            px="8"
            // bg={mode("gray.50", "gray.800")}
            bg={mode("white", "gray.900")}
            rounded={{ md: "lg" }}
            _hover={{ shadow: "lg" }}
            transitionProperty="box-shadow"
            transitionDuration="0.1s"
          >
            <Logo.Python h="8" opacity={0.92} />
            <Text>Python</Text>
          </Stack>
          <Stack
            as="a"
            target="_blank"
            rel="noreferrer"
            href="https://pytorch.org/"
            alignItems="center"
            py="6"
            px="8"
            // bg={mode("gray.50", "gray.800")}
            bg={mode("white", "gray.900")}
            rounded={{ md: "lg" }}
            _hover={{ shadow: "lg" }}
            transitionProperty="box-shadow"
            transitionDuration="0.1s"
          >
            <Logo.PyTorch h="8" opacity={0.92} />
            <Text>PyTorch</Text>
          </Stack>
          <Stack
            as="a"
            target="_blank"
            rel="noreferrer"
            href="https://www.tensorflow.org/"
            alignItems="center"
            py="6"
            px="8"
            // bg={mode("gray.50", "gray.800")}
            bg={mode("white", "gray.900")}
            rounded={{ md: "lg" }}
            _hover={{ shadow: "lg" }}
            transitionProperty="box-shadow"
            transitionDuration="0.1s"
          >
            <Logo.TensorFlow h="8" opacity={0.92} />
            <Text>TensorFlow</Text>
          </Stack>

          <Stack
            as="a"
            target="_blank"
            rel="noreferrer"
            href="https://keras.io/"
            alignItems="center"
            py="6"
            px="8"
            // bg={mode("gray.50", "gray.800")}
            bg={mode("white", "gray.900")}
            rounded={{ md: "lg" }}
            _hover={{ shadow: "lg" }}
            transitionProperty="box-shadow"
            transitionDuration="0.1s"
          >
            <Logo.Keras h="8" opacity={0.92} />
            <Text>Keras</Text>
          </Stack>

          <Stack
            as="a"
            target="_blank"
            rel="noreferrer"
            href="https://www.postgresql.org/"
            alignItems="center"
            py="6"
            px="8"
            // bg={mode("gray.50", "gray.800")}
            bg={mode("white", "gray.900")}
            rounded={{ md: "lg" }}
            _hover={{ shadow: "lg" }}
            transitionProperty="box-shadow"
            transitionDuration="0.1s"
          >
            <Logo.Postgres h="8" opacity={0.92} />
            <Text>PostgreSQL</Text>
          </Stack>

          <Stack
            as="a"
            target="_blank"
            rel="noreferrer"
            href="https://www.mysql.com/"
            alignItems="center"
            py="6"
            px="8"
            // bg={mode("gray.50", "gray.800")}
            bg={mode("white", "gray.900")}
            rounded={{ md: "lg" }}
            _hover={{ shadow: "lg" }}
            transitionProperty="box-shadow"
            transitionDuration="0.1s"
          >
            <Logo.MySql h="8" opacity={0.92} />
            <Text>MySQL</Text>
          </Stack>

          <Stack
            as="a"
            target="_blank"
            rel="noreferrer"
            href="https://www.snowflake.com/"
            alignItems="center"
            py="6"
            px="8"
            // bg={mode("gray.50", "gray.800")}
            bg={mode("white", "gray.900")}
            rounded={{ md: "lg" }}
            _hover={{ shadow: "lg" }}
            transitionProperty="box-shadow"
            transitionDuration="0.1s"
          >
            <Logo.Snowflake h="8" opacity={0.92} />
            <Text>Snowflake</Text>
          </Stack>

          <Stack
            as="a"
            target="_blank"
            rel="noreferrer"
            href="https://cloud.google.com/bigquery/"
            alignItems="center"
            py="6"
            px="8"
            // bg={mode("gray.50", "gray.800")}
            bg={mode("white", "gray.900")}
            rounded={{ md: "lg" }}
            _hover={{ shadow: "lg" }}
            transitionProperty="box-shadow"
            transitionDuration="0.1s"
          >
            <Logo.BigQuery h="8" opacity={0.92} />
            <Text>Google BigQuery</Text>
          </Stack>

          <Stack
            as="a"
            target="_blank"
            rel="noreferrer"
            href="https://aws.amazon.com/redshift/"
            alignItems="center"
            py="6"
            px="8"
            // bg={mode("gray.50", "gray.800")}
            bg={mode("white", "gray.900")}
            rounded={{ md: "lg" }}
            _hover={{ shadow: "lg" }}
            transitionProperty="box-shadow"
            transitionDuration="0.1s"
          >
            <Logo.Redshift h="8" opacity={0.92} />
            <Text>AWS Redshift</Text>
          </Stack>

          <Stack
            as="a"
            target="_blank"
            rel="noreferrer"
            href="https://aws.amazon.com/s3/"
            alignItems="center"
            py="6"
            px="8"
            // bg={mode("gray.50", "gray.800")}
            bg={mode("white", "gray.900")}
            rounded={{ md: "lg" }}
            _hover={{ shadow: "lg" }}
            transitionProperty="box-shadow"
            transitionDuration="0.1s"
          >
            <Logo.AwsS3 h="8" opacity={0.92} />
            <Text>Amazon S3</Text>
          </Stack>

          <Stack
            as="a"
            target="_blank"
            rel="noreferrer"
            href="https://cloud.google.com/storage"
            alignItems="center"
            py="6"
            px="8"
            // bg={mode("gray.50", "gray.800")}
            bg={mode("white", "gray.900")}
            rounded={{ md: "lg" }}
            _hover={{ shadow: "lg" }}
            transitionProperty="box-shadow"
            transitionDuration="0.1s"
          >
            <Logo.CloudStorage h="8" opacity={0.92} />
            <Text>Google Cloud Storage</Text>
          </Stack>

          <Stack
            as="a"
            target="_blank"
            rel="noreferrer"
            href="https://azure.microsoft.com/"
            alignItems="center"
            py="6"
            px="8"
            // bg={mode("gray.50", "gray.800")}
            bg={mode("white", "gray.900")}
            rounded={{ md: "lg" }}
            _hover={{ shadow: "lg" }}
            transitionProperty="box-shadow"
            transitionDuration="0.1s"
          >
            <Logo.Azure h="8" opacity={0.92} />
            <Text>Microsoft Azure</Text>
          </Stack>

          <Stack
            as="a"
            target="_blank"
            rel="noreferrer"
            href="https://www.docker.com/"
            alignItems="center"
            py="6"
            px="8"
            // bg={mode("gray.50", "gray.800")}
            bg={mode("white", "gray.900")}
            rounded={{ md: "lg" }}
            _hover={{ shadow: "lg" }}
            transitionProperty="box-shadow"
            transitionDuration="0.1s"
          >
            <Logo.Docker h="8" opacity={0.92} />
            <Text>Docker</Text>
          </Stack>

          <Stack
            as="a"
            target="_blank"
            rel="noreferrer"
            href="https://www.typescriptlang.org/"
            alignItems="center"
            py="6"
            px="8"
            // bg={mode("gray.50", "gray.800")}
            bg={mode("white", "gray.900")}
            rounded={{ md: "lg" }}
            _hover={{ shadow: "lg" }}
            transitionProperty="box-shadow"
            transitionDuration="0.1s"
          >
            <Logo.Typescript h="8" opacity={0.92} />
            <Text>Typescript</Text>
          </Stack>

          {/* <Stack
            as="a" target = "_blank"
            href="https://reactjs.org/"
            alignItems="center"
            py="6"
            px="8"
            // bg={mode("gray.50", "gray.800")}
            bg={mode("white", "gray.900")}
            rounded={{ md: "lg" }}
                _hover={{ shadow: "lg" }}
            transitionProperty="box-shadow"
            transitionDuration="0.1s"
          >
            <Logo.ReactLogo h="8" opacity={0.92} />
            <Text>React</Text>
          </Stack> */}
          {/* <Stack
            as="a" target = "_blank"
            href="https://nextjs.org/"
            alignItems="center"
            py="6"
            px="8"
            // bg={mode("gray.50", "gray.800")}
            bg={mode("white", "gray.900")}
            rounded={{ md: "lg" }}
                _hover={{ shadow: "lg" }}
            transitionProperty="box-shadow"
            transitionDuration="0.1s"
          >
            <Logo.NextJs h="8" opacity={0.92} />
            <Text>Next.Js</Text>
          </Stack> */}
          <Stack
            as="a"
            target="_blank"
            rel="noreferrer"
            href="https://graphql.org/"
            alignItems="center"
            py="6"
            px="8"
            // bg={mode("gray.50", "gray.800")}
            bg={mode("white", "gray.900")}
            rounded={{ md: "lg" }}
            _hover={{ shadow: "lg" }}
            transitionProperty="box-shadow"
            transitionDuration="0.1s"
          >
            <Logo.GraphQl h="8" opacity={0.92} />
            <Text>GraphQL</Text>
          </Stack>
          {/* <Stack
            as="a" target = "_blank"
            href="https://www.prisma.io/"
            alignItems="center"
            py="6"
            px="8"
            // bg={mode("gray.50", "gray.800")}
            bg={mode("white", "gray.900")}
            rounded={{ md: "lg" }}
                _hover={{ shadow: "lg" }}
            transitionProperty="box-shadow"
            transitionDuration="0.1s"
          >
            <Logo.Prisma h="8" opacity={0.92} />
            <Text>Prisma</Text>
          </Stack> */}

          {/* <Stack
            as="a" target = "_blank"
            href="https://next-auth.js.org/"
            alignItems="center"
            py="6"
            px="8"
            // bg={mode("gray.50", "gray.800")}
            bg={mode("white", "gray.900")}
            rounded={{ md: "lg" }}
                _hover={{ shadow: "lg" }}
            transitionProperty="box-shadow"
            transitionDuration="0.1s"
          >
            <Logo.NextAuth h="8" opacity={0.92} />
            <Text>Next-Auth</Text>
          </Stack> */}
          {/* <Stack
            as="a" target = "_blank"
            href="https://www.apollographql.com/"
            alignItems="center"
            py="6"
            px="8"
            // bg={mode("gray.50", "gray.800")}
            bg={mode("white", "gray.900")}
            rounded={{ md: "lg" }}
                _hover={{ shadow: "lg" }}
            transitionProperty="box-shadow"
            transitionDuration="0.1s"
          >
            <Logo.Apollo h="8" opacity={0.92} />
            <Text>Apollo</Text>
          </Stack> */}
          <Stack
            as="a"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/"
            alignItems="center"
            py="6"
            px="8"
            // bg={mode("gray.50", "gray.800")}
            bg={mode("white", "gray.900")}
            rounded={{ md: "lg" }}
            _hover={{ shadow: "lg" }}
            transitionProperty="box-shadow"
            transitionDuration="0.1s"
          >
            <Logo.Github h="8" opacity={0.92} />
            <Text>Github</Text>
          </Stack>
          {/* <Stack
            as="a" target = "_blank"
            href="https://www.heroku.com/"
            alignItems="center"
            py="6"
            px="8"
            // bg={mode("gray.50", "gray.800")}
            bg={mode("white", "gray.900")}
            rounded={{ md: "lg" }}
                _hover={{ shadow: "lg" }}
            transitionProperty="box-shadow"
            transitionDuration="0.1s"
          >
            <Logo.Heroku h="8" opacity={0.92} />
            <Text>Heroku</Text>
          </Stack> */}
          {/* <Stack
            as="a" target = "_blank"
            href="https://www.stripe.com/"
            alignItems="center"
            py="6"
            px="8"
            // bg={mode("gray.50", "gray.800")}
            bg={mode("white", "gray.900")}
            rounded={{ md: "lg" }}
                _hover={{ shadow: "lg" }}
            transitionProperty="box-shadow"
            transitionDuration="0.1s"
          >
            <Logo.Stripe h="8" opacity={0.92} />
            <Text>Stripe</Text>
          </Stack> */}
          {/* <Stack
            as="a" target = "_blank"
            href="https://postmarkapp.com/"
            alignItems="center"
            py="6"
            px="8"
            // bg={mode("gray.50", "gray.800")}
            bg={mode("white", "gray.900")}
            rounded={{ md: "lg" }}
                _hover={{ shadow: "lg" }}
            transitionProperty="box-shadow"
            transitionDuration="0.1s"
          >
            <Logo.Postmark h="8" opacity={0.92} />
            <Text>Postmark</Text>
          </Stack> */}
        </SimpleGrid>
      </Box>
    </Box>
  );
};
