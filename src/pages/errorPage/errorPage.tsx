import { Container, Box, Heading, Flex } from "@chakra-ui/react";
import { Header } from "src/shared/ui/header/header.tsx";
import { Footer } from "src/shared/ui/footer/footer.tsx";

export function ErrorPage() {
  return (
    <>
      <Header />
      <Box as="main" p={4} flexGrow="1">
        <Container maxW="container.lg">
          <Flex alignItems="center" flexDirection="column">
            <Heading>Oops!</Heading>
            <p>Sorry, we can't find this page</p>
          </Flex>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
