import { Container, Box } from "@chakra-ui/react";
import { Header } from "src/shared/ui/header/header.tsx";
import { Footer } from "src/shared/ui/footer/footer.tsx";
import { Outlet } from "react-router-dom";

export function CommonLayout() {
  return (
    <>
      <Header />
      <Box as="main" p={4} flexGrow="1">
        <Container maxW="container.lg">
          <Outlet />
        </Container>
      </Box>
      <Footer />
    </>
  );
}
