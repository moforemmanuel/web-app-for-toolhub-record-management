import FullPageLoader from '@/components/fullPageLoader/FullPageLoader';
import Layout from '@/components/Layout/Layout';
import LeftDash from '@/components/LeftDash/LeftDash';
import MiddleDash from '@/components/MiddleDash/MiddleDash';
import RightDash from '@/components/RightDash/RightDash';
import {
  Avatar,
  Box,
  Center,
  Flex,
  Link,
  GridItem,
  Heading,
  HStack,
  SimpleGrid,
} from '@chakra-ui/react';
import { useViewport } from 'Hooks/useViewport';
import { useRouter } from 'next/router';
import React from 'react';
import { Menu, MenuItem, Sidebar, useProSidebar } from 'react-pro-sidebar';
import { MockUsers } from 'storage/users';

const Dashboard = () => {
  const router = useRouter();
  const [isMounted, setIsMounted] = React.useState(false);
  const { width: deviceWidth } = useViewport();

  const { collapseSidebar } = useProSidebar();

  const user = MockUsers.find((user) => user.username === 'moforemmanuel');

  React.useEffect(() => {
    setIsMounted(true);
    console.log(deviceWidth);

    // reload on resize to fix responsive layout issues, expect for smaller mobiles
    if (deviceWidth && deviceWidth >= 300) {
      window.addEventListener('resize', () => {
        window.location.reload();
      });
    }
  }, [deviceWidth]);

  if (!isMounted) {
    return <FullPageLoader />;
  }
  return (
    isMounted && (
      <Layout
        pageTitle="Dashboard"
        pageLink="/dashboard"
        description="Toolhub Record Management System Dashboard"
      >
        <Center minH="82vh" minW="100%" maxH="100%" maxW="100%" bg="gray.100">
          {!user ? (
            <Heading>No User Found</Heading>
          ) : (
            <Flex
              align="flex-start"
              justify="flex-start"
              direction="row"
              gap={6}
              maxW="100%"
              minW="100%"
              p={3}
            >
              {/* Sidebar menu */}

              {/* <LeftDash user={user} /> */}

              {/* Sidebar menu */}

              <SimpleGrid maxW="100%" minW="100%" columns={5} m={0} spacing={3}>
                <GridItem
                  colSpan={{ base: 5, lg: 4 }}
                  // border="thin solid red"
                  // bg="white"
                >
                  {/* Sidebar menu */}

                  <MiddleDash user={user} />

                  {/* Sidebar menu */}
                </GridItem>

                <GridItem
                  colSpan={{ base: 5, lg: 1 }}
                  // border="thin solid green"
                  bg="rgb(241,240,241)"
                  shadow="md"
                  rounded="lg"
                >
                  {/* Sidebar menu */}

                  <RightDash user={user} />

                  {/* Sidebar menu */}
                </GridItem>
              </SimpleGrid>
            </Flex>
          )}
        </Center>
      </Layout>
    )
  );
};

export default Dashboard;
