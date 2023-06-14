/* eslint-disable react/prop-types */
import styles from "./TaskCard.module.css";
import {
  Box,
  Card,
  // CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Divider,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";

const DoneCard = ({ title, description, button1, button2 }) => {
  return (
    <>
      <Box className={styles.container}>
        <Card size="sm" maxW="450px">
          <CardBody>
            <Stack mt="6" spacing="3">
              <Heading size="md">{title}</Heading>
              <Text>{description}</Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="orange">
                {button1}
              </Button>
              <Button variant="ghost" colorScheme="orange">
                {button2}
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </Box>
    </>
  );
};

export default DoneCard;
