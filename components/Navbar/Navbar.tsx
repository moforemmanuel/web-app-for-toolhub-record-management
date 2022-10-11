import {
  Box,
  Flex,
  // Text,
  IconButton,
  // Button,
  Stack,
  // Collapse,
  // Icon,
  Link,
  // Popover,
  // PopoverTrigger,
  // PopoverContent,
  useColorModeValue,
  // useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  // ChevronDownIcon,
  // ChevronRightIcon,
  // SearchIcon,
} from '@chakra-ui/icons';

import NextLink from 'next/link';

// import { BiMailSend } from 'react-icons/bi';
import CImage from '../CImage/CImage';
import logo from '../../public/logo.png';
import React from 'react';
import SideNav from '../SideNav/SideNav';
import SearchModal from '../SearchModal/SearchModal';

export default function Navbar() {
  const { isOpen, onClose, onToggle } = useDisclosure();
  const {
    isOpen: isOpenSearchModal,
    onOpen: onOpenSearchModal,
    onClose: onCloseSearchModal,
  } = useDisclosure({ id: 'searchBtn' });

  return (
    <Box minW="100%">
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
        flexDir="row-reverse"
        justify="space-around"
      >
        <Flex
          // flex={{ base: 1, md: 'auto' }}
          // ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            rounded="md"
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'outline'}
            aria-label={'Toggle Navigation'}
          />

          {/* <IconButton
            aria-label="Search Site"
            variant="ghost"
            icon={<SearchIcon />}
          /> */}
        </Flex>
        <Flex
          flex={{ base: 1 }}
          wrap="wrap"
          // justify={{
          //   base: 'center',
          //   // md: 'start'
          //   md: 'space-between',
          // }}
          justify="space-between"
          align="center"
          mr={{ md: '5rem' }}
        >
          <Flex
            align="center"
            justify="center"
            // border="thin solid red"
            minW="120"
            minH="70"
            maxW={{ base: '150', md: '200' }}
            w={{ md: '200' }}
          >
            <CImage
              src={logo.src}
              width={logo.width}
              height={logo.height}
              layout="responsive"
              priority
              quality={50}
              alt="logo"
            />
          </Flex>
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>

          {/* <IconButton
            aria-label="Search Site"
            variant="ghost"
            icon={<SearchIcon />}
            onClick={onOpen}
          /> */}
          <SearchModal
            isOpen={isOpenSearchModal}
            onOpen={onOpenSearchModal}
            onClose={onCloseSearchModal}
          />
        </Flex>
      </Flex>

      <SideNav isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  // const linkHoverColor = useColorModeValue('gray.800', 'white');
  // const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box
          key={navItem.label}
          sx={{
            '& > .navLink:active': {
              color: 'red',
            },
          }}
        >
          {/* <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger> */}
          <NextLink href={`${navItem.href}`} passHref>
            <Link
              // textStyle="navLink"
              className="navLink"
              p={1}
              fontSize={'md'}
              fontWeight={500}
              color={linkColor}
              textTransform="uppercase"
              transition="all 0.6s"
              _hover={{
                textDecoration: 'none',
                // color: linkHoverColor,
                color: 'primary',
                // fontSize: '1.01rem',
              }}
              _active={{
                color: 'primary',
              }}
              
            >
              {navItem.label}
            </Link>
          </NextLink>
        </Box>
      ))}
    </Stack>
  );
};

interface NavItem {
  label?: string;
  href?: string;
  subLabel?: string;
  children?: Array<NavItem>;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About Us',
    href: '/about-us',
  },
  {
    label: 'Available Puppies',
    href: '/available-puppies',
  },
  {
    label: 'Health Guarantee',
    href: '/health-guarantee',
  },
  {
    label: 'Shipping Policy',
    href: '/shipping-policy',
  },
  {
    label: 'Testimonials',
    href: '/testimonials',
  },
  {
    label: 'Contact Us',
    href: '/contact-us',
  },
];

// interface NavItem {
//   label: string;
//   subLabel?: string;
//   children?: Array<NavItem>;
//   href?: string;
// }

// const NAV_ITEMS: Array<NavItem> = [
//   {
//     label: 'Inspiration',
//     children: [
//       {
//         label: 'Explore Design Work',
//         subLabel: 'Trending Design to inspire you',
//         href: '#',
//       },
//       {
//         label: 'New & Noteworthy',
//         subLabel: 'Up-and-coming Designers',
//         href: '#',
//       },
//     ],
//   },
//   {
//     label: 'Find Work',
//     children: [
//       {
//         label: 'Job Board',
//         subLabel: 'Find your dream design job',
//         href: '#',
//       },
//       {
//         label: 'Freelance Projects',
//         subLabel: 'An exclusive list for contract work',
//         href: '#',
//       },
//     ],
//   },
//   {
//     label: 'Learn Design',
//     href: '#',
//   },
//   {
//     label: 'Hire Designers',
//     href: '#',
//   },
// ];
