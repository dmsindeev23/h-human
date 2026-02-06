import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Calendar, MapPin, Lightbulb, ClipboardList } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/custom/AnimatedSection';

const results = [
  { icon: MapPin, text: 'Карта проблем и точек роста' },
  { icon: Calendar, text: 'Приоритеты для ближайших 3 месяцев' },
  { icon: Lightbulb, text: 'Набор подходящих инструментов' },
  { icon: ClipboardList, text: 'План внедрения по шагам' },
];

export function Consultation() {
  return (
    <section className="section-padding bg-beige">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <AnimatedSection>
              <span className="text-green-brand text-sm font-medium tracking-wider uppercase mb-4 block">
                Первый шаг
              </span>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1}>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-text mb-4">
                Консультация 2 часа
              </h2>
            </AnimatedSection>
            
            <AnimatedSection delay={0.15}>
              <p className="font-serif text-xl text-text-secondary mb-6">
                Первый шаг к системному HR
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <p className="text-text-secondary text-lg leading-relaxed mb-8">
                Два часа общения, чтобы разобраться в вашей ситуации. Определяем проблемы, 
                выбираем приоритеты, подбираем инструменты и составляем план внедрения.
              </p>
            </AnimatedSection>

            {/* Results */}
            <StaggerContainer className="space-y-4 mb-10" staggerDelay={0.1}>
              {results.map((result, index) => (
                <StaggerItem key={index}>
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-brand/10 rounded-lg flex items-center justify-center">
                      <result.icon className="w-4 h-4 text-green-brand" />
                    </div>
                    <span className="text-text">{result.text}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <AnimatedSection delay={0.5}>
              <Link
                to="/consultation"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-green-brand text-white font-medium rounded-lg hover:bg-green-dark transition-all duration-300 hover:-translate-y-0.5 hover:shadow-button"
              >
                Записаться на консультацию
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimatedSection>
          </div>

          {/* Visual */}
          <AnimatedSection delay={0.3} className="relative">
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 bg-cream rounded-3xl shadow-card"
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute inset-8 bg-cream-dark rounded-2xl border border-beige flex flex-col items-center justify-center p-8"
              >
                <div className="w-24 h-24 bg-green-brand/10 rounded-full flex items-center justify-center mb-6">
                  <span className="font-serif text-5xl text-green-brand">2</span>
                </div>
                <p className="font-serif text-3xl text-text mb-2 text-center">часа</p>
                <p className="text-text-secondary text-center mb-8">
                  глубокой работы<br />над вашим HR
                </p>
                <div className="flex items-center gap-2 text-green-brand">
                  <Check className="w-5 h-5" />
                  <span className="text-sm font-medium">Запись разговора</span>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
