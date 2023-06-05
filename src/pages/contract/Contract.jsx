import { contractData } from "../../dummydata";
import Chart from "../../components/charts/Chart";
import { useHistory } from 'react-router-dom';
import "./contract.css";

function Contract() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/totalc");
    history.push("/activec");
    history.push("/inactivec");
    
    


  };

  

  return (
    <div className="container2">
      <div className="container11">
        <div className="featureditem11" onClick={handleClick}>
          <div className="featuredTitle1">Total contracts</div>
          <span className="featuredMoney">40 </span>
        </div>

        <div className="featureditem22" onClick={handleClick}>
          <div className="featuredTitle1">Active contracts</div>
          <div className="featuredMoney">30</div>
        </div>

        <div className="featureditem33"onClick={handleClick}>
          <div className="featuredTitle1">InActive contracts
        </div>
          <span className="featuredMoney">10</span>
        </div>
      </div>

      <div className="data">
        <Chart data={contractData} title="Contract Analytics" grid dataKey="Active contract" />
      </div>
    </div>
  );
}

export default Contract;
