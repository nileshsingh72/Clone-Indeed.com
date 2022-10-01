import { Box, Flex, Image, Text } from "@chakra-ui/react";

export default function CompareWorking({
  logo1,
  name1,
  rating1,
  reviews1,
  logo2,
  name2,
  rating2,
  reviews2,
}) {
  return (
    <>
      <Box w="550px" px={6} py={8}>
        <Flex justify="space-between" alignItems="center">
          <Box w="200px">
            <Flex>
              <Image src={logo1} mr="8px" />
              <Box>
                <Flex justify={"start"}>
                  <Text color={"#2D2D2D"} fontSize="16px" fontWeight={"700"}>
                    {name1}
                  </Text>
                </Flex>
                <Flex gap={1} justify="space-between" alignItems={"center"}>
                  <Text color={"#2D2D2D"} fontSize="14px" fontWeight={"700"}>
                    {rating1}
                  </Text>
                  <Image
                    w="15px"
                    h="15px"
                    src="https://as2.ftcdn.net/v2/jpg/00/55/13/05/1000_F_55130593_ggNMR5DiFLf0mVUqVMmGhMRCdeUX9U6g.jpg"
                  />
                  <Text color={"#595959"} fontSize="14px" fontWeight={"700"}>
                    {reviews1}
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </Box>

          <Text color={"#595959"} fontWeight="lightbold">
            VS
          </Text>

          <Box w="200px">
            <Flex>
              <Image mr="8px" src={logo2} />
              <Box>
                <Flex justify={"start"}>
                  <Text color={"#2D2D2D"} fontSize="16px" fontWeight={"700"}>
                    {name2}
                  </Text>
                </Flex>
                <Flex gap={1} justify="space-between" alignItems={"center"}>
                  <Text color={"#2D2D2D"} fontSize="14px" fontWeight={"700"}>
                    {rating2}
                  </Text>
                  <Image
                    w="15px"
                    h="15px"
                    src="https://as2.ftcdn.net/v2/jpg/00/55/13/05/1000_F_55130593_ggNMR5DiFLf0mVUqVMmGhMRCdeUX9U6g.jpg"
                  />
                  <Text color={"#595959"} fontSize="14px" fontWeight={"700"}>
                    {reviews2}
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
