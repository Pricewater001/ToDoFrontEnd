import { useState } from "react";
import styles from "./TasksList.module.css";
import addIcon from "../../assets/PwC_Funct_Icons_Plus_Outline_Black_RGB.png";
import TaskCard from "../main/TaskCard";
import { gql, useMutation } from "@apollo/client";
import {
  Button,
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
  useToast,
} from "@chakra-ui/react";

const createTask = gql`
  mutation Register($taskInput: TaskInput) {
    createTask(taskInput: $taskInput) {
      name
      description
      createdAt
      isDone
      createdBy {
        id
        username
        email
        createdAt
        updatedAt
        token
      }
    }
  }
`;

function TasksList() {
  const [toCreateTask, { loading, error }] = useMutation(createTask);
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const handleTaskTitleChange = (e) => {
    setTaskTitle(e.target.value);
  };

  const handleTaskDescriptionChange = (e) => {
    setTaskDescription(e.target.value);
  };

  const handleSubmit = () => {

    setTaskTitle("");
    setTaskDescription("");

    const token = localStorage.getItem("token");
    
    toCreateTask({
      variables: {
        taskInput: {
          description: taskDescription,
          isDone: true,
          name: taskTitle,
        },
      },
      context: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    })
      .then(({ data }) => {
        console.log(data);
      })
      .catch((error) => {
        toast({
          title: "Error",
          description: error.message,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        return;
      });

    onClose();
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>My To-Do List</h2>
          <button onClick={onOpen}>
            <span title="Add New Task">
              <img src={addIcon} alt="" />
            </span>
          </button>
        </div>
        <TaskCard
          title="Task 1"
          description="Create React App"
          button1="Edit"
          button2="Mark as Done"
        />
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Task Title</FormLabel>
              <Input
                type="text"
                value={taskTitle}
                onChange={handleTaskTitleChange}
              />
              <FormLabel>Task Description</FormLabel>
              <Input
                type="text"
                value={taskDescription}
                onChange={handleTaskDescriptionChange}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="orange" mr={3} onClick={handleSubmit}>
              Add
            </Button>
            <Button onClick={onClose} variant="ghost">
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default TasksList;
