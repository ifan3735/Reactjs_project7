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
    <StyledCheckbox
      type="checkbox"
      checked={task.completed}
      onChange={() => onToggle(task.id)}
    />
    <TaskTitle completed={task.completed}>{task.title}</TaskTitle>
    <DeleteButton onClick={() => onDelete(task.id)}>🗑</DeleteButton>
  </TaskContainer>
);

const TaskContainer = styled.div<{ completed: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  background-color: ${({ completed }) => (completed ? '#e9f7ef' : '#fce4e4')};
  margin: 10px 0;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ completed }) => (completed ? '#d4edda' : '#f8d7da')};
  }
`;

const StyledCheckbox = styled.input`
  margin-right: 15px;
  cursor: pointer;
  width: 20px;
  height: 20px;
`;

const TaskTitle = styled.span<{ completed: boolean }>`
  flex-grow: 1;
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
  font-size: 16px;
`;

const DeleteButton = styled.button`
  background: transparent;
  border: none;
  color: #d9534f;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    color: #c9302c;
  }
`;

export default Task;
