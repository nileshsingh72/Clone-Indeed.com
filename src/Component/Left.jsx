import { Box, Button, Flex, Text } from "@chakra-ui/react";

export default function Left() {
  return (
    <>
      <Box border={"1px solid purple"} h="1000px" w="30%">
        <Box bg={"white"} border={"1px solid black"}>
          <Text textAlign={"left"}>Frontend Developer</Text>
          <Text textAlign={"left"}>Universal Placement</Text>
          <Text textAlign={"left"}>Banjara Hills , Hyderabad , Tehlanga</Text>
          <Flex gap={2}>
            <Button bg={"#FED7D7"}> ₹ 40,000 - 50,000 month </Button>
            <Button bg={"#FED7D7"}> Fresher</Button>
          </Flex>
          <Flex mt={2}>
            <Button bg={"#FED7D7"}>Shift: Morning</Button>
          </Flex>
          <Flex>
            <Button>Apply Secure with Indeed Resume</Button>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
//checked
