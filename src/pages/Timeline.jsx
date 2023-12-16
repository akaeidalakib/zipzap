import {
  Box,
  Heading,
  UnorderedList,
  ListItem,
  SimpleGrid,
  Center,
} from "@chakra-ui/react";
import { PAGEPAD, SPACE, BIGHEADER } from "../styles/Constants";
import { useTranslation } from "react-i18next";
import SectionHeading from "../components/SectionHeading";
import PageBox from "../components/PageBox";

const GRADIENT = "linear(to-b, zzBlue.200, zzPurple.100, zzPink.300)";
const BG = "rgba(17,0,32,1)";

function TimelineBox({ title, tasks, ...props }) {
  const { t } = useTranslation();
  return (
    <Box
      w="100%"
      h="100%"
      rounded="lg"
      bgAttachment={"fixed"}
      bgGradient={GRADIENT}
      p={SPACE.s}
      {...props}
    >
      <Heading fontSize="xl" mb={SPACE.xs} color="zzPink.100">
        {title}
      </Heading>
      <UnorderedList>
        {tasks &&
          tasks.map((item, idx) => {
            return (
              <ListItem
                fontSize="xl"
                key={idx}
                fontWeight="bold"
                listStyleType="square"
              >
                {item.done ? <s>{t(item.text)}</s> : t(item.text)}
              </ListItem>
            );
          })}
      </UnorderedList>
    </Box>
  );
}

function TimelineBar() {
  return (
    <>
      <Box
        position="absolute"
        roundedTop="lg"
        top="0%"
        w="8px"
        bgGradient={GRADIENT}
        bgAttachment={"fixed"}
        h="107%"
      >
        <Box
          position="absolute"
          top="93%"
          w="8px"
          bgGradient="linear(to-b, rgba(255,255,255,0), rgba(17,0,32,1))"
          h="7%"
        />
      </Box>
    </>
  );
}

export default function Timeline() {
  const { t } = useTranslation();
  // const tasks1 = [
  //   { text: "timeline.strategic_development", done: true },
  //   { text: "timeline.pre_seed_round", done: true },
  //   { text: "timeline.technological_development", done: true },
  // ];

  const tasks1 = [
    { text: "timeline.proxy_technology_completion", done: true },
    { text: "timeline.genesis_shapeshifter_animations", done: true },
    { text: "timeline.website_launch", done: true },
    { text: "timeline.alpha_testing", done: true },
    { text: "timeline.nft_acquisition", done: true },
  ];

  const tasks2 = [
    { text: "timeline.multi_chain", done: true },
    { text: "timeline.extension_release", done: true },
    { text: "timeline.referral_program", done: true },
    { text: "timeline.gas_optimization", done: true },
  ];

  const tasks3 = [
    { text: "timeline.beta_launch", done: true },
    { text: "timeline.increase_rental_selection", done: true },
    { text: "timeline.p2p_rentals", done: true },
  ];

  const tasks4 = [
    { text: "timeline.genesis_shapeshifter_launch", done: false },
    { text: "timeline.zap_launch", done: false },
    { text: "timeline.zap_staking", done: false },
    { text: "timeline.tech_distribution", done: false },
  ];

  const PlaceholderBox = () => {
    return <Box display={["none", null, "inherit"]} h="100%" bgColor={BG} />;
  };

  return (
    <PageBox id="/timeline">
      <SectionHeading>{t("timeline.title")}</SectionHeading>
      <Box position="relative">
        <Center display={["none", null, "flex"]}>
          <TimelineBar />
        </Center>
        <Box display={["inherit", null, "none"]}>
          <TimelineBar />
        </Box>
        <SimpleGrid
          columns={[1, null, 2]}
          w="100%"
          spacing={[SPACE.m, null, SPACE.xl]}
          pl={[SPACE.m, null, 0]}
        >
          <TimelineBox title="Q1 2023" tasks={tasks1} />
          <PlaceholderBox />
          <PlaceholderBox />
          <TimelineBox title="Q2 2023" tasks={tasks2} />
          <TimelineBox title="Q3 2023" tasks={tasks3} />
          <PlaceholderBox />
          <PlaceholderBox />
          <TimelineBox title="Q4 2023" tasks={tasks4} />
        </SimpleGrid>
      </Box>
    </PageBox>
  );
}
