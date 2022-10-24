import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  GridItem,
  Heading,
  HStack,
  ListItem,
  SimpleGrid,
  // Skeleton,
  Stack,
  Tag,
  TagLabel,
  Text,
  UnorderedList,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import React from 'react';
import { FaTools } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import { FiUsers } from 'react-icons/fi';
import { TbLiveView } from 'react-icons/tb';
import { MdDescription } from 'react-icons/md';

import Swiper, { Autoplay, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

import { MockTools } from 'storage/tools';
import { useRouter } from 'next/router';

const ToolSlider = ({ title = 'Title' }) => {
  const router = useRouter();
  React.useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const swiper = new Swiper('.swiper', {
      modules: [Autoplay, Navigation],
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      loop: true,
      speed: 2000,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // observer: true,
      // observeParents: true,
      // init: false,
    });

    // setMounted(true);
    // swiper.init();
    // swiper.update();
    // console.log(swiper);
    // swiper.enable();
    // swiper.autoplay.start();
  }, []);
  return (
    <Box
      minW="100%"
      maxW="100%"
      h="auto"
      maxH="fit-content"
      my={6}
      // border="thin solid blue"
    >
      {/* <Skeleton isLoaded={mounted} fadeDuration={0.2} speed={0.5}> */}
      <Box className="swiper">
        <Box
          className="swiper-wrapper"
          // border="thin solid blue"
          // p={2}
          height="fit-content"
        >
          {MockTools &&
            MockTools.map((tool) => (
              <Box
                m="0 auto"
                key={tool.name}
                className="swiper-slide"
                bg="gray.200"
                py={6}
                // border="thin solid green"
              >
                <Center>
                  <Flex
                    bg="white"
                    // border="thin solid green"
                    maxW="80%"
                    minH="fit-content"
                    // maxH="50vh"
                    align="center"
                    justify="center"
                    direction="column"
                    gap={6}
                    p={3}
                    shadow="xl"
                  >
                    <HStack color="green.500" mt={3} mb={0} pb={0}>
                      <FaTools fontSize="2rem" />
                      <Heading as="h3" textStyle="h3">
                        {tool.title}
                      </Heading>
                    </HStack>

                    {/* <Text>{tool.description}</Text> */}

                    <SimpleGrid
                      textAlign="justify"
                      columns={{ base: 5, md: 5 }}
                    >
                      <GridItem
                        p={3}
                        // border="thin solid red"
                        colSpan={{ base: 5, md: 1 }}
                        color="blue.600"
                      >
                        <Box transform="translateY(50%)" textAlign="center">
                          <Center>
                            <HStack>
                              <MdDescription fontSize="1.3rem" />
                              <Heading fontSize="2xl" as="h4">
                                Description
                              </Heading>
                            </HStack>
                          </Center>
                        </Box>
                      </GridItem>
                      <GridItem
                        p={3}
                        // border="thin solid pink"
                        colSpan={{ base: 5, md: 4 }}
                      >
                        {tool.shortDescription}
                      </GridItem>
                    </SimpleGrid>

                    <SimpleGrid
                      textAlign="justify"
                      w="100%"
                      columns={{ base: 5, md: 5 }}
                    >
                      <GridItem
                        p={3}
                        // border="thin solid red"
                        colSpan={{ base: 5, md: 1 }}
                        color="blue.600"
                      >
                        <Box textAlign="center">
                          <Center>
                            <HStack pt={{ md: 3 }}>
                              <FiUsers fontSize="1.3rem" />
                              <Heading fontSize="2xl" as="h4">
                                Authors
                              </Heading>
                            </HStack>
                          </Center>
                        </Box>
                      </GridItem>
                      <GridItem
                        p={3}
                        //  border="thin solid pink"
                        colSpan={{ base: 5, md: 4 }}
                      >
                        <Flex
                          align="center"
                          justify={{ base: 'center', md: 'flex-start' }}
                          wrap="wrap"
                        >
                          {/* <UnorderedList>
                            {tool.authors &&
                              tool.authors.map((author) => (
                                <ListItem key={author}>{author}</ListItem>
                              ))}
                          </UnorderedList> */}

                          {/* <Wrap alignSelf="center"> */}
                          {tool.authors.length == 0 ? (
                            <Text>No Authors</Text>
                          ) : (
                            tool.authors.map((author) => (
                              // <WrapItem alignSelf="center" m="0 auto">
                              <Tag
                                size="lg"
                                key={author}
                                colorScheme="gray"
                                borderRadius="full"
                                shadow="md"
                                p={2}
                                m={2}
                                px={4}
                              >
                                <Avatar
                                  src=""
                                  size="xs"
                                  name={author}
                                  ml={-1}
                                  mr={2}
                                />
                                <TagLabel>{author}</TagLabel>
                              </Tag>
                              // </WrapItem>
                            ))
                          )}
                          {/* </Wrap> */}
                        </Flex>
                      </GridItem>
                    </SimpleGrid>

                    <Stack
                      direction={{ base: 'column', md: 'row' }}
                      spacing={3}
                    >
                      <Button
                        colorScheme="green"
                        rounded="0"
                        variant="outline"
                        leftIcon={<FiEdit />}
                        transition="all 0.6s"
                        _hover={{
                          color: 'white',
                          background: 'green.600',
                          transform: 'scale(1.1)',
                        }}
                        onClick={() =>
                          router.push(`/tools/edit/${tool.name}?redirect=/`)
                        }
                      >
                        Edit This Tool
                      </Button>

                      <Button
                        colorScheme="blue"
                        rounded="0"
                        variant="solid"
                        color="white"
                        rightIcon={<TbLiveView fontSize={'1.2rem'} />}
                        transition="all 0.6s"
                        _hover={{
                          color: 'blue.600',
                          background: 'white',
                          transform: 'scale(1.1)',
                          borderColor: 'blue.600',
                          borderWidth: 'thin',
                          borderStyle: 'solid',
                        }}
                        onClick={() =>
                          router.push(`/tools/preview/${tool.name}?redirect=/`)
                        }
                      >
                        Preview This Tool
                      </Button>
                    </Stack>
                  </Flex>
                </Center>
              </Box>
            ))}
        </Box>
        <Box className="swiper-button-prev"></Box>
        <Box className="swiper-button-next"></Box>
      </Box>
      {/* </Skeleton> */}
    </Box>
  );
};

export default ToolSlider;
