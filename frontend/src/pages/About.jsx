import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            We are dedicated to providing exceptional luxury villa experiences that exceed expectations.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2010, our company has been at the forefront of luxury villa development and
              management. We believe in creating spaces that inspire and elevate the living experience.
            </p>
            <p className="text-gray-600">
              Our commitment to excellence and attention to detail has made us a trusted name in the
              luxury real estate market. We work with the finest architects, designers, and craftsmen
              to create exceptional properties that stand the test of time.
            </p>
          </div>
          <div className="relative h-96">
            <img
              src="https://www.oberoihotels.com/-/media/oberoi-hotels/website-images/the-oberoi-bali/room-and-suites/room-and-suite-gallery-1448x814/luxury-ocean-view-villa-with-private-pool/luxury-villas-ocean-view-with-private-pool-1448x814.jpg?extension=webp"
              alt="Our Story"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every aspect of our work, from design to service.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-gray-600">
                We conduct our business with honesty, transparency, and ethical practices.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We continuously innovate to provide cutting-edge luxury living solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <img
              src="https://imageio.forbes.com/specials-images/imageserve/66c3b9c5b69e4e9fcffc9ca6/Successful-mature-businessman-looking-at-camera-with-confidence/960x0.jpg?format=jpg&width=960"
              alt="Team Member 1"
              className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">John Smith</h3>
            <p className="text-gray-600">CEO & Founder</p>
          </div>
          <div className="text-center">
            <img
              src="https://www.s-oil.com/images/company/ceo_owner.jpg"
              alt="Team Member 2"
              className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Sarah Johnson</h3>
            <p className="text-gray-600">Creative Director</p>
          </div>
          <div className="text-center">
            <img
              src="https://media.investmentmagazine.com.au/wp-content/uploads/2023/09/Bernard-Reilly.jpg?strip=all&lossy=1&ssl=1"
              alt="Team Member 3"
              className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Michael Chen</h3>
            <p className="text-gray-600">Head of Operations</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 