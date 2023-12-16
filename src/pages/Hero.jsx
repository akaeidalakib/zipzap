import {
  Flex,
  Button,
  Box,
  Text,
  useBreakpointValue,
  Image,
  Heading,
} from "@chakra-ui/react";
import { useState, useEffect, forwardRef } from "react";
import { PAGEPAD, SPACE } from "../styles/Constants";
import { useTranslation } from "react-i18next";
import banner720 from "../assets/banner720.mp4";
import bg from "../assets/bg2.jpg";

const Hero = forwardRef(({ videoRef }, ref) => {
  const { t } = useTranslation();

  const phrases = [
    "NFTs Rental Done Right.",
    "Derisked. No Collateral. Lower Cost.",
    "Play, Earn, Unlock Web3.",
  ];
  const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);
  const [fade, setFade] = useState(true);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setCurrentPhrase(
          (prev) => phrases[(phrases.indexOf(prev) + 1) % phrases.length]
        );
        setFade(true);
      }, 1000);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Flex
        ref={ref}
        scrollSnapAlign={{ base: "none", md: "start" }}
        scrollSnapStop={{ base: "normal", md: "always" }}
        scrollMarginTop={{ base: "0px", md: "60px" }}
        position="relative"
        h={useBreakpointValue({ base: "50vh", md: "100vh" })}
        justify="center"
        align="center"
        direction="column"
        px={PAGEPAD.x}
        pb={PAGEPAD.y}
        pt={[PAGEPAD.y, null, null, null, "19vh"]}
        id="/"
      >
        <VideoComponent videoRef={videoRef} />
        <Box
          position="absolute"
          bottom={0}
          left={0}
          w="100%"
          h="20%"
          bgGradient="linear(rgba(0,0,0,0), rgba(17,0,32,255))"
        />
        <Heading
          position="absolute"
          top={"30%"}
          width="80%"
          textAlign="center"
          fontSize={{ base: "6.5vw", md: "7xl" }}
          style={{
            transition: "opacity 1s, transform 1s",
            opacity: fade ? 1 : 0,
            transform: `translateY(${fade ? "0%" : "20%"})`,
            wordWrap: "break-word",
          }}
        >
          {currentPhrase}
        </Heading>
        <Button
          position="absolute"
          bottom={1 * SPACE.xl}
          bgGradient="linear(to-r, zzBlue.100, zzPurple.100, zzPink.100)"
          _hover={{
            bgGradient: "linear(to-r, zzBlue.200, zzPurple.200, zzPink.200)",
          }}
          minW="40%"
          p={SPACE.s}
          mx="auto"
          onClick={() => window.open("https://rent.zipzap.net", "_blank")}
        >
          <Text fontSize={"3xl"}>{t("nft_types.join_now")}</Text>
        </Button>
      </Flex>
    </>
  );
});

export default Hero;

function VideoComponent({ videoRef }) {
  //plays original
  const heightValue = useBreakpointValue({ base: "50vh", md: "100vh" });
  const [showVideo, setShowVideo] = useState(false);
  const position = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: heightValue,
  };

  useEffect(() => {
    const tryPlay = async () => {
      try {
        videoRef.current.playbackRate = 0.85;
        await videoRef.current.play();
        setShowVideo(true);
      } catch (err) {
        console.error("Video autoplay failed:", err);
        setShowVideo(false);
      }
    };

    if (videoRef.current) {
      tryPlay();
    }
  }, [videoRef]);

  return (
    <>
      <Image
        src={bg}
        objectFit="cover"
        opacity="0.8"
        {...position}
        display={showVideo ? "none" : "initial"}
      />
      <Box
        as="video"
        ref={videoRef}
        src={banner720}
        autoPlay
        loop
        muted
        playsInline
        objectFit="cover"
        opacity="0.8"
        display={showVideo ? "initial" : "none"}
        onLoadedData={() => setShowVideo(true)}
        {...position}
      />
      <Box {...position} bgColor={"rgba(0,0,0,0.3)"} />
    </>
  );
}
