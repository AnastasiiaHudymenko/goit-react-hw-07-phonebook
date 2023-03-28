import React from 'react';
import { useSelector } from 'react-redux';
import { Item, List, BtnDelete } from './ContactList.styled';

export const ContactList = () => {
  const { items } = useSelector(state => state.contacts);
  console.log(items);

  return (
    <List>
      {items.map(({ id, name, phone }) => (
        <Item key={id}>
          <div>
            <p>{name}</p>
            <p>{phone}</p>
          </div>
          <BtnDelete>Delete</BtnDelete>
        </Item>
      ))}
    </List>
  );
};
