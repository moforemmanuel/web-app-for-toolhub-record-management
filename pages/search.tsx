import {
  Box,
  Button,
  Center,
  Flex,
  GridItem,
  Heading,
  HStack,
  Link,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import CImage from '../components/CImage/CImage';
import Layout from '../components/Layout/Layout';
import NextLink from 'next/link';

import { useRouter } from 'next/router';

import FullPageLoader from '../components/fullPageLoader/FullPageLoader';
import { ITool } from 'interfaces/tool';
import { MockTools } from 'storage/tools';
import { FaTools } from 'react-icons/fa';
// console.log(Puppies);

const SearchScreen = () => {
  const router = useRouter();
  const [filteredTools, setFilteredTools] = React.useState<ITool[] | []>([]);

  const q: string | any = router.query.q;

  React.useEffect(() => {
    // console.log(query);
    setFilteredTools(
      MockTools.filter((tool) =>
        tool.title.toLowerCase().includes(String(q).toLowerCase())
      )
    );
  }, [q]);

  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <FullPageLoader />;
  }
  return (
    isMounted && (
      <Layout
        pageTitle="Search"
        pageLink="/search"
        description="View results of your tool search query here."
        breadcrumb={{ label: 'Search', link: '/search' }}
      >
        <Heading
          data-aos="fade-down"
          as="h1"
          fontSize={{ base: '2rem', md: '3rem' }}
          my={{ base: '2.5rem', md: '3rem' }}
          textStyle="h1"
          textTransform="none"
        >
          Search Results For {`"${q}"`}
        </Heading>

        <Flex
          align="center"
          p={{ base: '1rem', md: '3rem' }}
          justify="center"
          direction="row"
          gap={{ base: 4, md: 8 }}
          bg="gray.100"
          flexWrap="wrap"
          w="100%"
        >
          {filteredTools.length > 0 ? (
            filteredTools.map((tool) => (
              <>
                {/* This is a single tool */}
                <Center key={tool.name}>
                  <Flex
                    align="center"
                    justify="space-between"
                    direction="column"
                    // border="thin solid rgba(10,50,150,0.5)"

                    h="375px"
                    w="250px"
                    gap={3}
                    pb={3}
                    bg="white"
                    shadow="lg"
                    transition="all 0.6s"
                    _hover={{
                      transform: 'scale(1.1)',
                    }}
                  >
                    <HStack
                      display="flex"
                      align="center"
                      justify="center"
                      textAlign="center"
                      bgGradient="linear(to-l,blue.200,red.200)"
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
                        colorScheme="blue"
                        variant="outline"
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
              </>
            ))
          ) : (
            <Heading as="h4">No Match Found for {`"${q}"`}</Heading>
          )}
        </Flex>
      </Layout>
    )
  );
};

export default SearchScreen;
