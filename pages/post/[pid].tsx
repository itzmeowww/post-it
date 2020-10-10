import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import firebase from "firebase";
import config from "../../src/firebase/config";
import PostLayout from "../../components/PostLayout";
import { Flex } from "@chakra-ui/core";
const Post = () => {
  if (firebase.apps.length === 0) firebase.initializeApp(config);
  const router = useRouter();
  const { pid } = router.query;
  const [blog, setBlog] = useState({ id: "", title: "", content: "" });
  useEffect(() => {
    if (pid.toString()) {
      firebase
        .firestore()
        .collection("blog")
        .doc(pid.toString())
        .get()
        .then((x: any) => {
          setBlog(x.data());
          console.log(blog);
        });
    }
  }, []);
  return (
    <Layout>
      <Flex align="center" justify="center" w="100vw" maxW="100%" minH="100vh">
        <PostLayout
          pid={blog?.id}
          title={blog?.title}
          content={blog?.content}
          isFullView={true}
        />
      </Flex>
    </Layout>
  );
};
export default Post;
