import { Stack, Link, Button } from "@chakra-ui/react";
import SectionHeading from "../components/SectionHeading";
import PageBox from "../components/PageBox";
import { SPACE } from "../styles/Constants";
import { useTranslation } from "react-i18next";

export default function LearnMoreLinks() {
  const { t } = useTranslation();
  const links = [
    {
      text: "Whitepaper",
      href: "https://zipzap.gitbook.io/zipzap-whitepaper-1/",
    },
    {
      text: "Discord",
      href: "https://discord.com/invite/zipzapweb3",
    },
    {
      text: "Medium",
      href: "https://medium.com/@ZipZap_Web3",
    },
    {
      text: "Youtube",
      href: "https://www.youtube.com/@ZipZap-web3",
    },
  ];
  return (
    <PageBox isSnapScroll={false} pt={2 * SPACE.xl} pb={SPACE.xl}>
      <Stack w="100%">
        <SectionHeading>{t("sidebar.learn_more")}</SectionHeading>
        {links.map((link, idx) => {
          return (
            <Link
              href={link.href}
              target="_blank"
              minW={["80%", null, "40%"]}
              key={idx}
            >
              <Button w="100%" variant="gradient" fontSize="xl" key={idx}>
                {link.text}
              </Button>
            </Link>
          );
        })}
      </Stack>
    </PageBox>
  );
}
