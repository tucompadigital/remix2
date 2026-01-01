import type { MetaFunction } from "@remix-run/node";
import DashboardStats from "~/components/DashboardStats";
import SectorChart from "~/components/SectorChart";
import MapChart from "~/components/MapChart";
import ContactAnalysis from "~/components/ContactAnalysis";

export const meta: MetaFunction = () => {
	return [
		{ title: "Dashboard - Análisis de Mercado Sonora" },
		{ name: "description", content: "Dashboard de análisis para marketing, publicidad y ciberseguridad en Sonora" },
	];
};

export default function Index() {
	const statsData = {
		totalEmpresas: 1335,
		empresasConContacto: 312,
		empresasConTelefono: 288,
		empresasConCorreo: 195,
		municipios: 72,
		sectores: 8
	};

	return (
		<div className="space-y-8">
			{/* Header */}
			<div className="text-center mb-8">
				<h1 className="text-4xl font-bold text-gray-800 mb-4">
					Análisis de Mercado - Sonora
				</h1>
				<p className="text-xl text-gray-600">
					Dashboard estratégico para empresas de Marketing, Publicidad y Ciberseguridad
				</p>
			</div>

			{/* Stats Overview */}
			<DashboardStats data={statsData} />

			{/* Main Content Grid */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
				{/* Sector Analysis */}
				<div className="card bg-base-100 shadow-xl">
					<div className="card-body">
						<h2 className="card-title text-2xl">Distribución por Sector Económico</h2>
						<SectorChart />
						<div className="card-actions justify-end mt-4">
							<a href="/sectores" className="btn btn-primary">Ver Análisis Completo</a>
						</div>
					</div>
				</div>

				{/* Geographical Analysis */}
				<div className="card bg-base-100 shadow-xl">
					<div className="card-body">
						<h2 className="card-title text-2xl">Distribución Geográfica</h2>
						<MapChart />
						<div className="card-actions justify-end mt-4">
							<a href="/geografia" className="btn btn-primary">Ver Mapa Completo</a>
						</div>
					</div>
				</div>
			</div>

			{/* Contact Analysis */}
			<div className="card bg-base-100 shadow-xl mt-8">
				<div className="card-body">
					<h2 className="card-title text-2xl">Análisis de Contactabilidad</h2>
					<p className="text-gray-600 mb-4">
						Oportunidades de marketing digital y servicios de ciberseguridad
					</p>
					<ContactAnalysis />
				</div>
			</div>

			{/* Opportunities Overview */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
				<div className="card bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-200">
					<div className="card-body">
						<h3 className="card-title text-blue-800">🎯 Marketing Digital</h3>
						<p className="text-gray-700">
							<strong>540 empresas</strong> sin presencia digital identificada
						</p>
						<p className="text-sm text-gray-600 mt-2">
							Oportunidad para servicios de:
							<ul className="list-disc pl-5 mt-2">
								<li>Desarrollo web</li>
								<li>Email marketing</li>
								<li>Social media management</li>
							</ul>
						</p>
					</div>
				</div>

				<div className="card bg-gradient-to-r from-green-50 to-green-100 border-2 border-green-200">
					<div className="card-body">
						<h3 className="card-title text-green-800">📢 Publicidad Tradicional</h3>
						<p className="text-gray-700">
							<strong>288 empresas</strong> con solo teléfono disponible
						</p>
						<p className="text-sm text-gray-600 mt-2">
							Ideal para campañas de:
							<ul className="list-disc pl-5 mt-2">
								<li>Telemarketing</li>
								<li>Publicidad local</li>
								<li>Marketing directo</li>
							</ul>
						</p>
					</div>
				</div>

				<div className="card bg-gradient-to-r from-purple-50 to-purple-100 border-2 border-purple-200">
					<div className="card-body">
						<h3 className="card-title text-purple-800">🔐 Ciberseguridad</h3>
						<p className="text-gray-700">
							<strong>312 empresas</strong> con presencia digital activa
						</p>
						<p className="text-sm text-gray-600 mt-2">
							Necesitan servicios de:
							<ul className="list-disc pl-5 mt-2">
								<li>Protección de datos</li>
								<li>Respaldo en la nube</li>
								<li>Seguridad informática</li>
							</ul>
						</p>
					</div>
				</div>
			</div>

			{/* Call to Action */}
			<div className="alert alert-info mt-8">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
				</svg>
				<div>
					<h3 className="font-bold">¿Necesitas un análisis personalizado?</h3>
					<div className="text-xs">Contacta con nuestro equipo para un estudio detallado de tu mercado objetivo</div>
				</div>
				<button className="btn btn-sm btn-primary">Solicitar Análisis</button>
			</div>
		</div>
	);
}