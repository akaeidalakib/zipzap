import React from "react";
import {
  Box,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Icon,
  StackDivider,
  Flex,
  Text,
  Image,
} from "@chakra-ui/react";
import { BsUnlock, BsShieldShaded } from "react-icons/bs";
import { AiOutlineStock } from "react-icons/ai";
import { SPACE } from "../styles/Constants";
import PageBox from "../components/PageBox";
import SectionHeading from "../components/SectionHeading";
import { useTranslation } from "react-i18next";
import ReactHtmlParser from "react-html-parser";
import SectionLoading from "../components/SectionLoading";

import img from "../assets/RentScreenShot.jpg";

export default function Guild() {
  const { t } = useTranslation();
  return (
    <PageBox id="/guild">
      <SectionHeading>{t("guild.title")}</SectionHeading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={SPACE.xl}>
        <Stack spacing={SPACE.m}>
          <Heading fontSize={["xl", null, null, "2xl"]}>
            {t("guild.tagline")}
          </Heading>
          <Text fontSize={"xl"}>
            {parseText(t("guild.benefits.benefits_list.2.description"))}
          </Text>
          <Stack
            spacing={SPACE.m}
            divider={<StackDivider borderColor={"zzGray.300"} />}
          >
            <Feature
              icon={
                <Icon
                  as={BsUnlock}
                  color={"zzBlue.100"}
                  w={SPACE.m}
                  h={SPACE.m}
                />
              }
              iconBg="zzBlue.200"
              text={parseText(t("guild.benefit1"))}
            />
            <Feature
              icon={
                <Icon
                  as={BsShieldShaded}
                  color={"zzPurple.100"}
                  w={SPACE.m}
                  h={SPACE.m}
                />
              }
              iconBg="zzPurple.200"
              text={parseText(t("guild.benefit2"))}
            />
            <Feature
              icon={
                <Icon
                  as={AiOutlineStock}
                  color={"zzPink.100"}
                  w={SPACE.m + 1} // This icon looks smaller
                  h={SPACE.m + 1} // This icon looks smaller
                />
              }
              iconBg="zzPink.200"
              text={parseText(t("guild.benefit3"))}
            />
          </Stack>
        </Stack>
        <FeatureImage />
      </SimpleGrid>
    </PageBox>
  );
}

const FeatureImage = () => {
  const shadowProps = {
    position: "absolute",
    right: "0",
    bottom: "0",
    w: { base: "100%", md: "50%" },
    h: { base: "50%", md: "100%" },
    bgGradient: {
      base: "linear(to-b, rgba(255,255,255,0), rgba(17,0,32,1))",
      md: "linear(to-r, rgba(255,255,255,0), rgba(17,0,32,1))",
    },
  };
  return (
    <Flex position="relative">
      <Box {...shadowProps} />
      <Image
        rounded={"lg"}
        alt={"zipzap interface"}
        src={img}
        objectFit={"cover"}
        objectPosition={"left top"}
        fallback={<SectionLoading pt={SPACE.xl} w="100%" />}
      />
    </Flex>
  );
};

const Feature = ({ text, icon, iconBgColor }) => {
  return (
    <HStack align={"center"}>
      <Flex
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bgColor={iconBgColor}
      >
        {icon}
      </Flex>
      <Text fontSize="xl">{text}</Text>
    </HStack>
  );
};

function parseText(text) {
  if (typeof text === "string") {
    return ReactHtmlParser(text, {
      transform: (node, index) => {
        if (node.type === "tag" && node.name === "highlight") {
          return (
            <Heading as="span" color="zzPink.100" fontSize="xl" key={index}>
              {node.children[0].data}
            </Heading>
          );
        }
      },
    });
  }
  return text;
}
