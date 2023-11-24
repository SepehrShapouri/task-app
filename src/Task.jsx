import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
function Task({ task, deleteTaskHandler, allTasks, setAllTasks }) {
  const [isEditted, setIsEditted] = useState(false);
  return (
    <>
      {isEditted ? (
        <EditTask
          isEditted={isEditted}
          setIsEditted={setIsEditted}
          allTasks={allTasks}
          setAllTasks={setAllTasks}
          task={task}
        />
      ) : (
        <NormalTask
          setIsEditted={setIsEditted}
          task={task}
          deleteTaskHandler={deleteTaskHandler}
        />
      )}
    </>
  );
}
export default Task;
function NormalTask({ task, setIsEditted, deleteTaskHandler }) {
  return (
    <div className="task">
      <input type="checkbox" />
      <p>{task.text}</p>
      <Button
        onClick={() => setIsEditted(true)}
        sx={{
          marginLeft: "20px",
        }}
        size="small"
        variant="contained"
      >
        edit
      </Button>
      <Button
        onClick={() => deleteTaskHandler(task.id)}
        sx={{
          marginLeft: "20px",
        }}
        size="small"
        variant="outlined"
      >
        Delete
      </Button>
    </div>
  );
}
function EditTask({ task, setIsEditted, allTasks, setAllTasks }) {
  const [value, setValue] = useState(task.text);
  const saveTaskHandler = (value) => {
    setIsEditted(false);
    const index = allTasks.findIndex(
      (item) => parseInt(item.id) === parseInt(task.id)
    );
    const allTasksCopy = [...allTasks];
    const editedTask = allTasksCopy[index];
    editedTask.text = value;
    allTasksCopy[index] = editedTask;
    console.log(allTasksCopy);
  };
  return (
    <div>
      <TextField
        onChange={(e) => setValue(e.target.value)}
        defaultValue={task.text}
        size="small"
        sx={{
          width: "150px",
          marginTop: "10px",
        }}
        id="outlined-basic"
        label="edit"
        variant="outlined"
      />
      <Button
        onClick={() => saveTaskHandler(value)}
        size="small"
        variant="contained"
        sx={{
          marginLeft: "20px",
          marginTop: "15px",
        }}
      >
        Save
      </Button>
    </div>
  );
}
