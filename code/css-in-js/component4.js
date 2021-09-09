// ListWrapper.js
import React from 'react';
import ListRow from './ListRow';
import { styledComponent, cssProp } from 'our-fake-library';

const styles = {
  background: 'cyan', 
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'scroll',
  width: '100%',
};

const ParagraphComponent = styledComponent.paragraph`
  background: 'white',
  color: 'blue',
  margin-bottom: '5px',
  padding: '10px',
`;

const ListWrapper = ({ listItems }) => {
  // Show up to 10 rows before allowing overflow-y
  const shouldOverflowY = listItems.length >= 10;
  const heightValue = shouldOverflowY ? '150px' : 'auto';

  return (
    <div style={{ ...styles, height: heightValue }}>
      {shouldOverflowY && (
        <ParagraphComponent>
          Scroll down for more list items!
        </ParagraphComponent>
      )}
      {listItems.map(item => (
        <ListRow key={item.id} />
      ))}
    </div>
  );
};

export default ListWrapper;
