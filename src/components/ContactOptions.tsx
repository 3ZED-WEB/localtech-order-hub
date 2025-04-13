
import { useState } from 'react';
import { Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart';
import { toast } from '@/hooks/use-toast';

interface ContactOptionsProps {
  onClose?: () => void;
}

const ContactOptions = ({ onClose }: ContactOptionsProps) => {
  const { cart, cartTotal } = useCart();
  const [contactMethod, setContactMethod] = useState<'whatsapp' | 'email' | null>(null);
  
  // Fonctions pour gérer les contacts
  const handleWhatsAppContact = () => {
    try {
      // Préparer la liste des produits pour le message WhatsApp
      const productsList = cart.map(item => 
        `- ${item.quantity}x ${item.name} (${item.currency}${item.price.toFixed(2)})`
      ).join('\n');
      
      // Créer un message formaté
      const message = `Nouvelle commande sur 3zedshop:\n\n${productsList}\n\nTotal: ${cartTotal.toFixed(2)} €`;
      
      // Encodage du message pour l'URL WhatsApp
      const encodedMessage = encodeURIComponent(message);
      
      // Numéro WhatsApp (à remplacer par votre vrai numéro)
      const phoneNumber = "+33600000000"; // Remplacer par votre numéro
      
      // Ouvrir WhatsApp avec le message préparé
      window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
      
      toast({
        title: "WhatsApp ouvert",
        description: "Votre panier a été transféré dans le message WhatsApp.",
        duration: 3000,
      });
      
      if (onClose) onClose();
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible d'ouvrir WhatsApp. Veuillez réessayer.",
        variant: "destructive",
        duration: 3000,
      });
    }
  };
  
  const handleEmailContact = () => {
    try {
      // Préparer la liste des produits pour l'email
      const productsList = cart.map(item => 
        `- ${item.quantity}x ${item.name} (${item.currency}${item.price.toFixed(2)})`
      ).join('%0D%0A');
      
      // Créer un sujet et un corps de message formatés
      const subject = encodeURIComponent('Nouvelle commande sur 3zedshop');
      const body = encodeURIComponent(`Ma commande sur 3zedshop:\n\n${productsList}\n\nTotal: ${cartTotal.toFixed(2)} €\n\nMerci de me contacter pour finaliser la commande.`);
      
      // Email destinataire (à remplacer par votre email)
      const email = "contact@3zedshop.com"; // Remplacer par votre email
      
      // Ouvrir le client email par défaut avec le message préparé
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
      
      toast({
        title: "Email préparé",
        description: "Votre panier a été transféré dans l'email.",
        duration: 3000,
      });
      
      if (onClose) onClose();
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible d'ouvrir le client email. Veuillez réessayer.",
        variant: "destructive",
        duration: 3000,
      });
    }
  };
  
  return (
    <div className="p-6 bg-dark rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-white">Finaliser ma commande</h2>
      <p className="text-gray-light mb-6">
        Choisissez votre méthode de contact préférée pour finaliser votre commande. Le paiement se fera en main propre à la livraison.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Button 
          onClick={handleWhatsAppContact}
          className="bg-green hover:bg-green-light text-white flex items-center justify-center h-14"
        >
          <Phone className="mr-2 h-5 w-5" />
          Envoyer par WhatsApp
        </Button>
        
        <Button 
          onClick={handleEmailContact}
          className="bg-red hover:bg-red-light text-white flex items-center justify-center h-14"
        >
          <Mail className="mr-2 h-5 w-5" />
          Envoyer par Email
        </Button>
      </div>
      
      <p className="text-center text-xs text-gray-light mt-6">
        Un conseiller vous contactera rapidement pour confirmer votre commande
      </p>
    </div>
  );
};

export default ContactOptions;
