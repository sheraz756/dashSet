import React from 'react';
import Chart from '../../components/charts/Chart';
import Featuredinfo from '../../components/featuredinfo/Featuredinfo';
import './home.css';
import { userData } from '../../dummydata';
import Widgetsmall from '../../components/widgetsmall/Widgetsmall';
import Widgetlarge from '../../components/widgetlarge/Widgetlarge';

export default function Home() {
  return (
    <div className="home">
      <Featuredinfo />
      <div className="chart-container">
        <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
      </div>
      <div className="homeWidgets">
        <Widgetsmall />
        <Widgetlarge />
      </div>
    </div>
  );
}
