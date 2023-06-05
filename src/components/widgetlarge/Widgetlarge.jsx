import React from 'react'
import "./widgetlarge.css"

export default function Widgetlarge() {
  
    const Button = ({ type }) => {
      return <button className={"widgetLargeButton " + type}>{type}</button>;
    };
  return (
    <div className="Widgetlarge">
      <h3 className="Widgetlargetitle">Active Members</h3>
        <table className="Widgetlargetable">
        <tr className="Widgetlargetr">
          <th className="Widgetlargeth">Name</th>
          <th className="Widgetlargeth">ID</th>
          <th className="Widgetlargeth">category</th>
          <th className="Widgetlargeth">status</th>
          
          
        </tr>

        <tr className="widgetLargeTr">
          <td className="WidgetLargeUser">
    
        <img src="https://images.pexels.com/photos/3030325/pexels-photo-3030325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="WidgetLargeimage" />
           
        <span className="widgetLargeName">Rana Mohib</span>
          </td>
         
          <td className="widgetLargeUniqueID">1684</td>
          <td className="widgetLargeUsertype">Supplier
          
</td>
          <td className="widgetLargegStatus">
            <Button type="Online" />
          </td>
        </tr>
        <tr className="widgetLargeTr">
          <td className="WidgetLargeUser">
    
        <img src="https://images.pexels.com/photos/3638719/pexels-photo-3638719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="WidgetLargeimage" />
           
        <span className="widgetLargeName">Muhammad Ali</span>
          </td>
         
          <td className="widgetLargeUniqueID">1784</td>
          <td className="widgetLargeUsertype">Restaurant
          
</td>
          <td className="widgetLargegStatus">
            <Button type="Online" />
          </td>
        </tr>
        <tr className="widgetLargeTr">
          <td className="WidgetLargeUser">
    
        <img src="https://images.pexels.com/photos/3919865/pexels-photo-3919865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="WidgetLargeimage" />
           
        <span className="widgetLargeName">Osama Kashif</span>
          </td>
         
          <td className="widgetLargeUniqueID">1227</td>
          <td className="widgetLargeUsertype">Restaurant
          
</td>
          <td className="widgetLargegStatus">
            <Button type="Online" />
          </td>
        </tr>
        <tr className="widgetLargeTr">
          <td className="WidgetLargeUser">
    
        <img src="https://images.pexels.com/photos/5917584/pexels-photo-5917584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="WidgetLargeimage" />
           
        <span className="widgetLargeName">Linta Bushra</span>
          </td>
         
          <td className="widgetLargeUniqueID">3216</td>
          <td className="widgetLargeUsertype">Restaurant
          
</td>
          <td className="widgetLargegStatus">
            <Button type="Online" />
          </td>
        </tr>

        <tr className="widgetLargeTr">
          <td className="WidgetLargeUser">
    
        <img src="https://images.pexels.com/photos/7366286/pexels-photo-7366286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="WidgetLargeimage" />
           
        <span className="widgetLargeName">Saad khan</span>
          </td>
         
          <td className="widgetLargeUniqueID">6666</td>
          <td className="widgetLargeUsertype">Restaurant
          
</td>
          <td className="widgetLargegStatus">
            <Button type="Online" />
          </td>
        </tr>
       
        
      </table>
    </div>
  );
}






         