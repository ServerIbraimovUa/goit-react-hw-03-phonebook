import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  gap: 12px;

  li {
    padding: 8px 8px;
    display: flex;
    align-items: center;
    border: 2px dashed blue;

    span + span {
      margin-left: 14px;
    }
    button {
      cursor: pointer;
      margin-left: auto;
      width: 200px;
      height: 34px;
      background-color: red;
      font-size: 22px;
      border: none;
    }
  }
`;
