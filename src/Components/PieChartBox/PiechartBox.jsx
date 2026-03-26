import React, { useState } from 'react'
import { Pie, PieChart, ResponsiveContainer, Tooltip, Cell } from 'recharts'
import './PiecharBox.css'

const DATA = [
  { name: 'Mobile',  value: 400, fill: '#0088FE' },
  { name: 'Ordinateur', value: 300, fill: '#00C49F' },
  { name: 'Portable',  value: 300, fill: '#FFBB28' },
  { name: 'Tablette',  value: 200, fill: '#FF8042' },
]


const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { name, value, fill } = payload[0].payload
    const total = DATA.reduce((s, d) => s + d.value, 0)
    return (
      <div className="custom-tooltip">
        <span className="tooltip-dot" style={{ backgroundColor: fill }} />
        <span>{name} : <strong>{value}</strong> ({((value / total) * 100).toFixed(1)}%)</span>
      </div>
    )
  }
  return null
}

const PiechartBox = () => {
  const [hidden, setHidden] = useState([])
  const total = DATA.reduce((s, d) => s + d.value, 0)
  const visibleData = DATA.map(d => hidden.includes(d.name) ? { ...d, value: 0 } : d)

  const toggleHidden = (name) => {
    setHidden(prev =>
      prev.includes(name) ? prev.filter(n => n !== name) : [...prev, name]
    )
  }

  return (
    <div className='piechartbox'>
      <h3>Prospects par source</h3>
      <div className="chart">
        <div className="donut-wrapper">
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie
                data={visibleData}
                innerRadius="70%"
                outerRadius="90%"
                cornerRadius="50%"
                paddingAngle={5}
                dataKey="value"
                isAnimationActive={true}
              >
                {visibleData.map((entry) => (
                  <Cell key={entry.name} fill={hidden.includes(entry.name) ? '#333' : entry.fill} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
          <div className="donut-center">
            <span className="donut-total">{total.toLocaleString()}</span>
            <span className="donut-label">Total Prospects</span>
          </div>
        </div>

        <div className="options">
          {DATA.map((item) => {
            const pct = ((item.value / total) * 100).toFixed(1)
            const isHidden = hidden.includes(item.name)
            return (
              <div
                className={`option ${isHidden ? 'faded' : ''}`}
                key={item.name}
                onClick={() => toggleHidden(item.name)}
              >
                <div className="title">
                  <div className="dot" style={{ backgroundColor: isHidden ? '#555' : item.fill }} />
                  <span>{item.name}</span>
                </div>
                <span className="opt-value">{item.value}</span>
                <span className="opt-pct">{pct}%</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default PiechartBox