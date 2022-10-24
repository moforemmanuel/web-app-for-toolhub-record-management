import FullPageLoader from '@/components/fullPageLoader/FullPageLoader';
import Layout from '@/components/Layout/Layout';
import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  GridItem,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Tag,
  TagLabel,
  Text,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import { MockTools } from 'storage/tools';
import { FaTools, FaWpexplorer } from 'react-icons/fa';
import { MdDescription } from 'react-icons/md';
import { FiUsers } from 'react-icons/fi';
import { FiEdit } from 'react-icons/fi';

import type { ITool } from 'interfaces/tool';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { BiCodeCurly } from 'react-icons/bi';

const Tool = () => {
  const router = useRouter();
  const {
    query: { redirect, tool: toolName },
  } = router;
  const tool = MockTools.find((tool) => tool.name === toolName);
  // console.log(tool);
  // console.log(
  //   tool
  //     ? Object.keys(tool)
  //         .filter(
  //           (prop) =>
  //             ![
  //               'name',
  //               'title',
  //               'shortDescription',
  //               'longDescription',
  //               'authors',
  //             ].includes(prop)
  //         )
  //         .map((prop) => tool[prop])
  //     : 'no tool'
  // );

  // console.log(toolPropsArray);

  // console.log(Array<keyof ITool>());

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
        {!tool ? (
          <Text>Tool Not Found</Text>
        ) : (
          <Flex
            m="0 auto"
            mt={6}
            maxW="90%"
            align="center"
            justify="center"
            gap={12}
            direction="column"
            pb={12}
            pt={3}
            // border="thin solid red"
          >
            <Button
              p={6}
              mt={0}
              colorScheme="green"
              leftIcon={<ArrowBackIcon />}
              onClick={() => router.push(redirect?.toString() || '/tools')}
            >
              Go Back
            </Button>
            {/* Tool info */}
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12}>
              <GridItem shadow="2xl" p={6}>
                <SimpleGrid mb={8} columns={4}>
                  <GridItem colSpan={1} color="blue.900">
                    <FaTools fontSize="3rem" />
                  </GridItem>
                  <GridItem colSpan={3}>
                    <Box>
                      <Heading
                        color="blue.900"
                        as="h1"
                        textStyle="h1"
                        textAlign="left"
                      >
                        {tool.title}
                      </Heading>
                      <Text>{tool.shortDescription}</Text>
                    </Box>
                  </GridItem>
                </SimpleGrid>

                <SimpleGrid my={8} columns={4}>
                  <GridItem colSpan={1} color="blue.900">
                    <MdDescription fontSize="3rem" />
                  </GridItem>
                  <GridItem colSpan={3}>
                    <Box>
                      <Heading
                        color="blue.900"
                        as="h2"
                        // textStyle="h2"
                        textAlign="left"
                        fontWeight="normal"
                      >
                        Description
                      </Heading>
                      <Text>{tool.longDescription}</Text>
                    </Box>
                  </GridItem>
                </SimpleGrid>

                <SimpleGrid my={8} columns={4}>
                  <GridItem colSpan={1} color="blue.900">
                    <FiUsers fontSize="3rem" />
                  </GridItem>
                  <GridItem colSpan={3}>
                    <Box>
                      <Heading
                        as="h2"
                        // textStyle="h2"
                        textAlign="left"
                        fontWeight="normal"
                        color="blue.900"
                      >
                        Authors
                      </Heading>
                      {tool.authors.length == 0 ? (
                        <Text>No Authors</Text>
                      ) : (
                        tool.authors.map((author) => (
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
                        ))
                      )}
                    </Box>
                  </GridItem>
                </SimpleGrid>

                <Center>
                  <Stack direction={{ base: 'column', md: 'row' }} spacing={3}>
                    <Button
                      colorScheme="green"
                      rounded="0"
                      variant="outline"
                      leftIcon={<FaWpexplorer />}
                      transition="all 0.6s"
                      _hover={{
                        color: 'white',
                        background: 'green.600',
                        transform: 'scale(1.1)',
                      }}
                      onClick={() => alert('Link to tool')}
                    >
                      Browse Tool
                    </Button>

                    <Button
                      colorScheme="blue"
                      rounded="0"
                      variant="solid"
                      color="white"
                      rightIcon={<BiCodeCurly fontSize={'1.2rem'} />}
                      transition="all 0.6s"
                      _hover={{
                        color: 'blue.600',
                        background: 'white',
                        transform: 'scale(1.1)',
                        borderColor: 'blue.600',
                        borderWidth: 'thin',
                        borderStyle: 'solid',
                      }}
                      onClick={() => alert('Link to repository')}
                    >
                      Source Code
                    </Button>
                  </Stack>
                </Center>
              </GridItem>
              {/* Tool info */}

              {/* More Info */}
              <GridItem shadow="2xl" p={6}>
                <Heading as="h2" mb={3} layerStyle="h2">
                  More Information
                </Heading>
                {Object.keys(tool)
                  // write logic to get all props from interface
                  .filter(
                    (prop) =>
                      ![
                        'name',
                        'title',
                        'shortDescription',
                        'longDescription',
                        'authors',
                      ].includes(prop)
                  )
                  .map((prop) => (
                    <HStack key={prop} mb={4}>
                      <Flex
                        as={Tag}
                        align="center"
                        justify="space-around"
                        w="100%"
                        colorScheme="white"
                        shadow="lg"
                        p={4}
                        border="thin solid #ebebeb"
                      >
                        <Text fontWeight="semibold">{prop}</Text>
                        <Text>
                          {tool[prop as keyof ITool]
                            ? tool[prop as keyof ITool]
                            : 'Not Specified'}
                        </Text>
                      </Flex>
                    </HStack>
                  ))}
              </GridItem>
              {/* More Info */}
            </SimpleGrid>
            <Center mt={6} shadow="xl">
              <Button
                m="0 auto"
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
                  router.push(
                    `/tools/edit/${tool.name}?redirect=/tools/preview/${tool.name}`
                  )
                }
              >
                Edit This Tool
              </Button>
            </Center>
          </Flex>
        )}
      </Layout>
    )
  );
};

export default Tool;
