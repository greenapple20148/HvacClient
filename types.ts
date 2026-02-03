
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'HVAC' | 'Plumbing' | 'Maintenance';
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
}

export interface DiagnosticResult {
  issue: string;
  urgency: 'Low' | 'Medium' | 'High' | 'Emergency';
  recommendation: string;
  possibleCauses: string[];
}

export enum Section {
  HERO = 'hero',
  SERVICES = 'services',
  DIAGNOSTIC = 'diagnostic',
  REVIEWS = 'reviews',
  CONTACT = 'contact'
}
