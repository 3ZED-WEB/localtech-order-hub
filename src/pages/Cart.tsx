
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ArrowLeft, ShoppingBag, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '@/hooks/useCart';
import ContactOptions from '@/components/ContactOptions';

const Cart = () => {
  const { cart, cartTotal, removeFromCart, updateQuantity } = useCart();
  const [deliveryOption, setDeliveryOption] = useState('standard');
  const [showContactOptions, setShowContactOptions] = useState(false);

  const deliveryOptions = {
    standard: { name: 'Livraison Standard', price: 5.99, time: '3-5 jours ouvrés' },
    express: { name: 'Livraison Express', price: 12.99, time: '1-2 jours ouvrés' },
    local: { name: 'Retrait en magasin', price: 0, time: 'Le jour même si commandé avant 15h' }
  };

  const selectedDelivery = deliveryOptions[deliveryOption as keyof typeof deliveryOptions];
  const total = cartTotal + selectedDelivery.price;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-8 text-white">Votre Panier</h1>
        
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12">
            <ShoppingBag className="h-16 w-16 text-gray-light mb-4" />
            <h2 className="text-xl font-semibold mb-2 text-white">Votre panier est vide</h2>
            <p className="text-gray-light mb-6">Vous n'avez pas encore ajouté de produits à votre panier.</p>
            <Link to="/">
              <Button className="bg-green hover:bg-green-light">
                Continuer mes achats
              </Button>
            </Link>
          </div>
        ) : (
          <>
            {showContactOptions ? (
              <div className="max-w-lg mx-auto">
                <ContactOptions onClose={() => setShowContactOptions(false)} />
                <div className="mt-4 text-center">
                  <Button 
                    variant="outline" 
                    className="border-gray-dark text-white"
                    onClick={() => setShowContactOptions(false)}
                  >
                    Retour au panier
                  </Button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2">
                  <div className="bg-dark rounded-lg overflow-hidden shadow-lg p-6 mb-6">
                    {cart.map((item) => (
                      <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center py-4 border-b border-gray-dark last:border-b-0">
                        <div className="flex-shrink-0 w-full sm:w-24 h-24 mb-4 sm:mb-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover rounded-md"
                          />
                        </div>
                        <div className="flex-grow px-4">
                          <h3 className="text-white font-bold">{item.name}</h3>
                          <p className="text-gray-light text-sm">{item.brand} {item.model}</p>
                          <p className="text-red font-bold mt-1">
                            {item.currency}{item.price.toFixed(2)}
                          </p>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 mt-4 sm:mt-0">
                          <div className="flex items-center">
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-gray-dark text-white h-8 w-8 flex items-center justify-center p-0"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              -
                            </Button>
                            <span className="mx-3 text-white min-w-[24px] text-center">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-gray-dark text-white h-8 w-8 flex items-center justify-center p-0"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              +
                            </Button>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-gray-light hover:text-red hover:bg-transparent"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                    
                    <div className="mt-6">
                      <Link to="/">
                        <Button variant="outline" className="border-gray-dark text-white">
                          <ArrowLeft className="mr-2 h-4 w-4" />
                          Continuer mes achats
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
                
                {/* Order Summary */}
                <div>
                  <div className="bg-dark rounded-lg overflow-hidden shadow-lg p-6 sticky top-24">
                    <h2 className="text-xl font-bold mb-4 text-white">Récapitulatif</h2>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between">
                        <span className="text-gray-light">Sous-total</span>
                        <span className="text-white font-medium">{cart[0]?.currency || '€'}{cartTotal.toFixed(2)}</span>
                      </div>
                      
                      <div>
                        <h3 className="text-white font-medium mb-2">Options de livraison</h3>
                        <div className="space-y-2">
                          {Object.entries(deliveryOptions).map(([key, option]) => (
                            <div 
                              key={key}
                              className={`flex items-center justify-between p-3 border rounded-md cursor-pointer transition-colors ${
                                deliveryOption === key 
                                  ? 'border-green bg-green/10' 
                                  : 'border-gray-dark hover:border-gray-light'
                              }`}
                              onClick={() => setDeliveryOption(key)}
                            >
                              <div>
                                <div className="text-white">{option.name}</div>
                                <div className="text-sm text-gray-light">{option.time}</div>
                              </div>
                              <div className={`${option.price === 0 ? 'text-green' : 'text-white'} font-medium`}>
                                {option.price === 0 ? 'Gratuit' : `${cart[0]?.currency || '€'}${option.price.toFixed(2)}`}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="border-t border-gray-dark pt-4">
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-light">Frais de livraison</span>
                          <span className="text-white font-medium">
                            {selectedDelivery.price === 0 ? 'Gratuit' : `${cart[0]?.currency || '€'}${selectedDelivery.price.toFixed(2)}`}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white font-bold">Total</span>
                          <span className="text-red font-bold">{cart[0]?.currency || '€'}{total.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-3">
                      <Button 
                        onClick={() => setShowContactOptions(true)}
                        className="w-full bg-green hover:bg-green-light text-white py-6 flex items-center justify-center"
                      >
                        <Phone className="mr-2 h-5 w-5" />
                        Commander par WhatsApp
                      </Button>
                      
                      <Button 
                        onClick={() => setShowContactOptions(true)}
                        className="w-full bg-red hover:bg-red-light text-white py-6 flex items-center justify-center"
                      >
                        <Mail className="mr-2 h-5 w-5" />
                        Commander par Email
                      </Button>
                    </div>
                    
                    <p className="text-center text-xs text-gray-light mt-4">
                      En poursuivant, vous acceptez nos Conditions Générales de Vente
                    </p>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
