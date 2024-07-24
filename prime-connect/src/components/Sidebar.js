import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <a className='title' href='/'>Prime Connect</a>
        
      </div>
      <ul className="menu">
        <li><a className='dashboard' href='/'>Dashboard</a></li>
        <li><a className='products' href='#'>Products</a></li>
        <li><a className='notificationn' href='#'>Notification</a></li>
        <li><a className='verifyId' href='#'>Verify ID</a></li>
        <li><a className='profile' href='#'>Profile</a></li>
        <li><a className='setting' href='#'>Setting</a></li>
      </ul>
      <div className="logOut">
        <button className="btnLogout">Log out</button>
      </div>
      <div className="profile">
        <button className="btnProfile">Name Name<br /> +251-967-028-751</button>
      </div>
    </div>
  );
}

export default Sidebar;
