import { Heading, Box, Center, Text, Image } from "@chakra-ui/react";
import { SPACE } from "../styles/Constants";
import SectionLoading from "../components/SectionLoading";

export default function TeamMember({ image, name, title }) {
  return (
    <Center>
      <Box h="100%" rounded={"lg"} textAlign={"center"} w="100%">
        <Center mb={SPACE.m}>
          <Image
            w="100%"
            style={{ aspectRatio: 1 }}
            src={image}
            rounded="lg"
            fallback={<SectionLoading py={SPACE.l} />}
          />
        </Center>

        <Heading fontSize={"2xl"} fontFamily={"body"}>
          {name}
        </Heading>
        <Text color="zzBlue.100">{title}</Text>
      </Box>
    </Center>
  );
}
