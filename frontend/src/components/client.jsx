// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';


// const Navbar = () => (
//   <nav className="fixed top-0 w-full bg-gray-800 text-white p-4 z-10">
//     <div className="container mx-auto flex justify-between items-center">
//       <h1 className="text-xl font-bold">Serenity Villa</h1>
//       <ul className="flex space-x-4">
//         <li><Link to="/" className="hover:text-yellow-400" aria-label="Go to Home">Home</Link></li>
//         <li><Link to="/about" className="hover:text-yellow-400" aria-label="Go to About Us">About Us</Link></li>
//         <li><Link to="/services" className="hover:text-yellow-400" aria-label="Go to Services">Services</Link></li>
//         <li><Link to="/contact" className="hover:text-yellow-400" aria-label="Go to Contact Us">Contact Us</Link></li>
//         <li><Link to="/bookings" className="hover:text-yellow-400" aria-label="Go to Bookings">Bookings</Link></li>
//       </ul>
//     </div>
//   </nav>
// );

// const Home = () => (
//   <section className="min-h-screen bg-cover bg-center flex items-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')" }}>
//     <div className="container mx-auto px-4 text-center text-white">
//       <h2 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Serenity Villa</h2>
//       <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">Discover tranquility and luxury in our serene villa, surrounded by breathtaking views.</p>
//       <Link to="/bookings" className="bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-600 transition" aria-label="Book Now">Book Now</Link>
//     </div>
//   </section>
// );

// const About = () => (
//   <section className="py-16 bg-gray-100 min-h-screen flex items-center">
//     <div className="container mx-auto px-4">
//       <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
//       <p className="text-lg text-gray-700 max-w-3xl mx-auto">
//         Serenity Villa, established in 2015, is a haven of peace and luxury. Nestled in a picturesque valley, our villa offers world-class amenities and personalized service to ensure an unforgettable stay.
//       </p>
//     </div>
//   </section>
// );

// const Services = () => (
//   <section className="py-16 min-h-screen flex items-center">
//     <div className="container mx-auto px-4">
//       <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         <div className="bg-white p-6 rounded-lg shadow-lg text-center">
//           <i className="fas fa-bed text-4xl text-yellow-500 mb-4"></i>
//           <h3 className="text-xl font-semibold mb-4">Luxury Rooms</h3>
//           <p>Elegant rooms with modern amenities and stunning views.</p>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-lg text-center">
//           <i className="fas fa-swimming-pool text-4xl text-yellow-500 mb-4"></i>
//           <h3 className="text-xl font-semibold mb-4">Infinity Pool</h3>
//           <p>Relax in our infinity pool with panoramic scenery.</p>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-lg text-center">
//           <i className="fas fa-utensils text-4xl text-yellow-500 mb-4"></i>
//           <h3 className="text-xl font-semibold mb-4">Fine Dining</h3>
//           <p>Enjoy gourmet cuisine crafted by our expert chefs.</p>
//         </div>
//       </div>
//     </div>
//   </section>
// );

// const Contact = () => (
//   <section className="py-16 bg-gray-100 min-h-screen flex items-center">
//     <div className="container mx-auto px-4">
//       <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div>
//           <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
//           <div role="form" aria-labelledby="contact-form">
//             <input
//               type="text"
//               placeholder="Name"
//               className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
//               aria-label="Name"
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
//               aria-label="Email"
//             />
//             <textarea
//               placeholder="Message"
//               className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
//               rows="4"
//               aria-label="Message"
//             ></textarea>
//             <button
//               type="button"
//               className="bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-600 transition"
//               aria-label="Send Message"
//             >
//               Send Message
//             </button>
//           </div>
//         </div>
//         <div>
//           <h3 className="text-xl font-semibold mb-4">Our Location</h3>
//           <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '300px' }} aria-label="Map showing Serenity Villa location">
//             <TileLayer
//               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//               attribution='© OpenStreetMap contributors'
//             />
//             <Marker position={[51.505, -0.09]}>
//               <Popup>Serenity Villa</Popup>
//             </Marker>
//           </MapContainer>
//         </div>
//       </div>
//     </div>
//   </section>
// );

// const Bookings = () => {
//   const [bookings, setBookings] = useState([]);
//   const [form, setForm] = useState({ name: '', email: '', checkIn: '', checkOut: '' });
//   const [editId, setEditId] = useState(null);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     fetchBookings();
//   }, []);

//   const fetchBookings = async () => {
//     try {
//       const res = await axios.get('http://localhost:5000/bookings');
//       setBookings(res.data);
//       setError('');
//     } catch (err) {
//       setError('Failed to fetch bookings');
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editId) {
//         await axios.put(`http://localhost:5000/bookings/${editId}`, form);
//         setEditId(null);
//       } else {
//         await axios.post('http://localhost:5000/bookings', form);
//       }
//       setForm({ name: '', email: '', checkIn: '', checkOut: '' });
//       fetchBookings();
//     } catch (err) {
//       setError('Failed to save booking');
//     }
//   };

//   const handleEdit = (booking) => {
//     setForm({
//       name: booking.name,
//       email: booking.email,
//       checkIn: new Date(booking.checkIn).toISOString().split('T')[0],
//       checkOut: new Date(booking.checkOut).toISOString().split('T')[0],
//     });
//     setEditId(booking._id);
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/bookings/${id}`);
//       fetchBookings();
//     } catch (err) {
//       setError('Failed to delete booking');
//     }
//   };

//   return (
//     <section className="py-16 min-h-screen flex items-center">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-8">Manage Bookings</h2>
//         {error && <p className="text-red-500 text-center mb-4">{error}</p>}
//         <div className="mb-8">
//           <h3 className="text-xl font-semibold mb-4">{editId ? 'Edit Booking' : 'Create Booking'}</h3>
//           <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <input
//               type="text"
//               placeholder="Name"
//               value={form.name}
//               onChange={(e) => setForm({ ...form, name: e.target.value })}
//               className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
//               aria-label="Name"
//               required
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               value={form.email}
//               onChange={(e) => setForm({ ...form, email: e.target.value })}
//               className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
//               aria-label="Email"
//               required
//             />
//             <input
//               type="date"
//               value={form.checkIn}
//               onChange={(e) => setForm({ ...form, checkIn: e.target.value })}
//               className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
//               aria-label="Check-in Date"
//               required
//             />
//             <input
//               type="date"
//               value={form.checkOut}
//               onChange={(e) => setForm({ ...form, checkOut: e.target.value })}
//               className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
//               aria-label="Check-out Date"
//               required
//             />
//             <button
//               type="submit"
//               className="bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-600 transition col-span-2"
//               aria-label={editId ? 'Update Booking' : 'Create Booking'}
//             >
//               {editId ? 'Update' : 'Create'}
//             </button>
//           </form>
//         </div>
//         <h3 className="text-xl font-semibold mb-4">Booking List</h3>
//         <div className="overflow-x-auto">
//           <table className="w-full bg-white rounded-lg shadow-lg">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="p-3 text-left">Name</th>
//                 <th className="p-3 text-left">Email</th>
//                 <th className="p-3 text-left">Check-in</th>
//                 <th className="p-3 text-left">Check-out</th>
//                 <th className="p-3 text-left">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {bookings.map((booking) => (
//                 <tr key={booking._id}>
//                   <td className="p-3">{booking.name}</td>
//                   <td className="p-3">{booking.email}</td>
//                   <td className="p-3">{new Date(booking.checkIn).toLocaleDateString()}</td>
//                   <td className="p-3">{new Date(booking.checkOut).toLocaleDateString()}</td>
//                   <td className="p-3">
//                     <button
//                       onClick={() => handleEdit(booking)}
//                       className="text-blue-500 hover:underline mr-2"
//                       aria-label={`Edit booking for ${booking.name}`}
//                     >
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => handleDelete(booking._id)}
//                       className="text-red-500 hover:underline"
//                       aria-label={`Delete booking for ${booking.name}`}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </section>
//   );
// };



// export default App;