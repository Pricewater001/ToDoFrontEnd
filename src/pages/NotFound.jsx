import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

function NotFound() {
  React.useEffect(() => {
    const redirectTimer = setTimeout(() => {
      window.location.href = '/';
    }, 3000);

    return () => clearTimeout(redirectTimer);
  }, []);

  return (
    <Box textAlign="center" mt={10}>
      <Heading as="h1" size="xl" mb={4}>
        404 Not Found
      </Heading>
      <Text fontSize="lg" mb={4}>
        Oops! The page you're looking for does not exist.
      </Text>
      <Text fontSize="lg">Redirecting to the home page...</Text>
    </Box>
  );
}

export default NotFound;
