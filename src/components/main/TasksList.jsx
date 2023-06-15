import { useEffect, useState } from "react";
import styles from "./TasksList.module.css";
import addIcon from "../../assets/PwC_Funct_Icons_Plus_Outline_Black_RGB.png";
import TaskCard from "../main/TaskCard";
import { gql, useMutation, useQuery } from "@apollo/client";
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
      _id
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
      }
    }
  }
`;

const GET_Tasks = gql`
  query GetUserTasks {
    getUserTasks {
      _id
      name
      description
      createdAt
      isDone
    }
  }
`;

function TasksList() {
  const [toCreateTask, { loading: mutationLoading, error: mutationError }] =
    useMutation(createTask);
  const {
    loading: queryLoading,
    error: queryError,
    data,
    refetch,
  } = useQuery(GET_Tasks, {
    context: {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    },
  });

  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      await refetch();

      if (queryLoading) {
        console.log("Loading...");
      }

      if (queryError) {
        console.log("Error:", queryError);
      }

      const tasks = data?.getUserTasks || [];
      const updatedTasks = tasks
        .filter((task) => !task.isDone)
        .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
        console.log(updatedTasks);
      setTasks(updatedTasks);
    } catch (error) {
      console.log("Error fetching tasks:", error);
    }
  };

  const handleTaskTitleChange = (e) => {
    setTaskTitle(e.target.value);
  };

  const handleTaskDescriptionChange = (e) => {
    setTaskDescription(e.target.value);
  };

  const createTaskFunc = () => {
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
        console.log("New task created:", data.createTask);

        fetchTasks();
      })
      .catch((error) => {
        console.log(error);

        toast({
          title: "Error",
          description: error.message,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
  };

  const handleSubmit = () => {
    setTaskTitle("");
    setTaskDescription("");

    createTaskFunc();
    onClose();
  };

  useEffect(() => {
    fetchTasks();
  }, [data]);

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
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <TaskCard
              key={index}
              id = {task._id}
              title={task.name}
              description={task.description}
              button1="Edit"
              button2="Mark as Done"
            />
          ))
        ) : (
          <h1>There are no new tasks.</h1>
        )}
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
