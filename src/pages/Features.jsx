import {
  Stack,
  Box,
  Text,
  Heading,
  Grid,
  GridItem,
  Icon,
  Flex,
  Image,
} from "@chakra-ui/react";
import { SPACE } from "../styles/Constants";
import { useTranslation } from "react-i18next";
import React from "react";
import SectionHeading from "../components/SectionHeading";
import PageBox from "../components/PageBox";
import ReactHtmlParser from "react-html-parser";
import { BsWallet } from "react-icons/bs";
import { BiBlock } from "react-icons/bi";
import { FaSeedling } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";

import f1 from "../assets/features/FeatureScreenShot1.jpg";
import f3 from "../assets/features/FeaturesScreenShot3.jpg";
import f6 from "../assets/features/FeatureScreenShot6.jpg";
import f7 from "../assets/features/FeatureScreenShot7.jpg";

export default function Features() {
  const features = [
    {
      title: "features.title1",
      description: "features.description1",
      image: f1,
    },
    {
      title: "features.title2",
      description: "features.description2",
      image: f3,
    },
    {
      title: "features.title3",
      description: "features.description3",
      image: f6,
    },
    {
      title: "features.title4",
      description: "features.description4",
      image: f7,
    },
  ];

  const MobileFeatures = () => {
    return (
      <Stack display={{ base: "inherit", lg: "none" }} spacing={SPACE.l}>
        <Feature
          flipped={true}
          icon={<Icon as={BsWallet} boxSize={iconSize} color="zzPurple.100" />}
          {...features[0]}
        />
        <Feature
          flipped={true}
          icon={<Icon as={BiBlock} boxSize={iconSize} color="zzPurple.100" />}
          {...features[1]}
        />
        <Feature
          flipped={true}
          icon={
            <Icon as={FaSeedling} boxSize={iconSize} color="zzPurple.100" />
          }
          {...features[2]}
        />
        <Feature
          flipped={true}
          icon={
            <Icon as={HiUserGroup} boxSize={iconSize} color="zzPurple.100" />
          }
          {...features[3]}
        />
      </Stack>
    );
  };

  const DesktopFeatures = () => {
    return (
      <Stack display={{ base: "none", lg: "inherit" }} spacing={SPACE.l}>
        <Feature
          icon={<Icon as={BsWallet} boxSize={iconSize} color="zzPurple.100" />}
          {...features[0]}
        />
        <Feature
          flipped={true}
          icon={<Icon as={BiBlock} boxSize={iconSize} color="zzPurple.100" />}
          {...features[1]}
        />
        <Feature
          icon={
            <Icon as={FaSeedling} boxSize={iconSize} color="zzPurple.100" />
          }
          {...features[2]}
        />
        <Feature
          flipped={true}
          icon={
            <Icon as={HiUserGroup} boxSize={iconSize} color="zzPurple.100" />
          }
          {...features[3]}
        />
      </Stack>
    );
  };

  const { t } = useTranslation();
  const iconSize = 12;
  return (
    <PageBox id="/features" scrollMarginTop="60px">
      <SectionHeading pt={SPACE.xl}>{t("home.title")}</SectionHeading>
      <Stack>
        <MobileFeatures />
        <DesktopFeatures />
      </Stack>
    </PageBox>
  );
}

function Feature({ title, description, image, flipped, icon, ...props }) {
  const TextPortion = () => {
    const textProps = {
      mr: { base: 0, lg: SPACE.xl * 2 },
      ml: 0,
      textAlign: { base: "center", lg: "left" },
    };
    let justify = { base: "space-around", lg: "flex-start" };
    if (flipped) {
      textProps.ml = { base: 0, lg: SPACE.xl * 2 };
      textProps.mr = 0;
      textProps.textAlign = { base: "center", lg: "right" };
      justify = { base: "space-around", lg: "flex-end" };
    }
    return (
      <GridItem colSpan={{ base: 3, lg: 2 }}>
        <Flex justify={justify}>{icon}</Flex>
        <Heading
          fontSize={["3xl", null, null, "4xl"]}
          my={SPACE.xs}
          {...textProps}
        >
          {createTranslatedContent(title)}
        </Heading>
        <Text fontSize={["xl", null, null, "2xl"]} {...textProps}>
          {createTranslatedContent(description)}
        </Text>
      </GridItem>
    );
  };

  const ImagePortion = () => {
    const justify = flipped
      ? { base: "space-around", lg: "flex-start" }
      : { base: "space-around", lg: "flex-end" };
    const imageProps = {
      w: { base: "60%", md: "45%", lg: "75%" },
      my: SPACE.m,
      src: image,
      rounded: "lg",
    };

    return (
      <GridItem colSpan={{ base: 3, lg: 1 }}>
        <Flex justify={justify} position="relative">
          <Box
            position="absolute"
            bottom="0"
            {...imageProps}
            h="50%"
            bgGradient="linear(to-b, rgba(255,255,255,0), rgba(17,0,32,1))"
          />
          <Image {...imageProps} />
        </Flex>
      </GridItem>
    );
  };

  if (flipped)
    return (
      <Grid templateColumns={{ lg: "repeat(3,1fr)" }} {...props}>
        <ImagePortion />
        <TextPortion />
      </Grid>
    );

  return (
    <Grid templateColumns={{ lg: "repeat(3,1fr)" }} {...props}>
      <TextPortion />
      <ImagePortion />
    </Grid>
  );
}
function createTranslatedContent(
  contentKey,
  highlightFontSize = ["xl", null, null, "2xl"]
) {
  const { t } = useTranslation();
  const content = t(contentKey);
  return ReactHtmlParser(content, {
    transform: (node, index) => {
      if (node.type === "tag" && node.name === "highlight") {
        return (
          <Heading
            as="span"
            color="zzPink.100"
            fontSize={highlightFontSize}
            key={index}
          >
            {node.children[0].data}
          </Heading>
        );
      }
    },
  });
}
