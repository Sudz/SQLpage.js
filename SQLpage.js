import React, { useState } from 'react';
import { 
  Database, 
  Shield, 
  TrendingUp, 
  Globe, 
  Lock, 
  BarChart2, 
  Zap 
} from 'lucide-react';

const SQLSolutionPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const industryBenefits = [
    {
      industry: 'Financial Services',
      icon: <BarChart2 className="text-blue-500 w-12 h-12 mb-4" />,
      benefits: [
        'Real-time transaction monitoring',
        'Risk assessment analytics',
        'Fraud detection mechanisms',
        'Compliance tracking'
      ]
    },
    {
      industry: 'Retail & E-commerce',
      icon: <TrendingUp className="text-green-500 w-12 h-12 mb-4" />,
      benefits: [
        'Inventory management',
        'Customer segmentation',
        'Sales trend analysis',
        'Personalized marketing insights'
      ]
    },
    {
      industry: 'Agriculture',
      icon: <Globe className="text-yellow-500 w-12 h-12 mb-4" />,
      benefits: [
        'Crop yield prediction',
        'Resource allocation tracking',
        'Market price analysis',
        'Supply chain management'
      ]
    }
  ];

  const renderTabContent = () => {
    switch(activeTab) {
      case 'overview':
        return (
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-blue-600">SQL Solutions for South African Businesses</h2>
              <p className="text-gray-700 mb-4">
                Empower your business with cutting-edge SQL solutions designed specifically for 
                the unique challenges and opportunities of the South African market.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Shield className="mr-3 text-green-500" />
                  <span>POPIA Compliant Data Management</span>
                </div>
                <div className="flex items-center">
                  <Zap className="mr-3 text-blue-500" />
                  <span>Cost-Effective Cloud Solutions</span>
                </div>
                <div className="flex items-center">
                  <Lock className="mr-3 text-red-500" />
                  <span>Advanced Security Mechanisms</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">Key Advantages</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Reduced Infrastructure Costs</li>
                <li>• Regulatory Compliance</li>
                <li>• Advanced Business Intelligence</li>
                <li>• Scalable Cloud Solutions</li>
                <li>• Real-time Analytics</li>
                <li>• Local Data Center Support</li>
              </ul>
            </div>
          </div>
        );
      case 'industries':
        return (
          <div className="grid md:grid-cols-3 gap-6">
            {industryBenefits.map((industry, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                {industry.icon}
                <h3 className="text-xl font-semibold mb-3">{industry.industry}</h3>
                <ul className="text-gray-600 space-y-2">
                  {industry.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center">
                      <Zap className="mr-2 text-blue-400 w-4 h-4" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );
      case 'solutions':
        return (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Cloud Database Solutions',
                description: 'Scalable, secure cloud databases with local data center support.',
                icon: <Database className="text-blue-500 w-12 h-12 mb-4" />
              },
              {
                title: 'Compliance Management',
                description: 'POPIA-aligned data protection and regulatory compliance solutions.',
                icon: <Shield className="text-green-500 w-12 h-12 mb-4" />
              },
              {
                title: 'Business Intelligence',
                description: 'Advanced analytics and predictive modeling for data-driven decisions.',
                icon: <BarChart2 className="text-purple-500 w-12 h-12 mb-4" />
              }
            ].map((solution, index) => (
              <div 
                key={index} 
                className="bg-gray-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow"
              >
                {solution.icon}
                <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            ))}
          </div>
        );
      case 'pricing':
        return (
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Starter',
                price: 'R 1,499',
                features: [
                  'Basic Cloud Database',
                  'Limited Analytics',
                  'Standard Security',
                  'Community Support'
                ],
                recommended: false
              },
              {
                title: 'Professional',
                price: 'R 4,999',
                features: [
                  'Advanced Cloud Solutions',
                  'Comprehensive Analytics',
                  'Enhanced Security',
                  'Priority Support',
                  'POPIA Compliance'
                ],
                recommended: true
              },
              {
                title: 'Enterprise',
                price: 'Custom',
                features: [
                  'Fully Customized Solutions',
                  'Unlimited Scaling',
                  'Advanced Security',
                  '24/7 Dedicated Support',
                  'Industry-Specific Integrations'
                ],
                recommended: false
              }
            ].map((plan, index) => (
              <div 
                key={index} 
                className={`
                  p-6 rounded-lg text-center 
                  ${plan.recommended 
                    ? 'bg-blue-100 border-2 border-blue-500 transform scale-105' 
                    : 'bg-gray-100'}
                `}
              >
                <h3 className="text-xl font-semibold mb-4">{plan.title}</h3>
                <div className="text-3xl font-bold mb-4 text-blue-600">{plan.price}</div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-700">• {feature}</li>
                  ))}
                </ul>
                <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
                  {plan.title === 'Professional' ? 'Most Popular' : 'Select Plan'}
                </button>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-blue-800">SQL Solutions for South African Businesses</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Empowering South African enterprises with intelligent, secure, and scalable database solutions
        </p>
      </header>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex justify-center mb-8 border-b pb-4 flex-wrap">
          {[
            { id: 'overview', label: 'Overview', icon: <Globe /> },
            { id: 'industries', label: 'Industry Benefits', icon: <BarChart2 /> },
            { id: 'solutions', label: 'Our Solutions', icon: <Database /> },
            { id: 'pricing', label: 'Pricing', icon: <Zap /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex items-center px-4 py-2 m-1 rounded 
                ${activeTab === tab.id 
                  ? 'bg-blue-500 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'}
              `}
            >
              {tab.icon}
              <span className="ml-2 hidden md:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="mt-8">
          {renderTabContent()}
        </div>
      </div>

      <section className="mt-12 text-center bg-blue-50 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-blue-800">Ready to Transform Your Data Strategy?</h2>
        <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
          Connect with our SQL experts to discover how we can revolutionize your business 
          intelligence and drive growth in the South African market.
        </p>
        <a 
          href="mailto:info@saml.co.za" 
          className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-600 transition"
        >
          Contact Our Experts
        </a>
      </section>
    </div>
  );
};

export default SQLSolutionPage;
