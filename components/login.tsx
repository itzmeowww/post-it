import React from "react";

import { Button, Flex } from "@chakra-ui/core";
import firebase from "firebase";
import "firebase/auth";
import config from "../src/firebase/config";

const Login = () => {
  const handleBtn = () => {
    if (firebase.apps.length === 0) firebase.initializeApp(config);
    const provider = new firebase.auth.OAuthProvider("microsoft.com");

    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(function () {
        // Existing and future Auth states are now persisted in the current
        // session only. Closing the window would clear any existing state even
        // if a user forgets to sign out.
        // ...
        // New sign-in will be persisted with session persistence.
        return firebase.auth().signInWithRedirect(provider);
      })
      .catch(function (error) {
        console.log(error);
        // // Handle Errors here.
        // var errorCode = error.code;
        // var errorMessage = error.message;
      });
  };
  return (
    <Flex w="100vw" maxW="100%" h="100vh" align="center" justify="center">
      <Button onClick={handleBtn}>Sign In</Button>
    </Flex>
  );
};

export default Login;
