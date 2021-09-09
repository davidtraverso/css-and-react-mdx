// ListWrapper.js
import React from 'react';
import ListRow from './ListRow';

const ListWrapper = ({ listItems }) => {
  return (
    <div>
      {listItems.map(item => (
        <ListRow key={item.id} />
      ))}
    </div>
  );
};

export default ListWrapper;
