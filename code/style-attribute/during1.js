// ListWrapper.js
import React from 'react';
import ListRow from './ListRow';

const styles = {
  background: 'cyan', 
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'scroll',
  width: '100%',
};

const ListWrapper = ({ listItems }) => {
  return (
    <div style={styles}>
      {listItems.map(item => (
        <ListRow key={item.id} />
      ))}
    </div>
  );
};

export default ListWrapper;
