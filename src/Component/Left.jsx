import { Box, Button, Flex, Text, Image } from "@chakra-ui/react";
import axios from "axios";
import {
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { HomeContext } from "../Context/HomeContext";

export default function Left({ data2 }) {
  const { loading, setRdata } = useContext(HomeContext);

  const mainDatafunc = (id) => {
    axios
      .get(`http://localhost:3040/jobs/${id}`)
      .then((response) => setRdata(response.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    // if (id === undefined) {
    //   id = 1;
    // }
    handleboxclick(1);
  }, []);

  const handleboxclick = (id) => {
    mainDatafunc(id);
  };
  return (
    <>
      <Box padding="0" bg="none">
        <SkeletonCircle isLoaded={!loading} size="10"></SkeletonCircle>
        <SkeletonText isLoaded={!loading} noOfLines={6} spacing="4">
          <Flex flexDirection={"column"}>
            {" "}
            {data2?.map((el) => (
              <Box onClick={() => handleboxclick(el.id)} mb="20px" w="70%">
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
                    {el.vacancy}
                  </Text>
                  <Text
                    textAlign={"left"}
                    fontSize="19px"
                    fontWeight={"bold"}
                    fontFamily="header"
                  >
                    {el.company}
                  </Text>
                  <Text fontWeight={"bold"} textAlign={"left"}>
                    {el.location}
                  </Text>
                  <Flex gap={2}>
                    <Button bg={"#FED7D7"}> ₹ {el.salary} </Button>
                    <Button bg={"#FED7D7"}> {el.work_exp}</Button>
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
                    <Button bg="none"> {el.shift}</Button>
                  </Flex>
                  <Flex>
                    <Button>Apply Secure with Indeed Resume</Button>
                  </Flex>

                  <Text
                    ml="20px"
                    textAlign={"left"}
                    fontWeight={"bold"}
                    fontSize="12px"
                    mt={3}
                  >
                    {el.desc_1}
                  </Text>

                  <Text
                    mt={3}
                    ml="20px"
                    textAlign={"left"}
                    fontWeight={"bold"}
                    fontSize="12px"
                  >
                    {el.desc_2}
                  </Text>
                </Box>
              </Box>
            ))}
          </Flex>
        </SkeletonText>
      </Box>
    </>
  );
}
