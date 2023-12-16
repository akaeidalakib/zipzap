import { useToast, Box, Text, CloseButton } from "@chakra-ui/react";
import { useEffect } from "react";
import MailSubscribeForm from "./MailSubscribeForm";
import { useTranslation } from "react-i18next";

export default function MailSubscribePopup({ delayMs, duration }) {
  const { t } = useTranslation();
  const toast = useToast();

  const toastId = "subscribe-popup";

  const handleSubscribe = () => {
    setTimeout(() => {
      toast.close(toastId);
    }, 500);
  };

  // start toast countdown as soon as webpage loads
  useEffect(() => {
    setTimeout(
      () => {
        // don't open if we have already toasted
        if (!toast.isActive(toastId)) {
          toast({
            position: "bottom-left",
            isClosable: true,
            duration: duration ? duration : 60000,
            id: toastId,
            render: () => {
              return (
                <Box
                  bgColor="zzPurple.100"
                  pt={4}
                  pl={4}
                  pr={4}
                  minW="xs"
                  rounded="lg"
                >
                  <Box display="flex" justifyContent="space-between" mb={4}>
                    <Text fontSize="lg">{t("email.subscribe")}</Text>
                    <CloseButton
                      size="sm"
                      onClick={() => {
                        toast.close(toastId);
                      }}
                    />
                  </Box>
                  <MailSubscribeForm onSubscribe={handleSubscribe} />
                </Box>
              );
            },
          });
        }
      },
      delayMs ? delayMs : 2000
    );
  }, []);
}
