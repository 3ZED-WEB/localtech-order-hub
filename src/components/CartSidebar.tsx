import { useCart } from '@/hooks/useCart';
import { Link } from 'react-router-dom';

const CartSidebar = () => {
  const { cartItems, cartCount } = useCart();

  return (
    <aside className="fixed top-0 right-0 w-72 h-full bg-darker text-white p-4 shadow-lg z-50">
      <h2 className="text-xl font-bold mb-4">Votre Panier</h2>

      {cartItems.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <ul className="space-y-2 overflow-y-auto max-h-[70vh]">
          {cartItems.map((item) => (
            <li key={item.id} className="flex justify-between items-center border-b border-gray-dark pb-2">
              <span>{item.name}</span>
              <span>{item.price} €</span>
            </li>
          ))}
        </ul>
      )}

      <Link to="/cart" className="block text-center bg-red text-white mt-4 py-2 rounded">
        Voir le panier ({cartCount})
      </Link>
    </aside>
  );
};

export default CartSidebar;
