"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Moon, Sun, Activity, Shield, Globe, Bell, 
  ArrowRight, Check, Server, Zap, Hexagon, 
  LineChart, ChevronDown, Menu, X, Smartphone
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFeatureTab, setActiveFeatureTab] = useState(0);
  const router = useRouter();

  useEffect(() => {
    // Apply dark mode class to html
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const features = [
    { 
      icon: Activity, 
      title: 'Real-time Monitoring', 
      description: 'Track your services with 99.99% accuracy and receive instant notifications about any issues.',
      color: 'text-blue-500 dark:text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30'
    },
    { 
      icon: Shield, 
      title: 'Advanced Security', 
      description: 'Enterprise-grade security with SSL encryption, two-factor authentication, and role-based access control.',
      color: 'text-green-500 dark:text-green-400',
      bgColor: 'bg-green-100 dark:bg-green-900/30'
    },
    { 
      icon: Server, 
      title: 'Global Coverage', 
      description: 'Monitor from 30+ locations worldwide for comprehensive insights about your global user experience.',
      color: 'text-purple-500 dark:text-purple-400',
      bgColor: 'bg-purple-100 dark:bg-purple-900/30'
    },
    { 
      icon: Bell, 
      title: 'Smart Alerts', 
      description: 'AI-powered, customizable alerts with intelligent noise reduction and automated incident management.',
      color: 'text-amber-500 dark:text-amber-400',
      bgColor: 'bg-amber-100 dark:bg-amber-900/30'
    },
  ];

  const plans = [
    { 
      name: 'Starter', 
      price: '29', 
      features: [
        'Up to 10 monitors', 
        'Email notifications', 
        '5-minute check intervals', 
        '24/7 email support',
        '7-day data retention'
      ],
      popular: false,
      cta: 'Get Started'
    },
    { 
      name: 'Professional', 
      price: '99', 
      features: [
        'Up to 50 monitors', 
        'SMS & Slack notifications', 
        '1-minute check intervals', 
        'API access', 
        'Custom metrics',
        '30-day data retention',
        'Priority support'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    { 
      name: 'Enterprise', 
      price: '299', 
      features: [
        'Unlimited monitors', 
        'Priority 24/7 support', 
        '30-second check intervals', 
        'Custom solutions', 
        'SLA guarantee',
        '1-year data retention',
        'Dedicated account manager'
      ],
      popular: false,
      cta: 'Contact Sales'
    },
  ];

  const statsData = [
    { value: '99.9%', label: 'Uptime Guarantee' },
    { value: '5s', label: 'Avg. Response Time' },
    { value: '30+', label: 'Global Checkpoints' },
    { value: '24/7', label: 'Expert Support' },
  ];

  const featureTabs = [
    {
      title: 'Uptime Monitoring',
      icon: Activity,
      description: 'Monitor your websites, APIs, and services for availability and performance.',
      image: '/api/placeholder/600/400'
    },
    {
      title: 'Status Pages',
      icon: Globe,
      description: 'Create beautiful, customizable status pages to keep your users informed.',
      image: '/api/placeholder/600/400'
    },
    {
      title: 'Incident Management',
      icon: Shield,
      description: 'Streamline your incident response with automated workflows and integrations.',
      image: '/api/placeholder/600/400'
    }
  ];

  const testimonials = [
    {
      quote: "This platform has been a game-changer for our DevOps team. We've reduced our response time by 70%.",
      author: "Sarah Johnson",
      position: "CTO, TechGrowth",
      image: "/api/placeholder/64/64"
    },
    {
      quote: "The global monitoring network gives us insights we simply couldn't get elsewhere. Worth every penny.",
      author: "David Chen",
      position: "Lead DevOps, ScaleForce",
      image: "/api/placeholder/64/64"
    },
    {
      quote: "After switching to this service, our downtime incidents decreased by 85%. The team loves the clean interface.",
      author: "Michelle Rodriguez",
      position: "Engineering Manager, DataFlow",
      image: "/api/placeholder/64/64"
    }
  ];

  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      {/* Header */}
      <header className="relative z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Hexagon className={`w-8 h-8 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
              <span className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>UptimeGuard</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors`}>Features</a>
              <a href="#how-it-works" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors`}>How It Works</a>
              <a href="#pricing" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors`}>Pricing</a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'} hover:opacity-80 transition`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              
              <button
                className="hidden md:block bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                onClick={() => router.push('/login')}
              >
                Sign In
              </button>
              
              <button
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-gray-900'}`} />
                ) : (
                  <Menu className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-gray-900'}`} />
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`absolute w-full ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg rounded-b-xl`}
          >
            <div className="container mx-auto px-6 py-4">
              <nav className="flex flex-col space-y-4">
                <a 
                  href="#features" 
                  className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Features
                </a>
                <a 
                  href="#how-it-works" 
                  className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  How It Works
                </a>
                <a 
                  href="#pricing" 
                  className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </a>
                <button
                  className="bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors text-left"
                  onClick={() => {
                    router.push('/login');
                    setMobileMenuOpen(false);
                  }}
                >
                  Sign In
                </button>
              </nav>
            </div>
          </motion.div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="lg:w-1/2 mb-12 lg:mb-0"
              >
                <span className="inline-block px-4 py-1 mb-6 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 font-medium text-sm">


x                  Next-Gen Monitoring
                </span>
                <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Keep Your Services 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500"> Always Online</span>
                </h1>
                <p className={`text-xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-lg`}>
                  Get instant alerts when your services go down. Stay ahead of issues before they affect your users and maintain perfect uptime.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity shadow-lg"
                    onClick={() => router.push('/dashboard')}
                  >
                    <span>Start Monitoring</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-8 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 ${
                      darkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-white text-gray-800 border border-gray-200 hover:bg-gray-50'
                    } transition-colors`}
                  >
                    <span>Watch Demo</span>
                    <Zap className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="lg:w-1/2 relative"
              >
                <div className={`rounded-xl overflow-hidden shadow-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} p-2`}>
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="/api/placeholder/600/400" 
                      alt="Dashboard Preview" 
                      className="w-full"
                    />
                  </div>
                </div>
                {/* Floating elements */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className={`absolute -bottom-8 -left-10 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-4 max-w-[220px]`}
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>All Systems Operational</span>
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-8 h-2 rounded bg-green-500"></div>
                    <div className="w-8 h-2 rounded bg-green-500"></div>
                    <div className="w-8 h-2 rounded bg-green-500"></div>
                    <div className="w-8 h-2 rounded bg-green-500"></div>
                    <div className="w-8 h-2 rounded bg-green-500"></div>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className={`absolute -top-4 -right-4 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-3 max-w-[180px] hidden md:block`}
                >
                  <div className="flex items-center space-x-2 mb-1">
                    <Activity className="w-4 h-4 text-purple-500" />
                    <span className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Response Time</span>
                  </div>
                  <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>200ms average</div>
                </motion.div>
              </motion.div>
            </div>
          </div>
          
          {/* Stats Section */}
          <div className="container mx-auto px-6 mt-20">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
            >
              {statsData.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg text-center`}
                >
                  <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 mb-2">
                    {stat.value}
                  </p>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* Features Section */}
        <section id="features" className="py-20 relative overflow-hidden">
          <div className={`absolute inset-0 opacity-10 ${darkMode ? 'opacity-5' : ''}`} style={{
            backgroundImage: 'url("/api/placeholder/1000/1000")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}></div>
          
          <div className="container mx-auto px-6 relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1 mb-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium text-sm">
                Key Features
              </span>
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Everything You Need for Perfect Uptime
              </h2>
              <p className={`text-xl max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Our comprehensive monitoring solution keeps your services running smoothly with cutting-edge technology and intuitive tools.
              </p>
            </motion.div>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg relative overflow-hidden hover:translate-y-[-5px] transition-transform`}
                >
                  <div className={`p-3 rounded-lg inline-block mb-4 ${feature.bgColor}`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {feature.title}
                  </h3>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-gradient-to-b from-transparent to-purple-50 dark:to-gray-800/30">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1 mb-6 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 font-medium text-sm">
                Powerful Features
              </span>
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                How UptimeGuard Works
              </h2>
              <p className={`text-xl max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Explore our core features that make monitoring and maintaining your services simple and effective.
              </p>
            </motion.div>
            
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Tabs navigation */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:w-1/3"
              >
                <div className={`rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg p-4`}>
                  {featureTabs.map((tab, index) => (
                    <div 
                      key={index}
                      className={`p-4 mb-2 rounded-lg cursor-pointer transition-colors ${
                        activeFeatureTab === index 
                          ? `${darkMode ? 'bg-gray-700' : 'bg-purple-50'} ${darkMode ? 'text-white' : 'text-gray-900'}` 
                          : `hover:bg-gray-100 dark:hover:bg-gray-700 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`
                      }`}
                      onClick={() => setActiveFeatureTab(index)}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${activeFeatureTab === index ? 'bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400' : 'bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-400'}`}>
                          <tab.icon className="w-5 h-5" />
                        </div>
                        <h3 className="font-medium">{tab.title}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              {/* Tab content */}
              <motion.div 
                key={activeFeatureTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:w-2/3"
              >
                <div className={`rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg p-6 overflow-hidden`}>
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="md:w-1/2">
                      <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {featureTabs[activeFeatureTab].title}
                      </h3>
                      <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {featureTabs[activeFeatureTab].description}
                      </p>
                      <button className="bg-purple-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors inline-flex items-center space-x-2">
                        <span>Learn more</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="md:w-1/2">
                      <div className={`rounded-lg overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} p-2`}>
                        <img 
                          src={featureTabs[activeFeatureTab].image}
                          alt={featureTabs[activeFeatureTab].title}
                          className="w-full rounded"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Testimonials section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1 mb-6 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 font-medium text-sm">
                Customer Success
              </span>
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Trusted by DevOps Teams Worldwide
              </h2>
              <p className={`text-xl max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                See what our customers have to say about how UptimeGuard has transformed their monitoring experience.
              </p>
            </motion.div>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="grid md:grid-cols-3 gap-8"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg relative`}
                >
                  <div className="mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 inline-block text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{testimonial.author}</h4>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{testimonial.position}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* Pricing Section */}
        <section id="pricing" className={`py-20 ${darkMode ? 'bg-gray-800/30' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1 mb-6 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 font-medium text-sm">
                Simple Pricing
              </span>
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Simple, Transparent Pricing
              </h2>
              <p className={`text-xl max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Choose the plan that fits your needs, with no hidden fees or long-term commitments.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {plans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`rounded-xl overflow-hidden ${
                    plan.popular
                      ? 'border-2 border-purple-500 dark:border-purple-400 relative transform scale-105 z-10'
                      : `border border-gray-200 dark:border-gray-700 ${darkMode ? 'bg-gray-800' : 'bg-white'}`
                  } shadow-lg`}
                >
                  {plan.popular && (
                    <div className="bg-purple-500 text-white text-sm font-medium py-1 text-center">
                      Most Popular
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                    <div className="flex items-baseline mb-6">
                      <span className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>${plan.price}</span>
                      <span className={`ml-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>/month</span>
                    </div>
                    <ul className="mb-8 space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button 
                      className={`w-full py-3 rounded-lg font-medium ${
                        plan.popular
                          ? 'bg-purple-600 hover:bg-purple-700 text-white'
                          : darkMode
                            ? 'bg-gray-700 hover:bg-gray-600 text-white'
                            : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                      } transition-colors`}
                    >
                      {plan.cta}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl overflow-hidden`}
            >
              <div className="p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-2/3 mb-8 md:mb-0">
                  <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Ready to experience next-level monitoring?
                  </h2>
                  <p className={`text-xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-xl`}>
                    Start your 14-day free trial today. No credit card required. Cancel anytime.
                  </p>
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity shadow-lg"
                    >
                      <span>Get Started Free</span>
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                    <button
                      className={`px-8 py-3 rounded-lg font-semibold ${
                        darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      } transition-colors`}
                    >
                      Schedule Demo
                    </button>
                  </div>
                </div>
                <div className="md:w-1/3">
                  <img 
                    src="/api/placeholder/300/300" 
                    alt="UptimeGuard App" 
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={`py-12 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <Hexagon className={`w-6 h-6 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                <span className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>UptimeGuard</span>
              </div>
              <p className={`mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Next-generation monitoring for modern applications and services.
              </p>
              <div className="flex space-x-4">
                <a href="#" className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className={`text-lg font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Product</h3>
              <ul className="space-y-4">
                <li><a href="#" className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Features</a></li>
                <li><a href="#" className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Pricing</a></li>
                <li><a href="#" className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Integrations</a></li>
                <li><a href="#" className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Enterprise</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className={`text-lg font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Resources</h3>
              <ul className="space-y-4">
                <li><a href="#" className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Documentation</a></li>
                <li><a href="#" className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>API Reference</a></li>
                <li><a href="#" className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Blog</a></li>
                <li><a href="#" className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Status</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className={`text-lg font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Company</h3>
              <ul className="space-y-4">
                <li><a href="#" className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>About</a></li>
                <li><a href="#" className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Careers</a></li>
                <li><a href="#" className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Partners</a></li>
                <li><a href="#" className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className={`pt-8 mt-8 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'} flex flex-col md:flex-row md:justify-between items-center`}>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm mb-4 md:mb-0`}>
              © 2025 UptimeGuard. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm">
              <a href="#" className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Privacy Policy</a>
              <a href="#" className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Terms of Service</a>
              <a href="#" className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;