'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

export default function SectorChart() {
    const sectorData = [
        { name: 'Pesquero/Acuícola', value: 582, color: '#0088FE' },
        { name: 'Construcción', value: 242, color: '#00C49F' },
        { name: 'Alimenticio', value: 216, color: '#FFBB28' },
        { name: 'Manufactura', value: 117, color: '#FF8042' },
        { name: 'Servicios Básicos', value: 73, color: '#8884D8' },
        { name: 'Minería', value: 64, color: '#82CA9D' },
        { name: 'Textil/Confección', value: 31, color: '#FF6B6B' },
        { name: 'Otros', value: 10, color: '#4ECDC4' }
    ];

    const CustomTooltip = ({ active, payload }: any) => {
        if (active && payload && payload.length) {
            const data = payload[0].payload;
            const percentage = ((data.value / 1335) * 100).toFixed(1);
            return (
                <div className="bg-white p-4 border rounded-lg shadow-lg">
                    <p className="font-bold">{data.name}</p>
                    <p className="text-gray-600">Empresas: {data.value}</p>
                    <p className="text-gray-600">Porcentaje: {percentage}%</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="w-full h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={sectorData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {sectorData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}