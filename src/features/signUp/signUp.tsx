import { Container, Box, Heading } from "@chakra-ui/react";
import { ErrorMessage } from "src/widgets/form/form.tsx";

export function SignUp() {
  return (
    <Box p={4}>
      <Container maxW="container.lg">
        <Heading>Hello</Heading>
        <p>Create an account</p>
        <ErrorMessage />
      </Container>
    </Box>
  );
}
