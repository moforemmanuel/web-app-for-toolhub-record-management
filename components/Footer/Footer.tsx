import {
  Box,
  Flex,
  GridItem,
  Heading,
  IconButton,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import NextLink from 'next/link';
import { ChevronUpIcon, LinkIcon } from '@chakra-ui/icons';

const Footer = () => {
  return (
    <Box
      w="100%"
      // border="thin solid red"
      // p="1rem"
      // shadow="md"
      // border="thin solid blackAlpha.80"
    >
      {/* <Box
        p={{ base: '1.5rem', md: '2rem' }}
        bg="#212021"
        color="whiteAlpha.700"
        textAlign={{ base: 'center', md: 'left' }}
      >
        <SimpleGrid columns={[1, 2, 4]} spacing="2rem">
          <GridItem>
            <VStack spacing={5}>
              <Heading
                textAlign="center"
                fontSize={{ base: '1.5rem', md: '1.8rem' }}
                as="h2"
                textStyle="h2"
                textDecoration="uppercase"
                color="whiteAlpha.900"
              >
                WHAT WE DO BEST
              </Heading>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                eum aspernatur sint ducimus consequuntur! Cum dolores quas
                possimus repellat. Expedita quis amet distinctio doloremque
                officia eaque et, a totam alias?
              </Text>
            </VStack>
          </GridItem>

          <GridItem>
            <Flex align="center" justify="center" direction="column">
              <Heading
                textAlign="center"
                fontSize={{ base: '1.5rem', md: '1.8rem' }}
                as="h2"
                textStyle="h2"
                textDecoration="uppercase"
                color="whiteAlpha.900"
              >
                Quick Links
              </Heading>
              <Box mt={3} ml="15%" textAlign="justify">
                <List spacing={1}>
                  {[
                    {
                      label: 'Home',
                      link: '/',
                    },
                    {
                      label: 'Leaderboard',
                      link: '/leaderboard',
                    },
                    {
                      label: 'Dashboard',
                      link: '/dashboard',
                    },
                  ].map((item) => (
                    <ListItem key={item.label}>
                      <NextLink href={`${item.link}`} passHref>
                        <Link
                          color={item.label == 'Home' ? 'primary' : ''}
                          textDecoration="capitalize"
                          _hover={{
                            transform: 'scale(1.1)',
                            color: 'primary',
                            '& > .footer-link-icon': {
                              color: 'white',
                            },
                          }}
                        >
                          <LinkIcon
                            className="footer-link-icon"
                            mr={2}
                            color="primary"
                          />
                          {item.label}
                        </Link>
                      </NextLink>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Flex>
          </GridItem>

          <GridItem></GridItem>

          <GridItem>
            <VStack>
              <Heading
                textAlign="center"
                fontSize={{ base: '1.5rem', md: '1.8rem' }}
                as="h2"
                textStyle="h2"
                textDecoration="uppercase"
                color="whiteAlpha.900"
              >
                WE ARE THE BEST
              </Heading>
              <Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Commodi, sit asperiores quibusdam voluptatum alias consequatur
                voluptates voluptatem laborum dolores magni nisi numquam officia
                dolorum labore eius, nobis laudantium. Quos, voluptas!
              </Text>
            </VStack>
          </GridItem>
        </SimpleGrid>
      </Box> */}
      <Flex
        align="center"
        justify="space-between"
        minW="100%"
        color="whiteAlpha.900"
        m={0}
        bg="#2E2F2F"
        p="1rem 2rem"
        w="100%"
      >
        <Text textTransform="uppercase" fontSize="2xl">
          Toolhub Record Manager
        </Text>
        <Text>2022 © ALL RIGHTS RESERVED </Text>
        <IconButton
          aria-label="back to top"
          size="lg"
          rounded="full"
          icon={<ChevronUpIcon fontSize="4xl" />}
          bg="primary"
          color="white"
          transition="all 1s"
          onClick={() => {
            // alert('yo');
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });
          }}
        />
      </Flex>
    </Box>
  );
};

export default Footer;
