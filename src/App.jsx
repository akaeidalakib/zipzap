import React, { useState, useEffect, lazy, Suspense } from "react";
import Borger from "./components/Borger";
import {
  ChakraProvider,
  useColorMode,
  Box,
  Image as ChakraImage,
  Select,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
} from "@chakra-ui/react";
import Fonts from "./styles/Fonts";
import Theme from "./styles/Theme";
import { Route, Routes, useLocation } from "react-router-dom";
import i18n from "i18next";
import { initReactI18next, I18nextProvider } from "react-i18next";
import translations from "./translations.json";
import "font-awesome/css/font-awesome.min.css";
import { FaGlobe } from "react-icons/fa";
import SectionLoading from "./components/SectionLoading";

const LearnMore = lazy(() => import("./routes/LearnMore"));
const Rent = lazy(() => import("./routes/Rent"));
// const UseOurTech = lazy(() => import("./routes/UseOurTech"));
const PartnershipInquiries = lazy(() =>
  import("./routes/PartnershipInquiries")
);
const Home = lazy(() => import("./pages/Home"));

i18n.use(initReactI18next).init({
  resources: translations,
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

function ForceDarkMode(props) {
  const { colorMode, toggleColorMode } = useColorMode();

  React.useEffect(() => {
    if (colorMode === "dark") return;
    toggleColorMode();
  }, [colorMode, toggleColorMode]);

  return props.children;
}

function App() {
  const [topLoaded, setTopLoaded] = useState(false);
  // TODO look into pathname not updating on nav
  const { pathname } = useLocation();

  const [isHeroActive, setIsHeroActive] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      if (pathname == "/learn-more") {
        setIsHeroActive(window.scrollY < 1);
      } else {
        const viewportHeightCondition =
          window.innerWidth < 768
            ? window.innerHeight * 0.5
            : window.innerHeight;
        setIsHeroActive(window.scrollY < viewportHeightCondition);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <ChakraProvider theme={Theme}>
      <Fonts />
      <ForceDarkMode>
        <Borger isHeroActive={isHeroActive} />
        <LanguageSelect />
        <Box
          minH="100vh"
          minW="100vw"
          backgroundPosition="top"
          bgColor="rgba(17,0,32,1)"
        >
          <I18nextProvider i18n={i18n}>
            <Suspense fallback={<SectionLoading pt={"20vh"} />}>
              <Routes>
                <Route path="/" element={<Home h="100%" />} />
                <Route path="/learn-more" element={<LearnMore />} />
                <Route path="/rent" element={<Rent />} />
                {/* <Route path="/use-our-tech" element={<UseOurTech />} /> */}
                <Route
                  path="/partnership-inquiries"
                  element={<PartnershipInquiries />}
                />
                <Route path="*" element={<Home h="100%" />} />
              </Routes>
            </Suspense>
          </I18nextProvider>
        </Box>
      </ForceDarkMode>
    </ChakraProvider>
  );
}

const handleChange = (event) => {
  const newLanguage = event.target.value;
  setCurrentLanguage(newLanguage);
  i18n.changeLanguage(newLanguage); // Call i18n.changeLanguage with the new language
};

const LanguageSelect = () => {
  const [currentLanguage, setCurrentLanguage] = React.useState("en");

  const handleChange = (language) => {
    setCurrentLanguage(language);
    i18n.changeLanguage(language);
  };

  return (
    <Box position="fixed" bottom="5%" right="1.5%" zIndex="999" maxW="100vw">
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Language options"
          icon={<FaGlobe size="2rem" />}
          size="md"
          borderRadius="50%"
          isRound
          color="zzPink.100"
        />
        <MenuList>
          <MenuItem value="en" onClick={() => handleChange("en")} color="white">
            English
          </MenuItem>
          <MenuItem value="es" onClick={() => handleChange("es")} color="white">
            Español
          </MenuItem>
          <MenuItem value="pt" onClick={() => handleChange("pt")} color="white">
            Português
          </MenuItem>
          <MenuItem value="ru" onClick={() => handleChange("ru")} color="white">
            Русский
          </MenuItem>
          <MenuItem value="ua" onClick={() => handleChange("ua")} color="white">
            Українська
          </MenuItem>
          <MenuItem value="zh" onClick={() => handleChange("zh")} color="white">
            中文
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default App;
