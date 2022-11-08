import CImage from '@/components/CImage/CImage';
import FullPageLoader from '@/components/fullPageLoader/FullPageLoader';
import Layout from '@/components/Layout/Layout';
import {
  Box,
  Flex,
  Heading,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  SimpleGrid,
  GridItem,
  Text,
  HStack,
  Avatar,
  VStack,
  Center,
} from '@chakra-ui/react';
import React from 'react';
import { MockUsers } from 'storage/users';
import leaderIcon from '../public/icons/podium.png';

const Leaderboard = () => {
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
        pageTitle="Leaderboard"
        pageLink="/leaderboard"
        description="See a ranking list of all our contributors"
      >
        <Flex
          align="center"
          justify="center"
          gap={3}
          direction="column"
          bg="gray.100"
        >
          <Box w={{ base: '100%', lg: '90%' }} p={3} py={12} m={3}>
            <Flex
              align="center"
              justify="center"
              gap={3}
              margin="0 auto"
              textAlign="center"
              data-aos="fade-down"
              px={3}
              className="animate__animated animate__fadeInDown"
            >
              <Box w="50" h="50" p={0}>
                <CImage
                  src={leaderIcon.src}
                  width={50}
                  height={50}
                  alt="leaderboard icon"
                  layout="responsive"
                  quality={50}
                  priority
                />
              </Box>
              <Heading
                as="h1"
                textStyle="h1"
                fontSize={{ base: '4xl', md: '5xl' }}
              >
                Contributors Leaderboard
              </Heading>
            </Flex>

            <Flex
              align="center"
              justify="center"
              gap={3}
              direction="column"
              w={{ md: '80%' }}
              m="0 auto"
              py={3}
              my={3}
              shadow="2xl"
              rounded="md"
              p={[6, 8, 12]}
              bg="white"
              data-aos="zoom-in"
            >
              <TableContainer w="100%">
                <Table variant="striped" colorScheme="gray">
                  <TableCaption>
                    We so much appreciate all our Contributors
                  </TableCaption>
                  <Thead>
                    <Tr>
                      <Th width="20%" textAlign="center">
                        Rank
                      </Th>
                      <Th width="50%" textAlign="center">
                        Users
                      </Th>
                      <Th width="30%" textAlign="center">
                        Contributions
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {MockUsers &&
                      MockUsers.sort(
                        // desc order sort
                        // @ts-ignore
                        (a, b) => b.contributions_count - a.contributions_count
                      ).map((user, index) => (
                        <React.Fragment key={user.username}>
                          <Tr
                            transition="all 0.5s"
                            _hover={{ transform: 'scale(1.05)', shadow: 'lg' }}
                          >
                            <Td width="20%" textAlign="center">
                              {index + 1}
                            </Td>
                            <Td width="50%">
                              <Box>
                                <HStack>
                                  <Avatar
                                    name={`${user.firstName} ${user.lastName}`}
                                    src={user.profile_picture || ''}
                                  />
                                  <VStack>
                                    <Text>
                                      {user.firstName} {user.lastName}
                                    </Text>
                                    <Text color="rgba(0,0,0,0.5)">
                                      @{user.username}
                                    </Text>
                                  </VStack>
                                </HStack>
                              </Box>
                            </Td>
                            <Td width="30%" textAlign="center">
                              {user.contributions_count}
                            </Td>
                          </Tr>
                        </React.Fragment>
                      ))}
                  </Tbody>
                </Table>
              </TableContainer>

              {/* <SimpleGrid columns={10} spacing={3} w="100%">
                <React.Fragment>
                  <GridItem textStyle="leaderboardHeader" colSpan={1}>
                    <Text>Rank</Text>
                  </GridItem>
                  <GridItem textStyle="leaderboardHeader" colSpan={7}>
                    <Text>User</Text>
                  </GridItem>
                  <GridItem textStyle="leaderboardHeader" colSpan={2}>
                    <Text>Contributions</Text>
                  </GridItem>
                  <GridItem
                    colSpan={10}
                    height="1px"
                    borderBottom="thin solid rgba(0,0,0,0.3)"
                    w="100%"
                  ></GridItem>
                </React.Fragment>
                {MockUsers &&
                  MockUsers.map((user, index) => (
                    <React.Fragment key={user.username}>
                      <GridItem colSpan={1}>
                        <Text>{index + 1}</Text>
                      </GridItem>
                      <GridItem colSpan={7}>
                        <Box>
                          <HStack></HStack>
                        </Box>
                      </GridItem>
                      <GridItem colSpan={2}>
                        <Text>{user.contributions_count}</Text>
                      </GridItem>
                      <GridItem
                        colSpan={10}
                        height="1px"
                        borderBottom="thin solid rgba(0,0,0,0.3)"
                        w="100%"
                      ></GridItem>
                    </React.Fragment>
                  ))}
              </SimpleGrid> */}
            </Flex>
          </Box>
        </Flex>
      </Layout>
    )
  );
};

export default Leaderboard;
