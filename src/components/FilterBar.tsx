import React from 'react';
import styled from 'styled-components';

interface FilterBarProps {
  filter: string;
  setFilter: (filter: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ filter, setFilter }) => (
  <FilterContainer>
    <FilterButton onClick={() => setFilter('all')} active={filter === 'all'}>
      All
    </FilterButton>
    <FilterButton onClick={() => setFilter('completed')} active={filter === 'completed'}>
      Completed
    </FilterButton>
    <FilterButton onClick={() => setFilter('pending')} active={filter === 'pending'}>
        </FilterButton>
      Pending
    </FilterContainer>
);

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const FilterButton = styled.button<{ active: boolean }>`
  padding: 10px 20px;
  margin: 0 5px;
  cursor: pointer;
  background: ${({ active }) => (active ? '#007bff' : '#f8f9fa')};
  color: ${({ active }) => (active ? 'white' : '#333')};
  border: 1px solid #ccc;
  transition: background-color 0.3s ease;

  &:hover {
    background: ${({ active }) => (active ? '#0056b3' : '#e2e6ea')};
  }
`;

export default FilterBar;
