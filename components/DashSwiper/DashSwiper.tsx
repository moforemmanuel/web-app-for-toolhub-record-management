import React from 'react';
import {
  Box,
  Button,
  Center,
  Flex,
  GridItem,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, FreeMode } from 'swiper';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import { useRouter } from 'next/router';
import { MockTools } from 'storage/tools';
import { FaTools } from 'react-icons/fa';

const DashSwiper = () => {
  const router = useRouter();
  return (
    <Box>
      <Box
        minW="100%"
        maxW="100%"
        mt="3rem"
        pb={3}
        pt={0}
        p={0}
        m="0 auto"
        // border="thin solid #e1e1e0"
      >
        {/* This is a category of tools */}

        <Swiper
          slidesPerView={1}
          // spaceBetween={30}
          freeMode={true}
          navigation={true}
          autoplay={{ delay: 5000 }}
          speed={2000}
          modules={[FreeMode, Navigation, Autoplay]}
          className="dashSwiper"
          // loop={true}

          breakpoints={{
            '@0.00': {
              slidesPerView: 1,
            },
            '@0.75': {
              slidesPerView: 2,
            },
            '@1.00': {
              slidesPerView: 3,
            },
            '@1.50': {
              slidesPerView: 4,
            },
          }}
        >
          <Flex
            align="center"
            justify="center"
            direction="column"
            // border="thin solid red"
          >
            {MockTools.slice(0, 10).map((tool) => (
              <SwiperSlide key={tool.name}>
                {/* This is a single tool */}
                <Center>
                  <Flex
                    align="center"
                    justify="space-between"
                    direction="column"
                    // border="thin solid #e1e1e0"
                    shadow="2xl"
                    rounded="xl"
                    bg="blue.100"
                    gap={3}
                    pb={3}
                    p={5}
                  >
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
                      <FaTools fontSize="2rem" />
                      <Heading
                        as="h3"
                        fontWeight="light"
                        fontSize="4xl"
                        textStyle="h3"
                      >
                        {tool.title}
                      </Heading>
                    </HStack>

                    <Box>
                      <Button
                        colorScheme="blue"
                        px={6}
                        // rounded=""
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
    </Box>
  );
};

export default DashSwiper;
