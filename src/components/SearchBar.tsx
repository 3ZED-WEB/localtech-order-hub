
import { useState, useRef, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const SearchBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  // Mock suggestions - in a real app, this would come from an API
  const mockSuggestions = [
    'Gaming Headphones',
    'Wireless Controller',
    'Gaming Mouse',
    'RGB Keyboard',
    'Gaming Chair',
    'Gaming Monitor',
    'VR Headset'
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.length > 1) {
      const filtered = mockSuggestions.filter(item => 
        item.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // In a real app, this would navigate to search results page
    setSuggestions([]);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
      setIsExpanded(false);
      setSuggestions([]);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={searchRef} className="relative">
      <form onSubmit={handleSearchSubmit} className="flex items-center">
        <div className={`flex items-center bg-gray-dark/50 rounded-lg overflow-hidden transition-all duration-300 ${
          isExpanded ? "w-64" : "w-10 md:w-64"
        }`}>
          <button 
            type="submit" 
            className="p-2 text-gray-light hover:text-white"
            onClick={() => !isExpanded && setIsExpanded(true)}
          >
            <Search className="h-5 w-5" />
          </button>
          <Input
            type="text"
            placeholder="Search products..."
            className={`border-none bg-transparent text-white focus:outline-none focus:ring-0 ${
              isExpanded ? "w-full" : "w-0 md:w-full p-0 md:p-2"
            }`}
            value={searchQuery}
            onChange={handleSearchChange}
            onFocus={() => setIsExpanded(true)}
          />
        </div>
      </form>

      {/* Search suggestions */}
      {isExpanded && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-darker border border-gray-dark/50 rounded-md shadow-lg z-50 overflow-hidden">
          <ul>
            {suggestions.map((suggestion, index) => (
              <li key={index} className="px-4 py-2 hover:bg-gray-dark cursor-pointer text-gray-light hover:text-white">
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
