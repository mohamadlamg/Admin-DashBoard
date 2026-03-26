import React from 'react'
import './Single.css'
import { LineChart, Line, XAxis, YAxis,  Tooltip, Legend,ResponsiveContainer } from 'recharts';


const Single = ({id,img,title,info,activities}) => {

const data = [
  { name: 'Page A', uv: 4000, pv: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398 },
  { name: 'Page C', uv: 2000, pv: 9800 },
  { name: 'Page D', uv: 2780, pv: 3908 },
  { name: 'Page E', uv: 1890, pv: 4800 },
  { name: 'Page F', uv: 2390, pv: 3800 },
  { name: 'Page G', uv: 3490, pv: 4300 },
]

  return (
    <div className='single'>
        <div className="view">
            <div className="topInfo">
                <img src={img} alt="" />
                <h1>{title}</h1>
                <button>update</button>
            </div>
            <div className="details">
                {info && Object.entries(info).map((item)=>(
                    <div className="item2" key={item[0]}>
                    <span className="itemTitle">{item[0]}:</span>
                    <span className="itemValue">{item[1]}</span>
                </div>
                ))}
                
               
            </div>
            <hr />

            <div className="graphe">

              <ResponsiveContainer width="100%" height={300}>
  <LineChart data={data}>
    <XAxis dataKey="name" padding={{ left: 30, right: 30 }} stroke="var(--color-text-3)" />
    <YAxis stroke="var(--color-text-3)" />
    <Tooltip
      cursor={{ stroke: 'var(--color-border-2)' }}
      contentStyle={{ backgroundColor: 'var(--color-surface-base)', borderColor: 'var(--color-border-2)' }}
    />
    <Legend />
    <Line
      type="monotone"
      dataKey="pv"
      stroke="var(--color-chart-1)"
      dot={{ fill: 'var(--color-surface-base)' }}
      activeDot={{ r: 8, stroke: 'var(--color-surface-base)' }}
    />
    <Line
      type="monotone"
      dataKey="uv"
      stroke="var(--color-chart-2)"
      dot={{ fill: 'var(--color-surface-base)' }}
      activeDot={{ stroke: 'var(--color-surface-base)' }}
    />
  </LineChart>
                </ResponsiveContainer>

            </div>

        </div>
        
        <div className="activities">
            <h3>Activités Récentes</h3>
            {activities&&(<ul>
                {
                    activities.map(activity=>(
                        <li key={activity.text}>
                    <div>
                        <p>{activity.text}</p>
                        <time datetime="">{activity.time}</time>
                    </div>
                </li>
                    ))
                }

                

                
            </ul>)}
        </div>
        
    </div>
  )
}

export default Single