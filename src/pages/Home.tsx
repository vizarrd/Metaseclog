import { Link } from 'react-router-dom';
import { Shield, Network, Activity, GraduationCap, ArrowRight, Lock, Zap } from 'lucide-react';

export default function Home() {
  const services = [
    {
      icon: Shield,
      title: 'SOC Consulting & Setup',
      description: 'Expert guidance in designing and implementing world-class Security Operations Centers tailored to your enterprise needs.',
    },
    {
      icon: Activity,
      title: 'SOC Optimization',
      description: 'Enhance your existing SOC infrastructure with cutting-edge tools, processes, and threat intelligence integration.',
    },
    {
      icon: GraduationCap,
      title: 'Offering Internship',
      description: 'Launch your cybersecurity career with hands-on SOC analyst training and internship opportunities in the cybersecurity field.',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="hero-section relative overflow-hidden">
        <div className="cyber-grid"></div>
        <div className="cyber-particles"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center">
          <div className="animate-fadeInUp">
            <h1 className="hero-title mb-6">
              Metaseclog Private Limited
            </h1>
            <h2 className="hero-subtitle mb-4">
              Elite SOC Solutions | Empowering Tomorrow's Cybersecurity Experts
            </h2>
            <p className="hero-tagline mb-12">
              Design, Build, Optimize Security Operations Centers | Hands-On Training & Internships
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/services" className="btn-primary group">
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/training" className="btn-secondary group">
                <span>Apply for Training</span>
                <Zap className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="section-title mb-4">
              Our Core Offerings
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive cybersecurity solutions from enterprise SOC deployment to professional training programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card group animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="neon-icon-wrapper mb-6">
                  <service.icon className="w-10 h-10 text-cyan-400 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-heading">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card-highlight p-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-400/10 mb-6 neon-glow-cyan">
              <Lock className="w-8 h-8 text-cyan-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
              Ready to Fortify Your Digital Defense?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Partner with Metaseclog to build an impenetrable security infrastructure or kickstart your career in cybersecurity
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center space-x-2">
              <span>Get in Touch</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
