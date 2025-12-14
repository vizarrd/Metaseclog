import { Link } from 'react-router-dom';
import { Shield, Network, Activity, Zap, Lock, TrendingUp, Users, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Shield,
      title: 'SOC Consulting',
      description: 'Strategic guidance to architect your Security Operations Center from the ground up. We analyze your unique threat landscape, compliance requirements, and business objectives to design a tailored SOC framework.',
      benefits: [
        'Comprehensive security posture assessment',
        'Custom SOC architecture design',
        'Technology stack recommendations',
        'Compliance framework integration',
        'ROI optimization strategies',
      ],
    },
    {
      icon: Network,
      title: 'SOC Setup & Installation',
      description: 'End-to-end implementation of enterprise-grade SOC infrastructure. From SIEM deployment to playbook creation, we handle every technical aspect of building your cyber defense center.',
      benefits: [
        'SIEM platform deployment and configuration',
        'Security tool integration (EDR, IDS/IPS, firewalls)',
        'Incident response playbook development',
        'Alert tuning and correlation rules',
        'Team onboarding and knowledge transfer',
      ],
    },
    {
      icon: Activity,
      title: 'SOC Optimization & Management',
      description: 'Elevate your existing SOC to peak efficiency. We fine-tune processes, enhance detection capabilities, reduce false positives, and ensure your security operations run at maximum effectiveness.',
      benefits: [
        'Alert fatigue reduction through intelligent tuning',
        'Threat intelligence feed integration',
        'Automated response workflow implementation',
        'Performance metrics and KPI tracking',
        'Continuous improvement programs',
      ],
    },
  ];

  const stats = [
    { value: '50+', label: 'SOC Projects Delivered' },
    { value: '99.9%', label: 'Threat Detection Rate' },
    { value: '24/7', label: 'Security Monitoring' },
    { value: '100+', label: 'Certified Professionals' },
  ];

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="page-title mb-6">
            World-Class Cybersecurity Services
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            From initial consultation to ongoing optimization, we deliver comprehensive SOC solutions that protect your digital assets against evolving cyber threats
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-card text-center p-6 animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 font-heading">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-detail-card animate-fadeInUp"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3">
                  <div className="neon-icon-wrapper mb-4">
                    <service.icon className="w-12 h-12 text-cyan-400" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-heading">
                    {service.title}
                  </h2>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Link to="/contact" className="btn-neon inline-flex items-center space-x-2 text-sm">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="lg:w-2/3">
                  <h3 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center">
                    <Zap className="w-5 h-5 mr-2" />
                    Key Benefits
                  </h3>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 glass-card-highlight p-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-400/10 mb-6 neon-glow-cyan">
            <Lock className="w-8 h-8 text-cyan-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Need a Custom Security Solution?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Every organization has unique security requirements. Let's discuss how we can tailor our services to your specific needs.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center space-x-2">
            <span>Schedule a Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
