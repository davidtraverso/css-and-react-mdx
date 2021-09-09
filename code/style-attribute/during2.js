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
  // Show up to 10 rows before allowing overflow-y
  const shouldOverflowY = listItems.length >= 10;
  const heightValue = shouldOverflowY ? '150px' : 'auto';

  return (
    <div style={styles}>
      {listItems.map(item => (
        <ListRow key={item.id} />
      ))}
    </div>
  );
};

export default ListWrapper;
