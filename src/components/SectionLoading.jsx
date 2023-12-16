import { Box, CircularProgress } from "@chakra-ui/react";
import { SPACE } from "../styles/Constants";

const SectionLoading = ({
  customColor = "zzPink.200",
  size = "120px",
  ...props
}) => {
  return (
    <Box
      py={SPACE.xl * 2}
      display="flex"
      alignItems="center"
      justifyContent="center"
      {...props}
    >
      <CircularProgress isIndeterminate size={size} color={customColor} />
    </Box>
  );
};

export default SectionLoading;
