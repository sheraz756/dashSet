import  "./sidebar.css"
import {LineStyle,TrendingUp,PermIdentity,Store
    ,AttachMoney,Assessment,Mail,Feedback
    ,Report} from "@material-ui/icons"
import {useHistory} from 'react-router-dom'
import { BarChart } from "recharts"
export default function Sidebar() {
const history = useHistory()
const handlRestaurant = ()=>{
    history.push('/restaurant')
    console.log('buuton clicked')
}


const handleSupplier = ()=>{
    history.push('/supplier')
    console.log('buuton clicked')
}
const handleContract = ()=>{
    history.push('/contract')
    console.log('buuton clicked')
}
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                <li className="sidebarListItem active">
                    <LineStyle className="sidebarIcon" />
                   Home
                </li>
               
                <li className="sidebarListItem">
                    <TrendingUp className="sidebarIcon" />
                   PFA data
                </li>
                </ul>
            </div>
           < div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarList">
                
                <li className="sidebarListItem active" onClick={handlRestaurant}>
                    <PermIdentity className="sidebarIcon"  />
                   Restaurants
                </li>
                <li className="sidebarListItem active "onClick={handleSupplier}>
                    <Store className="sidebarIcon"/>
                   Suppliers
                </li>
                
                <li className="sidebarListItem">
                    <AttachMoney className="sidebarIcon"onClick={handleContract}/>
                   Contracts
                                  </li>
                                  <li className="sidebarListItem">
                    <Assessment className="sidebarIcon" />
                   Accounts
                 </li>
                 <li className="sidebarListItem">
                    <BarChart className="sidebarIcon" />
                   Report
                 </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notifications</h3>
                <ul className="sidebarList">
                <li className="sidebarListItem active">
                    <Mail className="sidebarIcon" />
                   Mail
                </li>
                
                
                </ul>
            </div>
            
        </div>
    </div>
    

    
  )
}
