export interface Tool {
  id: string;
  title: string;
  description: string;
  price: number;
  contents: string[];
  audience: string[];
  category: string;
  inSubscription: boolean;
  image?: string;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  duration: string;
  price?: number;
  features: string[];
  popular?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}
