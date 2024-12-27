/** @jsxImportSource @emotion/react */

import { useChecklist } from "./useChecklist";
import { useState } from "react";
import { addButtonStyle, containerStyle, deleteButtonStyle, inputContainerStyle, inputStyle, listStyle, taskStyle, } from "./Checklist.styles";


export default function Checklist() {
    const { tasks, addTask, toggleTask, deleteTask } = useChecklist();
    const [newTask, setNewTask] = useState<string>("");

    const handleAddTask = () => {
        addTask(newTask);
        setNewTask("");
    };

    return (
        <div css={containerStyle}>
            <div css={inputContainerStyle}>
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Add a new task"
                    css={inputStyle}
                />
                <button onClick={handleAddTask} css={addButtonStyle}>
                    Add
                </button>
            </div>
            <ul css={listStyle}>
                {tasks.map((task) => (
                    <li key={task.id} css={taskStyle(task.completed)}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleTask(task.id)}
                        />
                        <span>{task.title}</span>
                        <button onClick={() => deleteTask(task.id)} css={deleteButtonStyle}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
