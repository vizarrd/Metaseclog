import { Shield, Target, Eye, TrendingUp, Users, Zap, Heart, Lightbulb } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Shield,
      title: 'Integrity & Trust',
      description: 'We operate with unwavering ethical standards, ensuring complete transparency and confidentiality in every engagement. Your security is our sacred responsibility.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay ahead of emerging threats by continuously researching, testing, and implementing cutting-edge security technologies and methodologies.',
    },
    {
      icon: Zap,
      title: 'Hands-On Excellence',
      description: 'We believe in practical, real-world expertise over theoretical knowledge. Every solution we deliver is battle-tested and proven effective.',
    },
    {
      icon: Heart,
      title: 'Growth Empowerment',
      description: 'We are committed to nurturing the next generation of cybersecurity professionals through mentorship, training, and career development opportunities.',
    },
  ];


  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="page-title mb-6">
            About Metaseclog Private Limited
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            A leading cybersecurity firm building unbreakable SOCs for enterprises and bridging the talent gap through practical, paid training programs
          </p>
        </div>

        <div className="mb-20 animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center font-heading">
            Our Youtube Channel
          </h2>
          <div className="glass-card-highlight p-6 md:p-8 rounded-xl overflow-hidden">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg border border-cyan-500/20"
                src="https://www.youtube.com/embed/0nVjn1vQC0E"
                title="Metaseclog YouTube Channel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ filter: 'brightness(0.95) contrast(1.05)' }}
              ></iframe>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="glass-card-highlight p-8 animate-fadeInUp">
            <div className="neon-icon-wrapper mb-6">
              <Target className="w-10 h-10 text-cyan-400" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">
              Our Mission
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              To deliver cutting-edge Security Operations Center capabilities that protect organizations from evolving cyber threats, while simultaneously empowering aspiring cybersecurity professionals with real-world skills, hands-on experience, and meaningful career opportunities.
            </p>
          </div>

          <div className="glass-card-highlight p-8 animate-fadeInUp" style={{ animationDelay: '150ms' }}>
            <div className="neon-icon-wrapper mb-6">
              <Eye className="w-10 h-10 text-cyan-400" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">
              Our Vision
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              To be the global pioneer in SOC excellence and cybersecurity education, recognized for creating impenetrable security infrastructures and cultivating the world's most skilled security operations professionals.
            </p>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center font-heading">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="value-card animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="neon-icon-wrapper mb-4">
                  <value.icon className="w-10 h-10 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 font-heading">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card-highlight p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fadeIn">
              <div className="text-5xl font-bold text-cyan-400 mb-2 font-heading">50+</div>
              <p className="text-gray-300">Enterprise SOC Projects</p>
            </div>
            <div className="animate-fadeIn" style={{ animationDelay: '100ms' }}>
              <div className="text-5xl font-bold text-cyan-400 mb-2 font-heading">200+</div>
              <p className="text-gray-300">Professionals Trained</p>
            </div>
            <div className="animate-fadeIn" style={{ animationDelay: '200ms' }}>
              <div className="text-5xl font-bold text-cyan-400 mb-2 font-heading">20+</div>
              <p className="text-gray-300">Years Experienced Professionals</p>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Why Choose Metaseclog?
          </h2>
          <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed mb-8">
            We don't just build Security Operations Centers—we create resilient cyber defense ecosystems. We don't just train analysts—we forge cybersecurity leaders. With deep technical expertise, proven methodologies, and an unwavering commitment to excellence, we transform security challenges into strategic advantages.
          </p>
          <p className="text-cyan-400 text-xl font-semibold font-heading">
            Secure Your Future. Secure Your Organization.
          </p>
        </div>
      </div>
    </div>
  );
}
