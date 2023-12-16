import {
  Box,
  Heading,
  SimpleGrid,
  Stack,
  OrderedList,
  ListItem,
} from "@chakra-ui/react";
import { StatsTextXl } from "../components/StatsText";
import { SPACE } from "../styles/Constants";
import { useTranslation } from "react-i18next";
import PageBox from "../components/PageBox";
import SectionHeading from "../components/SectionHeading";
import ReactHtmlParser from "react-html-parser";

const tutorialSteps = [
  "how_to_rent.step1",
  "how_to_rent.step2",
  "how_to_rent.step3",
  "how_to_rent.step4",
  "how_to_rent.step5",
  "how_to_rent.step6",
];

export default function Tutorial() {
  const { t } = useTranslation();
  return (
    <PageBox id="/tutorial">
      <Stack textAlign={"center"} align={"center"}>
        <SectionHeading>{t("how_to_rent.title")}</SectionHeading>
        <Box minW="100%" rounded="lg">
          <SimpleGrid w="100%" columns={[1, null, null, 2]} spacing={SPACE.l}>
            <Box minH="40vh" rounded="lg" h="100%">
              <Box
                as="iframe"
                rounded="lg"
                width="100%"
                height="100%"
                src="https://www.youtube-nocookie.com/embed/ucz1MT7jpO0?si=-LJ9dSJ335gQut5a"
                title="YouTube video player"
                frameBorder="0"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                allowFullScreen
              />
            </Box>
            <Box rounded="lg">
              <OrderedList>
                {tutorialSteps.map((stepKey) => (
                  <ListItem
                    fontSize="xl"
                    key={stepKey}
                    fontWeight="bold"
                    textAlign={"left"}
                    mb={SPACE.s}
                  >
                    {highlightedContent(stepKey)}
                  </ListItem>
                ))}
              </OrderedList>
            </Box>
          </SimpleGrid>
        </Box>
      </Stack>
    </PageBox>
  );
}

function highlightedContent(contentKey) {
  const { t } = useTranslation();
  const content = t(contentKey);
  return ReactHtmlParser(content, {
    transform: (node, index) => {
      if (node.type === "tag" && node.name === "highlight") {
        return <StatsTextXl key={index}>{node.children[0].data}</StatsTextXl>;
      }
    },
  });
}
