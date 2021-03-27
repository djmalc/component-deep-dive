import React from 'react';

const withClass = (WrappedComponent, styles) => {
  return props => (
    <div className={styles}>
      <WrappedComponent {...props}/>
    </div>
  );
};

export default withClass;