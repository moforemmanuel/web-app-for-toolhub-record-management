import { Circle, Flex, keyframes, Spinner } from '@chakra-ui/react';
import React from 'react';
import { FaTools } from 'react-icons/fa';
import Layout from '../Layout/Layout';

export default function FullPageLoader() {
  const spinBall = keyframes`
  100% {
      transform: rotate(360deg);
  }`;
  return (
    <Layout>
      <Flex align="center" justify="center" minH="70vh">
        {/* <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.600"
          size="xl"
        /> */}
        <Circle
          padding={6}
          // bgGradient="linear(white, red.200, blue.400)"
          animation={`${spinBall} 1s linear infinite`}
          boxShadow={`inset 0 0 18px #fff, 
                inset 6px 0 18px violet, 
                inset -6px 0 18px #0ff, 
                inset 6px 0 30px violet, 
                inset -6px 0 30px #0ff, 
                0 0 18px #fff, -4px 
                0 18px violet, 4px 0 18px #0ff`}
        >
          <FaTools color="white" fontSize="1.5rem" />
        </Circle>
      </Flex>
    </Layout>
  );
}
