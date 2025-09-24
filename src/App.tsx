import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, ChevronDown, Mail, Phone, Globe, ArrowRight, CheckCircle, BookOpen, Award, Coffee } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDay, setActiveDay] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: ''
  });

  const agenda = [
    {
      day: "Day 1 - Oct 16, 2026",
      sessions: [
        { time: "08:30 - 09:00", title: "Registration & Welcome Coffee", speaker: "" },
        { time: "09:00 - 09:30", title: "Opening Ceremony", speaker: "" },
        { time: "09:30 - 10:30", title: "Keynote Speech: Advanced Computational Methods", speaker: "" },
        { time: "10:30 - 10:45", title: "Coffee Break", speaker: "" },
        { time: "10:45 - 12:00", title: "Session 1: Computational Mechanics", speaker: "" },
        { time: "12:00 - 13:30", title: "Lunch Break", speaker: "" },
        { time: "13:30 - 15:00", title: "Session 2: Materials Science Applications", speaker: "" },
        { time: "15:00 - 15:15", title: "Coffee Break", speaker: "" },
        { time: "15:15 - 16:45", title: "Session 3: Numerical Methods", speaker: "" },
        { time: "17:00 - 18:30", title: "Welcome Reception", speaker: "" }
      ]
    },
    {
      day: "Day 2 - Oct 17, 2026",
      sessions: [
        { time: "09:00 - 10:30", title: "Session 4: Machine Learning in Engineering", speaker: "" },
        { time: "10:30 - 10:45", title: "Coffee Break", speaker: "" },
        { time: "10:45 - 12:15", title: "Session 5: Multiscale Modeling", speaker: "" },
        { time: "12:15 - 13:45", title: "Lunch Break", speaker: "" },
        { time: "13:45 - 15:15", title: "Session 6: Future Directions", speaker: "" },
        { time: "15:15 - 15:30", title: "Coffee Break", speaker: "" },
        { time: "15:30 - 16:30", title: "Panel Discussion & Q&A", speaker: "" },
        { time: "16:30 - 17:00", title: "Closing Ceremony", speaker: "" }
      ]
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Registration submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Globe className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">ACMT 2026</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">About</a>
              <a href="#agenda" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Agenda</a>
              <a href="#venue" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Venue</a>
              <a href="#register" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">Register</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <ChevronDown className={`h-6 w-6 transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">About</a>
                <a href="#agenda" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Agenda</a>
                <a href="#venue" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Venue</a>
                <a href="#register" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-center">Register</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('/NTU_精選圖片-870x580.jpg')"
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="relative z-10 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="block text-purple-300">ACMT 2026</span>
                <span className="block text-2xl lg:text-3xl font-normal mt-4 text-blue-200">
                  Association of Computational Mechanics Taiwan
                </span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed">
                Join researchers and academics for two days of cutting-edge presentations on computational mechanics, materials science, and advanced numerical methods.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="#register" 
                  className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-500 transition-all duration-200 flex items-center justify-center group"
                >
                  Register Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-200">
                  Download Program
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-purple-500">
                <div className="text-center">
                  <Calendar className="h-8 w-8 mx-auto mb-2 text-purple-300" />
                  <p className="font-semibold">October 16-17</p>
                  <p className="text-blue-200 text-sm">2026</p>
                </div>
                <div className="text-center">
                  <MapPin className="h-8 w-8 mx-auto mb-2 text-purple-300" />
                  <p className="font-semibold">Taipei, Taiwan</p>
                  <p className="text-blue-200 text-sm">National Taiwan University</p>
                </div>
                <div className="text-center">
                  <BookOpen className="h-8 w-8 mx-auto mb-2 text-purple-300" />
                  <p className="font-semibold">Academic Conference</p>
                  <p className="text-blue-200 text-sm">Research Focus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About ACMT 2026</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The Advanced Computational Methods and Technology conference brings together leading researchers, academics, and industry professionals to share the latest developments in computational mechanics and materials science.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Research Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                Discover cutting-edge research in computational mechanics, numerical methods, and advanced materials science applications.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Academic Networking</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect with fellow researchers, academics, and industry professionals from around the world in your field of expertise.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Knowledge Exchange</h3>
              <p className="text-gray-600 leading-relaxed">
                Share your research findings and learn from the latest developments in computational methods and technology applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Venue Section */}
      <section id="venue" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Conference Venue</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              The conference will be held at National Taiwan University, one of Asia's leading research institutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="National Taiwan University"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">National Taiwan University</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-purple-600 mr-3 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600">No. 1, Sec. 4, Roosevelt Rd, Da'an District, Taipei City, Taiwan</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Coffee className="h-6 w-6 text-purple-600 mr-3 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Facilities</p>
                    <p className="text-gray-600">Modern conference halls, networking areas, and catering services available</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Globe className="h-6 w-6 text-purple-600 mr-3 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Transportation</p>
                    <p className="text-gray-600">Easily accessible by MRT (Gongguan Station) and public transportation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agenda Section */}
      <section id="agenda" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Conference Program</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Two intensive days of research presentations, technical sessions, and academic discussions.
            </p>
          </div>

          <div className="mb-8">
            <div className="flex justify-center">
              <div className="bg-white rounded-lg p-1 shadow-lg">
                {agenda.map((day, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveDay(index)}
                    className={`px-8 py-3 rounded-md font-semibold transition-colors duration-200 ${
                      activeDay === index 
                        ? 'bg-purple-600 text-white' 
                        : 'text-gray-600 hover:text-purple-600'
                    }`}
                  >
                    {day.day}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200 bg-purple-50">
              <h3 className="text-2xl font-bold text-gray-900">{agenda[activeDay].day}</h3>
            </div>
            <div className="divide-y divide-gray-200">
              {agenda[activeDay].sessions.map((session, index) => (
                <div key={index} className="p-6 hover:bg-gray-50 transition-colors duration-200">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <Clock className="h-5 w-5 text-gray-400 mr-2" />
                        <span className="text-purple-600 font-semibold">{session.time}</span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">{session.title}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Conference Registration</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Register now to secure your participation in this premier academic conference.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-gradient-to-br from-purple-50 to-blue-100 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Registration Fees</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600">Academic/Student</span>
                    <span className="text-2xl font-bold text-green-600">$150</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600">Industry Professional</span>
                    <span className="text-xl font-semibold text-blue-600">$300</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-600">Early Bird (Until Sep 15)</span>
                    <span className="text-xl font-semibold text-purple-600">20% Off</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-4">What's Included:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Access to all technical sessions</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Conference materials and proceedings</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Lunch and coffee breaks</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Welcome reception</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Registration Form</h3>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-purple-600 text-white py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200 flex items-center justify-center group"
                  >
                    Submit Registration
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center mb-4">
                <Globe className="h-8 w-8 text-purple-400" />
                <span className="ml-2 text-xl font-bold">ACMT 2026</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Association of Computational Mechanics Taiwan Conference - Connecting researchers and advancing the field of computational mechanics.
              </p>
              <div className="flex space-x-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-gray-300">info@acmt2026.org</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">About</a></li>
                <li><a href="#agenda" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Agenda</a></li>
                <li><a href="#venue" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Venue</a></li>
                <li><a href="#register" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Register</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-gray-400 mr-2 mt-1" />
                  <div>
                    <p className="text-gray-300">National Taiwan University</p>
                    <p className="text-gray-400 text-sm">No. 1, Sec. 4, Roosevelt Rd, Taipei, Taiwan</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-gray-300">+886-2-3366-3366</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2026 ACMT Conference. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;