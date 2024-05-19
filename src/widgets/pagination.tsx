import { Button, Flex } from "@chakra-ui/react";
export function Pagination({ getNextPage, getPrevPage }) {
  // записать в actions и передать сюда use...
  //   function getNextPage() {
  //     setCurrentPageUrl(nextPageUrl);
  //   }

  //   function getPrevPage() {
  //     setCurrentPageUrl(prevPageUrl);
  //   }

  //       <Pagination
  //         getNextPage={nextPageUrl ? getNextPage : null}
  //         getPrevPage={prevPageUrl ? getPrevPage : null}
  //       />
  return (
    <Flex justifyContent="center" gap={4}>
      {getPrevPage && <Button onClick={getPrevPage}>Previous</Button>}
      {getNextPage && <Button onClick={getNextPage}>Next</Button>}
    </Flex>
  );
}
