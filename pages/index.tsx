import FullPageLoader from '@/components/fullPageLoader/FullPageLoader';
import Layout from '@/components/Layout/Layout';
import {
  Box,
  Button,
  Center,
  Circle,
  Flex,
  GridItem,
  Heading,
  HStack,
  keyframes,
  Link,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import React from 'react';

import NextLink from 'next/link';
// import dynamic from 'next/dynamic';
import ToolSlider from '@/components/ToolSlider/ToolSlider';
import { ExternalLinkIcon } from '@chakra-ui/icons';

import heroImage from '../public/hero-image-2.jpg';
// import bgImage from '../public/wave.svg';
import exploreIcon from '../public/icons/search.png';
import editIcon from '../public/icons/edit.png';
import contributeIcon from '../public/icons/jigsaw.png';
import utilizeIcon from '../public/icons/renovation.png';

import CImage from '@/components/CImage/CImage';
import { useRouter } from 'next/router';
import { FaTools } from 'react-icons/fa';
// const ToolSlider = dynamic(() => import('@/components/ToolSlider/ToolSlider'), {
//   ssr: false,
// });
const Home = () => {
  const [isMounted, setIsMounted] = React.useState(false);
  const router = useRouter();

  const spinBall = keyframes`
    100% {
        transform: rotate(360deg);
    }`;

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <FullPageLoader />;
  }
  return (
    isMounted && (
      <Layout>
        <Flex
          // border="thin solid red"
          mt={3}
          align="center"
          justify="center"
          direction="column"
          gap={3}
        >
          <SimpleGrid columns={{ base: 1, md: 11 }}>
            <GridItem
              as={Flex}
              align="center"
              justify="space-around"
              direction="column"
              colSpan={{ md: 5 }}
              pl={{ md: 6 }}
              data-aos="zoom-in"
            >
              {/* Hero Section */}
              <Box mt={3} p={3}>
                <Heading
                  as="h1"
                  textStyle="h1"
                  //  color="blue.600"
                  bgGradient="linear(blue.600, red.500, blue.600)"
                  bgClip="text"
                  className="animate__animated animate__backInDown animate__slow"
                >
                  Toolhub Record Management System
                </Heading>

                <HStack spacing={6}>
                  {/* <Circle
                    padding={6}
                    // bgGradient="linear(white, red.200, blue.400)"
                    animation={`${spinBall} 3s linear infinite`}
                    // rgba(66, 153, 225, 0.7), rgba(239, 83, 80, 0.3)
                    boxShadow={`inset 0 0 18px #fff, 
                inset 6px 0 18px violet, 
                inset -6px 0 18px #0ff, 
                inset 6px 0 30px violet, 
                inset -6px 0 30px #0ff, 
                0 0 18px #fff, -4px 
                0 18px violet, 4px 0 18px #0ff`}
                  >
                    <FaTools color="white" fontSize="1.5rem" />
                  </Circle> */}
                  <Text
                    textAlign="center"
                    w={{ md: '80%' }}
                    m="0 auto"
                    className="animate__animated animate__zoomInDown animate__slow animate__delay-1s"
                  >
                    A dedicated web application for editing{' '}
                    <NextLink href="https://toolhub.wikimedia.org/" passHref>
                      <Link color="blue.600" _hover={{ color: 'blue.400' }}>
                        Toolhub
                      </Link>
                    </NextLink>{' '}
                    records in a fun and easy way
                  </Text>
                </HStack>
              </Box>

              <Box p={3}>
                <Text
                  textAlign="justify"
                  className="animate__animated animate__backInUp animate__slow animate__delay-2s"
                >
                  This is a management system which helps you find useful tools
                  in WikiMedia's Toolhub, which are particularly used to work
                  with data on WikiMedia. You can explore these tools, as well
                  as edit them, provided they have missing of incorrect
                  Information. This will go a long way to aid in the
                  comprehensibility of the tools, as well as increase
                  productivity as a result.
                </Text>
              </Box>

              {/* See all tools section */}
              <Button
                className="animate__animated animate__zoomInDown animate__slow animate__delay-2s"
                size="lg"
                rightIcon={<ExternalLinkIcon fontSize="1.5rem" />}
                colorScheme="green"
                padding={3}
                variant="outline"
                rounded={0}
                // transition="all 0.6s"
                // _hover={{
                //   bg: 'green.600',
                //   color: 'white',
                //   transform: 'scale(1.1)',
                // }}
                _hover={{
                  variant: 'solid',
                  color: 'white',
                  boxShadow: 'inset 22rem 0 0 0 rgba(47, 133, 90, 1)',
                }}
                onClick={() => router.push('/tools')}
              >
                <Heading as="h3" fontSize="2xl" textAlign="center">
                  See all tools in the record
                </Heading>
              </Button>
              {/* See all tools section */}
            </GridItem>

            <GridItem
              colSpan={{ md: 6 }}
              p={0}
              data-aos="zoom-in"
              data-aos-duration={2000}
            >
              <Center w="100%" p={0}>
                <CImage
                  src={heroImage.src}
                  width={heroImage.width}
                  height={heroImage.height}
                  alt="two engineers fixing a tool"
                  layout="responsive"
                  quality={50}
                  priority
                />
              </Center>
            </GridItem>
          </SimpleGrid>

          {/* Hero Section */}

          <Box
            w="100%"
            p={6}
            bg="linear-gradient( rgba(66, 153, 225, 0.7), rgba(239, 83, 80, 0.3) )"
            pb={6}
            data-aos="fade-up"
          >
            <Box>
              <Heading textStyle="h1">Getting Engaged</Heading>
            </Box>
            <SimpleGrid columns={[1, 2, 4]} spacing={3}>
              {[
                {
                  icon: exploreIcon,
                  title: 'Explore',
                  // text: 'Aute velit aliqua pariatur nostrud esse. Non excepteur ut esse et quis consequat. Do irure eiusmod officia proident elit do reprehenderit dolor aliqua. Esse adipisicing sit voluptate amet id nulla labore ad ipsum excepteur laborum. Consequat cupidatat est commodo dolore magna pariatur. In do sunt proident esse proident commodo.',
                  text: "Most often, you cannot use or add to what you don't know. For that reason, it is necessary to preview or explore a tool and try to get a hang of it before trying to use it properly or contributing to it by editing and providing some important missing information about the tool.",
                },
                {
                  icon: editIcon,
                  title: 'Edit',
                  // text: 'Aute velit aliqua pariatur nostrud esse. Non excepteur ut esse et quis consequat. Do irure eiusmod officia proident elit do reprehenderit dolor aliqua. Esse adipisicing sit voluptate amet id nulla labore ad ipsum excepteur laborum. Consequat cupidatat est commodo dolore magna pariatur. In do sunt proident esse proident commodo.',
                  text: 'When you know about a tool, can use it, and can provide some very important information, (either missing or not very accuate), then you can go ahead to make changes to the given, provided the information you are submitting is verifiably accurate and correct.',
                },
                {
                  icon: contributeIcon,
                  title: 'Contribute',
                  // text: 'Aute velit aliqua pariatur nostrud esse. Non excepteur ut esse et quis consequat. Do irure eiusmod officia proident elit do reprehenderit dolor aliqua. Esse adipisicing sit voluptate amet id nulla labore ad ipsum excepteur laborum. Consequat cupidatat est commodo dolore magna pariatur. In do sunt proident esse proident commodo.',
                  text: 'What is the point of keeping knowledge to oneself? We encourage users to contribution to tools, either by editing those tools with this record management system, or by using these tools for the purpose for they were built. By so doing, help beneficiaries to these tools.',
                },
                {
                  icon: utilizeIcon,
                  title: 'Utilize',
                  // text: 'Aute velit aliqua pariatur nostrud esse. Non excepteur ut esse et quis consequat. Do irure eiusmod officia proident elit do reprehenderit dolor aliqua. Esse adipisicing sit voluptate amet id nulla labore ad ipsum excepteur laborum. Consequat cupidatat est commodo dolore magna pariatur. In do sunt proident esse proident commodo.',
                  text: 'Using a tool to make changes to datasets viewed by many is an act of heroism, no matter how small. Only us can build our community, and it is only throught working together than we can achieve that. For that reason, there are tools at our disposal to contribute to new or existing data/info.',
                },
              ].map((item, index) => (
                <GridItem
                  data-aos="zoom-in"
                  key={index}
                  bg="white"
                  shadow="lg"
                  rounded="md"
                  my={3}
                >
                  <Flex
                    align="center"
                    justify="center"
                    direction="column"
                    gap={3}
                    p={6}
                    textAlign="justify"
                  >
                    <HStack>
                      <Box w={50} h={50}>
                        <CImage
                          src={item.icon.src}
                          width={item.icon.width}
                          height={item.icon.height}
                          alt={item.title}
                          layout="responsive"
                        />
                      </Box>
                      <Heading fontSize="3xl">{item.title}</Heading>
                    </HStack>
                    <Text>{item.text}</Text>
                  </Flex>
                </GridItem>
              ))}
            </SimpleGrid>
          </Box>

          {/* Edit Section */}

          <Box minW="100%" maxW="100%" mt={3} data-aos="fade-up">
            <Heading textAlign="center" as="h2" textStyle="h2">
              Contribute to incomplete tools
            </Heading>
            <ToolSlider />
          </Box>

          {/* Edit Section */}
        </Flex>
      </Layout>
    )
  );
};

export default Home;
