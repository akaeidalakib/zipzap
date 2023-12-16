import {
  VStack,
  Box,
  Accordion,
  AccordionIcon,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  ListItem,
  OrderedList,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import PageBox from "../components/PageBox";
import ReactHtmlParser from "react-html-parser";

export default function Faq() {
  const { t } = useTranslation();

  const faqs = [];
  const questionsCount = 15;
  for (let i = 1; i <= questionsCount; i++) {
    const rawAnswer = t(`faq.questions.${i}.answer`);
    let isList = false;
    const processedAnswer = ReactHtmlParser(rawAnswer, {
      transform: (node, index) => {
        if (node.type === "tag" && node.name === "step") {
          isList = true;
          return <ListItem key={index}>{node.children[0].data}</ListItem>;
        }
      },
    });
    faqs.push({
      question: t(`faq.questions.${i}.question`),
      answer: processedAnswer,
      isList,
    });
  }
  return (
    <PageBox isSnapScroll={false}>
      <VStack spacing={4} align="center">
        <Box w="100%">
          <Accordion allowToggle>
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} pb={4}>
                <h2>
                  <AccordionButton>
                    <Box
                      flex="1"
                      textAlign="left"
                      fontSize="2xl"
                      fontWeight="bold"
                    >
                      {faq.question}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} pl={10} lineHeight="170%" fontSize="xl">
                  {faq.isList ? (
                    <OrderedList>{faq.answer}</OrderedList>
                  ) : (
                    faq.answer
                  )}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Box>
      </VStack>
    </PageBox>
  );
}
