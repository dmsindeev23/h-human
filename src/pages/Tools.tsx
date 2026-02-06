import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ToolCard } from '@/components/ui/custom/ToolCard';
import { AnimatedSection } from '@/components/ui/custom/AnimatedSection';
import { tools, categories } from '@/data/tools';

export function Tools() {
  const [activeCategory, setActiveCategory] = useState('Все');

  const filteredTools = activeCategory === 'Все'
    ? tools
    : tools.filter(tool => tool.category === activeCategory);

  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          {/* Header */}
          <div className="text-center mb-12">
            <AnimatedSection>
              <span className="text-green-brand text-sm font-medium tracking-wider uppercase mb-4 block">
                Каталог
              </span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-text mb-6">
                Мои инструменты
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                Готовые решения для HR-задач. Каждая карточка — видео + файлы. 
                Покупайте поштучно или получайте всё через подписку.
              </p>
            </AnimatedSection>
          </div>

          {/* Filters */}
          <AnimatedSection delay={0.2} className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-green-brand text-white'
                      : 'bg-white text-text-secondary border border-beige hover:border-green-brand hover:text-green-brand'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Tools Grid */}
          <motion.div 
            layout
            // ✅ ВАЖНО: items-stretch растягиваит элементы сетки до высоты самого высокого в ряду.
            // А h-full на wrapper ниже позволяет карточкам занять эту высоту.
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
          >
            <AnimatePresence mode="popLayout">
              {filteredTools.map((tool, index) => (
                <motion.div
                  key={tool.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <div className="h-full">
                    <ToolCard tool={tool} index={index} />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty state */}
          {filteredTools.length === 0 && (
            <AnimatedSection className="text-center py-20">
              <p className="text-text-secondary text-lg">
                В этой категории пока нет инструментов
              </p>
            </AnimatedSection>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
