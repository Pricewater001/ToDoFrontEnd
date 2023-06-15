import styles from "./DoneTasksList.module.css";
import DoneCard from "./DoneCard";
import { gql, useQuery } from "@apollo/client";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";

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

function DoneTasksList() {
  const [tasks, setTasks] = useState([]);
  const { flag  , setFlag} = useContext(AuthContext);

  const { loading: queryLoading, error: queryError, data , refetch } = useQuery(GET_Tasks, {
    context: {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    },
  });

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
      const updatedTasks = tasks.filter((task) => task.isDone)
      .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
      setTasks(updatedTasks);
    } catch (error) {
      console.log("Error fetching tasks:", error);

    }
 
  };

  useEffect(() => {
    fetchTasks();
  }, [data ]); 

  useEffect(() => {
    fetchTasks();
  }, [flag ]); 

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Completed Tasks</h2>
      </div>
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <DoneCard
            key={index}
            id={task._id}
            title={task.name}
            description={task.description}
            button1="Remove"
            button2="Mark as Incomplete"
          />
        ))
      ) : (
        <h1>You dont have any complemeted Data </h1>
      )}
    </div>
  );
}

export default DoneTasksList;
