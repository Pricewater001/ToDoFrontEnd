import styles from "./TasksList.module.css";
import addIcon from "../../assets/PwC_Funct_Icons_Plus_Outline_Black_RGB.png";
import TaskCard from "../main/TaskCard";
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
  // FormErrorMessage,
  Input,
  // FormHelperText,
} from "@chakra-ui/react";

function TasksList() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>My To-Do List</h2>
          <button onClick={onOpen}>
            <span title="Add New Task">
              <img  src={addIcon} alt="" />
            </span>
          </button>
        </div>
        <TaskCard title="Task 1" description="Create React App" button1='Edit' button2='Mark as Done'/>
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Task</ModalHeader>
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
            <Button onClick={onClose} variant="ghost">Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default TasksList;
