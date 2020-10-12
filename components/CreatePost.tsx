import React, { useState, useEffect, ReactNode } from "react";
import firebase from "firebase";
import config from "../src/firebase/config";

import "firebase/auth";

import {
  Box,
  Divider,
  Button,
  IconButton,
  Input,
  Textarea,
  Text,
} from "@chakra-ui/core";

const CreatePost = () => {
  if (firebase.apps.length === 0) firebase.initializeApp(config);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notification, setNotification] = useState("");

  const [showCreatePost, setShowCreatePost] = useState(false);
  const toggleShowCreatePost = () => {
    setShowCreatePost(!showCreatePost);
  };
  if (firebase.apps.length === 0) firebase.initializeApp(config);

  const [user, setUser] = useState({ displayName: "" });
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user: any) => {
      if (user) {
        setUser(user);
      } else {
        firebase
          .auth()
          .getRedirectResult()
          .then(function (result: any) {
            console.log(result.user);
            setUser(result.user);
          })
          .catch(function (error) {
            // Handle error.
            console.log(error);
          });
      }
    });
  }, []);
  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (title !== "" && content !== "") {
      toggleShowCreatePost();
      firebase.firestore().collection("blog").add({
        title: title,
        content: content,
      });
      setNotification("Post created");
    } else {
      setNotification("Field(s) cannot be empty");
    }

    setTitle("");
    setContent("");

    setTimeout(() => {
      setNotification("");
    }, 2000);
  };
  return (
    <>
      {showCreatePost ? (
        <Box bg="yellow.300" p="10px" mb="30px" shadow="md">
          <h2>Add Post</h2>
          <Divider borderColor="black" />
          <Text>{notification}</Text>
          <form onSubmit={handleSubmit}>
            <div>
              Title
              <br />
              <Input
                type="text"
                value={title}
                onChange={({ target }: any) => setTitle(target.value)}
                size="sm"
              />
            </div>
            <div>
              Content
              <br />
              <Textarea
                value={content}
                onChange={({ target }: any) => setContent(target.value)}
                size="sm"
              />
            </div>
            <Button mt="10px" mr="10px" onClick={toggleShowCreatePost}>
              Cancel
            </Button>
            <Button mt="10px" float="right" type="submit">
              Create
            </Button>
          </form>
        </Box>
      ) : (
        <IconButton
          aria-label="Add Post"
          icon="add"
          bg="yellow.300"
          borderRadius="50%"
          shadow="md"
          m="20px"
          onClick={toggleShowCreatePost}
        />
      )}
    </>
  );
};
export default CreatePost;
