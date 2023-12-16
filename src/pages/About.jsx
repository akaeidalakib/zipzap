import { Stack, SimpleGrid, Center } from "@chakra-ui/react";
import TeamMember from "../components/TeamMember";
import { SPACE } from "../styles/Constants";
import PageBox from "../components/PageBox";
import SectionHeading from "../components/SectionHeading";
import { useTranslation } from "react-i18next";

import kiev from "../assets/team/kiev.jpg";
import alli from "../assets/team/alli.jpg";
import vlad from "../assets/team/vlad.jpg";
import facundo from "../assets/team/facu.jpg";
import dev from "../assets/team/dev.jpg";
import laurence from "../assets/team/laurence.png";

export default function About() {
  const { t } = useTranslation();
  return (
    <PageBox id="/about">
      <Stack textAlign={"center"} align={"center"} spacing={SPACE.l}>
        <SectionHeading>{t("team.title")}</SectionHeading>
      </Stack>
      <Center>
        <SimpleGrid columns={[2, 2, 2, 3, 4, 6]} spacing={SPACE.m} w="100%">
          <TeamMember
            name="Kiev Moores"
            title={t("team.founder_ceo")}
            image={kiev}
          />
          <TeamMember
            name="Allison Zipoli"
            title={t("team.cofounder_cfo")}
            image={alli}
          />
          <TeamMember
            name="Gavin Zhang"
            title={t("team.cofounder_cto")}
            image={dev}
          />
          <TeamMember
            name="Vladimir Rogojin"
            title={t("team.web3developer")}
            image={vlad}
          />
          <TeamMember
            name="Laurence Kuo"
            title={t("team.frontenddeveloper")}
            image={laurence}
          />
          <TeamMember
            name="Facundo Miconi"
            title={t("team.communitymanager")}
            image={facundo}
          />
        </SimpleGrid>
      </Center>
    </PageBox>
  );
}
