import { useParams } from 'react-router-dom';

const CityPage = () => {
  const { cityName } = useParams();

  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold">Welcome to {cityName}</h1>
      {/* You can add listings for that city here */}
    </div>
  );
};

export default CityPage;


// import { Link } from 'react-router-dom';

// const CityPage = () => {
//     const cities = [
//         'Lucknow', 'Kanpur', 'Varanasi', 'Agra', 'Allahabad', 
//         'Noida', 'Ghaziabad', 'Meerut', 'Aligarh', 'Moradabad', 
//         'Bareilly', 'Saharanpur', 'Gorakhpur', 'Jhansi', 'Firozabad', 
//         'Rampur', 'Shahjahanpur', 'Faizabad', 'Mathura', 'Muzaffarnagar',
//         'Bijnor', 'Etawah', 'Mirzapur', 'Sultanpur', 'Raebareli',
//         'Hapur', 'Amroha', 'Fatehpur', 'Sitapur', 'Hardoi',
//         'Unnao', 'Banda', 'Bahraich', 'Gonda', 'Balrampur',
//         'Shamli', 'Basti', 'Deoria', 'Mau', 'Azamgarh',
//         'Jaunpur', 'Ballia', 'Etah', 'Mainpuri', 'Kasganj',
//         'Pilibhit', 'Lakhimpur Kheri', 'Chitrakoot', 'Sant Kabir Nagar', 'Amethi'
//     ];

//     return (
//         <div className="p-10 text-center">
//             <h1 className="text-3xl font-bold">Cities in Uttar Pradesh</h1>
//             <ul className="mt-5">
//                 {cities.map((city) => (
//                     <li key={city} className="mb-2">
//                         <Link
//                             to={`/city/${city}`}
//                             className="text-blue-500 hover:underline"
//                         >
//                             {city}
//                         </Link>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default CityPage;