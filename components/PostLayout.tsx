import React from "react";
import { Divider, Box, Text, Skeleton } from "@chakra-ui/core";

type Post = {
  pid?: string;
  title?: string;
  content?: string;
  isFullView?: boolean;
};
const PostLayout = ({
  pid = undefined,
  title = undefined,
  content = undefined,
  isFullView = false,
}: Post) => {
  return (
    <Box
      id={pid}
      bg="yellow.100"
      maxW={isFullView ? "80vw" : "200px"}
      minW="150px"
      maxH={isFullView ? "reset" : "200px"}
      p="10px"
      m="10px"
      cursor="pointer"
      shadow="md"
    >
      <Box>
        {title == undefined ? (
          <Skeleton h="30px" />
        ) : (
          <Text
            fontSize="lg"
            fontWeight="bold"
            text-overflow="ellipsis"
            white-space="nowrap"
            overflow="hidden"
            maxH="30px"
          >
            {title}
          </Text>
        )}
      </Box>
      <Divider borderColor="black" />
      {content == undefined ? (
        <Skeleton h="30px" />
      ) : (
        <Text
          fontSize="md"
          text-overflow="ellipsis"
          white-space="nowrap"
          overflow="hidden"
          maxH="150px"
        >
          {content}
        </Text>
      )}
    </Box>
  );
};
export default PostLayout;
