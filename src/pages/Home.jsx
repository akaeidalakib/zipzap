import { useRef, useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { lazy, Suspense } from "react";
import Hero from "./Hero";
import Tutorial from "./Tutorial"
const NftTypes = lazy(() => import("./NftTypes"));
const Partners = lazy(() => import("./Partners"));
const Features = lazy(() => import("./Features"));
const Timeline = lazy(() => import("./Timeline"));
const Footer = lazy(() => import("../components/Footer"));
const About = lazy(() => import("./About"));
// const Tutorial = lazy(() => import("./Tutorial"));
const Guild = lazy(() => import("./Guild"));

import SectionLoading from "../components/SectionLoading";
import DotNav from "../components/DotNav";

export default function Home() {

  const videos = [useRef()];
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    console.log(activeSection);
  }, [activeSection]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        console.log(entries);
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        console.log(visibleSection);
        if (visibleSection) {
          setActiveSection(sectionRefs.current.indexOf(visibleSection.target));
        }
      },
      { threshold: 0.25 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const addRef = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
      console.log(el);
    }
  };

  const pageSections = [
    { component: <Hero videoRef={videos[0]} />, id: "home" },
    { component: <Features />, id: "features" },
    { component: <Partners />, id: "partners" },
    { component: <Guild />, id: "guild" },
    { component: <NftTypes />, id: "nfttypes" },
    { component: <Tutorial />, id: "tutorial" },
    { component: <About />, id: "about" },
    { component: <Timeline />, id: "timeline" },
    { component: <Footer />, id: "footer" },
  ].map(({ component, id }, i) => (
    <Suspense fallback={<SectionLoading />} key={i}>
      <div ref={addRef} id={id}>
        {component}
      </div>
    </Suspense>
  ));

  return (
    <Box>
      <DotNav activeSection={activeSection} />
      {pageSections}
    </Box>
  );
}
