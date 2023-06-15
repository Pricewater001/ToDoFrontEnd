/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import styles from "./TaskCard.module.css";
import {
  Box,
  Card,
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
  Input,
} from "@chakra-ui/react";
import { gql, useMutation } from "@apollo/client";
import { AuthContext } from "../../Context/AuthContext";

const Update_isDone = gql`
  mutation Mutation($id: ID!, $taskInput: TaskInput) {
    editTask(ID: $id, taskInput: $taskInput)
  }
`;

const TaskCard = ({ id, title, description, button1, button2 }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [updateIsDone] = useMutation(Update_isDone, {
    context: {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    },
  });
  const { flag  , setFlag} = useContext(AuthContext);


  const handleTaskTitleChange = (e) => {
    setTaskTitle(e.target.value);
  };

  const handleTaskDescriptionChange = (e) => {
    setTaskDescription(e.target.value);
  };

  const handleEditTask = () => {
    console.log("Task Title:", taskTitle);
    console.log("Task Description:", taskDescription);

    setTaskTitle("");
    setTaskDescription("");

    onClose();
  };

  const handleMarkAsDone = () => {
    console.log("Task ID:", id);

    const taskInput = {
      isDone: true,
    };

    updateIsDone({
      variables: {
        id: id,
        taskInput: taskInput,
      },
    })
      .then((data) => {
        console.log("Task marked as done:", data);
        setFlag(!flag)
      })
      .catch((error) => {
        console.error("Error marking task as done:", error);
      });
  };

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
              <Button
                onClick={handleMarkAsDone}
                variant="ghost"
                colorScheme="orange"
              >
                {button2}
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input
                type="text"
                value={taskTitle}
                onChange={handleTaskTitleChange}
              />
              <FormLabel>Description</FormLabel>
              <Input
                type="text"
                value={taskDescription}
                onChange={handleTaskDescriptionChange}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="orange" mr={3} onClick={handleEditTask}>
              Edit
            </Button>
            <Button variant="ghost" onClick={handleMarkAsDone}>
              Mark as Done
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TaskCard;
