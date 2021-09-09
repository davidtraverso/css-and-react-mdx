// ListWrapper.css
.wrapper {
  background: cyan;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  width: 100%;
}

.paragraph {
  background: white;
  color: blue;
  margin-bottom: 5px;
  padding: 10px;
}

// ListWrapper.js
import React from 'react';
import ListRow from './ListRow';
import style from './ListWrapper.css';

const ListWrapper = ({ listItems }) => {
  // Show up to 10 rows before allowing overflow-y
  const shouldOverflowY = listItems.length >= 10;
  const heightValue = shouldOverflowY ? '150px' : 'auto';

  return (
    <div className={style.wrapper} style={{ height: heightValue }}>
      {shouldOverflowY && (
        <p className={style.paragraph}>
          Scroll down for more list items!
        </p>
      )}
      {listItems.map(item => (
        <ListRow key={item.id} />
      ))}
    </div>
  );
};

export default ListWrapper;
