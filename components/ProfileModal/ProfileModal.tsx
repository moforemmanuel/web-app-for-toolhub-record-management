import React from 'react';
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Stack,
  Box,
  Link,
  Text,
  Flex,
  Avatar,
  StatGroup,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  CircularProgress,
  CircularProgressLabel,
  Center,
  Button,
  HStack,
} from '@chakra-ui/react';

import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { FaPhoneAlt } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { TbWorld } from 'react-icons/tb';
import emmaImage from '../../public/emma-image.jpeg';

import { GiRank3 } from 'react-icons/gi';
import { SiOpslevel } from 'react-icons/si';
import { GrScorecard } from 'react-icons/gr';
import { BiLogOut, BiUserCircle } from 'react-icons/bi';

interface ISide {
  isOpen: boolean;
  onClose: () => void;
}
const ProfileModal = ({ isOpen, onClose }: ISide) => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  // const firstField = React.useRef();
  const router = useRouter();
  const { pathname } = router;
  // console.log(router);

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="left"
        // initialFocusRef={firstField}
        onClose={onClose}
        // size="full"
      >
        <DrawerOverlay />
        <DrawerContent
          bgColor="gray.50"
          color="blackAlpha.900"
          // transition="all 0.4s"
          sx={{
            'transition-property': 'all',
            'transition-duration': '0.25s',
            'transition-timing-function': 'linear',
            'transition-delay': '0s',
          }}
        >
          <DrawerCloseButton bg="primary" p={4} rounded={0} color="white" />
          <DrawerHeader
          // borderBottomWidth="1px"
          ></DrawerHeader>

          <DrawerBody
            px={8}
            h="auto"
            textAlign="left"
            fontFamily="var(--chakra-fonts-manjari)"
          >
            <Flex
              align="center"
              justify="center"
              direction="column"
              gap={4}
              mt={2}
              mb={4}
              // border="thin solid red"
            >
              <Box textAlign="center" w="100%">
                <Avatar size="2xl" name="Mofor Emmanuel" src={emmaImage.src} />
                <Text
                  mt={2}
                  fontSize="3xl"
                  bgGradient="linear(blue.600, red.500, blue.600)"
                  bgClip="text"
                  textStyle="h1"
                >
                  Mofor Emmanuel
                </Text>
              </Box>
              <Box shadow="md" w="100%" p={4} rounded="md" bg="white">
                <StatGroup>
                  <Stat>
                    <StatLabel textAlign="center" fontSize="lg">
                      Contributions This Month
                    </StatLabel>
                    <StatNumber textAlign="center" fontSize="3xl">
                      12
                    </StatNumber>
                    <StatHelpText textAlign="center" fontSize="lg">
                      <StatArrow type="increase" />
                      13.36%
                    </StatHelpText>
                  </Stat>
                </StatGroup>
              </Box>
              <Flex
                align="center"
                justify="center"
                direction="column"
                gap={3}
                p={4}
                w="100%"
                shadow="lg"
                rounded="xl"
                bg="white"
              >
                <Flex
                  align="center"
                  justify="space-between"
                  w="100%"
                  px={4}
                  // gap={4}
                  // border="thin solid red"
                >
                  <HStack>
                    <GiRank3 fontSize="1.3rem" />
                    <Text>Rank</Text>
                  </HStack>
                  <Text fontSize="2xl">
                    1<sup>st</sup>
                  </Text>
                </Flex>

                <Flex
                  align="center"
                  justify="space-between"
                  w="100%"
                  px={4}
                  // border="thin solid red"
                >
                  <HStack>
                    <SiOpslevel fontSize="1.3rem" />
                    <Text>Level</Text>
                  </HStack>
                  <CircularProgress size="70px" value={75}>
                    <CircularProgressLabel
                      fontSize="2xl"
                      textAlign="center"
                      mt={1}
                    >
                      3
                    </CircularProgressLabel>
                  </CircularProgress>
                </Flex>

                <Flex
                  align="center"
                  justify="space-between"
                  w="100%"
                  px={4}
                  // border="thin solid red"
                >
                  <HStack>
                    <GrScorecard fontSize="1.2rem" />
                    <Text>Points</Text>
                  </HStack>
                  <Text fontSize="2xl">1250</Text>
                </Flex>

                <Button
                  colorScheme="green"
                  p={5}
                  rounded={0}
                  // borderTopStartRadius="full"
                  // borderBottomEndRadius="full"
                  borderBottomStartRadius="2rem"
                  borderTopEndRadius="2rem"
                  transition="all 0.5s"
                  _hover={{
                    borderTopStartRadius: 'full',
                    borderBottomEndRadius: 'full',
                    variant: 'outline',
                    bg: 'white',
                    color: 'green.600',
                    border: 'thin solid #2F855A',
                  }}
                >
                  Claim Reward
                </Button>
              </Flex>
            </Flex>

            <Flex align="flex-start" justify="center" direction="column">
              <HStack mt={4}>
                <BiUserCircle fontSize="2rem" color="blue.500" />
                <NextLink href="/" passHref>
                  <Link fontSize="2xl">My Profile</Link>
                </NextLink>
              </HStack>

              <HStack mt={4}>
                <BiLogOut fontSize="2rem" color="blue.500" />
                <NextLink href="/" passHref>
                  <Link fontSize="2xl">Logout</Link>
                </NextLink>
              </HStack>
            </Flex>
          </DrawerBody>

          {/* <DrawerFooter
          // borderTopWidth="1px"
          ></DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ProfileModal;
