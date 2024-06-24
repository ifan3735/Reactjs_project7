import React from 'react';
import styled from 'styled-components';
import Task from './Task';
import { Task as TaskType } from '../types';

interface TaskListProps {
  tasks: TaskType[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggle, onDelete }) => (
  <List>
    {tasks.map((task) => (
      <Task key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
    ))}
  </List>
);

const List = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
`;

export default TaskList;
