import { Box, Select, Flex, Stack, Button, Text, Link } from "@chakra-ui/react";
import Footer from "./Footer";
import axios from "axios";

import JobFeed from "../Component/JobFeed";
import { HomeContext } from "../Context/HomeContext";
import { useContext, useEffect, useState } from "react";

export default function Home() {
  const { setLoading, loading } = useContext(HomeContext);
  const [data, setData] = useState([]);
  const [role, setrole] = useState("");
  const [location, setlocation] = useState("");
  const getdata = (location, role) => {
    if (location === "" && role === "") {
      location = "Indore";
      role = "FD";
    }
    setLoading(true);
    return axios
      .get(`http://localhost:3040/jobs?place=${location}&role=${role}`)
      .then((response) => {
        setLoading(false);
        return setData(response.data);
      })
      .catch((err) => console.error(err));
  };
  console.log(loading, "checkLLl");
  useEffect(() => {
    getdata(location, role);
  }, [location, role]);
  return (
    <>
      <Flex justify={"space-between"} w="60%" m={"auto"} mt={8}>
        <Stack spacing={3}>
          <Select
            border="1px solid red"
            w="300px"
            variant="outline"
            onChange={(e) => setrole(e.target.value)}
          >
            <option value="">Select Job Role</option>
            <option value="FD">Frontend Developer</option>
            <option value="BD">Backend Developer</option>
            <option value="FSD">Full Stack Developer</option>
          </Select>
        </Stack>
        <Stack spacing={3}>
          <Select
            w="300px"
            variant="outline"
            onChange={(e) => setlocation(e.target.value)}
          >
            <option value="">Select Location</option>
            <option value="Indore">Indore</option>
            <option value="Banglore">Banglore</option>
            <option value="Hyderabad">Hyderabad</option>
          </Select>
        </Stack>
        {/* <Button
          bg={"#2557a7"}
          font-family={("Noto Sans", "Helvetica Neue")}
          fontSize={"14px"}
          color="white"
          onClick={() => handleFindjob}
        >
          Find jobs
        </Button> */}
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
      <JobFeed data={data} />
      <Footer />
    </>
  );
}
