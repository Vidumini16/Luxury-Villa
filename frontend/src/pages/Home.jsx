import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://img.jamesedition.com/listing_images/2025/04/24/13/56/36/4f92f2e2-058d-405a-903d-185f9dc0129a/je/760x470xc.jpg"
            alt="Luxury Villa"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Luxury Villa Experience</h1>
          <p className="text-xl md:text-2xl mb-8 ">Discover Your Dream Home</p>
          <Link
            to="/contact"
            className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Featured Properties */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Property Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://storage.googleapis.com/101evler-cache/property_wm/property/57598/260738/girne-catalkoy-satilik-villa-260738-1663317062.2627.jpeg"
              alt="Luxury Villa 1"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Modern Beach Villa</h3>
              <p className="text-gray-600 mb-4">Stunning ocean views with private beach access</p>
              <Link
                to="/services"
                className="text-blue-600 font-semibold hover:text-blue-800"
              >
                Learn More →
              </Link>
            </div>
          </div>

          {/* Property Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://mir-s3-cdn-cf.behance.net/projects/404/4b2b09223521027.Y3JvcCwxMDgwLDg0NCwwLDExNw.png"
              alt="Luxury Villa 2"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Mountain Retreat</h3>
              <p className="text-gray-600 mb-4">Secluded luxury with panoramic mountain views</p>
              <Link
                to="/services"
                className="text-blue-600 font-semibold hover:text-blue-800"
              >
                Learn More →
              </Link>
            </div>
          </div>

          {/* Property Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://img.freepik.com/free-photo/movie-night-by-pool-whole-family_1268-31098.jpg?semt=ais_hybrid&w=740"
              alt="Luxury Villa 3"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Urban Oasis</h3>
              <p className="text-gray-600 mb-4">Contemporary design in the heart of the city</p>
              <Link
                to="/services"
                className="text-blue-600 font-semibold hover:text-blue-800"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 