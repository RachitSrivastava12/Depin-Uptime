"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Activity, Shield, Globe, Bell, ArrowRight, Check } from 'lucide-react';
import c from 'config';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const features = [
    { icon: Activity, title: 'Real-time Monitoring', description: 'Monitor your services with 99.9% accuracy and instant notifications' },
    { icon: Shield, title: 'Advanced Security', description: 'Enterprise-grade security with SSL encryption and two-factor authentication' },
    { icon: Globe, title: 'Global Coverage', description: 'Monitor from multiple locations worldwide for comprehensive insights' },
    { icon: Bell, title: 'Smart Alerts', description: 'Customizable alerts with intelligent noise reduction and incident management' },
  ];

  const plans = [
    { name: 'Starter', price: '29', features: ['Up to 10 monitors', 'Email notifications', '5-minute checks', '24/7 support'] },
    { name: 'Professional', price: '99', features: ['Up to 50 monitors', 'SMS & Slack notifications', '1-minute checks', 'API access', 'Custom metrics'] },
    { name: 'Enterprise', price: '299', features: ['Unlimited monitors', 'Priority support', '30-second checks', 'Custom solutions', 'SLA guarantee'] },
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
     

      <main className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className={`text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Monitor Your Services with Confidence
          </h1>
          <p className={`text-xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Get instant alerts when your services go down. Stay ahead of issues before they affect your users.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center mx-auto space-x-2 hover:bg-purple-700 transition-colors"
          >
            <span>Start Monitoring</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative w-full h-[400px] mb-16 rounded-2xl overflow-hidden"
        >
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000&h=800" 
            alt="Dashboard Analytics" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <h2 className="text-3xl font-bold mb-2">Powerful Dashboard</h2>
            <p className="text-gray-200">Get a bird's eye view of all your services in one place</p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
            >
              <feature.icon className={`w-12 h-12 mb-4 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
              <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {feature.title}
              </h3>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="relative w-full h-[300px] mb-16 rounded-2xl overflow-hidden"
        >
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2000&h=800" 
            alt="Team Collaboration" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent opacity-70"></div>
          <div className="absolute top-1/2 left-8 transform -translate-y-1/2 text-white max-w-lg">
            <h2 className="text-3xl font-bold mb-2">Team Collaboration</h2>
            <p className="text-gray-200">Work together seamlessly with your team to resolve incidents faster</p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-8 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
            >
              <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h3>
              <div className="flex items-baseline mb-6">
                <span className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  ${plan.price}
                </span>
                <span className={`ml-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2">
                    <Check className={`w-5 h-5 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                    <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{feature}</span>
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-lg font-semibold ${
                  index === 1
                    ? 'bg-purple-600 text-white hover:bg-purple-700'
                    : darkMode
                    ? 'bg-gray-700 text-white hover:bg-gray-600'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                } transition-colors`}
              >
                Choose {plan.name}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </main>

      <footer className={`border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'} py-8`}>
        <div className="container mx-auto px-6 text-center">
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            © 2025 BetterUptime. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;