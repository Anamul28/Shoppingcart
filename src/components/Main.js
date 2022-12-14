import React from 'react';
import Item from './Item';

export default function Main(props) {
  const { item, onAdd } = props;
  return (
    <main className="block col-2">
      <h2>Items</h2>
      <div className="row">
        {item.map((item) => (
          <Item key={item.id} product={item} onAdd={onAdd}></Item>
        ))}
      </div>
    </main>
  );
}