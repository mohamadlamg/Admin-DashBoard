import React from 'react'
import './BoxAll.css'
import { Line, LineChart,Tooltip } from 'recharts';

const BoxAll = ({color}) => {

    const data = [
  {
    name: 'Page A',
    uv: 4000,
    users: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    users: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    users: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    users: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    users: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    users: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    users: 4300,
    amt: 2100,
  },
    ];

  return (
    <div className='boxall'>
        <div className="boxInfo">
            <h3>📈 Nbres Utilisateurs</h3>
            <span>11,234</span>
            <span>
                <a href="#">Voir Tout</a>
            </span>
        </div>
        <div className="chartInfo">
            <div className="chart">
                <LineChart
                style={{ width: '100%', maxWidth: '300px', maxHeight: '100px', aspectRatio: 1.618 }}
                responsive
                data={data}
                >
                  <Tooltip contentStyle={{backgroundColor:'transparent',border:'none'}} labelStyle={{display:'none'}} position={{x:10,y:-30}} />
                <Line type="monotone" dataKey="users" stroke={color} strokeWidth={2} dot={false} />
                </LineChart>
            </div>
            <div className="text">
                <span>45%</span>
                <p>Ce mois-ci</p>
            </div>
        </div>
        
    </div>
  )
}

export default BoxAll