import ReactMarkdown from "react-markdown";
import { chakra, Box, useColorModeValue as mode } from "@chakra-ui/react";
import * as React from "react";
import rehypeRaw from "rehype-raw";
import gfm from "remark-gfm";
import {
  Article,
  getAllArticlesWithSlug,
  getArticle,
} from "../../connectors/strapi";
import { NavContent } from "../../components/website/Navbar/NavContent";
import { Footer } from "../../components/website/Footer/Footer";
import { Meta } from "../../components/website/Meta";
import { ArticlesList } from "../../components/website/Blog/articles-list";
import { PostTitle } from "../../components/website/Blog/PostTitle";

const ChakraReactMarkdown = chakra(ReactMarkdown);

export default function Posts({
  article,
  moreArticles,
}: {
  article: Article;
  moreArticles: Omit<Article, "content">[];
}) {
  return (
    <Box minH="640px">
      <Meta />

      <Box
        as="header"
        bg={mode("white", "gray.800")}
        position="relative"
        zIndex="10"
      >
        <Box
          as="nav"
          aria-label="Main navigation"
          maxW="7xl"
          mx="auto"
          px={{ base: "6", md: "8" }}
        >
          <NavContent.Mobile display={{ base: "flex", lg: "none" }} />
          <NavContent.Desktop display={{ base: "none", lg: "flex" }} />
        </Box>
        <PostTitle
          image={article?.image}
          title={article?.title}
          description={article?.description}
        />
        <Box
          as="section"
          //   bg={mode("gray.50", "gray.800")}
          py={{ base: "10", sm: "24" }}
        >
          <Box
            maxW={{ base: "xl", md: "7xl" }}
            mx="auto"
            px={{ base: "6", md: "8" }}
          >
            <ChakraReactMarkdown
            //   rehypePlugins={[rehypeRaw]}
            //   remarkPlugins={[gfm]}
              sx={{
                "& a": {
                  color: "brand.600",
                  ":hover": { textDecoration: "underline" },
                },
                "& p": {
                  paddingTop: 4,
                },
                textAlign: "justify",
                "& h1": {
                  fontSize: "2em",
                  fontWeight: "800",
                },
              }}
            >
              {article?.content}
            </ChakraReactMarkdown>
          </Box>
        </Box>
        <ArticlesList previewArticles={moreArticles} preview />
      </Box>
      <Footer />
    </Box>
  );
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const articles = (await getAllArticlesWithSlug()) || [];
  // Get the paths we want to pre-render based on posts
  const paths = articles.map((article) => ({
    params: { slug: article?.slug },
  }));
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<{
  props: { article: Article; moreArticles: Omit<Article, "content">[] };
}> {
  const { article, moreArticles } = await getArticle(slug);
  return {
    props: { article, moreArticles },
  };
}
