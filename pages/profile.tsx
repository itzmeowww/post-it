import firebase from "firebase";
import "firebase/auth";
import config from "../src/firebase/config";
import { Text, Flex, Divider } from "@chakra-ui/core";
import { useEffect, useState } from "react";

import Layout from "../components/Layout";

import Login from "../components/login";
const Profile = () => {
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
  return (
    <Layout>
      {user.displayName != "" ? (
        <Flex
          w="100vw"
          h="100vh"
          align="center"
          justify="center"
          flexDir="column"
        >
          <Text fontSize="xl">HI</Text>
          <Divider borderColor="black" />
          <Text>{user.displayName}</Text>
        </Flex>
      ) : (
        <Login />
      )}
    </Layout>
  );
};

export default Profile;
