import React from 'react'
import './Barchartbox.css'
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

const BarchartBox = ({ title, color, dataKey, data = [] }) => {
  return (
    <div className='barchartbox'>
      <div className="barchart-header">
        <h3>{title || 'Titre'}</h3>
      </div>

      <div className="barchart-chart">
        <ResponsiveContainer width="100%" height={120}>
          <BarChart data={data} barSize={8}>
            <XAxis
              dataKey="name"
              tick={{ fontSize: 10, fill: 'rgba(255,255,255,0.4)' }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1e2535',
                border: '0.5px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                fontSize: '12px',
              }}
              labelStyle={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px' }}
              cursor={{ fill: 'rgba(255,255,255,0.05)' }}
            />
            <Bar dataKey={dataKey || 'value'} fill={color || '#8884d8'} radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default BarchartBox
