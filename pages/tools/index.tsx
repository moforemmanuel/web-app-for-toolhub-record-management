import FullPageLoader from '@/components/fullPageLoader/FullPageLoader';
import Layout from '@/components/Layout/Layout';
import {
  Box,
  Button,
  Center,
  chakra,
  Flex,
  GridItem,
  Heading,
  HStack,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { MockTools } from 'storage/tools';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, FreeMode } from 'swiper';

import communityLogo from '../../public/logo-community.svg';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';

import { FaTools } from 'react-icons/fa';
import { BiCategory } from 'react-icons/bi';
import CImage from '@/components/CImage/CImage';
import { useRouter } from 'next/router';

const Tools = () => {
  const router = useRouter();
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <FullPageLoader />;
  }
  return (
    isMounted && (
      <Layout>
        <Box>
          <Box
            w={{ md: '80%' }}
            my={6}
            p={3}
            m="0 auto"
            display="flex"
            alignItems="center"
            justifyContent="space-around"
            gap={1}
          >
            <Box>
              <CImage
                src={communityLogo.src}
                width={150}
                height={150}
                priority
                layout="responsive"
              />
            </Box>

            <Box>
              <Heading as="h1" textStyle="h1" textAlign="left">
                All Our Tools
              </Heading>
              <Text>
                Discover new tools, promote their use in your wiki community,
                help improve them by contributing data.
              </Text>
            </Box>
          </Box>{' '}
          {!MockTools ? (
            <Text>No Tools in our records</Text>
          ) : (
            <Box>
              {[
                {
                  name: 'Category 1',
                  swiperClassName: 'swiper-category-1',
                  logo: '',
                },
                {
                  name: 'Category 2',
                  swiperClassName: 'swiper-category-2',
                  logo: '',
                },
                {
                  name: 'Category 3',
                  swiperClassName: 'swiper-category-3',
                  logo: '',
                },
              ].map((category) => (
                <Box
                  // display="flex"
                  // flexDirection="column"
                  // alignItems="center"
                  // justifyContent="center"
                  mt="3rem"
                  shadow="xl"
                  pb={3}
                  pt={0}
                  w="90%"
                  m="0 auto"
                  border="thin solid #e1e1e0"
                  my={20}
                >
                  {/* This is a category of tools */}

                  <Box
                    bg="#f8f8fb"
                    borderBottom="thin solid #e1e1e0"
                    // mt={3}
                    mb={2}
                    p={6}
                  >
                    <HStack>
                      <BiCategory fontSize="2rem" />
                      <Heading as="h2" textStyle="h2" fontWeight="light">
                        {category.name}
                      </Heading>
                    </HStack>
                  </Box>
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    freeMode={true}
                    navigation={true}
                    autoplay={{ delay: 5000 }}
                    speed={2000}
                    modules={[FreeMode, Navigation, Autoplay]}
                    className={category.swiperClassName}
                    // loop={true}
                    breakpoints={{
                      320: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                      },

                      481: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },

                      769: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                      },

                      1025: {
                        slidesPerView: 4,
                        spaceBetween: 5,
                      },
                    }}
                  >
                    <Flex
                      align="center"
                      justify="center"
                      direction="column"
                      // border="thin solid red"
                    >
                      {MockTools.filter(
                        (tool) => tool.category === category.name
                      ).map((tool) => (
                        <SwiperSlide key={tool.name}>
                          {/* This is a single tool */}
                          <Center>
                            <Flex
                              align="center"
                              justify="space-between"
                              direction="column"
                              border="thin solid #e1e1e0"
                              h="375px"
                              w="250px"
                              gap={3}
                              pb={3}
                            >
                              <HStack
                                display="flex"
                                align="center"
                                justify="center"
                                textAlign="center"
                                bg="#f8f8fb"
                                w="100%"
                                h="50"
                                p={3}
                              ></HStack>

                              <HStack
                                display="flex"
                                align="space-around"
                                justify="center"
                                textAlign="center"
                                w="100%"
                                p={0}
                                m={0}
                                // border="thin solid red"
                                color="gray.700"
                              >
                                <FaTools fontSize="3rem" />
                                <Heading
                                  as="h3"
                                  fontWeight="light"
                                  fontSize="4xl"
                                  textStyle="h3"
                                >
                                  {tool.title}
                                </Heading>
                              </HStack>
                              <Box overflow="auto" maxH="325">
                                <Text p={2} textAlign="center">
                                  {tool.shortDescription}
                                </Text>
                              </Box>

                              <Box
                                alignSelf="flex-start"
                                textAlign="left"
                                color="blackAlpha.700"
                                px={3}
                                pb={2}
                                overflow="auto"
                                maxH="300"
                                minH="50"
                                w="100%"
                              >
                                <Text>
                                  Author(s): <br />
                                  {tool.authors.join(', ')}
                                </Text>
                              </Box>

                              <Box>
                                <Button
                                  colorScheme="gray"
                                  px={6}
                                  rounded="0"
                                  py={3}
                                  transition="all 0.6s"
                                  _hover={{
                                    transform: 'scale(1.1)',
                                  }}
                                  onClick={() =>
                                    router.push(
                                      `/tools/preview/${tool.name}?redirect=/tools`
                                    )
                                  }
                                >
                                  Preview Tool
                                </Button>
                              </Box>
                            </Flex>
                          </Center>
                          {/* This is a single tool */}
                        </SwiperSlide>
                      ))}
                    </Flex>
                  </Swiper>
                  {/* This is a category of tools */}
                </Box>
              ))}
            </Box>
          )}
        </Box>
      </Layout>
    )
  );
};

export default Tools;
