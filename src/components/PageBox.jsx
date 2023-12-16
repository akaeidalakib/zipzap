import { Box } from "@chakra-ui/react";
import { PAGEPAD } from "../styles/Constants";
export default function PageBox({
  children,
  id,
  isSnapScroll = true,
  ...props
}) {
  if (isSnapScroll)
    return (
      <Box
        px={PAGEPAD.x}
        pb={PAGEPAD.y}
        id={id}
        scrollSnapAlign={{ base: "none", md: "start" }}
        scrollSnapStop={{ base: "normal", md: "always" }}
        scrollMarginTop={{ base: "0px", md: "130px" }}
        {...props}
      >
        {children}
      </Box>
    );
  return (
    <Box px={PAGEPAD.x} pb={PAGEPAD.y} id={id} {...props}>
      {children}
    </Box>
  );
}
