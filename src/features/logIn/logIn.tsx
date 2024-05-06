import { Container, Box, Heading } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Form } from "src/widgets/form/form.tsx";

export function LogIn() {
  return (
    <Box p={4}>
      <Container maxW="container.lg">
        <Heading textAlign="center">Hi</Heading>
        <Form />
        <ChakraLink
          textAlign="center"
          display="block"
          my={2}
          as={ReactRouterLink}
          to="/signup"
        >
          Create an account
        </ChakraLink>
      </Container>
    </Box>
  );
}
