import React from 'react';
import styled from 'styled-components';

interface FilterBarProps {
  filter: string;
  setFilter: (filter: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ filter, setFilter }) => (
  <FilterContainer>
    <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>
      All
    </button>
    <button onClick={() => setFilter('completed')} className={filter === 'completed' ? 'active' : ''}>
      Completed
    </button>
    <button onClick={() => setFilter('pending')} className={filter === 'pending' ? 'active' : ''}>
      Pending
    </button>
  </FilterContainer>
);

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  button {
    padding: 10px 20px;
    margin: 0 5px;
    cursor: pointer;
    background: #f8f9fa;
    border: 1px solid #ccc;
    &.active {
      background: #007bff;
      color: white;
      border-color: #007bff;
    }
  }
`;

export default FilterBar;
