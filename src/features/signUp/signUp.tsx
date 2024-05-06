import { Container, Box, Heading } from "@chakra-ui/react";
import { Form } from "src/widgets/form/form.tsx";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

export function SignUp() {
  return (
    <Box p={4}>
      <Container maxW="container.md">
        <Heading textAlign="center">Create an account</Heading>
        <Form />
        <ChakraLink
          textAlign="center"
          display="block"
          my={2}
          as={ReactRouterLink}
          to="/login"
        >
          Or Login?
        </ChakraLink>
      </Container>
    </Box>
  );
}
