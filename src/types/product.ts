
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  currency: string;
  image: string;
  brand: string;
  model: string;
  stock: number;
  rating: number;
  featured?: boolean;
  description?: string;
  specs?: Record<string, string>;
}
