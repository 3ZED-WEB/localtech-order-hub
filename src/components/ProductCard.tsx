
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/types/product';
import { useCart } from '@/hooks/useCart';
import { toast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
      duration: 2000,
    });
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    if (!isWishlisted) {
      toast({
        title: "Added to wishlist",
        description: `${product.name} has been added to your wishlist.`,
        duration: 2000,
      });
    }
  };

  return (
    <div className="bg-dark rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
      <div className="relative">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-52 object-cover"
          />
        </Link>
        <Button
          variant="ghost"
          size="sm"
          className={`absolute top-2 right-2 rounded-full p-1 ${
            isWishlisted ? 'text-red bg-white/10' : 'text-gray-light bg-black/30'
          }`}
          onClick={toggleWishlist}
        >
          <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-red' : ''}`} />
        </Button>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-white font-bold">{product.name}</h3>
          <span className="text-red font-bold">
            {product.currency}{product.price.toFixed(2)}
          </span>
        </div>
        
        <div className="flex justify-between items-center text-xs text-gray-light mb-4">
          <span>{product.brand} {product.model}</span>
          <span className="text-right">{product.stock > 0 ? 'In Stock' : 'Out of Stock'}</span>
        </div>
        
        <Button
          onClick={handleAddToCart}
          className={`w-full bg-red hover:bg-red-light text-white`}
          disabled={product.stock === 0}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
