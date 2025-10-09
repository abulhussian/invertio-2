import React from 'react';

const IrisVideoAnalytics = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src="https://www.tataelxsi.com/themes/custom/tataelxsi/images/logo.svg" 
                alt="Tata Elxsi" 
                className="h-8"
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Industries</a>
                <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Services</a>
                <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Platforms</a>
                <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Technologies</a>
                <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">About Us</a>
                <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Careers</a>
                <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                IRIS - AI-driven Video Analytics
              </h1>
              <p className="text-xl mb-8 text-blue-200">
                Transform video surveillance with AI-powered analytics for enhanced safety, security, and operational efficiency.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition duration-300">
                  Request Demo
                </button>
                <button className="border border-white hover:bg-white hover:text-blue-900 text-white px-8 py-3 rounded-lg font-semibold transition duration-300">
                  Download Brochure
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-blue-800 rounded-2xl p-8 transform rotate-3">
                <div className="bg-gray-900 rounded-lg p-4 transform -rotate-3">
                  <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v8a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z"/>
                        </svg>
                      </div>
                      <p className="text-white font-semibold">Video Analytics Dashboard</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Intelligent Video Analytics Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              IRIS is an AI-driven video analytics platform that transforms conventional video surveillance into intelligent, proactive security systems. Leveraging cutting-edge computer vision and deep learning technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Enhanced Security</h3>
              <p className="text-gray-600">
                Real-time threat detection and proactive alerting for improved safety and security operations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Operational Efficiency</h3>
              <p className="text-gray-600">
                Automated monitoring and analytics to optimize operations and reduce manual intervention.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Smart Insights</h3>
              <p className="text-gray-600">
                Advanced analytics providing actionable insights for better decision-making and planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Discover the powerful capabilities of IRIS that make it the preferred choice for intelligent video analytics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Object Detection & Recognition</h3>
                  <p className="text-gray-600">
                    Advanced AI algorithms for accurate detection and recognition of people, vehicles, and objects in real-time.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Behavior Analysis</h3>
                  <p className="text-gray-600">
                    Monitor and analyze behavior patterns to detect anomalies and suspicious activities automatically.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Face Recognition</h3>
                  <p className="text-gray-600">
                    Advanced facial recognition capabilities for identification and verification across multiple scenarios.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">License Plate Recognition</h3>
                  <p className="text-gray-600">
                    Automated license plate recognition for vehicle tracking and access control applications.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900">Real-time Alerts</h4>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900">High Accuracy</h4>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900">Fast Processing</h4>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900">Secure</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              IRIS finds applications across various sectors, enhancing security and operational efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition duration-300">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Smart Cities</h3>
              <p className="text-gray-300">
                Traffic management, public safety, and urban surveillance applications.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition duration-300">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Retail</h3>
              <p className="text-gray-300">
                Customer analytics, loss prevention, and store optimization.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition duration-300">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Manufacturing</h3>
              <p className="text-gray-300">
                Workplace safety, quality control, and process monitoring.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition duration-300">
              <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Transportation</h3>
              <p className="text-gray-300">
                Traffic monitoring, parking management, and public transport safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Video Surveillance?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            Discover how IRIS AI-driven Video Analytics can enhance your security operations and provide valuable insights for your business.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition duration-300">
              Request a Demo
            </button>
            <button className="border border-white hover:bg-white hover:text-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default IrisVideoAnalytics;