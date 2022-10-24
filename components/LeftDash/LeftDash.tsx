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
import React from 'react';
import NextLink from 'next/link';
import { MdOutlineDashboard } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { FaToolbox } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi';
import { Menu, MenuItem, Sidebar, useProSidebar } from 'react-pro-sidebar';
import { IUser } from 'interfaces/user';

interface LeftDashProps {
  user: IUser;
}
const LeftDash = ({ user }: LeftDashProps) => {
  const { collapseSidebar } = useProSidebar();

  return (
    <Center>
      <Flex border="thin solid blue" minH="82vh">
        <Sidebar>
          <Flex
            align="center"
            justify="space-around"
            direction="column"
            minH="100%"
            maxH="100%"
            // gap={6}
          >
            <Avatar
              name={`${user?.firstName} ${user?.lastName}`}
              src={user.profile_picture}
              size="2xl"
            />

            <Center minW="100%" maxW="100%">
              <Menu>
                <Flex
                  align="center"
                  justify="center"
                  direction="column"
                  minW="100%"
                  maxW="100%"
                >
                  <MenuItem>
                    <HStack minW="100%" maxW="100%">
                      <MdOutlineDashboard fontSize="1.5rem" />
                      <NextLink href="/dashboard" passHref>
                        <Link textStyle="dashLink">Dashboard</Link>
                      </NextLink>
                    </HStack>
                  </MenuItem>
                  <MenuItem>
                    <HStack>
                      <CgProfile fontSize="1.5rem" />
                      <NextLink href="/user/profile" passHref>
                        <Link textStyle="dashLink">Profile</Link>
                      </NextLink>
                    </HStack>
                  </MenuItem>
                  <MenuItem>
                    <HStack>
                      <FaToolbox fontSize="1.5rem" />
                      <NextLink href="/https://toolhub.wikimedia.org/" passHref>
                        <Link textStyle="dashLink">Toolhub</Link>
                      </NextLink>
                    </HStack>
                  </MenuItem>
                </Flex>
              </Menu>
            </Center>

            <Center minW="100%" maxW="100%">
              <HStack>
                <BiLogOut fontSize="1.5rem" />
                <NextLink href="/users/logout" passHref>
                  <Link textStyle="dashLink">Logout</Link>
                </NextLink>
              </HStack>
            </Center>
          </Flex>
        </Sidebar>
      </Flex>
    </Center>
  );
};

export default LeftDash;
