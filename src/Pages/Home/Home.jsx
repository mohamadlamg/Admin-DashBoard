import React from 'react'
import './Home.css'
import Box1 from '../../Components/Box1/Box1'
import BoxAll from '../../Components/BoxAll/BoxAll'
import BarchartBox from '../../Components/BarChartBox/BarchartBox.jsx'
import PiechartBox from '../../Components/PieChartBox/PiechartBox'
import AreaChartBox from '../../Components/AreaChartBox/AreaChartBox'
import {revenueData,ordersData,usersData,conversionData,visitsData,revenueData2} from '../../data'

const Home = () => {
  
  return (
    <div className='home'>
      <div className="box box1"><Box1 /></div>
      <div className="box box2"><BoxAll title="Revenus totaux" value="2,845,000" unit="FCFA" percent={18.4} trend={1} color="#6366f1" data={revenueData}/></div>
      <div className="box box3"><BoxAll title="Nouvelles commandes" value="1,247" unit="" percent={7.2} trend={1}  color="#22d3a5" data={ordersData}     /></div>
      <div className="box box4"><PiechartBox /></div>
      <div className="box box5"><BoxAll title="Nouveaux utilisateurs" value="342" unit="" percent={3.1} trend={-1} color="#f43f5e" data={usersData}      /></div>
      <div className="box box6"><BoxAll title="Taux de conversion"    value="3.67%" unit="" percent={0.5} trend={1}  color="#f59e0b" data={conversionData} /></div>
      <div className="box box7"><AreaChartBox /></div>
      <div className="box box8"><BarchartBox title="Visites par mois"  color="#8884d8" dataKey="value" data={visitsData}  /></div>
      <div className="box box9"><BarchartBox title="Revenus par mois"  color="#22d3a5" dataKey="value" data={revenueData2} /></div>
    
    </div>
  )
}

export default Home