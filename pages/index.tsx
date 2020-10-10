import React from "react";
import Layout from "../components/Layout";
import CreatePost from "../components/CreatePost";
import Posts from "../components/Posts";
import { Flex } from "@chakra-ui/core";
const IndexPage = () => {
  return (
    <Layout title="Post it!">
      <Flex
        align="center"
        justify="center"
        maxW="100%"
        w="100vw"
        flexDir="row"
        flexWrap="wrap"
      >
        <Posts />
        <CreatePost />
      </Flex>
    </Layout>
  );
};

export default IndexPage;
