import React, { useState } from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import "./App.css";
import TaskList from "./TaskList";
const initialTasks = [
  { id: 0, text: "Marry wifey", done: true },
  { id: 1, text: "buy a house", done: false },
  { id: 2, text: "master guitar", done: true },
];
function Task() {
  const [value, setValue] = useState("");
  const [allTasks, setAllTasks] = useState(initialTasks);
  const addTaskHandler = () => {
    setAllTasks([
      ...allTasks,
      {
        id: new Date().getTime(),
        text: value,
        done: false,
      },
    ]);
  };
  const deleteTaskHandler = (taskId) => {
    setAllTasks(allTasks.filter((t) => t.id != taskId));
  };
  return (
    <div className="taskApp">
      <div className="addTask">
        <TextField
          defaultValue={value}
          onChange={(e) => setValue(e.target.value)}
          id="standard-basic"
          label="Add Task"
          variant="standard"
        />{" "}
        <Button
          onClick={addTaskHandler}
          sx={{
            marginLeft: "20px",
          }}
          size="small"
          variant="contained"
        >
          Add
        </Button>
      </div>
      <TaskList
        setAllTasks={setAllTasks}
        allTasks={allTasks}
        deleteTaskHandler={deleteTaskHandler}
      />
    </div>
  );
}

export default Task;
