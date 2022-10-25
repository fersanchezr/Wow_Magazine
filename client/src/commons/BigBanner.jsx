import React, { useEffect, useState } from "react";
import {
  Image,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
function BigBanner({ data }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [valorInicial, setvalorInicial] = React.useState(true);
  const [image, setImage] = useState("");

  useEffect(() => {
    setImage(data[0]?.popup[Math.floor(Math.random() * (2 - 0))].url);
    setTimeout(() => {
      setvalorInicial(true);
    }, 600000);
  }, [valorInicial]);


  return (
    <>
      <Modal onClose={onClose} size="full" isOpen={valorInicial}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton
            color="red"
            onClick={() => setvalorInicial(false)}
          />
          <ModalBody>
            <Flex
              justifyContent="center"
              pt="120px"
              alignItems="center"
              bg="white"
            >
              <Image
                w={{ base: "100%", md: "50%" }}
                h={{ base: "100%", md: "50%" }}
                src={image || data[0]?.popup[0].url}
                objectFit="cover"
              />{" "}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default BigBanner;
