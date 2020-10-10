import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import { Box } from "@chakra-ui/core";
type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Box p="5px" bg="green.200" shadow="md">
      <Link href="/">
        <a>Home</a>
      </Link>{" "}
      |{" "}
      <Link href="/profile">
        <a>Profile</a>
      </Link>{" "}
      |{" "}
    </Box>
    {children}
  </>
);

export default Layout;
