import { Box, Heading, Text, VStack, Icon } from "@chakra-ui/react";
import { SPACE } from "../styles/Constants";
import ReactHtmlParser from "react-html-parser";

function TutorialCard({ title, text, icon }) {
  const parsedText =
    typeof text === "string"
      ? ReactHtmlParser(text, {
          transform: (node, index) => {
            if (node.type === "tag" && node.name === "highlight") {
              return (
                <Heading as="span" color="zzPink.100" fontSize="xl" key={index}>
                  {node.children[0].data}
                </Heading>
              );
            }
          },
        })
      : text;

  return (
    <Box
      px={SPACE.m}
      rounded="lg"
      // boxShadow={"2xl"}
      textAlign={"center"}
      w="100%"
    >
      <VStack>
        <Icon as={icon} m={SPACE.s} boxSize="6rem" />
        <Heading fontSize="2xl">{title}</Heading>
        <Text fontSize="xl">{parsedText}</Text>
      </VStack>
    </Box>
  );
}

export default TutorialCard;
