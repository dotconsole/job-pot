"use client"
import {
  Flex,
  Box,
  Text,
  Button,
  ButtonGroup,
  Spacer,
  useColorMode
} from "@chakra-ui/react";
import { FaSun } from "react-icons/fa";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

export const Navbar = ()  => {
  const { toggleColorMode } = useColorMode()
  return (
    <nav className="px-3">
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Box p="2">
          <Text size="md" fontSize="4xl" fontWeight="semibold" className={rubik.className}>Job Crates</Text>
        </Box>
        <Spacer />
        <FaSun onClick={toggleColorMode} className="cursor-pointer text-2xl"/>
      </Flex>
    </nav>
  );
}
