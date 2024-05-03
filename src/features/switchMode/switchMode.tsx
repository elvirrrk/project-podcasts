import { useColorMode, useColorModeValue, Button } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export function StyleColorMode() {
  const { toggleColorMode } = useColorMode();
  const color = useColorModeValue("blue.700", "blue.100");
  const iconTheme = useColorModeValue(
    <MoonIcon w={8} h={8}></MoonIcon>,
    <SunIcon w={8} h={8}></SunIcon>,
  );

  return (
    <Button
      w={12}
      h={12}
      size="md"
      colorScheme="blue"
      color={color}
      variant="ghost"
      onClick={toggleColorMode}
    >
      {iconTheme}
    </Button>
  );
}
