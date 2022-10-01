import {
  Grid,
  Box,
  Flex,
  Button,
  Text,
  VStack,
  Input,
  Link,
  SimpleGrid,
  Image,
  GridItem,
} from "@chakra-ui/react";
import { popular_Companies } from "../Component/popular_Companies";
import CompareWorking from "../Component/CompareWorking";
import PopularCompanies from "./PopularCompanies";
import { compare_working_data } from "../Component/compare_Working_Data";
import Footer from "./Footer";

export default function CompanyReviews() {
  return (
    <>
      <Box w="60%" m="auto">
        <Text
          marginBottom={"2.5rem"}
          marginTop={"6rem"}
          fontSize={"2.75rem"}
          lineHeight={"1.25rem"}
          color="#2d2d2d"
          letterSpacing={"-.0625rem"}
          fontWeight={"600"}
          textAlign="left"
        >
          Find great places to work
        </Text>

        <Text
          textAlign="left"
          marginBottom={"2rem"}
          fontSize={"20px"}
          lineHeight={"1.25rem"}
          color="#595959"
          letterSpacing={"-.0625rem"}
          fontWeight={"400"}
        >
          Get access to millions of company reviews
        </Text>
        <Flex>
          <VStack align="left" w="70%">
            <Text
              textAlign="left"
              fontSize={"18px"}
              color="#2d2d2d"
              fontWeight={"600"}
            >
              Company name or job title
            </Text>
            <Input
              type="text"
              placeholder="Search"
              border={"3px solid black"}
              borderRadius={"7px"}
            />
          </VStack>
          <Flex alignItems="end">
            <Button
              ml="35px"
              bg="#2557a7"
              px={12}
              fontWeight={"600"}
              color="white"
            >
              Find Companies
            </Button>
          </Flex>
        </Flex>
        <Flex mt={4}>
          <Link
            color={"#2557A4"}
            fontSize="16px"
            href="https://in.indeed.com/career/salaries"
          >
            Do you want to search for salaries?
          </Link>
        </Flex>
      </Box>
      <Flex w="80%" m="auto">
        <Text
          //           margin-bottom: 1rem;
          // font-size: 1.75rem;
          // line-height: 1.25;
          marginTop="3rem"
          fontSize={"1.75rem"}
          lineHeight={"1.25rem"}
          fontWeight="700"
        >
          {" "}
          Popular Companies
        </Text>
      </Flex>

      <SimpleGrid
        w="80%"
        m="auto"
        mt={10}
        templateColumns={"repeat(3,1fr)"}
        gap={7}
      >
        {popular_Companies.map((card) => (
          <PopularCompanies
            logo={card.logo}
            name={card.name}
            namelink={card.namelink}
            im1={card.im1}
            im2={card.im2}
            im3={card.im3}
            im4={card.im4}
            im5={card.im5}
            reviews={card.reviews}
            reviewslink={card.reviewslink}
            salaries={card.salaries}
            questions={card.questions}
            openjob={card.openjob}
          />
        ))}
      </SimpleGrid>
      <Flex w="80%" m="auto">
        <Text
          marginTop="3rem"
          fontSize={"1.75rem"}
          lineHeight={"1.25rem"}
          fontWeight="700"
        >
          {" "}
          Compare working at
        </Text>
      </Flex>
      <SimpleGrid
        gap={3}
        w="80%"
        m="auto"
        mt={10}
        mb={100}
        templateColumns="repeat(2, 1fr)"
      >
        {compare_working_data.map((card) => (
          <Grid
            border={"1px solid grey"}
            borderRadius="10px"
            _hover={{ bg: "#faf9f8" }}
          >
            <CompareWorking
              logo1={card.logo1}
              name1={card.name1}
              rating1={card.rating1}
              reviews1={card.reviews1}
              logo2={card.logo2}
              name2={card.name2}
              rating2={card.rating2}
              reviews2={card.reviews2}
            />
          </Grid>
        ))}
      </SimpleGrid>

      <Footer />
    </>
  );
}
