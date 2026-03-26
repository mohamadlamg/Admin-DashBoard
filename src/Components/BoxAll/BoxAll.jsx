import React from 'react'
import './BoxAll.css'
import { Line, LineChart, Tooltip, ResponsiveContainer } from 'recharts';

const BoxAll = ({ color, title, value, unit, percent, trend, data = [] }) => {
 

  const isUp = trend >= 0;

  return (
    <div className='boxall'>
      <div className="boxInfo">
        <h3>{title || 'Métrique'}</h3>
        <div className="boxValue">
          <span className="mainValue">{value || '0'}</span>
          {unit && <span className="unit">{unit}</span>}
        </div>
        <span>
          <a href="#">Voir Tout</a>
        </span>
      </div>

      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="100%" height={70}>
            <LineChart data={data}>
              <Tooltip
                contentStyle={{ backgroundColor: 'transparent', border: 'none' }}
                labelStyle={{ display: 'none' }}
                formatter={(val) => [val, '']}
                position={{ x: 0, y: -28 }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke={color || '#a855f7'}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="text">
          <span className={isUp ? 'up' : 'down'}>
            {isUp ? '↑' : '↓'} {Math.abs(percent)}%
          </span>
          <p>Ce mois-ci</p>
        </div>
      </div>
    </div>
  )
}

export default BoxAll
