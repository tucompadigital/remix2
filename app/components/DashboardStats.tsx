import { FaBuilding, FaPhone, FaEnvelope, FaMapMarkerAlt, FaChartPie, FaUsers } from 'react-icons/fa';

interface DashboardStatsProps {
    data: {
        totalEmpresas: number;
        empresasConContacto: number;
        empresasConTelefono: number;
        empresasConCorreo: number;
        municipios: number;
        sectores: number;
    };
}

export default function DashboardStats({ data }: DashboardStatsProps) {
    const stats = [
        {
            title: "Total Empresas",
            value: data.totalEmpresas.toLocaleString(),
            icon: <FaBuilding className="text-3xl text-blue-500" />,
            description: "Registradas en Sonora",
            color: "bg-blue-50 border-blue-200"
        },
        {
            title: "Con Contacto Completo",
            value: data.empresasConContacto.toLocaleString(),
            icon: <FaUsers className="text-3xl text-green-500" />,
            description: "Tienen teléfono y correo",
            color: "bg-green-50 border-green-200",
            percentage: ((data.empresasConContacto / data.totalEmpresas) * 100).toFixed(1) + "%"
        },
        {
            title: "Solo Teléfono",
            value: data.empresasConTelefono.toLocaleString(),
            icon: <FaPhone className="text-3xl text-orange-500" />,
            description: "Oportunidad para telemarketing",
            color: "bg-orange-50 border-orange-200"
        },
        {
            title: "Solo Correo",
            value: data.empresasConCorreo.toLocaleString(),
            icon: <FaEnvelope className="text-3xl text-purple-500" />,
            description: "Ideal para email marketing",
            color: "bg-purple-50 border-purple-200"
        },
        {
            title: "Municipios",
            value: data.municipios,
            icon: <FaMapMarkerAlt className="text-3xl text-red-500" />,
            description: "Con empresas registradas",
            color: "bg-red-50 border-red-200"
        },
        {
            title: "Sectores",
            value: data.sectores,
            icon: <FaChartPie className="text-3xl text-indigo-500" />,
            description: "Económicos identificados",
            color: "bg-indigo-50 border-indigo-200"
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
                <div key={index} className={`card ${stat.color} border-2`}>
                    <div className="card-body p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="text-3xl font-bold text-gray-800">
                                    {stat.value}
                                </div>
                                <div className="text-lg font-semibold text-gray-700 mt-2">
                                    {stat.title}
                                </div>
                                <div className="text-sm text-gray-600 mt-1">
                                    {stat.description}
                                </div>
                                {stat.percentage && (
                                    <div className="badge badge-success mt-2">
                                        {stat.percentage}
                                    </div>
                                )}
                            </div>
                            <div>
                                {stat.icon}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}