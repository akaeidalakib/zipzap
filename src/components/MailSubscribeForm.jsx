import MailchimpSubscribe from "react-mailchimp-subscribe";
import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Box,
  useToast,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useTranslation } from 'react-i18next';

export default function MailSubscribeForm({ onSubscribe }) {
  const { t } = useTranslation();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const MAILCHIMP_SUBSCRIBE_URL =
    "https://zipzap.us21.list-manage.com/subscribe/post?u=edb0dfdeddb1a1d1190a21e84&amp;id=cea64b2dae&amp;f_id=00e1cde1f0";

  return (
    <MailchimpSubscribe
      url={MAILCHIMP_SUBSCRIBE_URL}
      render={({ subscribe, status, message }) => {
        // if we successfully subscribed, call event handler
        if (status === "success") {
          onSubscribe();
        }

        return (
          <form
            onSubmit={handleSubmit((values) => {
              subscribe({ EMAIL: values.email });
            })}
          >
            <FormControl isInvalid={errors.email}>
              <Box display="flex" alignItems="center">
                <Box flex={1}>
                  <Input
                    id="email"
                    size="lg"
                    placeholder={t("email.enterEmail")}
                    {...register("email", {
                      required: "Required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Must enter a valid email address",
                      },
                    })}
                  />
                </Box>
              </Box>
              <FormErrorMessage>
                {errors.email && errors.email.message}
                {status === "error" && message}
              </FormErrorMessage>
            </FormControl>
            <Box textAlign="right">
              <Button
                w="100%"
                mt={4}
                mb={4}
                variant="pink"
                isLoading={isSubmitting || status === "sending"}
                isDisabled={status === "success"}
                type="submit"
              >
                {status === "success" ? "Success!" : t("email.subscribeButton")}
              </Button>
            </Box>
          </form>
        );
      }}
    />
  );
}
