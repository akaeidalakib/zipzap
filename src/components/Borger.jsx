import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Box,
  Flex,
  Button,
  IconButton,
  Portal,
  Image,
  Center,
  Spacer,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { HamburgerIcon, MinusIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";
import logo from "../assets/banner2.png";
import { SPACE } from "../styles/Constants";
import { FaDiscord } from "react-icons/fa";
import IconLink from "./IconLink";

const ButtonText = ({ translationKey }) => {
  const { t } = useTranslation();
  return t(translationKey);
};

const buttons = [
  { text: <ButtonText translationKey="sidebar.home" />, path: "/" },
  {
    text: <ButtonText translationKey="sidebar.rent" />,
    path: "https://rent.zipzap.net",
    isExternal: true,
  },
  {
    text: <ButtonText translationKey="sidebar.learn_more" />,
    path: "/learn-more",
  },
  {
    text: <ButtonText translationKey="sidebar.partnership_inquiries" />,
    path: "https://pc8bpdj185h.typeform.com/to/fNKh0QQZ",
    isExternal: true,
  },
];

const LogoImage = ({ ...props }) => (
  <Link
    to="/"
    onClick={() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }}
  >
    <Image
      h={["40px", null, "30px", "40px", "50px"]}
      src={logo}
      alt="zipzap banner"
      objectFit="contain"
      {...props}
    />
  </Link>
);

const DesktopButton = ({ text, path, isHeroActive, isHovered, isExternal }) => {
  const location = useLocation();
  const isActive = location.pathname === path;
  const color =
    isHeroActive && isHovered ? "black" : isHeroActive ? "white" : "black";
  const ButtonLook = () => (
    <Button
      aria-label={text}
      rounded="none"
      variant="ghost"
      size={["sm", "md", null, "lg"]}
      bgColor={isActive && (isHovered || !isHeroActive) ? "gray.200" : "none"}
      _hover={{ bgColor: "gray.200" }}
      fontWeight="bold"
    >
      <Text color={color} fontSize={["initial", null, "md", "xl", "xl", "2xl"]}>
        {text}
      </Text>
    </Button>
  );
  if (isExternal) {
    return (
      <ChakraLink
        href={path}
        target="_blank"
        style={{ textDecoration: "none" }}
      >
        <ButtonLook />
      </ChakraLink>
    );
  }
  return (
    <Link to={path} style={{ textDecoration: "none" }}>
      <ButtonLook />
    </Link>
  );
};

const BorgerMenuButton = ({
  text,
  path,
  mobileDisplay,
  changeMobileDisplay,
  isExternal,
}) => {
  // const [isActive, setIsActive] = useState(false);
  const location = useLocation();
  const isActive = location.pathname === path;

  const ButtonLook = () => (
    <Button
      variant="ghost"
      aria-label={text}
      w="100%"
      color={isActive ? "black" : "zzGray.100"}
      bgColor={isActive ? "zzGray.100" : "transparent"}
      onClick={() => {
        changeMobileDisplay(`${mobileDisplay === "none" ? "flex" : "none"}`);
      }}
      _hover={{ bgColor: "zzPurple.200" }}
      rounded="none"
    >
      {text}
    </Button>
  );

  if (isExternal) {
    return (
      <ChakraLink
        href={path}
        target="_blank"
        style={{ textDecoration: "none" }}
      >
        <ButtonLook />
      </ChakraLink>
    );
  }

  return (
    <Link to={path} style={{ textDecoration: "none" }}>
      <ButtonLook />
    </Link>
  );
};

export default function Borger({ isHeroActive }) {
  const [mobileDisplay, changeMobileDisplay] = useState("none");
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Portal>
      <Flex position="fixed" top="0" w="100%" justify="center">
        {/* Desktop View */}
        <Flex
          direction="row"
          w="100%"
          justifyContent="space-between"
          bg={
            isHeroActive
              ? isHovered
                ? "zzGray.100"
                : "transparent"
              : "zzGray.100"
          }
          transition="background-color 0.2s"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          p={SPACE.s}
          alignItems="center"
          position="relative"
          display={["none", "none", "flex", "flex"]}
        >
          <LogoImage ml={SPACE.s} />
          <Center minW="70%" ml="15%" position="absolute">
            {buttons.map((btn, idx) => (
              <DesktopButton
                {...btn}
                key={idx}
                idx={idx}
                isHeroActive={isHeroActive}
                isHovered={isHovered}
              />
            ))}
          </Center>
          <IconLink
            h={["40px", null, "30px", "40px", "50px"]}
            w={["40px", null, "30px", "40px", "50px"]}
            mr={SPACE.s}
            mt={SPACE.s}
            icon={FaDiscord}
            target="https://discord.com/invite/zipzapweb3"
            color={"zzPink.100"}
          />
        </Flex>

        {/* Mobile View */}
        <Flex
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          position="fixed"
          top="0"
          right="0"
          p="4"
          bg={isHeroActive ? "transparent" : "rgba(17,0,32,0.9)"}
          display={["flex", "flex", "none", "none"]}
        >
          <LogoImage />
          <IconButton
            variant="purple"
            aria-label="Open Menu"
            size="lg"
            color="white"
            icon={<HamburgerIcon />}
            onClick={() => {
              changeMobileDisplay(
                `${mobileDisplay === "none" ? "flex" : "none"}`
              );
            }}
          />
        </Flex>

        <Flex
          w="100%"
          display={[mobileDisplay, null, "none", null]}
          pos="fixed"
          top="0"
          left="0"
          overflowY="auto"
          flexDir="column"
        >
          <Box
            w="100%"
            align="center"
            bgColor="rgba(0, 0, 0, 0.88)"
            boxShadow="2xl"
          >
            <Flex justify="flex-end">
              <IconButton
                top="1rem"
                mr="4"
                mt="1"
                aria-label="Close Menu"
                size="lg"
                color="white"
                bgColor="zzPurple.200"
                icon={<MinusIcon />}
                onClick={() => changeMobileDisplay("none")}
              />
            </Flex>
            <Box pt={SPACE.m}>
              {buttons.map((btn, idx) => (
                <BorgerMenuButton
                  {...btn}
                  mobileDisplay={mobileDisplay}
                  changeMobileDisplay={changeMobileDisplay}
                  key={idx}
                  color={isHeroActive ? "white" : "black"}
                />
              ))}
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Portal>
  );
}
