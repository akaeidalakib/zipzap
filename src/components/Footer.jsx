import {
  Box,
  chakra,
  Container,
  Divider,
  Stack,
  useColorModeValue,
  VisuallyHidden,
  Image,
  Button,
  Flex,
  Heading,
  Link,
  HStack,
  Center,
} from "@chakra-ui/react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import logo from "../assets/banner2.png";
import { SPACE } from "../styles/Constants";
import { useTranslation } from "react-i18next";
import PageBox from "../components/PageBox";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      target={"_blank"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bgColor: "zzPink.100",
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

function FooterLink({ href, text, newTab = true }) {
  return (
    <Link
      fontSize="lg"
      textAlign="center"
      href={href}
      target={newTab ? "_blank" : "_self"}
    >
      {text}
    </Link>
  );
}

export default function Footer() {
  const { t } = useTranslation();

  return (
    <PageBox mt={[SPACE.m, null, 0]} p={0} id="/footer">
      <Divider />
      <Center w="100%">
        <Container
          as={Stack}
          minW="80%"
          py={SPACE.m}
          direction={{ base: "column", lg: "row" }}
          justify={{ base: "center", lg: "space-between" }}
          align={{ base: "center", lg: "initial" }}
        >
          <Stack direction="row">
            <Image
              src={logo}
              h={{ base: "50px", lg: "75px" }}
              alt="ZipZap logo"
            />
          </Stack>
          <Stack>
            <Heading fontSize="xl" textAlign="center" color="zzPink.100">
              {t("footer.contact_us")}
            </Heading>
            <FooterLink
              text="info@zipzap.net"
              href="mailto:info@zipzap.net"
              newTab={false}
            />
            <FooterLink
              text="LinkedIn"
              href="https://www.linkedin.com/company/zipzap-llc/"
            />
          </Stack>
          <Stack>
            <Heading fontSize="xl" textAlign="center" color="zzPink.100">
              {t("footer.learn_more")}
            </Heading>
            <FooterLink
              text="Whitepaper"
              href="https://zipzap.gitbook.io/zipzap-whitepaper-1/"
            />
            <FooterLink text="Medium" href="https://medium.com/@ZipZap_Web3" />
            <FooterLink
              text="Youtube"
              href="https://www.youtube.com/@ZipZap-web3"
            />
          </Stack>
          <Stack>
            <Heading fontSize="xl" textAlign="center" color="zzPink.100">
              {t("footer.socials")}
            </Heading>
            <HStack>
              <SocialButton
                label={"Twitter"}
                href={"https://twitter.com/Zipzap_web3"}
              >
                <FaTwitter />
              </SocialButton>
              <SocialButton
                label={"Instagram"}
                href={"https://instagram.com/zipzap_web3"}
              >
                <FaInstagram />
              </SocialButton>
              <SocialButton
                label={"Facebook"}
                href={"https://www.facebook.com/profile.php?id=100087741625318"}
              >
                <FaFacebook />
              </SocialButton>
              <SocialButton
                label={"Discord"}
                href={"https://discord.gg/zipzapweb3"}
              >
                <FaDiscord />
              </SocialButton>
            </HStack>
          </Stack>
        </Container>
      </Center>
    </PageBox>
  );
}
