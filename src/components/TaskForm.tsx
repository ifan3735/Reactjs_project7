import React, { useState } from 'react';
import styled from 'styled-components';

interface TaskFormProps {
  onAdd: (title: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAdd }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title);
    setTitle('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter a new task"
      />
      <AddButton type="submit">Add Task</AddButton>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  margin: 20px 0;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ced4da;
  border-radius: 5px 0 0 5px;
  outline: none;

  &:focus {
    border-color: #80bdff;
  }
`;

const AddButton = styled.button`
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #218838;
  }
`;

export default TaskForm;
