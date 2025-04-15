import { Link } from 'react-router-dom'

export default function Services() {
  const services = [
    { icon: '🏠', title: 'Pay on Credit', desc: 'Pay your rent using Credit Card' },
    { icon: '💎', title: 'Housing Premium', desc: 'Instant access to zero brokerage properties' },
    { icon: '🏦', title: 'Home Loans', desc: 'Lowest interest rate offers.' },
    { icon: '🛡️', title: 'Housing Protect', desc: 'Protection against cyber frauds' },
    { icon: '🔍', title: 'Property Inspection', desc: 'Verify property with certified inspectors' },
    { icon: '📦', title: 'Packers & Movers', desc: 'Shift your home with trusted movers' },
    { icon: '📈', title: 'Property Valuation', desc: 'Know the market value of your property' },
    { icon: '💬', title: 'Legal Support', desc: 'Get legal help for documentation' }
  ]

  return (
    <div className="min-h-60 bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Explore All Housing Edge Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white border p-4 rounded shadow hover:shadow-lg transition">
              <div className="text-3xl mb-2">{service.icon}</div>
              <h3 className="text-lg font-bold text-gray-800">{service.title}</h3>
              <p className="text-sm text-gray-500">{service.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/" className="text-purple-700 hover:underline">Back to Home</Link>
        </div>
      </div>
    </div>
  )
}