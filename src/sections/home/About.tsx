import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/ui/custom/AnimatedSection';
import { Users, Building2, UserCircle } from 'lucide-react';

const audience = [
  { icon: Building2, label: 'Собственники бизнеса' },
  { icon: UserCircle, label: 'HR-специалисты' },
  { icon: Users, label: 'Руководители и тимлиды' },
];

export function About() {
  return (
    <section className="section-padding bg-cream-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photo placeholder */}
          <AnimatedSection className="relative order-2 lg:order-1">
            <div className="relative aspect-[3/4] max-w-md mx-auto">
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
                className="absolute inset-6 bg-cream rounded-2xl border border-beige-dark flex items-center justify-center"
              >
                <div className="text-center p-8">
                  <div className="w-32 h-32 bg-green-brand/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <UserCircle className="w-16 h-16 text-green-brand/50" />
                  </div>
                  <p className="text-text-secondary text-sm">
                    Фото профиля
                  </p>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Text Content */}
          <div className="order-1 lg:order-2">
            <AnimatedSection>
              <span className="text-green-brand text-sm font-medium tracking-wider uppercase mb-4 block">
                Обо мне
              </span>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1}>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-text mb-8">
                Human first
              </h2>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="bg-white/50 border-l-4 border-green-brand pl-6 py-4 mb-8">
                <p className="font-serif text-xl md:text-2xl text-text italic leading-relaxed">
                  "Я ставлю H на первое место. Потому что HR — это про людей. 
                  Про то, как они договариваются, как находят общий язык, 
                  как решают работать вместе."
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <p className="text-text-secondary text-lg leading-relaxed mb-8">
                Работаю с малым и средним бизнесом РФ и СНГ. Помогаю строить HR, 
                который работает на людей, а не против них.
              </p>
            </AnimatedSection>

            {/* Audience */}
            <AnimatedSection delay={0.4}>
              <p className="text-text text-sm font-medium mb-4">Кому помогаю:</p>
              <div className="flex flex-wrap gap-3">
                {audience.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 bg-white border border-beige rounded-lg"
                  >
                    <item.icon className="w-4 h-4 text-green-brand" />
                    <span className="text-sm text-text-secondary">{item.label}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
