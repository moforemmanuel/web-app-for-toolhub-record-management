/* eslint-disable react/no-children-prop */
import { CheckIcon, CloseIcon, SearchIcon } from '@chakra-ui/icons';
import {
  Box,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Modal,
  ModalBody,
  // ModalCloseButton,
  ModalContent,
  // ModalFooter,
  // ModalHeader,
  ModalOverlay,
  // Text,
  // useDisclosure,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';

interface SearchModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}
function SearchModal({ isOpen, onOpen, onClose }: SearchModalProps) {
  // const { isOpen, onOpen, onClose } = useDisclosure();

  const router = useRouter();

  const inputEl = React.useRef<HTMLInputElement | null>(null);

  const onSubmit = () => {
    let q = inputEl?.current?.value;
    // console.log(query);
    onClose();
    router.push(`/search?q=${q}`);
  };

  // const handleInputChange = (e: any) => {
  //   console.log(e.target.value);
  // };
  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}
      <IconButton
        aria-label="Search Site"
        variant="ghost"
        icon={<SearchIcon />}
        onClick={onOpen}
      />

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW={{ base: '90%', md: '50%' }}>
          {/* <ModalHeader>Modal Title</ModalHeader> */}
          {/* <ModalCloseButton /> */}
          <ModalBody
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap="1rem"
            flexDirection="column"
            pt={6}
          >
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                color="gray.300"
                fontSize="1.2em"
                // eslint-disable-next-line react/no-children-prop
                children={<SearchIcon />}
              />
              <Input
                ref={inputEl}
                type="search"
                placeholder="Enter search string"
                // onChange={handleInputChange}
                // onSubmit={onSubmit}
                onKeyDown={(e) => {
                  if (e.code == 'Enter') {
                    onSubmit();
                    // console.log(e);
                  }
                }}
              />
              <InputRightElement children={<CheckIcon color="green.500" />} />
            </InputGroup>
            {/* </Form> */}

            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap="2rem"
            >
              {/* <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button> */}
              <IconButton
                aria-label="cancel"
                colorScheme="red"
                icon={<CloseIcon />}
                onClick={onClose}
              />
              <IconButton
                aria-label="submit"
                colorScheme="green"
                icon={<CheckIcon />}
                onClick={onSubmit}
                type="submit"
              />

              {/* <Button variant="ghost">Secondary Action</Button> */}
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default SearchModal;
