import { motion } from 'framer-motion';
import { Play, FileText, ListChecks } from 'lucide-react';
import type { Tool } from '@/types';

interface ToolCardProps {
  tool: Tool;
  index?: number;
}

export function ToolCard({ tool, index = 0 }: ToolCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1],
      }}
      whileHover={{ y: -8 }}
      className="group bg-white rounded-2xl border border-beige overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-400"
    >
      {/* Preview */}
      <div className="relative h-48 bg-cream-dark overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-green-brand/10 flex items-center justify-center group-hover:bg-green-brand/20 transition-colors duration-300">
            <Play className="w-6 h-6 text-green-brand ml-1" />
          </div>
        </div>
        {tool.inSubscription && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-green-brand text-white text-xs font-medium rounded-full">
            В подписке
          </div>
        )}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-serif text-xl text-text mb-3 line-clamp-2">
          {tool.title}
        </h3>
        
        <p className="text-text-secondary text-sm mb-4 line-clamp-2">
          {tool.description}
        </p>

        {/* Contents */}
        <div className="space-y-2 mb-4">
          {tool.contents.slice(0, 2).map((content, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-text-secondary">
              {i === 0 ? (
                <Play className="w-4 h-4 text-green-brand" />
              ) : i === 1 ? (
                <FileText className="w-4 h-4 text-green-brand" />
              ) : (
                <ListChecks className="w-4 h-4 text-green-brand" />
              )}
              <span>{content}</span>
            </div>
          ))}
          {tool.contents.length > 2 && (
            <div className="text-sm text-text-tertiary">
              +{tool.contents.length - 2} ещё
            </div>
          )}
        </div>

        {/* Audience */}
        <div className="flex flex-wrap gap-2 mb-5">
          {tool.audience.map((aud, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-cream text-text-secondary text-xs rounded"
            >
              {aud}
            </span>
          ))}
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-beige">
          <div className="font-serif text-2xl text-green-brand">
            {tool.price.toLocaleString('ru-RU')} ₽
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-5 py-2.5 bg-green-brand text-white text-sm font-medium rounded-lg hover:bg-green-dark transition-colors duration-300"
          >
            Купить
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
