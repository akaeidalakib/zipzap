export const ButtonStyles = {
  baseStyle: {},
  sizes: {},
  variants: {
    purple: {
      bg: "rgba(96, 24, 184, 0.85)",
      size: "lg",
      shadow: "lg",
      _hover: { bg: "zzPurple.100" },
    },
    pink: {
      bg: "zzPink.200",
      size: "lg",
      shadow: "lg",
      _hover: { bg: "zzPink.100" },
    },

    blue: {
      bg: "zzBlue.200",
      size: "lg",
      shadow: "lg",
      _hover: { bg: "zzBlue.100" },
    },

    yellow: {
      bg: "zzYellow.300",
      size: "lg",
      shadow: "lg",
      _hover: { bg: "zzYellow.200" },
    },

    transparent: {
      bg: "whiteAlpha.300",
      size: "lg",
      shadow: "lg",
      _hover: { bg: "whiteAlpha.500" },
    },

    gradient: {
      bgGradient: "linear(to-r, zzBlue.100, zzPurple.100, zzPink.100)",
      _hover: {
        bgGradient: "linear(to-r, zzBlue.200, zzPurple.200, zzPink.200)",
      },
    },
  },
  defaultProps: {
    size: "lg",
  },
};
