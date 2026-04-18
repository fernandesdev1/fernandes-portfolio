
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import { portfolioData } from './data/portfolio';
import { Code2, Braces, Database, Globe, Mail, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="bg-background text-foreground selection:bg-primary/30 min-h-screen">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6">
        <Hero />

        {/* About / Skills Section */}
        <section id="sobre" className="py-24 border-t border-white/5">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8">Sobre <span className="text-primary">Minha Jornada</span></h2>
              <div className="space-y-6 text-white/70 leading-relaxed">
                <p>
                  Natural de Cajazeiras, interior da Paraíba, meu contato com a programação começou cedo, aos 14 anos. O que começou como curiosidade se tornou uma carreira de 5 anos de evolução constante.
                </p>
                <p>
                  Aos 19 anos, domino tecnologias como <strong>PHP, Node.js, Python e React</strong>. Meu foco é na construção de sistemas escaláveis e seguros, sempre buscando a excelência técnica em cada linha de código.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass p-6 rounded-2xl">
                <Code2 className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-bold mb-2">Frontend</h4>
                <p className="text-sm text-white/40">React, Tailwind, TypeScript</p>
              </div>
              <div className="glass p-6 rounded-2xl">
                <Database className="w-8 h-8 text-secondary mb-4" />
                <h4 className="font-bold mb-2">Backend</h4>
                <p className="text-sm text-white/40">Node.js, PHP, Python, SQL</p>
              </div>
              <div className="glass p-6 rounded-2xl">
                <Braces className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-bold mb-2">API Design</h4>
                <p className="text-sm text-white/40">Restful, Microservices</p>
              </div>
              <div className="glass p-6 rounded-2xl">
                <Globe className="w-8 h-8 text-secondary mb-4" />
                <h4 className="font-bold mb-2">Expertise</h4>
                <p className="text-sm text-white/40">Enterprise ERP, Automation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projetos" className="py-24 border-t border-white/5">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 italic text-gradient">Expertise em Ação</h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Projetos selecionados que demonstram minha capacidade técnica e resolução de problemas complexos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {portfolioData.projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </section>

        {/* Contact Footer */}
        <section id="contato" className="py-24 border-t border-white/5 text-center">
          <h2 className="text-4xl font-bold mb-8 italic">Vamos Criar <span className="text-primary italic">Algo Incrível?</span></h2>
          <p className="text-white/60 mb-12 max-w-lg mx-auto">
            Sempre aberto a novos desafios e oportunidades de colaboração.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="flex items-center gap-3 px-8 py-4 glass rounded-full hover:bg-white/10 transition-all font-bold"
            >
              <Mail className="w-5 h-5 text-primary" />
              {portfolioData.contact.email}
            </a>
            <a
              href={`https://wa.me/${portfolioData.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 glass rounded-full hover:bg-white/10 transition-all font-bold border border-primary/20 hover:border-primary/50"
            >
              <MessageCircle className="w-5 h-5 text-primary" />
              WhatsApp
            </a>
            <div className="flex gap-4">
              <a
                href={portfolioData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 glass rounded-full hover:bg-white/10 transition-colors"
                title="GitHub"
              >
                <Code2 className="w-6 h-6" />
              </a>
              <a
                href={`https://wa.me/${portfolioData.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 glass rounded-full hover:bg-white/10 transition-colors"
                title="WhatsApp"
              >
                <MessageCircle className="w-6 h-6 text-[#25D366]" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Floating WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${portfolioData.contact.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-50 p-4 bg-[#25D366] text-white rounded-full shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/40 transition-shadow hidden md:flex"
        title="Fale comigo no WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
      </motion.a>

      <footer className="py-12 border-t border-white/5 text-center text-white/20 text-sm">
        <p>&copy; {new Date().getFullYear()} {portfolioData.name}. Todos os direitos reservados.</p>
        <p className="mt-2">Feito com React + TypeScript + Tailwind</p>
      </footer>
    </div>
  );
}

export default App;
