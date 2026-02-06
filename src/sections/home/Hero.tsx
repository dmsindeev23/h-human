import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-cream-dark overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.03, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-green-brand"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.02, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-green-brand"
        />
      </div>

      {/* Decorative line */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: 200 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute left-8 md:left-16 top-1/2 -translate-y-1/2 w-0.5 bg-green-brand/30 hidden md:block"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-32 text-center">
        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-text leading-tight mb-8"
        >
          HR, где на первом месте —
          <br />
          <span className="text-green-brand">H: Human</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Библиотека инструментов для тех, кто верит: люди договариваются о совместной работе. 
          Без шаблонов, с вниманием к смыслу.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/tools"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-green-brand text-white font-medium rounded-lg hover:bg-green-dark transition-all duration-300 hover:-translate-y-0.5 hover:shadow-button"
          >
            Перейти в Мои инструменты
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/consultation"
            className="inline-flex items-center px-8 py-4 bg-transparent border border-green-brand text-green-brand font-medium rounded-lg hover:bg-green-brand hover:text-white transition-all duration-300 hover:-translate-y-0.5"
          >
            Консультация 2 часа
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 border-2 border-text-tertiary rounded-full flex justify-center pt-2"
          >
            <motion.div className="w-1 h-2 bg-text-tertiary rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
