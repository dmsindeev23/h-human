import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/custom/AnimatedSection';
import { subscriptionPlans } from '@/data/tools';

export function Subscription() {
  return (
    <section className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedSection>
            <span className="text-green-brand text-sm font-medium tracking-wider uppercase mb-4 block">
              Доступ ко всему
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-text mb-4">
              Подписка на всю библиотеку
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Доступ ко всем инструментам сразу + новые материалы каждый месяц
            </p>
          </AnimatedSection>
        </div>

        {/* Plans */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto" staggerDelay={0.15}>
          {subscriptionPlans.map((plan) => (
            <StaggerItem key={plan.id}>
              <motion.div
                whileHover={{ y: -4 }}
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
                  <h3 className={`font-serif text-2xl mb-2 ${plan.popular ? 'text-white' : 'text-text'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm ${plan.popular ? 'text-white/80' : 'text-text-secondary'}`}>
                    {plan.duration}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 ${plan.popular ? 'text-white' : 'text-green-brand'}`} />
                      <span className={`text-sm ${plan.popular ? 'text-white/90' : 'text-text-secondary'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/subscription"
                  className={`group flex items-center justify-center gap-2 w-full py-4 rounded-lg font-medium transition-all duration-300 ${
                    plan.popular
                      ? 'bg-white text-green-brand hover:bg-cream'
                      : 'bg-green-brand text-white hover:bg-green-dark'
                  }`}
                >
                  Оформить подписку
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
