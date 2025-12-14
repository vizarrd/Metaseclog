import { Link } from 'react-router-dom';
import { GraduationCap, Target, Users, Award, Briefcase, CheckCircle2, Star, ArrowRight } from 'lucide-react';

export default function Training() {
  const topics = [
    'SIEM Platform Mastery (Splunk, QRadar, Sentinel)',
    'Incident Response & Forensics',
    'Threat Hunting Methodologies',
    'Security Alert Triage & Analysis',
    'Log Analysis & Correlation',
    'Malware Analysis Fundamentals',
    'Network Security Monitoring',
    'Vulnerability Management',
    'Security Automation & SOAR',
    'Compliance & Reporting (ISO 27001, NIST)',
    'Threat Intelligence Integration',
    'Real-world SOC Operations',
  ];

  const programFeatures = [
    {
      icon: Target,
      title: 'Hands-On Experience',
      description: 'Work on real SOC environments with live security tools and actual threat scenarios',
    },
    {
      icon: Users,
      title: 'Expert Mentorship',
      description: 'Learn from seasoned SOC analysts and cybersecurity professionals with 20+ years of experience',
    },
    {
      icon: Briefcase,
      title: 'Offering Internship',
      description: 'Gain real-world experience through our comprehensive cybersecurity internship program',
    },
    {
      icon: Award,
      title: 'Certification Prep',
      description: 'Preparation for industry certifications like Security+, CySA+, and SOC Analyst certifications',
    },
    {
      icon: Star,
      title: 'Career Placement',
      description: 'Job placement assistance and direct hiring opportunities in our partner organizations',
    },
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'SOC Analyst L2',
      quote: 'The hands-on training and mentorship I received at Metaseclog transformed my career. Within 6 months, I went from a beginner to a confident SOC analyst.',
    },
    {
      name: 'Rahul Verma',
      role: 'Cybersecurity Engineer',
      quote: 'Best decision I ever made. The paid internship not only helped me financially but gave me real-world experience that no textbook could provide.',
    },
    {
      name: 'Anjali Patel',
      role: 'Threat Hunter',
      quote: 'The program\'s focus on practical skills and real SOC operations prepared me perfectly for my role. I landed my dream job within weeks of completing the training.',
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-cyan-400/10 mb-6 neon-glow-cyan">
            <GraduationCap className="w-10 h-10 text-cyan-400" />
          </div>
          <h1 className="page-title mb-6">
            Launch Your SOC Analyst Career
          </h1>
          <p className="hero-subtitle mb-8">
            Hands-On Cybersecurity Training & Internships
          </p>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Bridge the gap between theory and practice with our comprehensive SOC training program. Gain real-world experience, earn industry certifications, and launch your cybersecurity career with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {programFeatures.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-6 animate-fadeInUp hover:scale-105 transition-all"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="neon-icon-wrapper mb-4">
                <feature.icon className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-heading">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="glass-card-highlight p-8 md:p-12 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center font-heading">
            What You'll Master
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {topics.map((topic, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 animate-fadeIn"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CheckCircle2 className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">{topic}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center font-heading">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card animate-fadeInUp"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-cyan-400 fill-cyan-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-cyan-500/20 pt-4">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-cyan-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card-highlight p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Ready to Start Your Journey?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join our next cohort and transform your passion for cybersecurity into a rewarding career. Limited spots available!
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center space-x-2">
            <span>Apply Now</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-gray-400 text-sm mt-4">
            Applications are reviewed on a rolling basis. Apply early to secure your spot!
          </p>
        </div>
      </div>
    </div>
  );
}
