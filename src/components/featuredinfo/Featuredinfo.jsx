import  "./featuredinfo.css"
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function Featuredinfo() {
  return (
    <div className="featured">
        <div className="featureditem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
        <span className="featuredMoney">1000,000pkr</span>
        <span className="featuredMoneyRate">
            -10.1 < ArrowDownward className="featuredIcopdown"/>
        <span/>
        </span>
        </div>
        <span className="featuredSub">compare to previous month</span>
        </div>
        <div className="featureditem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
        <span className="featuredMoney">1005,000pkr</span>
        <span className="featuredMoneyRate">
            -5.2 < ArrowDownward className="featuredIcondown" />
        <span/>
        </span>
        </div>
        <span className="featuredSub">compare to previous month</span>
        </div>
        <div className="featureditem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
        <span className="featuredMoney">95,000pkr</span>
        <span className="featuredMoneyRate">
            +3.3 < ArrowUpward  className="featuredIconup"/>
        <span/>
        </span>
        </div>
        <span className="featuredSub">compare to previous month</span>
        </div>
        </div>
        



    
   
  );
}
