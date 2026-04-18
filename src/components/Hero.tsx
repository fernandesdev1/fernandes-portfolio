
import { portfolioData } from '../data/portfolio';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
          Disponível para novos projetos
        </span>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Sou <span className="text-gradient leading-tight">{portfolioData.name}</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          {portfolioData.bio}
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <a href="#projetos" className="btn-primary">
            Ver Projetos
          </a>
          <a
            href="#contato"
            className="px-6 py-3 rounded-full glass border border-white/10 hover:bg-white/10 transition-all font-medium"
          >
            Entrar em Contato
          </a>
        </div>
      </motion.div>

      {/* Stats/Badges */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-12"
      >
        <div className="text-center">
          <p className="text-3xl font-bold text-gradient">5+</p>
          <p className="text-sm text-white/40">Anos de Código</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-gradient">8+</p>
          <p className="text-sm text-white/40">Projetos Fullstack</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-gradient">Paraíba, Brasil</p>
          <p className="text-sm text-white/40">Localização</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
