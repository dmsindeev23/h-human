import { Link } from 'react-router-dom';
import { Send, MessageCircle, Mail } from 'lucide-react';
import { navItems } from '@/data/tools';

export function Footer() {
  return (
    <footer className="bg-cream border-t border-beige">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="font-serif text-2xl text-text">
                Мои инструменты
              </span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              HR, где на первом месте — Human. Библиотека инструментов для тех, кто верит в людей.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-lg text-text mb-4">Навигация</h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-text-secondary hover:text-green-brand transition-colors duration-300 text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-serif text-lg text-text mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://t.me/username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-text-secondary hover:text-green-brand transition-colors duration-300 text-sm"
                >
                  <Send className="w-4 h-4" />
                  Telegram
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/79999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-text-secondary hover:text-green-brand transition-colors duration-300 text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@moitools.ru"
                  className="flex items-center gap-3 text-text-secondary hover:text-green-brand transition-colors duration-300 text-sm"
                >
                  <Mail className="w-4 h-4" />
                  hello@moitools.ru
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-beige text-center">
          <p className="text-text-tertiary text-sm">
            © {new Date().getFullYear()} Мои инструменты. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
