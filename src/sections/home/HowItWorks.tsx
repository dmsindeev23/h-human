import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/custom/AnimatedSection';

const steps = [
  {
    number: '01',
    title: 'Выбрать тему',
    description: 'Найдите инструмент под вашу задачу в каталоге. Фильтры помогут быстро сориентироваться.',
  },
  {
    number: '02',
    title: 'Применить',
    description: 'Смотрите видео и работайте с готовыми материалами. Всё структурировано и понятно.',
  },
  {
    number: '03',
    title: 'Получить результат',
    description: 'Внедряйте решения и видите изменения. Инструменты работают, если применять их.',
  },
];

export function HowItWorks() {
  return (
    <section className="section-padding bg-cream-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedSection>
            <span className="text-green-brand text-sm font-medium tracking-wider uppercase mb-4 block">
              Как это работает
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-text">
              Три простых шага
            </h2>
          </AnimatedSection>
        </div>

        {/* Steps */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12" staggerDelay={0.15}>
          {steps.map((step, index) => (
            <StaggerItem key={index}>
              <div className="relative text-center">
                {/* Number */}
                <div className="font-serif text-6xl md:text-7xl text-green-brand/20 mb-6">
                  {step.number}
                </div>
                
                {/* Content */}
                <h3 className="font-serif text-2xl text-text mb-4">
                  {step.title}
                </h3>
                <p className="text-text-secondary leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>

                {/* Connector line (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-px bg-beige-dark" />
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
