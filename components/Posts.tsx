import React, { useState, useEffect } from "react";
import firebase from "firebase";
import config from "../src/firebase/config";
import PostLayout from "./PostLayout";
import { Box, Flex } from "@chakra-ui/core";
import Link from "next/link";
const Posts = () => {
  if (firebase.apps.length === 0) firebase.initializeApp(config);
  const [blogs, setBlogs] = useState([{ id: "", title: "", content: "" }]);
  useEffect(() => {
    firebase
      .firestore()
      .collection("blog")
      .onSnapshot((snap: any) => {
        const blogs: any = snap.docs.map((doc: any) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setBlogs(blogs);
      });
  }, []);

  return (
    <div>
      <Flex
        flexDir="row"
        width="100vw"
        justify="center"
        align="center"
        p="20px"
        w="100vw"
        maxW="100%"
        flexWrap="wrap"
      >
        {blogs.map((x) => {
          return (
            <Link href={"post/" + x.id}>
              <Box>
                <PostLayout pid={x.id} title={x.title} content={x.content} />
              </Box>
            </Link>
          );
        })}
      </Flex>
    </div>
  );
};
export default Posts;
