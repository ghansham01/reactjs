import React from 'react';

const Loader = ({ isLoading }) => {
  return (
    <div className="loader" style={{ display: isLoading ? 'block' : 'none' }}>
      <div className="d-table">
        <div className="d-table-cell">
          <div className="pre-box-one">
            <div className="pre-box-two"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader; 