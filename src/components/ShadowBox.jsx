import { Box } from '@chakra-ui/react';

const ShadowBox = ({children}) => {
  return (
    <Box
    width="100%"
    display="flex"
    justifyContent="left"
    alignItems="center"
    p={1}
  > 
    <Box textAlign="left">
      {children}
    </Box>
  </Box>
  );
};

export default ShadowBox;
