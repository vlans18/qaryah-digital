import { motion } from 'framer-motion';
import {
  Shield, Coins, Brain, Cpu, Target, Users, Wallet, FileCheck,
  Sparkles, ShoppingBag, MoonStar, Map, Heart, Code2, Menu, X, Star
} from 'lucide-react';
import { useState } from 'react';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white overflow-hidden antialiased relative">
      <div className="fixed inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }}></div>
      <Navigation />
      <div className="relative">
        <Hero />
        <Vision />
        <AI />
        <Blockchain />
        <Ecosystem />
        <Roadmap />
        <Footer />
      </div>
    </div>
  );
}

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 inset-x-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/5"
    >
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={scrollToTop} className="text-xl font-bold text-emerald-400 hover:text-emerald-300 transition-colors">
              Qaryah Digital
            </button>
            <div className="hidden sm:block text-xs text-emerald-400/60 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              Bismillah • Built in Singapore
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('vision')} className="text-sm text-slate-300 hover:text-emerald-400 transition-colors">
              Vision
            </button>
            <button onClick={() => scrollToSection('ai')} className="text-sm text-slate-300 hover:text-emerald-400 transition-colors">
              AI
            </button>
            <button onClick={() => scrollToSection('blockchain')} className="text-sm text-slate-300 hover:text-emerald-400 transition-colors">
              Blockchain
            </button>
            <button onClick={() => scrollToSection('ecosystem')} className="text-sm text-slate-300 hover:text-emerald-400 transition-colors">
              Ecosystem
            </button>
            <button onClick={() => scrollToSection('roadmap')} className="text-sm text-slate-300 hover:text-emerald-400 transition-colors">
              Roadmap
            </button>
            <a
              href="mailto:enquiry@qaryahdigital.com"
              className="text-sm text-slate-300 hover:text-emerald-400 transition-colors"
            >
              Contact
            </a>
            <a
              href="https://www.qaryahdigital.asia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-slate-200 hover:text-white transition-colors"
            >
              <Star size={16} className="fill-current" />
              Investor
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-emerald-500 hover:bg-emerald-400 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg shadow-emerald-500/30 transition-all duration-300"
            >
              Join Waitlist
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 space-y-3 pb-4"
          >
            <button onClick={() => scrollToSection('vision')} className="block w-full text-left text-sm text-slate-300 hover:text-emerald-400 transition-colors py-2">
              Vision
            </button>
            <button onClick={() => scrollToSection('ai')} className="block w-full text-left text-sm text-slate-300 hover:text-emerald-400 transition-colors py-2">
              AI
            </button>
            <button onClick={() => scrollToSection('blockchain')} className="block w-full text-left text-sm text-slate-300 hover:text-emerald-400 transition-colors py-2">
              Blockchain
            </button>
            <button onClick={() => scrollToSection('ecosystem')} className="block w-full text-left text-sm text-slate-300 hover:text-emerald-400 transition-colors py-2">
              Ecosystem
            </button>
            <button onClick={() => scrollToSection('roadmap')} className="block w-full text-left text-sm text-slate-300 hover:text-emerald-400 transition-colors py-2">
              Roadmap
            </button>
            <a
              href="mailto:enquiry@qaryahdigital.com"
              className="block w-full text-left text-sm text-slate-300 hover:text-emerald-400 transition-colors py-2"
            >
              Contact
            </a>
            <a
              href="https://www.qaryahdigital.asia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 w-full text-sm text-slate-300 hover:text-emerald-400 transition-colors py-2"
            >
              <Star size={16} className="fill-current" />
              Investor
            </a>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}

function Hero() {
  const text1 = "AI";
  const text2 = " × ";
  const text3 = "Blockchain";

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.5
      }
    }
  };

  const child = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.1
      }
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pt-20">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute w-[700px] h-[700px] bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-300 rounded-full blur-[140px] opacity-40 animate-pulse-slow"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-emerald-400 text-sm font-semibold tracking-wider mb-6 uppercase">
            Bismillah • Built in Singapore
          </p>

          <h1 className="text-6xl md:text-8xl font-extrabold mb-8 leading-tight">
            <motion.span
              variants={container}
              initial="hidden"
              animate="visible"
              className="inline-flex font-extrabold"
            >
              {text1.split("").map((char, index) => (
                <motion.span
                  key={`ai-${index}`}
                  variants={child}
                  className="bg-gradient-to-r from-emerald-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent font-extrabold"
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.3 }}
              className="text-white font-extrabold"
            >
              {text2}
            </motion.span>
            <motion.span
              variants={container}
              initial="hidden"
              animate="visible"
              className="inline-flex font-extrabold"
            >
              {text3.split("").map((char, index) => (
                <motion.span
                  key={`blockchain-${index}`}
                  variants={child}
                  className="bg-gradient-to-r from-emerald-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent font-extrabold"
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="text-white"
            >
              for the Ummah
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3, duration: 0.8 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            A super-app ecosystem powering Halal commerce and gold-pegged finance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.6, duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-3 rounded-full font-semibold shadow-lg shadow-emerald-500/40 transition-all duration-300"
            >
              Join Waitlist
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('vision')}
              className="border border-white/40 text-white px-8 py-3 rounded-full hover:border-emerald-400/70 hover:bg-white/5 transition-all duration-300"
            >
              Learn More
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.9, duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-xs md:text-sm text-slate-400"
          >
            <span>Shariah-minded Design</span>
            <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
            <span>Gold-pegged Utility (QGT)</span>
            <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
            <span>AI Agents & Prompt Compiler</span>
            <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
            <span>SG • MY • ID First</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Vision() {
  const cards = [
    {
      icon: Shield,
      title: 'Trust by Design',
      description: 'Privacy-first, halal monetization, transparent flows. Built for families, merchants, and communities.'
    },
    {
      icon: Coins,
      title: 'Real-World Value',
      description: 'QGT transitions from KWD benchmark to fractional gold (~0.0263 g/QGT), enabling savings, spending, and redemption.'
    },
    {
      icon: Brain,
      title: 'AI That Serves',
      description: 'Kodana\'s Prompt Compiler and Risk & ROI Analyzer assist users to build, automate, and learn—safely.'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="vision" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Vision</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A resilient, ethical digital economy anchored on faith, value, and real assets.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-emerald-500/60 hover:shadow-emerald-500/30 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 shadow-lg"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 rounded-xl flex items-center justify-center mb-6 border border-emerald-500/30">
                <card.icon className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
              <p className="text-slate-300 leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function AI() {
  const features = [
    {
      icon: Code2,
      title: 'Kodana Prompt Compiler',
      badge: 'KPC',
      description: 'Monaco-based IDE with multi-agent orchestration generating components, APIs, and tests on demand. Build applications faster with AI-powered code generation tailored for Islamic fintech.'
    },
    {
      icon: Target,
      title: 'Prompt Risk & ROI Analyzer',
      badge: 'PRA',
      description: 'Pre-execution advisory that estimates feasibility, cost, and compute requirements. Suggests simpler, safer paths to achieve your goals while minimizing resource usage.'
    },
    {
      icon: Users,
      title: 'Assistants: Nur & Aqid',
      description: 'AI companions guiding users through complex workflows with cultural and Shariah awareness. Nur illuminates paths forward, while Aqid ensures ethical alignment.'
    },
    {
      icon: Sparkles,
      title: 'Integrations',
      description: 'Seamless connections with popular tools and services for enhanced productivity. Build bridges between traditional systems and modern blockchain infrastructure.'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="ai" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Artificial Intelligence</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            From code generation to daily assistance—ethical, explainable, and multilingual.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-emerald-500/60 hover:shadow-emerald-500/30 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 shadow-lg"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center border border-cyan-500/30 flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    {feature.badge && (
                      <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-md border border-emerald-500/30">
                        {feature.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Blockchain() {
  const features = [
    {
      icon: Coins,
      title: 'QGT Token',
      description: 'Utility token initially benchmarked to KWD, migrating to fractional gold (~0.0263 g/QGT) with a tiered minting fee model for sustainable growth.'
    },
    {
      icon: Wallet,
      title: 'Wallet & Vault',
      description: 'User wallet, merchant settlement, and Khizanah vault for balances, points, and redemption workflow. Secure storage with multi-signature protection.'
    },
    {
      icon: FileCheck,
      title: 'Standards & Audits',
      description: 'Clear mint/burn events, reserve attestations, and Shariah review—designed to meet ASEAN regulatory expectations and Islamic finance principles.'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="blockchain" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Blockchain</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Transparent value with real-asset logic and pragmatic compliance.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-yellow-500/60 hover:shadow-yellow-500/30 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 shadow-lg"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-400/20 to-amber-500/20 rounded-xl flex items-center justify-center mb-6 border border-yellow-500/30">
                <feature.icon className="w-7 h-7 text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">{feature.title}</h3>
              <p className="text-slate-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Ecosystem() {
  const modules = [
    {
      icon: ShoppingBag,
      title: 'SunnahMall',
      description: 'Halal marketplace connecting ethical merchants with conscious consumers. Curated products meeting Shariah standards with transparent supply chains and fair trade practices.'
    },
    {
      icon: MoonStar,
      title: 'Ibadah',
      description: 'Digital companion for prayer times, Quran study, and Islamic education. Track your spiritual journey with personalized reminders and community connection features.'
    },
    {
      icon: Map,
      title: 'Halalcation',
      description: 'Travel planning for Muslim families seeking halal-friendly destinations. Verified accommodations, dining, and experiences that respect Islamic values and traditions.'
    },
    {
      icon: Heart,
      title: 'Community Services',
      description: 'Social features connecting the Ummah through mutual support, charity coordination, and local community building with transparency and accountability.'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="ecosystem" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Ecosystem</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Modules that anchor Qaryah as a super-app for the Ummah.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {modules.map((module, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-emerald-500/60 hover:shadow-emerald-500/30 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 rounded-lg flex items-center justify-center border border-emerald-500/30 flex-shrink-0">
                  <module.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3">{module.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{module.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Roadmap() {
  const phases = [
    {
      id: 'P0',
      title: 'Phase 0',
      status: 'active',
      items: [
        'Kodana Prompt Compiler MVP with Monaco IDE integration',
        'QGT token benchmark to KWD with smart contract deployment',
        'Basic wallet infrastructure with secure key management',
        'Initial Shariah review and compliance documentation'
      ]
    },
    {
      id: 'P1',
      title: 'Phase 1',
      status: 'upcoming',
      items: [
        'SunnahMall marketplace integration with merchant onboarding',
        'Nur & Aqid AI assistants launch with multilingual support',
        'Gold-pegged migration (~0.0263 g/QGT) with reserve backing',
        'Merchant settlement system with automated reconciliation'
      ]
    },
    {
      id: 'P2',
      title: 'Phase 2',
      status: 'future',
      items: [
        'Full Qaryah ecosystem launch with all modules integrated',
        'Regional expansion to Malaysia and Indonesia markets',
        'Advanced AI features with personalized recommendations',
        'Community governance framework and DAO implementation'
      ]
    }
  ];

  return (
    <section id="roadmap" className="py-32 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Roadmap</h2>
          <p className="text-xl text-slate-400">Our journey towards a complete ecosystem.</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-emerald-500/50 transform md:-translate-x-1/2" style={{
            boxShadow: '0 0 12px rgba(16, 185, 129, 0.4), 0 0 24px rgba(16, 185, 129, 0.2)'
          }}></div>

          {phases.map((phase, index) => (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-16 last:mb-0"
            >
              <div className={`flex flex-col md:flex-row items-start md:items-center gap-4 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`flex-1 w-full ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className={`bg-white/5 backdrop-blur-lg border ${phase.status === 'active' ? 'border-emerald-500/50 bg-emerald-500/5' : 'border-white/10'} rounded-3xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300 shadow-lg ml-16 md:ml-0`}>
                    <div className={`flex items-center gap-3 mb-6 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} justify-start`}>
                      <h3 className="text-2xl md:text-3xl font-bold">{phase.title}</h3>
                      <span className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${
                        phase.status === 'active'
                          ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30'
                          : 'text-slate-400 bg-slate-500/10 border-slate-500/30'
                      }`}>
                        {phase.id}
                      </span>
                    </div>
                    <ul className={`space-y-3 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-left`}>
                      {phase.items.map((item, i) => (
                        <li key={i} className="text-slate-300 text-base leading-relaxed flex items-start gap-2">
                          <span className="text-emerald-400 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="absolute left-0 md:relative md:left-auto z-10 flex-shrink-0">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center border-4 border-neutral-950 ${
                    phase.status === 'active'
                      ? 'bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg shadow-emerald-500/50'
                      : 'bg-gradient-to-br from-slate-700 to-slate-800'
                  }`}>
                    {phase.status === 'active' && (
                      <div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-20"></div>
                    )}
                    <span className="text-sm font-bold relative z-10">{phase.id}</span>
                  </div>
                </div>

                <div className="hidden md:block flex-1"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const [email, setEmail] = useState('');

  const handleJoinPilot = () => {
    if (!email) {
      alert('Please enter your email.');
      return;
    }

    const subject = 'Qaryah Pilot – New Request';
    const body = `Assalamu'alaikum,\n\nI would like to join the Qaryah pilot.\n\nEmail: ${email}\n\nRegards.`;

    window.location.href = `mailto:enquiry@qaryahdigital.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <footer id="contact" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 via-emerald-900 to-black opacity-90"></div>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)`
        }}></div>
      </div>

      <div className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Stay Early. Build With Us.</h2>
            <p className="text-xl text-emerald-100/80 mb-12 max-w-2xl mx-auto">
              Join investors, builders, and merchants shaping the future of ethical Islamic fintech. Request early access to our pilot program.
            </p>

            <div className="max-w-xl mx-auto mb-12 px-4">
              <div className="flex items-center rounded-full bg-black/40 border border-white/20 px-2 py-1 backdrop-blur-lg">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 bg-transparent text-sm md:text-base px-3 md:px-4 py-3 outline-none text-white placeholder-slate-400 min-w-0"
                />
                <button
                  onClick={handleJoinPilot}
                  className="bg-emerald-500 hover:bg-emerald-400 text-white px-4 md:px-8 py-3 rounded-full text-xs md:text-base font-semibold transition-all duration-300 whitespace-nowrap flex-shrink-0"
                >
                  Join Waitlist
                </button>
              </div>
            </div>

            <div className="space-y-4 text-sm text-emerald-100/60">
              <p>Contact: enquiry@qaryahdigital.com</p>
              <p>Singapore • Malaysia • Indonesia first, global by design.</p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 py-8 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <p>© 2025 Qaryah Digital Pte Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <button className="hover:text-emerald-400 transition-colors">Privacy</button>
            <button className="hover:text-emerald-400 transition-colors">Terms</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default App;
