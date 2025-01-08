import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
const Navbar = () => {
  return (
    <>
      <HStack>
        <Image src={logo} boxSize="50px"></Image>
        <Text color="red.500">Topbar Beatch</Text>
      </HStack>
    </>
  );
};

export default Navbar;
