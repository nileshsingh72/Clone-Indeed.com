import { Flex, Link, Text } from "@chakra-ui/react";
export default function Footer() {
  return (
    <>
      <Flex px={4} my={3} gap={5}>
        <Link
          color={"#2D2D2D"}
          fontSize="14px"
          href="https://in.indeed.com/career-advice"
        >
          {" "}
          Career Advice
        </Link>
        <Link
          color={"#2D2D2D"}
          fontSize="14px"
          href="https://in.indeed.com/browsejobs"
        >
          {" "}
          Browse jobs
        </Link>
        <Link
          color={"#2D2D2D"}
          fontSize="14px"
          href="https://in.indeed.com/companies/browse-companies"
        >
          {" "}
          Browse Companies
        </Link>
        <Link
          color={"#2D2D2D"}
          fontSize="14px"
          href="https://in.indeed.com/career/salaries"
        >
          {" "}
          Salaries
        </Link>
        <Link
          color={"#2D2D2D"}
          fontSize="14px"
          href="https://www.indeedevents.com/en-in"
        >
          {" "}
          Indeed Events
        </Link>
        <Link color={"#2D2D2D"} fontSize="14px" href="https://www.indeed.jobs/">
          {" "}
          Work at Indeed
        </Link>
        <Link
          color={"#2D2D2D"}
          fontSize="14px"
          href="https://in.indeed.com/worldwide"
        >
          {" "}
          Countries
        </Link>
        <Link
          color={"#2D2D2D"}
          fontSize="14px"
          href="https://in.indeed.com/about"
        >
          {" "}
          About
        </Link>
        <Link
          color={"#2D2D2D"}
          fontSize="14px"
          href="https://in.indeed.com/about"
        >
          {" "}
          About
        </Link>{" "}
        <Link
          color={"#2D2D2D"}
          fontSize="14px"
          href="https://support.indeed.com/hc/en-in?redirect=false&_ga=2.251255810.585713061.1664255298-533340619.1654865279"
        >
          {" "}
          Help Center
        </Link>{" "}
        <Link
          color={"#2D2D2D"}
          fontSize="14px"
          href="https://in.indeed.com/esg/inclusion/data?from=gnav-homepage"
        >
          {" "}
          ESG at Indeed
        </Link>
      </Flex>
      <Flex px={4} my={3} gap={5}>
        <Link
          color={"#2D2D2D"}
          fontSize="14px"
          href="https://support.indeed.com/hc/en-in/articles/216354123-Guidelines-for-Safe-Job-Search?_ga=2.20053820.585713061.1664255298-533340619.1654865279"
        >
          {" "}
          Guidelines for Safe Job Search
        </Link>
        <Link
          color={"#2D2D2D"}
          fontSize="14px"
          href="https://in.indeed.com/hire?hl=en&co=IN"
        >
          {" "}
          Post a job
        </Link>
      </Flex>

      <Flex px={4} my={8} gap={5}>
        <Text color={"#2D2D2D"} fontSize="14px">
          © 2022 Indeed
        </Text>
        <Link
          color={"#2D2D2D"}
          fontSize="14px"
          href="https://in.indeed.com/accessibility?hl=en"
        >
          {" "}
          Accessibility at Indeed
        </Link>
        <Link
          color={"#2D2D2D"}
          fontSize="14px"
          href="https://hrtechprivacy.com/"
        >
          {" "}
          Privacy Center
        </Link>{" "}
        <Link
          color={"#2D2D2D"}
          fontSize="14px"
          href="https://hrtechprivacy.com/brands/indeed#Cookies"
        >
          {" "}
          Cookies
        </Link>{" "}
        <Link
          color={"#2D2D2D"}
          fontSize="14px"
          href="https://hrtechprivacy.com/brands/indeed#privacypolicy"
        >
          {" "}
          Privacy
        </Link>
        <Link
          color={"#2D2D2D"}
          fontSize="14px"
          href="https://in.indeed.com/legal?hl=en&from=gnav-homepage"
        >
          {" "}
          Terms
        </Link>
      </Flex>
    </>
  );
}
