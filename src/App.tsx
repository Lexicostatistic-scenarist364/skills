/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { 
  Search, 
  Code, 
  Zap, 
  Shield, 
  HelpCircle, 
  Menu, 
  X, 
  Github, 
  ExternalLink,
  Terminal,
  Cpu,
  Layers,
  ChevronRight,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Sample data for the marketplace
const CATEGORIES = [
  "All", "Coding", "DevOps", "Data Science", "Security", "Web Dev", "Mobile", "AI/ML"
];

const SKILLS = [
  {
    id: 1,
    title: "React Component Generator",
    description: "Generates high-quality, accessible React components with Tailwind CSS integration.",
    category: "Web Dev",
    author: "ClaudeExpert",
    stars: 1240,
    compatibility: ["Claude", "Codex"]
  },
  {
    id: 2,
    title: "Kubernetes Manifest Optimizer",
    description: "Analyzes and optimizes K8s manifests for cost and performance efficiency.",
    category: "DevOps",
    author: "CloudNative",
    stars: 850,
    compatibility: ["Codex", "ChatGPT"]
  },
  {
    id: 3,
    title: "Python Data Cleaner",
    description: "Automated data cleaning and preprocessing for pandas dataframes.",
    category: "Data Science",
    author: "DataWizard",
    stars: 2100,
    compatibility: ["Claude", "ChatGPT"]
  },
  {
    id: 4,
    title: "SQL Query Refactorer",
    description: "Refactors complex SQL queries for better readability and performance.",
    category: "Coding",
    author: "DBMaster",
    stars: 920,
    compatibility: ["Claude", "Codex", "ChatGPT"]
  },
  {
    id: 5,
    title: "OAuth2 Implementation Guide",
    description: "Step-by-step guidance for implementing OAuth2 in various frameworks.",
    category: "Security",
    author: "AuthGuard",
    stars: 1560,
    compatibility: ["Claude"]
  },
  {
    id: 6,
    title: "Tailwind CSS Theme Builder",
    description: "Interactive skill to build and export custom Tailwind CSS themes.",
    category: "Web Dev",
    author: "StyleNinja",
    stars: 3400,
    compatibility: ["ChatGPT"]
  }
];

const FAQS = [
  {
    question: "What is the SKILL.md format?",
    answer: "SKILL.md is an open standard format for defining AI agent capabilities, instructions, and constraints in a machine-readable way."
  },
  {
    question: "Is this website affiliated with Anthropic or OpenAI?",
    answer: "No, SkillsMP is an independent community-driven marketplace for AI agent skills. We support all major AI coding assistants."
  },
  {
    question: "How do I add a skill to my agent?",
    answer: "Most skills can be added by simply copying the SKILL.md content into your agent's configuration or by using our CLI tool."
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredSkills = SKILLS.filter(skill => {
    const matchesSearch = skill.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || skill.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-orange-500/30">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-5"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
              <Terminal className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tighter">SkillsMP</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Marketplace</a>
            <a href="#" className="hover:text-white transition-colors">Documentation</a>
            <a href="#" className="hover:text-white transition-colors">Community</a>
            <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors">
              Submit Skill
            </button>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-xl">
              <a href="#" onClick={() => setIsMenuOpen(false)}>Marketplace</a>
              <a href="#" onClick={() => setIsMenuOpen(false)}>Documentation</a>
              <a href="#" onClick={() => setIsMenuOpen(false)}>Community</a>
              <button className="bg-white text-black px-6 py-3 rounded-full w-full">
                Submit Skill
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-600/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-white/5 border border-white/10 rounded-full text-orange-500">
              The Open Standard for AI Skills
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              Supercharge your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">AI Coding Assistant</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Browse 500,000+ agent skills compatible with Claude Code, Codex CLI, and ChatGPT. 
              Built on the open standard SKILL.md format.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
              <div className="relative w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input 
                  type="text" 
                  placeholder="Search skills (e.g. 'React', 'DevOps')..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button className="w-full sm:w-auto bg-orange-600 hover:bg-orange-500 px-8 py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 whitespace-nowrap">
                Browse All <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-10 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto pb-4 no-scrollbar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  selectedCategory === cat 
                    ? "bg-white text-black" 
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Marketplace Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Skills</h2>
              <p className="text-gray-400">Hand-picked skills from the community</p>
            </div>
            <a href="#" className="text-orange-500 hover:text-orange-400 flex items-center gap-1 font-medium">
              View all <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill, idx) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/[0.08] hover:border-orange-500/50 transition-all cursor-pointer relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-5 h-5 text-orange-500" />
                </div>
                
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-orange-600/20 rounded-2xl flex items-center justify-center">
                    <Code className="w-6 h-6 text-orange-500" />
                  </div>
                  <span className="text-xs font-mono text-gray-500 bg-black/40 px-2 py-1 rounded">
                    {skill.stars.toLocaleString()} stars
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-orange-400 transition-colors">{skill.title}</h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-2 leading-relaxed">
                  {skill.description}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gray-700 rounded-full" />
                    <span className="text-xs text-gray-400">by {skill.author}</span>
                  </div>
                  <div className="flex gap-1">
                    {skill.compatibility.map(comp => (
                      <span key={comp} className="text-[10px] uppercase tracking-wider font-bold px-1.5 py-0.5 bg-white/5 border border-white/10 rounded text-gray-500">
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredSkills.length === 0 && (
            <div className="text-center py-20">
              <Search className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">No skills found</h3>
              <p className="text-gray-400">Try adjusting your search or category filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Section */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Agent Skills Marketplace?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We're building the infrastructure for the next generation of AI-powered development tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Zap className="w-8 h-8 text-orange-500" />,
                title: "Instant Integration",
                desc: "Copy-paste or use our CLI to add complex capabilities to your AI agent in seconds."
              },
              {
                icon: <Shield className="w-8 h-8 text-blue-500" />,
                title: "Open Standard",
                desc: "Built on SKILL.md, ensuring your skills work across different AI models and tools."
              },
              {
                icon: <Layers className="w-8 h-8 text-purple-500" />,
                title: "Community Driven",
                desc: "Contribute your own skills and benefit from the collective knowledge of thousands of developers."
              }
            ].map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/10">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-orange-500" />
                  {faq.question}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <footer className="bg-black border-t border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center">
                  <Terminal className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold tracking-tighter">SkillsMP</span>
              </div>
              <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
                The world's largest marketplace for AI agent skills. 
                Empowering developers to build smarter, faster, and more capable AI assistants.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
                  <Zap className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Platform</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Marketplace</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Categories</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Submit Skill</a></li>
                <li><a href="#" className="hover:text-white transition-colors">CLI Tool</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">Resources</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">SKILL.md Spec</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>© 2026 Agent Skills Marketplace. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              <a href="#" className="hover:text-white transition-colors">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
