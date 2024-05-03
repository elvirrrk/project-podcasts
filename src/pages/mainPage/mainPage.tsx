import { Flex, Heading } from "@chakra-ui/react";
import { CardMainPage } from "src/widgets/cardMainPage/cardMainPage.tsx";

export function MainPage() {
  return (
    <>
      <Heading>hi i am MAIN PAGE</Heading>
      <Flex>
        <CardMainPage></CardMainPage>
      </Flex>
    </>
  );
}
