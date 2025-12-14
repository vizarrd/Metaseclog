import { Mail, Phone, MapPin, MessageSquare, Linkedin } from 'lucide-react';

export default function Contact() {

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-cyan-400/10 mb-6 neon-glow-cyan">
            <MessageSquare className="w-10 h-10 text-cyan-400" />
          </div>
          <h1 className="page-title mb-6">Contact Us</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Ready to fortify your security or launch your cybersecurity career? Get in touch with our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div className="animate-fadeInUp">
            <div className="glass-card-highlight p-8 h-full">
              <h2 className="text-2xl font-bold text-white mb-8 font-heading">
                Send Us a Message
              </h2>
              <div className="w-full">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSd7UrMjrMhxiGmrpdQbx_oDhpvXJuDUPUJEPs6Q7QAJ_sGGEg/viewform?embedded=true" 
                  width="100%"
                  height="800"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  className="rounded-lg"
                  title="Contact Form"
                >
                  Loading…
                </iframe>
              </div>
              <p className="text-gray-400 text-sm mt-4 text-center">
                Having trouble? Contact us directly at{' '}
                <a href="mailto:cn@taabow.com" className="text-cyan-400 hover:text-cyan-300">
                  cn@taabow.com
                </a>
              </p>
            </div>
          </div>

          <div className="space-y-6 animate-fadeInUp" style={{ animationDelay: '150ms' }}>
            <div className="glass-card p-6">
              <div className="flex items-start space-x-4">
                <div className="neon-icon-wrapper">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2 font-heading">Email</h3>
                  <a
                    href="mailto:cn@taabow.com"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    cn@taabow.com
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-start space-x-4">
                <div className="neon-icon-wrapper">
                  <Phone className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2 font-heading">Phone & WhatsApp</h3>
                  <a
                    href="tel:+918925926240"
                    className="text-gray-400 hover:text-cyan-400 transition-colors block mb-1"
                  >
                    +91 89259 26240
                  </a>
                  <a
                    href="https://wa.me/918925926240"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 text-sm hover:text-cyan-300 transition-colors inline-flex items-center space-x-1"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-start space-x-4">
                <div className="neon-icon-wrapper">
                  <Linkedin className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2 font-heading">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/ks-prasanna"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 text-sm hover:text-cyan-300 transition-colors inline-flex items-center space-x-1"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>Connect on LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-start space-x-4">
                <div className="neon-icon-wrapper">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2 font-heading">Location</h3>
                  <p className="text-gray-400">No,22 Lakshmi Nagar Pudukottai Road New Bus stand Thanjavur-613005, Tamil Nadu, India</p>
                </div>
              </div>
            </div>

            <div className="glass-card-highlight p-8">
              <h3 className="text-xl font-bold text-white mb-4 font-heading">Business Hours</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-cyan-400">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-cyan-400">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-gray-500">Closed</span>
                </div>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                *24/7 emergency SOC support available for enterprise clients
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
