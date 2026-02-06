import { motion } from 'framer-motion';
import { Check, ArrowRight, Sparkles, HelpCircle } from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/custom/AnimatedSection';
import { subscriptionPlans, faqItems } from '@/data/tools';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function SubscriptionPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      
      <main className="pt-32 pb-20">
        {/* Hero */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 mb-20">
          <div className="text-center">
            <AnimatedSection>
              <span className="text-green-brand text-sm font-medium tracking-wider uppercase mb-4 block">
                Подписка
              </span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-text mb-6">
                Доступ ко всей библиотеке
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                Все инструменты сразу. Новые материалы каждый месяц. 
                Закрытый канал с поддержкой.
              </p>
            </AnimatedSection>
          </div>
        </div>

        {/* Plans */}
        <section className="bg-cream-dark section-padding">
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto" staggerDelay={0.15}>
              {subscriptionPlans.map((plan) => (
                <StaggerItem key={plan.id}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    className={`relative p-8 rounded-2xl ${
                      plan.popular
                        ? 'bg-green-brand text-white'
                        : 'bg-white border border-beige'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-beige text-text text-sm font-medium rounded-full flex items-center gap-1">
                        <Sparkles className="w-4 h-4" />
                        Выгоднее
                      </div>
                    )}

                    <div className="text-center mb-8">
                      <h3 className={`font-serif text-3xl mb-2 ${plan.popular ? 'text-white' : 'text-text'}`}>
                        {plan.name}
                      </h3>
                      <p className={`text-sm ${plan.popular ? 'text-white/80' : 'text-text-secondary'}`}>
                        {plan.duration}
                      </p>
                    </div>

                    <ul className="space-y-4 mb-10">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className={`w-5 h-5 flex-shrink-0 ${plan.popular ? 'text-white' : 'text-green-brand'}`} />
                          <span className={`text-sm ${plan.popular ? 'text-white/90' : 'text-text-secondary'}`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`group flex items-center justify-center gap-2 w-full py-4 rounded-lg font-medium transition-all duration-300 ${
                        plan.popular
                          ? 'bg-white text-green-brand hover:bg-cream'
                          : 'bg-green-brand text-white hover:bg-green-dark'
                      }`}
                    >
                      Оформить подписку
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding">
          <div className="max-w-3xl mx-auto px-6 md:px-10 lg:px-16">
            <AnimatedSection className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-green-brand mb-4">
                <HelpCircle className="w-5 h-5" />
                <span className="text-sm font-medium tracking-wider uppercase">FAQ</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl text-text">
                Частые вопросы
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-white border border-beige rounded-xl px-6 data-[state=open]:border-green-brand/30"
                  >
                    <AccordionTrigger className="text-left font-serif text-lg text-text hover:no-underline py-5">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-text-secondary pb-5">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
