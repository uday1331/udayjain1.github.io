import React from "react";
import { TiHomeOutline } from "react-icons/ti";

import { Portrait } from ".";
import {
  Flex,
  Heading,
  IconButton,
  useColorMode,
  Box,
  Text,
  Link
} from "@chakra-ui/core";
import { InternalLink } from "./InternalLink";
import { customTheme } from "../theme";

export const Header: React.FunctionComponent<{ siteTitle: string }> = ({
  siteTitle
}) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigationBar: { title: string; path: string }[] = [
    { title: "Achievements", path: "/achievements" },
    { title: "Projects", path: "/work" },
    { title: "Blog", path: "/blog" }
  ];

  return (
    <Flex as="nav" direction="column">
      <Flex justify="space-between" align="center">
        <InternalLink to="/">
          <Flex align="center">
            <Portrait />
            <Heading marginLeft={3} textAlign="center">
              {siteTitle}
            </Heading>
          </Flex>
        </InternalLink>
        <IconButton
          aria-label="Dark Mode"
          size="xs"
          icon={colorMode === "dark" ? "sun" : "moon"}
          onClick={toggleColorMode}
        />
      </Flex>
      <Flex align="center" marginTop={3} marginLeft={2} wrap="wrap">
        <InternalLink to={"/"}>
          <Box
            as={TiHomeOutline}
            size="15px"
            color={
              `/${window.location.pathname.split("/")?.[1]}` === "/"
                ? colorMode === "dark"
                  ? customTheme.colors.primary[300]
                  : customTheme.colors.primary[500]
                : undefined
            }
          />
        </InternalLink>
        <Text marginX={2}>|</Text>
        <Link href="/docs/resume.pdf" marginRight={2}>
          Resume
        </Link>
        {navigationBar.map(({ title, path }) => (
          <Flex marginRight={2} key={path}>
            <InternalLink
              to={path}
              color={
                `/${window.location.pathname.split("/")?.[1]}` === path
                  ? colorMode === "dark"
                    ? customTheme.colors.primary[300]
                    : customTheme.colors.primary[500]
                  : undefined
              }
            >
              {title}
            </InternalLink>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};