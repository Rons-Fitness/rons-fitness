import React from 'react';
import './noItemsFound.css';

const NoAddressFound = () => {
  return (
    <div className="empty-state">
      <div className="content">
        <div className="empty-state__icon">
          <img src="/asstes/img/notFound/addressNotFound.jpg" alt="" />
        </div>
        <div className="empty-state__message">No Address found.</div>
        {/* <div className="empty-state__help">
          Add a new record by simpley clicking the button on top right side.
        </div> */}
      </div>
    </div>
  );
};

export default NoAddressFound;
