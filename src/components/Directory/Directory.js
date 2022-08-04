import React from 'react';
import styled from 'styled-components';
import CategoryItem from '../DirectoryItem/DirectoryItem';

const DirectoryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Directory = ({ categories }) => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category}></CategoryItem>
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
