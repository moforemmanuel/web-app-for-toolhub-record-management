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
} from '@chakra-ui/react';

import NextLink from 'next/link';

interface ISide {
  isOpen: boolean;
  onClose: () => void;
}
const SideNav = ({ isOpen, onClose }: ISide) => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  // const firstField = React.useRef();

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        // initialFocusRef={firstField}
        onClose={onClose}
        // size="full"
      >
        <DrawerOverlay />
        <DrawerContent bgColor="#232322" color="whiteAlpha.900">
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>

          <DrawerBody p={0}>
            <Stack spacing="0">
              {[
                {
                  label: 'Home',
                  link: '/',
                },
                {
                  label: 'About Us',
                  link: '/about-us',
                },
                {
                  label: 'Available Puppies',
                  link: '/available-puppies',
                },
                {
                  label: 'Health Guarantee',
                  link: '/health-guarantee',
                },
                {
                  label: 'Shipping Policy',
                  link: '/shipping-policy',
                },
                {
                  label: 'Testimonials',
                  link: '/testimonials',
                },
                {
                  label: 'Contact Us',
                  link: '/contact-us',
                },
              ].map((item) => (
                <Box
                  key={item.label}
                  borderBottom="thin solid #2d2c2c"
                  layerStyle="sideNavBox"
                >
                  <NextLink href={item.link} passHref>
                    <Link>{item.label}</Link>
                  </NextLink>
                </Box>
              ))}
              {/* <Box borderBottom="thin solid #2d2c2c" layerStyle="sideNavBox">
                <NextLink href="" passHref>
                  <Link>Home</Link>
                </NextLink>
              </Box>
              <Box borderBottom="thin solid #2d2c2c" layerStyle="sideNavBox">
                <NextLink href="" passHref>
                  <Link>About Us</Link>
                </NextLink>
              </Box>
              <Box borderBottom="thin solid #2d2c2c" layerStyle="sideNavBox">
                <NextLink href="" passHref>
                  <Link>Available Puppies</Link>
                </NextLink>
              </Box>
              <Box borderBottom="thin solid #2d2c2c" layerStyle="sideNavBox">
                <NextLink href="" passHref>
                  <Link>Health Guarantee</Link>
                </NextLink>
              </Box>
              <Box borderBottom="thin solid #2d2c2c" layerStyle="sideNavBox">
                <NextLink href="" passHref>
                  <Link>Shipping Policy</Link>
                </NextLink>
              </Box>
              <Box borderBottom="thin solid #2d2c2c" layerStyle="sideNavBox">
                <NextLink href="" passHref>
                  <Link>Testimonials</Link>
                </NextLink>
              </Box>
              <Box borderBottom="thin solid #2d2c2c" layerStyle="sideNavBox">
                <NextLink href="" passHref>
                  <Link>Contact Us</Link>
                </NextLink>
              </Box> */}
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px"></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideNav;
