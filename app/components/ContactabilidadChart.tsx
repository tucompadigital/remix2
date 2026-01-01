import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const COLORS = ['#00C49F', '#FF8042'];

export default function ContactabilidadChart({ conContacto, sinContacto, total }: { conContacto: number, sinContacto: number, total: number }) {
    const data = [
        { name: 'Con Contacto', value: conContacto },
        { name: 'Sin Contacto', value: sinContacto },
    ];

    return (
        <div>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
            <div className="text-center mt-4">
                <p className="text-gray-600">
                    <strong>Nota:</strong> {conContacto} empresas tienen al menos un contacto (teléfono o correo),
                    mientras que {sinContacto} empresas no tienen ningún contacto registrado.
                </p>
            </div>
        </div>
    );
}