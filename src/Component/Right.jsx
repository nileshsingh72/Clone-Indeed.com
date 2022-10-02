import {
  Box,
  Button,
  Flex,
  Text,
  Image,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { useEffect, useContext } from "react";
import { HomeContext } from "../Context/HomeContext";
export default function Right() {
  const { Rdata } = useContext(HomeContext);

  // if (true) {
  //   return (
  //     <Alert
  //       status="success"
  //       variant="subtle"
  //       flexDirection="column"
  //       alignItems="center"
  //       justifyContent="center"
  //       textAlign="center"
  //       height="200px"
  //     >
  //       <AlertIcon boxSize="40px" mr={0} />
  //       <AlertTitle mt={4} mb={1} fontSize="lg">
  //         Application submitted!
  //       </AlertTitle>
  //       <AlertDescription maxWidth="sm">
  //         Thanks for submitting your application. Our team will get back to you
  //         soon.
  //       </AlertDescription>
  //     </Alert>
  //   );
  // }

  return (
    <>
      <Box w="70%">
        <Box mb="20px" mt="40px" w="100%">
          <Box
            bg={"white"}
            borderRadius="12px"
            padding="10px 10px"
            border={"1px solid black"}
          >
            <Text
              textAlign={"left"}
              fontSize="25px"
              textDecoration={"underline"}
              fontFamily="cursive"
            >
              {Rdata.vacancy}
            </Text>
            <Text
              textAlign={"left"}
              fontSize="19px"
              fontWeight={"bold"}
              fontFamily="header"
            >
              {Rdata.company}
            </Text>
            <Text fontWeight={"bold"} textAlign={"left"}>
              {Rdata.location}
            </Text>
            <Flex gap={2}>
              <Button bg={"#FED7D7"}> ₹ {Rdata.salary} </Button>
              <Button bg={"#FED7D7"}> {Rdata.work_exp}</Button>
            </Flex>
            <Flex
              alignItems={"center"}
              bg={"#FED7D7"}
              w="70%"
              borderRadius={9}
              mt={2}
              mb={2}
            >
              <Image
                w="4%"
                h="4%"
                ml="10px"
                mr="-10px"
                src="https://cdn-icons-png.flaticon.com/512/1827/1827379.png"
              />
              <Button bg="none"> {Rdata.shift}</Button>
            </Flex>
            <Flex>
              <Button onClick={() => alert("Successfully Applied")}>
                Apply Secure with Indeed Resume
              </Button>
            </Flex>
            <Text
              ml="20px"
              textAlign={"left"}
              fontWeight={"bold"}
              fontSize="12px"
              mt={3}
            >
              {Rdata.desc_1}
            </Text>
            <Text
              mt={3}
              ml="20px"
              textAlign={"left"}
              fontWeight={"bold"}
              fontSize="12px"
            >
              {Rdata.desc_2}
            </Text>
            <Text
              ml="20px"
              textAlign={"left"}
              fontWeight={"bold"}
              fontSize="12px"
              mt={3}
            >
              {Rdata.desc_1}
            </Text>
            <Text
              mt={3}
              ml="20px"
              textAlign={"left"}
              fontWeight={"bold"}
              fontSize="12px"
            >
              {Rdata.desc_2}
            </Text>{" "}
            <Text
              ml="20px"
              textAlign={"left"}
              fontWeight={"bold"}
              fontSize="12px"
              mt={3}
            >
              {Rdata.desc_1}
            </Text>
            <Text
              mt={3}
              ml="20px"
              textAlign={"left"}
              fontWeight={"bold"}
              fontSize="12px"
            >
              {Rdata.desc_2}
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
}
