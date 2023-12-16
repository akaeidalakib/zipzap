import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
} from "@chakra-ui/react";
import MailSubscribeForm from "./MailSubscribeForm";

export default function MailSubscribeModal({
  isOpen,
  onClose,
  header,
  message,
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bgColor="zzPurple.300">
        <ModalHeader>{header ? header : "Stay Updated"}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text fontSize="xl" mb={4}>
            {message ? message : "Join our mailing list"}
          </Text>
          <MailSubscribeForm
            onSubscribe={() => {
              setTimeout(() => {
                onClose();
              }, 500);
            }}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
