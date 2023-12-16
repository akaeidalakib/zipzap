import React from "react";
import {
  Image,
  Box,
  Flex,
  Center,
  Heading,
  VStack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  Text,
  Link,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { SPACE } from "../styles/Constants";
import { useTranslation } from "react-i18next";
import PageBox from "../components/PageBox";
import SectionHeading from "../components/SectionHeading";
import SectionLoading from "../components/SectionLoading";

import illuvium from "../assets/projects/illuvium.jpeg";
import somnium from "../assets/projects/somnium.jpg";
import otherdeed from "../assets/projects/otherdeed.jpeg";
import decentraland from "../assets/projects/decentraland.jpg";
import sandbox from "../assets/projects/sandbox.jpg";
import lov from "../assets/projects/lov.jpg";
import champions from "../assets/projects/champions.jpg";
import lok from "../assets/projects/lok.jpg";
import veggies from "../assets/projects/veggiefarm.jpg";
import mavia from "../assets/projects/mavia.jpg";

function Partners() {
  const { t } = useTranslation();

  return (
    <PageBox id="/partners">
      <VStack w="100%">
        <SectionHeading>{t("rent_with_us.title")}</SectionHeading>
        <DisplayCarousel />
        <SeeAllPopup />
      </VStack>
    </PageBox>
  );
}

function DisplayCarousel() {
  const { t } = useTranslation();
  const data = [
    { img: illuvium, link: "https://illuvium.io/", comingSoon: true },
    { img: otherdeed, link: "https://otherside.xyz/", comingSoon: true },
    { img: sandbox, link: "https://www.sandbox.game/en/" },
    { img: champions, link: "https://champions.io" },
    { img: mavia, link: "https://mavia.com/" },
    { img: veggies, link: "https://www.veggiesfarmgame.com/" },
    { img: lov, link: "https://legendsofvenari.com/" },
    { img: lok, link: "https://www.leagueofkingdoms.com/" },
    { img: decentraland, link: "https://decentraland.org/" },
    { img: somnium, link: "https://somniumspace.com/" },

    // { img: vox, link: "https://collectvox.com/voxverse", comingSoon: true },
    // { img: townstar, link: "https://townstar.com/", comingSoon: true },
  ];

  function CarouselRow({ dataStartIdx, dataEndIdx, ...props }) {
    const imagePosition = {
      position: "absolute",
      h: "100%",
      w: "100%",
    };
    return (
      <Flex {...props}>
        {data.slice(dataStartIdx, dataEndIdx).map((item, idx) => (
          <Box
            key={idx}
            as="a"
            href={item.link}
            target="_blank"
            boxSize="225px"
            minW="225px"
            bgColor="blackAlpha.500"
            rounded="lg"
            mr={idx === data.length / 2 ? 0 : SPACE.s}
            position="relative"
            sx={{
              "@media screen and (min-width: 1400px)": {
                boxSize: "15vw",
              },
            }}
          >
            <Image
              rounded="lg"
              fit="cover"
              src={item.img}
              fallback={<SectionLoading p={0} {...imagePosition} />}
              {...imagePosition}
            />
            {item.comingSoon && (
              <Box
                h="100%"
                w="100%"
                rounded="lg"
                bgColor="rgba(0,0,0,0.75)"
                _hover={{ opacity: 0.5 }}
                position="absolute"
              >
                <Heading
                  py="27%"
                  textAlign="center"
                  fontSize="5xl"
                  px={SPACE.s}
                >
                  {t("rent_with_us.coming_soon")}
                </Heading>
              </Box>
            )}
          </Box>
        ))}
      </Flex>
    );
  }

  return (
    <Center maxW="100%">
      <Box w="100%" overflowX="auto" overflowY="hidden">
        <CarouselRow dataStartIdx={0} dataEndIdx={data.length / 2} />
        <CarouselRow dataStartIdx={data.length / 2} mt={SPACE.s} />
      </Box>
    </Center>
  );
}

function SeeAllPopup({ ...props }) {
  const { t } = useTranslation();
  const supportedProjects = [
    { name: "Champions Ascension", link: "https://champions.io" },
    { name: "Decentraland", link: "https://decentraland.org/" },
    { name: "League of Kingdoms", link: "https://www.leagueofkingdoms.com/" },
    { name: "Legends of Venari", link: "https://legendsofvenari.com/" },
    { name: "Mavia", link: "https://mavia.com" },
    { name: "Somnium Space", link: "https://somniumspace.com/" },
    { name: "The Sandbox", link: "https://www.sandbox.game/en/" },
    { name: "Veggies Farm", link: "https://www.veggiesfarmgame.com/" },
  ];
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box w="100%">
      <Button
        variant="purple"
        mt={SPACE.m}
        w="100%"
        fontSize={{ base: "xl", md: "2xl" }}
        onClick={onOpen}
        whiteSpace="normal"
        overflow="hidden"
      >
        All Supported Projects
      </Button>
      <Modal
        isOpen={isOpen}
        closeOnOverlayClick={true}
        onClose={onClose}
        returnFocusOnClose={false}
      >
        <ModalOverlay />
        <ModalContent bgColor="blackAlpha.900" m={SPACE.m}>
          <Box
            bgColor="rgba(128,88,240, 0.2)"
            border="2px"
            rounded="lg"
            w="100%"
            h="100%"
            _hover={{
              borderColor: "zzPurple.100",
            }}
            p={SPACE.m}
          >
            <Heading textAlign="center" mb={SPACE.m}>
              All Supported Projects
            </Heading>
            {supportedProjects.map((project, idx) => (
              <Link key={idx} target="_blank" href={project.link}>
                <Text textAlign="center" fontSize="xl">
                  {project.name}
                </Text>
              </Link>
            ))}
          </Box>
        </ModalContent>
      </Modal>
    </Box>
  );
}
export default Partners;
