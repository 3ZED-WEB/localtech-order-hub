import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import ProductCard from './ProductCard';
import { Product } from '@/types/product';

const FeaturedProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock products data
  const products: Product[] = [
    {
      id: '1',
      name: 'Nexus 8+',
      category: 'Controllers',
      price: 89.43,
      currency: '$',
      image: '/placeholder.svg',
      brand: 'Logitech',
      model: 'G Pro Platinum',
      stock: 12,
      rating: 4.8,
      featured: true,
    },
    {
      id: '2',
      name: 'Nexus Pro',
      category: 'Controllers',
      price: 95.87,
      currency: '$',
      image: '/placeholder.svg',
      brand: 'Logitech',
      model: 'G Pro',
      stock: 8,
      rating: 4.7,
      featured: true,
    },
    {
      id: '3',
      name: 'Luna Vita',
      category: 'Controllers',
      price: 88.60,
      currency: '$',
      image: '/placeholder.svg',
      brand: 'Logitech',
      model: 'G Pro Ultra',
      stock: 15,
      rating: 4.9,
      featured: true,
    },
    {
      id: '4',
      name: 'Luna E-4',
      category: 'Controllers',
      price: 83.44,
      currency: '$',
      image: '/placeholder.svg',
      brand: 'Logitech',
      model: 'G Pro Premium',
      stock: 5,
      rating: 4.5,
      featured: true,
    },
    {
      id: '5',
      name: 'RazerX Pro',
      category: 'Gaming',
      price: 129.99,
      currency: '$',
      image: '/placeholder.svg',
      brand: 'Razer',
      model: 'Pro Gaming',
      stock: 20,
      rating: 4.9,
      featured: true,
    },
    {
      id: '6',
      name: 'SteelSeries Arctis',
      category: 'Headset',
      price: 149.99,
      currency: '$',
      image: '/placeholder.svg',
      brand: 'SteelSeries',
      model: 'Arctis 7',
      stock: 15,
      rating: 4.8,
      featured: true,
    },
    {
      id: '7',
      name: 'MSI Gaming Laptop',
      category: 'Martique',
      price: 1299.99,
      currency: '$',
      image: '/placeholder.svg',
      brand: 'MSI',
      model: 'GF65',
      stock: 7,
      rating: 4.7,
      featured: true,
    },
    {
      id: '8',
      name: 'LocalTech Keyboard',
      category: 'Local',
      price: 89.99,
      currency: '$',
      image: '/placeholder.svg',
      brand: 'LocalTech',
      model: 'MK-101',
      stock: 25,
      rating: 4.6,
      featured: true,
    }
  ];

  const categories = ['All', 'Martique', 'Local', 'Gaming', 'Controller', 'Headset'];

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.brand.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-16 px-6 bg-darker">
      <div className="container mx-auto">
        <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex overflow-x-auto scrollbar-none pb-2 space-x-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`${
                  selectedCategory === category
                    ? "bg-red hover:bg-red-light text-white"
                    : "border-gray-dark text-gray-light hover:text-white hover:border-gray-light"
                } min-w-max`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
          
          <div className="relative w-full md:w-auto">
            <input
              type="text"
              placeholder="Explore Brands"
              className="bg-dark border border-gray-dark rounded-lg pl-10 pr-4 py-2 text-white w-full md:w-64 focus:outline-none focus:border-gray-light"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-light h-4 w-4" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
