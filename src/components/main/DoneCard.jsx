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
} from "@chakra-ui/react";
import { gql, useMutation } from "@apollo/client";
import { AuthContext } from "../../Context/AuthContext";

const Update_isDone = gql`
  mutation Mutation($id: ID!, $taskInput: TaskInput) {
    editTask(ID: $id, taskInput: $taskInput)
  }
`;

const DoneCard = ({ id, taskId, title, description, button1, button2 }) => {
  const [updateIsDone] = useMutation(Update_isDone, {
    context: {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    },
  });
  const { flag  , setFlag} = useContext(AuthContext);


  const handleMarkAsDone = () => {
    console.log("Task ID:", id);

    const taskInput = {
      isDone: false,
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
              <Button variant="solid" colorScheme="orange">
                {button1}
              </Button>
              <Button
                variant="ghost"
                colorScheme="orange"
                onClick={handleMarkAsDone}
              >
                Mark as Incomplete
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </Box>
    </>
  );
};

export default DoneCard;
