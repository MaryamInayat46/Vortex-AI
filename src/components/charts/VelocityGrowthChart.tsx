import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Jan', velocity: 4000, growth: 2400 },
    { name: 'Feb', velocity: 3000, growth: 1398 },
    { name: 'Mar', velocity: 2000, growth: 9800 },
    { name: 'Apr', velocity: 2780, growth: 3908 },
    { name: 'May', velocity: 1890, growth: 4800 },
    { name: 'Jun', velocity: 2390, growth: 3800 },
    { name: 'Jul', velocity: 3490, growth: 4300 },
];

const VelocityGrowthChart = () => {
    return (
        <div className="w-full h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                    <defs>
                        <linearGradient id="colorVelocity" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#bef264" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#bef264" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorGrowth" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#7c3aed" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                    <XAxis
                        dataKey="name"
                        stroke="#64748b"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                    />
                    <YAxis
                        stroke="#64748b"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `$${value / 1000}k`}
                    />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: '#0f172a',
                            border: '1px solid #1e293b',
                            borderRadius: '12px',
                            color: '#f1f5f9'
                        }}
                        itemStyle={{ color: '#f1f5f9' }}
                    />
                    <Area
                        type="monotone"
                        dataKey="velocity"
                        stroke="#bef264"
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="url(#colorVelocity)"
                    />
                    <Area
                        type="monotone"
                        dataKey="growth"
                        stroke="#7c3aed"
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="url(#colorGrowth)"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default VelocityGrowthChart;
