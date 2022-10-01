import { Box, Flex, Image, Text, Link } from "@chakra-ui/react";

export default function PopularCompanies({
  logo,
  name,
  namelink,
  im1,
  im2,
  im3,
  im4,
  im5,
  reviews,
  reviewslink,
  salaries,
  questions,
  openjob,
}) {
  return (
    <>
      <Box px="5px" py="5px" w="290px">
        <Flex justify={"space-between"}>
          <Box>
            <Image src={logo} />
          </Box>
          <Box>
            <Flex mt={2}>
              <Link
                color={"#2D2D2D"}
                fontSize="16px"
                fontWeight={"700"}
                href={namelink}
              >
                {name}
              </Link>
            </Flex>
            <Flex mt={2}>
              <Image w="20px" src={im1} />
              <Image w="20px" src={im2} />
              <Image w="20px" src={im3} />
              <Image w="20px" src={im4} />
              <Image w="20px" src={im5} />
            </Flex>
          </Box>
          <Flex alignItems={"end"}>
            <Link color={"blue"} href={reviewslink} mb={1}>
              {reviews}
            </Link>
          </Flex>
        </Flex>
        <Flex justify={"space-between"}>
          <Link color={"#595959"} href={salaries}>
            Salaries
          </Link>
          <Link color={"#595959"} href={questions}>
            Questions
          </Link>
          <Link color={"#595959"} href={openjob}>
            Open jobs
          </Link>
        </Flex>
      </Box>
    </>
  );
}
