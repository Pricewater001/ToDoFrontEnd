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
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  // FormErrorMessage,
  Input,
  // FormHelperText,
} from "@chakra-ui/react";

const TaskCard = ({ title, description, button1, button2 }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
              <Button onClick={onOpen} variant="solid" colorScheme="orange">
                {button1}
              </Button>
              <Button variant="ghost" colorScheme="orange">
                {button2}
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Task 1</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Task Title</FormLabel>
              <Input type="text" />
              <FormLabel>Task Description</FormLabel>
              <Input type="text" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="orange" mr={3} type="submit">
              Edit
            </Button>
            <Button variant="ghost">Mark as Done</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TaskCard;
