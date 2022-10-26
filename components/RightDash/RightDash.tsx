import {
  Box,
  Button,
  Center,
  Flex,
  GridItem,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import { IUser } from 'interfaces/user';
import React from 'react';
import CountUp from 'react-countup';

// 3 import line types
import { Doughnut } from 'react-chartjs-2';

// 1 Import controllers and elements
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ScriptableContext,
  ArcElement,
  ChartData,
} from 'chart.js';
import { useViewport } from 'Hooks/useViewport';
import { MockTools } from 'storage/tools';
import { FaTools } from 'react-icons/fa';
import { useRouter } from 'next/router';
import DashSwiper from '../DashSwiper/DashSwiper';

interface RightDashProps {
  user: IUser;
}
const RightDash = ({ user }: RightDashProps) => {
  const { width: deviceWidth } = useViewport();
  const router = useRouter();

  // 2 register them
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );

  // ChartJS.defaults.scale.grid.display = false;

  const doughnutData = {
    labels: ['#  Complete Tools - 75%', 'Tools Missing Info - 25%'],
    datasets: [
      {
        label: 'Record Statistics',
        data: [75, 25],
        // backgroundColor: ['rgba(54, 162, 235, 0.4)', 'rgba(255, 99, 132, 0.4)'],
        // borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
        backgroundColor: ['rgb(72, 187, 120,0.4)', 'rgb(66, 153, 225,0.4)'],
        borderColor: ['rgb(72, 187, 120,1)', 'rgba(66, 153, 225, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        // deviceWidth <= 480
        //   ? 'bottom'
        //   : deviceWidth >= 1200
        //   ? 'bottom'
        //   : 'left',
        // fullWidth: true,
        // labels: { boxWidth: 10 },
      },
    },
  };
  return (
    <Flex
      align="center"
      justify="center"
      direction="column"
      gap={3}
      minW="100%"
      maxW="100%"
    >
      <SimpleGrid minW="100%" maxW="100%" spacing={5}>
        <GridItem bg="white" shadow="md" rounded="lg">
          <Heading
            fontSize="3xl"
            textStyle="h1"
            mt={1}
            p={3}
            className="animate__animated animate__fadeInDown animate__slow"
          >
            Record Overview
          </Heading>

          <Box
            pt={3}
            pb={6}
            textAlign="center"
            fontWeight="bold"
            px={{ sm: 24, lg: 0 }}
            position="relative"
          >
            {/* <Box
              sx={{
                width: '100%',
                height: '40px',
                position: 'absolute',
                top: '40%',
                left: '0%',
                'margin-top': '-20px',
                'line-height': '19px',
                'text-align': 'center',
                'z-index': '999999999999999',
              }}
            >
              100%
              <br />
              Total
            </Box> */}
            <Doughnut
              data={doughnutData}
              // @ts-ignore
              options={doughnutOptions}
              width="100%"
              height="300%"
            />
          </Box>
        </GridItem>

        <GridItem bg="white" shadow="md" rounded="lg">
          <Box p={3}>
            <Heading
              textStyle="h1"
              m={1}
              className="animate__animated animate__bounceIn animate__slow"
            >
              Misc Info
            </Heading>

            <Flex
              align="center"
              justify="space-around"
              direction="column"
              gap={3}
              p={6}
              bg="rgba(66, 153, 225, 0.3)"
              shadow="md"
              rounded="xl"
              data-aos="zoom-in"
            >
              <Text
                fontFamily="var(--chakra-fonts-roboto"
                fontWeight="bold"
                textAlign="center"
                noOfLines={2}
                h="20%"
              >
                Tools Edited With This Management Tool
              </Text>
              <Text fontSize="5xl" fontWeight="bolder" textAlign="center">
                <CountUp
                  start={0}
                  end={60}
                  duration={2}
                  enableScrollSpy={true}
                />
              </Text>
            </Flex>
          </Box>
        </GridItem>

        <GridItem bg="white" shadow="md" rounded="lg">
          <VStack py={6} p={4}>
            <Heading
              p={2}
              textStyle="h1"
              className="animate__animated animate__bounceIn animate__slow"
            >
              What's New!
            </Heading>
            {/* A new tool */}
            <Flex
              data-aos="zoom-in"
              align="center"
              justify="space-between"
              direction="column"
              // border="thin solid #e1e1e0"
              shadow="2xl"
              rounded="xl"
              bg="green.100"
              gap={3}
              pb={3}
              p={5}
              // my={6}
            >
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
                <FaTools fontSize="2rem" />
                <Heading
                  as="h3"
                  fontWeight="light"
                  fontSize="3xl"
                  textStyle="h3"
                >
                  New Tool
                </Heading>
              </HStack>

              <Box>
                <Button
                  colorScheme="green"
                  px={6}
                  // rounded=""
                  py={3}
                  transition="all 0.6s"
                  _hover={{
                    transform: 'scale(1.1)',
                  }}
                  onClick={() =>
                    router.push(`/tools/preview/new-tool?redirect=/tools`)
                  }
                >
                  Preview Tool
                </Button>
              </Box>
            </Flex>
            {/* A new tool */}
          </VStack>
        </GridItem>
      </SimpleGrid>
    </Flex>
  );
};

export default RightDash;
