import React,{useState} from 'react'
import "./topbar.css"

import {NotificationsNone, Language, Settings} from '@material-ui/icons';
import FacebookTimeNotification from '../Notification/FacebookTimeNotification';
export default function Topbar() {
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };
  return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className="topLeft">
            <span className="logo">lintaadmin</span>
            </div>
            <div className="topRight">
            <div className="topbarIconContainer" onClick={toggleNotifications}>
           <NotificationsNone />    
           {showNotifications && <FacebookTimeNotification />}
        
          <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
           <Language/>    
          <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
           <Settings/>    
          
            </div>
            <img  src="https://images.pexels.com/photos/14634926/pexels-photo-14634926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="topAvatar" />


        </div>
     </div>
     </div>
    
  );
}
