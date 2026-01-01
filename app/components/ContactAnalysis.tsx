import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function ContactAnalysis() {
    const contactData = [
        { name: 'Sin Contacto', empresas: 540, color: '#EF4444' },
        { name: 'Solo Teléfono', empresas: 288, color: '#F97316' },
        { name: 'Solo Correo', empresas: 195, color: '#8B5CF6' },
        { name: 'Ambos Contactos', empresas: 312, color: '#10B981' }
    ];

    const opportunityData = [
        {
            tipo: 'Marketing Digital',
            descripcion: 'Empresas sin presencia digital',
            empresas: 540,
            color: 'bg-blue-100 border-blue-300'
        },
        {
            tipo: 'Publicidad Tradicional',
            descripcion: 'Empresas con solo teléfono',
            empresas: 288,
            color: 'bg-green-100 border-green-300'
        },
        {
            tipo: 'Email Marketing',
            descripcion: 'Empresas con correo electrónico',
            empresas: 507,
            color: 'bg-purple-100 border-purple-300'
        },
        {
            tipo: 'Ciberseguridad',
            descripcion: 'Empresas con presencia digital',
            empresas: 312,
            color: 'bg-red-100 border-red-300'
        }
    ];

    return (
        <div className="space-y-6">
            {/* Gráfico de Contactabilidad */}
            <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={contactData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="empresas" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* Oportunidades por tipo de contacto */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {opportunityData.map((oportunidad, index) => (
                    <div key={index} className={`card ${oportunidad.color} border-2`}>
                        <div className="card-body p-4">
                            <h3 className="card-title text-lg">{oportunidad.tipo}</h3>
                            <p className="text-gray-600 text-sm">{oportunidad.descripcion}</p>
                            <div className="flex items-center justify-between mt-2">
                                <span className="text-2xl font-bold">{oportunidad.empresas}</span>
                                <span className="badge badge-primary">
                                    {((oportunidad.empresas / 1335) * 100).toFixed(1)}%
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Recomendaciones Estratégicas */}
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                    📈 Recomendaciones Estratégicas
                </div>
                <div className="collapse-content">
                    <div className="space-y-4">
                        <div className="alert alert-success">
                            <div>
                                <h3 className="font-bold">Marketing Digital</h3>
                                <div className="text-sm">
                                    <strong>540 empresas</strong> sin presencia digital.
                                    Oportunidad para servicios de desarrollo web y social media.
                                </div>
                            </div>
                        </div>

                        <div className="alert alert-warning">
                            <div>
                                <h3 className="font-bold">Publicidad Local</h3>
                                <div className="text-sm">
                                    <strong>288 empresas</strong> solo con teléfono.
                                    Ideal para campañas de telemarketing y publicidad en medios tradicionales.
                                </div>
                            </div>
                        </div>

                        <div className="alert alert-info">
                            <div>
                                <h3 className="font-bold">Ciberseguridad</h3>
                                <div className="text-sm">
                                    <strong>312 empresas</strong> con presencia digital necesitan:
                                    <ul className="list-disc pl-5 mt-2">
                                        <li>Protección de datos</li>
                                        <li>Respaldo en la nube</li>
                                        <li>Auditorías de seguridad</li>
                                        <li>Capacitación del personal</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}