import React from 'react';
import styled from 'styled-components';
import { Task as TaskType } from '../types';

interface TaskProps {
  task: TaskType;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const Task: React.FC<TaskProps> = ({ task, onToggle, onDelete }) => (
  <TaskContainer completed={task.completed}>
    <input
      type="checkbox"
      checked={task.completed}
      onChange={() => onToggle(task.id)}
    />
    <span>{task.title}</span>
    <button onClick={() => onDelete(task.id)}>Delete</button>
  </TaskContainer>
);

const TaskContainer = styled.div<{ completed: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: ${({ completed }) => (completed ? '#d4edda' : '#f8d7da')};
  margin: 5px 0;
  border-radius: 4px;
  input {
    margin-right: 10px;
  }
  button {
    background: #f54242;
    color: white;
    border: none;
    padding: 5px;
    cursor: pointer;
  }
`;

export default Task;
