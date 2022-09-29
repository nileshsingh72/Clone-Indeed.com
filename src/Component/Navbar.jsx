import { Box, Flex, Image, Link } from "@chakra-ui/react";
export default function Navbar() {
  return (
    <>
      <Flex px={6} py={1} justify={"space-between"}>
        <Flex alignItems={"center"} gap={4}>
          <Flex alignItems={"center"}>
            <Box mr="-20px">
              <Image
                w="40%"
                h="40%"
                src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Indeed_logo.svg"
              />
            </Box>

            <Box ml="-130px">
              <Image
                w="80%"
                h="80%"
                src="https://d3fw5vlhllyvee.cloudfront.net/dist/header/ukraine_support.7ad2b5d444bc427dbc5d.png"
              />
            </Box>
          </Flex>
          <Link fontFamily={"Noto Sans"} href="/">
            Find jobs
          </Link>
          <Link fontFamily={"Noto Sans"} href="/companyreviews">
            Company Reviews
          </Link>
          <Link fontFamily={"Noto Sans"} href="/salaryguide">
            Salary Guide
          </Link>
        </Flex>

        <Flex alignItems={"center"} gap={4}>
          <Link fontFamily={"Noto Sans"} href="/">
            Post your resume
          </Link>
          <Link fontFamily={"Noto Sans"} href="/signin">
            Sign in
          </Link>
          <Link fontFamily={"Noto Sans"} href="/salaryguide">
            Employers / Post Job
          </Link>
        </Flex>
      </Flex>
    </>
  );
}
