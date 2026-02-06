import { motion } from 'framer-motion';
import { Play, FileText, CreditCard } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/custom/AnimatedSection';

const features = [
  {
    icon: Play,
    title: 'Видео + материалы',
    description: 'Каждый инструмент включает видео-инструкцию и готовые файлы для работы',
  },
  {
    icon: CreditCard,
    title: 'Покупка поштучно',
    description: 'Выбирайте и покупайте только те инструменты, которые нужны сейчас',
  },
  {
    icon: FileText,
    title: 'Или подписка',
    description: 'Получите доступ ко всей библиотеке сразу и новые материалы каждый месяц',
  },
];

export function WhatIsIt() {
  return (
    <section className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <AnimatedSection>
              <span className="text-green-brand text-sm font-medium tracking-wider uppercase mb-4 block">
                О проекте
              </span>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1}>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-text mb-6">
                Что это такое
              </h2>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <p className="text-text-secondary text-lg leading-relaxed mb-8">
                Библиотека готовых инструментов для HR-задач. Каждая карточка — это 
                видеоинструкция + файл для работы. Покупайте поштучно или получайте 
                доступ ко всему через подписку.
              </p>
            </AnimatedSection>

            <StaggerContainer className="space-y-6" staggerDelay={0.15}>
              {features.map((feature, index) => (
                <StaggerItem key={index}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-brand/10 rounded-xl flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-green-brand" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-text mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Visual */}
          <AnimatedSection delay={0.3} className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative shapes */}
              <motion.div
                animate={{ 
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 bg-beige rounded-3xl"
              />
              <motion.div
                animate={{ 
                  rotate: [0, -3, 0, 3, 0],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-4 bg-cream-dark rounded-2xl border border-beige flex items-center justify-center"
              >
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-green-brand/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="font-serif text-4xl text-green-brand">H</span>
                  </div>
                  <p className="font-serif text-2xl text-text mb-2">Human first</p>
                  <p className="text-text-secondary text-sm">
                    Люди важнее процессов
                  </p>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
