import {
  Stack,
  VStack,
  Heading,
  Box,
  Text,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { Fragment } from "react";
import { SPACE, PAGEPAD, BIGHEADER } from "../styles/Constants";
import shapeshifter from "../assets/8.mp4";
import { StatsTextXl } from "../components/StatsText";
import { useTranslation } from "react-i18next";
import PageBox from "../components/PageBox";
import SectionHeading from "../components/SectionHeading";

export default function Shapeshifter({ videos }) {
  const { t } = useTranslation();
  const stats = [
    {
      name: "shapeshifter.lower_fees",
      description: [
        "shapeshifter.lower_fees_description.1",
        "shapeshifter.lower_fees_description.2",
      ],
    },
    {
      name: "shapeshifter.free_renting_credit",
      description: [
        "shapeshifter.free_renting_credit_description.1",
        "shapeshifter.free_renting_credit_description.2",
        "shapeshifter.free_renting_credit_description.3",
      ],
    },
    {
      name: "shapeshifter.airdrops_giveaways",
      description: [
        "shapeshifter.airdrops_giveaways_description.1",
        "shapeshifter.airdrops_giveaways_description.2",
        "shapeshifter.airdrops_giveaways_description.3",
      ],
    },
    {
      name: "shapeshifter.boosted_xp_rate",
      description: [
        "shapeshifter.boosted_xp_rate_description.1",
        "shapeshifter.boosted_xp_rate_description.2",
        "shapeshifter.boosted_xp_rate_description.3",
      ],
    },
  ];
  function createTranslatedContent(contentKeys) {
    return contentKeys.map((key, index) => {
      const { t } = useTranslation();
      const isHighlighted = index % 2 === 1;
      const translatedText = t(key);

      if (isHighlighted) {
        return <StatsTextXl key={key}>{translatedText}</StatsTextXl>;
      } else {
        return <Fragment key={key}>{translatedText}</Fragment>;
      }
    });
  }

  return (
    <PageBox id="/shapeshifter">
      <SectionHeading>
        SHAPE
        <wbr />
        SHIFTERS
        <wbr /> NFTs
      </SectionHeading>
      <Heading
        textAlign={"center"}
        fontSize={["xl", null, null, "2xl"]}
        pb={SPACE.l}
      >
        {t("shapeshifter.shapeshifters_description")}
      </Heading>
      <Stack
        direction={["column", null, null, null, "row", null]}
        color={"zzGray.500"}
        justify={{ lg: "center" }}
      >
        <Box
          as="video"
          src={shapeshifter}
          rounded="lg"
          p={SPACE.s}
          mr={SPACE.m}
          display={["none", null, null, null, "inherit", null]}
          autoPlay
          playsInline
          muted
          loop
          ref={videos[0]}
        />

        <Flex
          display={["inherit", null, null, null, "none", null]}
          spacing={SPACE.s}
          w="100%"
        >
          <Box
            as="video"
            w="32%"
            h="32%"
            src={shapeshifter}
            rounded="lg"
            boxShadow="2xl"
            autoPlay
            playsInline
            muted
            loop
            ref={videos[1]}
          />
          <Spacer />
          <Box
            as="video"
            w="32%"
            h="32%"
            src={shapeshifter + "#t=1.5"}
            fallback={shapeshifter}
            rounded="lg"
            boxShadow="2xl"
            autoPlay
            playsInline
            muted
            loop
            ref={videos[2]}
          />
          <Spacer />
          <Box
            as="video"
            w="32%"
            h="32%"
            src={shapeshifter + "#t=3"}
            fallback={shapeshifter}
            rounded="lg"
            boxShadow="2xl"
            autoPlay
            playsInline
            muted
            loop
            ref={videos[3]}
          />
        </Flex>
        <VStack>
          {stats.map((stat, idx) => {
            return (
              <Box
                bgColor="rgba(96, 24, 184, 0.8)"
                rounded="lg"
                boxShadow="2xl"
                px={SPACE.m}
                py={SPACE.m}
                key={idx}
                w="100%"
              >
                <Heading fontSize="2xl">{t(stat.name)}</Heading>
                <Text fontSize="xl">
                  {createTranslatedContent(stat.description)}
                </Text>
              </Box>
            );
          })}
        </VStack>
      </Stack>
    </PageBox>
  );
}
