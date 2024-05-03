import { Container, Flex, Box, Image, useColorMode } from "@chakra-ui/react";
import { StyleColorMode } from "src/features/switchMode/switchMode.tsx";
import { NavLink as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import Logo from "src/shared/icons/podcaster-logo.svg";
import "./header.scss";

export function Header() {
  const { colorMode } = useColorMode();
  return (
    <Box as="header" p={4} bg={colorMode === "dark" ? "blue.800" : "blue.200"}>
      <Container maxW="container.lg">
        <Flex justifyContent="space-between" alignItems="center">
          <ChakraLink as={ReactRouterLink} to="/">
            <Image src={Logo} objectFit="cover" alt="logo podcaster project" />
          </ChakraLink>
          <Flex alignItems="center" gap={5}>
            <ChakraLink as={ReactRouterLink} to="/signup" fontWeight="semibold">
              Sign up
            </ChakraLink>
            <ChakraLink as={ReactRouterLink} to="/login" fontWeight="semibold">
              Login
            </ChakraLink>
            <StyleColorMode></StyleColorMode>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
