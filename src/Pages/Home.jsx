import { Box, Select, Flex, Stack, Button, Text, Link } from "@chakra-ui/react";
import Footer from "./Footer";
import JobFeed from "../Component/JobFeed";
export default function Home() {
  return (
    <>
      {/* <Box border={"1px solid red"} textAlign="center" > */}
      <Flex
        justify={"space-between"}
        w="60%"
        m={"auto"}
        border="1px solid red "
      >
        <Stack spacing={3}>
          <Select
            border="1px solid red"
            w="300px"
            variant="outline"
            placeholder="What"
          >
            <option value="">part time</option>
            <option value="">part time</option>
            <option value="">part time</option>
          </Select>
        </Stack>
        <Stack spacing={3}>
          <Select w="300px" variant="outline" placeholder="Where">
            <option value="">Indore , Madhya Pradesh</option>
            <option value="">Indore , Madhya Pradesh</option>
            <option value="">Indore , Madhya Pradesh</option>
          </Select>
        </Stack>
        <Button
          bg={"#2557a7"}
          font-family={("Noto Sans", "Helvetica Neue")}
          fontSize={"14px"}
          color="white"
        >
          Find jobs
        </Button>
      </Flex>
      <Flex justify={"center"} gap={2} my={4}>
        <Link color={"#085FF7"} fontWeight="bold">
          Post your resume
        </Link>
        <Text
          color={"#4B4B4B"}
          fontSize="16px"
          fontFamily={("Noto Sans", "Helvetica Neue")}
          letterSpacing="0.5px"
        >
          {" "}
          - It only takes a few seconds
        </Text>
      </Flex>
      <Flex justify={"center"} gap={2} my={4}>
        <Link color={"#085FF7"} fontWeight="bold">
          Employers: Post a job{" "}
        </Link>
        <Text
          color={"#4B4B4B"}
          fontSize="16px"
          fontFamily={("Noto Sans", "Helvetica Neue")}
          letterSpacing="0.5px"
        >
          {" "}
          - Your next hire is here
        </Text>
      </Flex>
      <JobFeed />
      <Footer />
    </>
  );
}
