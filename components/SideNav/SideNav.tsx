import React from 'react';
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Stack,
  Box,
  Link,
  Text,
  Flex,
} from '@chakra-ui/react';

import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { FaPhoneAlt } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { TbWorld } from 'react-icons/tb';


interface ISide {
  isOpen: boolean;
  onClose: () => void;
}
const SideNav = ({ isOpen, onClose }: ISide) => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  // const firstField = React.useRef();
  const router = useRouter();
  const { pathname } = router;
  // console.log(router);

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="left"
        // initialFocusRef={firstField}
        onClose={onClose}
        // size="full"
      >
        <DrawerOverlay />
        <DrawerContent
          // bgColor="#232322"
          color="blackAlpha.900"
          // transition="all 0.4s"
          sx={{
            'transition-property': 'all',
            'transition-duration': '0.25s',
            'transition-timing-function': 'linear',
            'transition-delay': '0s',
          }}
        >
          <DrawerCloseButton bg="primary" p={4} rounded={0} color="white" />
          <DrawerHeader
          // borderBottomWidth="1px"
          >
            {/* Menu */}
          </DrawerHeader>

          <DrawerBody px={8} py={16} h="auto" textAlign="left">
            <Stack
              id="nav-drawer"
              spacing="0"
              sx={{
                '& div': {
                  'border-bottom': 'thin solid #dcdcdc',
                },
                '& > *:last-child': {
                  'border-bottom': 'none',
                },
              }}
            >
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
                <Box
                  key={item.label}
                  // borderBottom="thin solid #dcdcdc"
                  layerStyle="sideNavBox"
                  textAlign="left"
                >
                  <NextLink href={item.link} passHref>
                    <Link
                      className={pathname.startsWith(item.link) ? 'active' : ''}
                      _active={{ color: 'primary' }}
                      textTransform="uppercase"
                    >
                      {item.label}
                    </Link>
                  </NextLink>
                </Box>
              ))}
            </Stack>

            <Flex
              align="flex-start"
              justify="center"
              gap={2}
              direction="column"
              mt={8}
              fontSize="sm"
            >
              <Flex align="center" justify="center" direction="row" gap={3}>
                <FaPhoneAlt />
                <Text>support_phone</Text>
              </Flex>
              <Flex align="center" justify="center" direction="row" gap={3}>
                <GrMail />
                <Text>support@rms.toolhub.com</Text>
              </Flex>
              <Flex align="center" justify="center" direction="row" gap={3}>
                <TbWorld />
                <Text>rms.toolhub.com</Text>
              </Flex>
            </Flex>
          </DrawerBody>

          <DrawerFooter
          // borderTopWidth="1px"
          ></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideNav;
