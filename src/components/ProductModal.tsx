import React, { useEffect } from 'react';
import { X, Star, ShoppingCart, Shield, Truck, RotateCcw } from 'lucide-react';
import { Product } from '../types/Product';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < Math.floor(rating) 
            ? 'text-yellow-400 fill-current' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  const handleBackdropClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between rounded-t-2xl">
          <h2 className="text-2xl font-bold text-gray-900 pr-4">
            Product Details
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            aria-label="Close modal"
          >
            <X className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="relative bg-gray-50 rounded-xl overflow-hidden aspect-square">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                  id={`product-image-${product.id}`}
                  onMouseMove={(e) => {
                    const img = e.currentTarget;
                    const rect = img.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    const xPercent = (x / rect.width) * 100;
                    const yPercent = (y / rect.height) * 100;
                    
                    img.style.transformOrigin = `${xPercent}% ${yPercent}%`;
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(2)';
                    e.currentTarget.style.cursor = 'zoom-out';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.cursor = 'zoom-in';
                  }}
                />

                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-sm font-semibold px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-3 text-center text-sm">
                <div className="flex flex-col items-center p-3 bg-green-50 rounded-lg">
                  <Shield className="h-6 w-6 text-green-600 mb-1" />
                  <span className="text-green-800 font-medium">Secure</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-blue-50 rounded-lg">
                  <Truck className="h-6 w-6 text-blue-600 mb-1" />
                  <span className="text-blue-800 font-medium">Fast Ship</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-purple-50 rounded-lg">
                  <RotateCcw className="h-6 w-6 text-purple-600 mb-1" />
                  <span className="text-purple-800 font-medium">Returns</span>
                </div>
              </div>
            </div>

            {/* Product Information */}
            <div className="space-y-6">
              {/* Title and Rating */}
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-3">
                  {product.title}
                </h1>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-lg font-semibold text-gray-800">
                    {product.rating}/5
                  </span>
                  <span className="text-gray-600">
                    ({product.reviewCount.toLocaleString()} reviews)
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-4">
                <span className="text-4xl font-bold text-gray-900">
                  {product.price}
                </span>
                {product.originalPrice && (
                  <div className="flex flex-col">
                    <span className="text-xl text-gray-500 line-through">
                      {product.originalPrice}
                    </span>
                    <span className="text-green-600 font-semibold text-sm">
                      Save {Math.round(((parseFloat(product.originalPrice.replace('$', '')) - parseFloat(product.price.replace('$', ''))) / parseFloat(product.originalPrice.replace('$', ''))) * 100)}%
                    </span>
                  </div>
                )}
              </div>

              {/* Description */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Product Description
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {product.fullDescription}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* SEO Keywords (hidden but useful for SEO) */}
              <div className="sr-only">
                <p>Related keywords: {product.seoKeywords.join(', ')}</p>
              </div>

              {/* Call to Action */}
              <div className="space-y-4 pt-4 border-t border-gray-200">
                <a
                  href={product.amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-rose-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <ShoppingCart className="h-6 w-6 mr-3" />
                  Buy Now on Amazon
                </a>
                
                <div className="text-center text-sm text-gray-600">
                  <p>🔒 Secure checkout through Amazon</p>
                  <p>🚚 Prime eligible for fast shipping</p>
                  <p>↩️ Easy returns with Amazon's policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;