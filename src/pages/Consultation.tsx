import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Send, 
  MessageCircle, 
  MapPin, 
  Calendar, 
  Lightbulb, 
  ClipboardList,
  Video,
} from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/custom/AnimatedSection';

const results = [
  { icon: MapPin, text: 'Карта проблем и точек роста' },
  { icon: Calendar, text: 'Приоритеты для ближайших 3 месяцев' },
  { icon: Lightbulb, text: 'Набор подходящих инструментов из библиотеки' },
  { icon: ClipboardList, text: 'План внедрения по шагам' },
  { icon: Video, text: 'Запись разговора для вашего архива' },
];

const process = [
  {
    number: '01',
    title: 'Заявка',
    description: 'Оставляете заявку, мы договариваемся о времени',
  },
  {
    number: '02',
    title: 'Встреча',
    description: '2 часа в Zoom или офлайн — разбираем вашу ситуацию',
  },
  {
    number: '03',
    title: 'Результат',
    description: 'Получаете карту проблем, приоритеты и план',
  },
];

export function ConsultationPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      
      <main className="pt-32 pb-20">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <AnimatedSection>
                <span className="text-green-brand text-sm font-medium tracking-wider uppercase mb-4 block">
                  Консультация
                </span>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-text mb-6">
                  2 часа общения
                </h1>
              </AnimatedSection>
              <AnimatedSection delay={0.15}>
                <p className="font-serif text-2xl text-text-secondary mb-6">
                  Определяем проблемы и выбираем решения
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <p className="text-text-secondary text-lg leading-relaxed mb-8">
                  Диагностика вашей HR-ситуации + подбор инструментов + план внедрения. 
                  Первый шаг к системному HR.
                </p>
              </AnimatedSection>

              {/* CTA Buttons */}
              <AnimatedSection delay={0.3} className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="https://t.me/username"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-brand text-white font-medium rounded-lg hover:bg-green-dark transition-all duration-300 hover:shadow-button"
                >
                  Оставить заявку
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <motion.a
                  href="https://t.me/username"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-green-brand font-medium hover:underline underline-offset-4"
                >
                  <Send className="w-4 h-4" />
                  Или напишите в Telegram
                </motion.a>
              </AnimatedSection>
            </div>

            {/* Visual */}
            <AnimatedSection delay={0.3} className="relative">
              <div className="relative aspect-square max-w-md mx-auto">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 bg-beige rounded-3xl"
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="absolute inset-6 bg-cream rounded-2xl border border-beige-dark flex flex-col items-center justify-center p-8"
                >
                  <div className="w-24 h-24 bg-green-brand/10 rounded-full flex items-center justify-center mb-6">
                    <span className="font-serif text-5xl text-green-brand">2</span>
                  </div>
                  <p className="font-serif text-3xl text-text mb-2">часа</p>
                  <p className="text-text-secondary text-center">
                    глубокой работы<br />над вашим HR
                  </p>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* What you get */}
        <section className="bg-cream-dark section-padding">
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
            <AnimatedSection className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-text mb-4">
                Что получите
              </h2>
              <p className="text-text-secondary text-lg max-w-xl mx-auto">
                Результат консультации — не просто советы, а конкретный план действий
              </p>
            </AnimatedSection>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto" staggerDelay={0.1}>
              {results.map((result, index) => (
                <StaggerItem key={index}>
                  <div className="bg-white p-6 rounded-xl border border-beige hover:border-green-brand/30 transition-colors duration-300">
                    <div className="w-12 h-12 bg-green-brand/10 rounded-xl flex items-center justify-center mb-4">
                      <result.icon className="w-6 h-6 text-green-brand" />
                    </div>
                    <p className="text-text">{result.text}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Process */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
            <AnimatedSection className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-text mb-4">
                Как проходит
              </h2>
            </AnimatedSection>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.15}>
              {process.map((step, index) => (
                <StaggerItem key={index}>
                  <div className="text-center">
                    <div className="font-serif text-5xl text-green-brand/20 mb-4">
                      {step.number}
                    </div>
                    <h3 className="font-serif text-2xl text-text mb-3">
                      {step.title}
                    </h3>
                    <p className="text-text-secondary">
                      {step.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-beige section-padding">
          <div className="max-w-3xl mx-auto px-6 md:px-10 lg:px-16 text-center">
            <AnimatedSection>
              <h2 className="font-serif text-3xl md:text-4xl text-text mb-6">
                Готовы начать?
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="text-text-secondary text-lg mb-8">
                Оставьте заявку, и мы договоримся о времени встречи
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
                href="https://t.me/username"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-brand text-white font-medium rounded-lg hover:bg-green-dark transition-all duration-300 hover:shadow-button"
              >
                <Send className="w-4 h-4" />
                Написать в Telegram
              </motion.a>
              <motion.a
                href="https://wa.me/79999999999"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-text font-medium rounded-lg border border-beige hover:border-green-brand hover:text-green-brand transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </motion.a>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
