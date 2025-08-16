export interface Product {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  price: string;
  originalPrice?: string;
  rating: number;
  reviewCount: number;
  image: string;
  amazonLink: string;
  category: string;
  features: string[];
  seoKeywords: string[];
}