import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    { icon: '💎', title: 'Price Trend', desc: 'Instant access to zero brokerage properties' },
    { icon: '🛡️', title: 'City Insights', desc: 'Get to know about top cities before you invest' },
    { icon: '🔍', title: 'Housing Research', desc: 'Find reports on Indian residential market' },
    { icon: '📦', title: 'Packers & Movers', desc: 'Shift your home with trusted movers' },
  ];

  return (
    <div className="min-h-60 bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-2 text-center text-gray-800">
          Research and Insights
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div key={index} className="bg-white border p-3 rounded shadow hover:shadow-md transition">
              <div className="text-2xl mb-1">{service.icon}</div>
              <h3 className="text-base font-semibold text-gray-800">{service.title}</h3>
              <p className="text-sm text-gray-500">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
