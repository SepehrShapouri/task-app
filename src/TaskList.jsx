import React from "react";
import Button from "@mui/material/Button";
import Task from "./Task.jsx";
function TaskList({ allTasks, deleteTaskHandler, setAllTasks }) {
  return (
    <div className="taskList">
      {allTasks.map((t) => {
        return (
          <Task
            allTasks={allTasks}
            setAllTasks={setAllTasks}
            task={t}
            deleteTaskHandler={deleteTaskHandler}
          />
        );
      })}
    </div>
  );
}

export default TaskList;
