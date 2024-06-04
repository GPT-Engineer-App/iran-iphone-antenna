import React from "react";
import { Container, Text, VStack, Heading, Box, IconButton, Link } from "@chakra-ui/react";
import { FaInfoCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">
          iPhone 15 Antenna Registry in Iran
        </Heading>
        <Text fontSize="lg">The iPhone 15 supports both LTE and 5G networks in Iran. Below are the details:</Text>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading as="h2" size="md">
            LTE Support
          </Heading>
          <Text>iPhone 15 supports the following LTE bands in Iran:</Text>
          <Text>Band 1 (2100 MHz), Band 3 (1800 MHz), Band 7 (2600 MHz), Band 8 (900 MHz), Band 20 (800 DD), Band 28 (700 APT)</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading as="h2" size="md">
            5G Support
          </Heading>
          <Text>iPhone 15 supports the following 5G bands in Iran:</Text>
          <Text>n1 (2100 MHz), n3 (1800 MHz), n28 (700 APT), n78 (3500 MHz)</Text>
        </Box>
        <Link href="https://www.apple.com/iphone-15/specs/" isExternal>
          <IconButton aria-label="More Info" icon={<FaInfoCircle />} size="lg" />
        </Link>
      </VStack>
    </Container>
  );
};

export default Index;
