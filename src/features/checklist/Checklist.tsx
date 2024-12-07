/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";

interface Task {
    id: number;
    title: string;
    completed: boolean;
}

export default function Checklist() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState<string>("");

    const addTask = () => {
        if (!newTask.trim()) return;
        setTasks((prev) => [
            ...prev,
            { id: Date.now(), title: newTask, completed: false },
        ]);
        setNewTask("");
    };

    const toggleTask = (id: number) => {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const deleteTask = (id: number) => {
        setTasks((prev) => prev.filter((task) => task.id !== id));
    };

    return (
        <div css={containerStyle}>
            <h1>My Checklist</h1>
            <div css={inputContainerStyle}>
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Add a new task"
                    css={inputStyle}
                />
                <button onClick={addTask} css={addButtonStyle}>
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

const containerStyle = css`
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const inputContainerStyle = css`
  display: flex;
  gap: 0.5rem;
`;

const inputStyle = css`
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

const addButtonStyle = css`
  padding: 0.5rem 1rem;
  background-color: #0077cc;
  color: white;
  font-size: 1rem;
  border-radius: 4px;
  &:hover {
    background-color: #005fa3;
  }
`;

const listStyle = css`
  margin-top: 1rem;
  list-style: none;
`;

const taskStyle = (completed: boolean) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  background: ${completed ? "#e6ffe6" : "#f9f9f9"};
  border-bottom: 1px solid #ddd;
  span {
    text-decoration: ${completed ? "line-through" : "none"};
  }
`;

const deleteButtonStyle = css`
  padding: 0.25rem 0.5rem;
  background-color: #ff6f61;
  color: white;
  font-size: 0.9rem;
  border-radius: 4px;
  &:hover {
    background-color: #d9534f;
  }
`;
