import TutorialCard from "../components/TutorialCard";
import {
  GiConsoleController,
  GiReceiveMoney,
  GiHealthIncrease,
} from "react-icons/gi";
import {
  SimpleGrid,
  Heading,
  VStack,
  Box,
  Button,
  Flex,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import { BIGHEADER, SPACE } from "../styles/Constants";
import PlayButton from "../assets/play.gif";
import { useState } from "react";
import { StatsTextXl } from "../components/StatsText";
import { useTranslation } from "react-i18next";
import PageBox from "../components/PageBox";
import ReactHtmlParser from "react-html-parser";
import SectionLoading from "../components/SectionLoading";

export default function NftTypes() {
  const { t } = useTranslation();
  return (
    <PageBox id="/nfttypes">
      <VStack>
        <Heading mb={SPACE.m} fontSize={BIGHEADER} align="center">
          {t("nft_types.title")}
        </Heading>
        <SimpleGrid columns={[1, null, null, 2, null, 4]} spacing={SPACE.l}>
          <Cards />
          <CallToAction />
        </SimpleGrid>
      </VStack>
    </PageBox>
  );
}

const Cards = () => {
  const { t } = useTranslation();
  return (
    <>
      <TutorialCard
        icon={GiConsoleController}
        title={t("nft_types.gaming_metaverse")}
        text={highlightedContent("nft_types.gaming_metaverse_description")}
      />
      <TutorialCard
        icon={GiReceiveMoney}
        title={t("nft_types.rewards_discounts")}
        text={highlightedContent("nft_types.rewards_discounts_description")}
      />
      <TutorialCard
        icon={GiHealthIncrease}
        title={t("nft_types.more_to_come")}
        text={highlightedContent("nft_types.more_to_come_description")}
      />
    </>
  );
};

const CallToAction = () => {
  const { t } = useTranslation();
  const [hover, setHover] = useState(false);
  return (
    <a
      href="https://rent.zipzap.net"
      target="_blank"
      minh={["xs", null, "xs", null]}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <Box h="100%" rounded="lg" position="relative">
        <Button
          variant="ghost"
          h="100%"
          w="100%"
          aria-label="Join Now"
          rounded="lg"
        >
          <Flex h="100%" align="center">
            <Image
              src={PlayButton}
              alt="zipzap playbutton"
              fallback={<SectionLoading p={0} />}
            />
          </Flex>
          <Heading
            position="absolute"
            w="100%"
            bottom="0"
            p={SPACE.s}
            bgColor="rgba(128,88,240, 0.85)"
            fontSize={"3xl"}
            display={`${hover ? "initial" : "none"}`}
            roundedBottom="lg"
          >
            {t("nft_types.join_now")}
          </Heading>
        </Button>
      </Box>
    </a>
  );
};

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
