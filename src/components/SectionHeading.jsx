import { Heading } from "@chakra-ui/react";
import { BIGHEADER, SPACE } from "../styles/Constants";

export default function SectionHeading({ children, ...props }) {
  return (
    <Heading fontSize={BIGHEADER} mb={SPACE.l} align="center" {...props}>
      {children}
    </Heading>
  );
}
