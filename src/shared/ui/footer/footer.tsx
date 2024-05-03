import { Container, Flex, Box, Image, useColorMode } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import Logo from "src/shared/icons/podcaster-logo.svg";

export function Footer() {
  const { colorMode } = useColorMode();
  return (
    <Box as="footer" p={4} bg={colorMode === "dark" ? "blue.800" : "blue.200"}>
      <Container maxW="container.lg">
        <Flex justifyContent="center" alignItems="center">
          <ChakraLink as={ReactRouterLink} to="/">
            <Image
              src={Logo}
              objectFit="cover"
              alt="logo podcaster project"
              mr={6}
            />
          </ChakraLink>
          <span>by elvirrrk</span>
        </Flex>
      </Container>
    </Box>
  );
}
