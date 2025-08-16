import React from 'react';
import { Star, ShoppingCart, Eye, Heart, TrendingUp, Sparkles } from 'lucide-react';
import { Product } from '../types/Product';

interface ProductGalleryProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ products, onProductClick }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < Math.floor(rating) 
            ? 'text-yellow-400 fill-current' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="products" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-rose-200/10 to-pink-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-200/10 to-indigo-200/10 rounded-full blur-3xl"></div>
      </div>

      {/* Section Header */}
      <div className="text-center mb-16 relative z-10 animate-fade-in-up">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-sm font-medium rounded-full mb-6 shadow-glow">
          <TrendingUp className="h-4 w-4 mr-2" />
          Curated Selection
        </div>
        <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
          <span className="gradient-text-primary">Beauty Essentials</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Discover our handpicked selection of premium beauty products, each chosen for their 
          quality, effectiveness, and rave reviews from beauty enthusiasts worldwide.
        </p>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {products.map((product, index) => (
          <article 
            key={product.id}
            className="group bg-white rounded-3xl shadow-soft hover:shadow-strong transition-all duration-700 overflow-hidden transform hover:-translate-y-4 animate-fade-in-up card-hover"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Product Image Container */}
            <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 aspect-square">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Enhanced Overlay with Actions */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-6">
                <div className="flex space-x-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <button
                    onClick={() => onProductClick(product)}
                    className="p-4 bg-white/95 backdrop-blur-sm rounded-2xl hover:bg-white transition-all duration-300 transform hover:scale-110 shadow-soft hover:shadow-medium"
                    aria-label={`View details for ${product.title}`}
                  >
                    <Eye className="h-5 w-5 text-gray-800" />
                  </button>
                  <a
                    href={product.amazonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl hover:from-rose-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-110 shadow-glow hover:shadow-strong"
                    aria-label={`Buy ${product.title} on Amazon`}
                  >
                    <ShoppingCart className="h-5 w-5 text-white" />
                  </a>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 right-4">
                <span className="bg-white/95 backdrop-blur-sm text-gray-800 text-xs font-semibold px-3 py-2 rounded-2xl shadow-soft">
                  {product.category}
                </span>
              </div>

              {/* Wishlist Button */}
              <button className="absolute top-4 left-4 p-2 bg-white/95 backdrop-blur-sm rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-2 group-hover:translate-x-0 shadow-soft hover:shadow-medium">
                <Heart className="h-4 w-4 text-gray-600 hover:text-rose-500 transition-colors duration-300" />
              </button>
            </div>

            {/* Product Info */}
            <div className="p-6">
              {/* Rating */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-1">
                  {renderStars(product.rating)}
                  <span className="text-sm text-gray-600 ml-2">
                    ({product.reviewCount.toLocaleString()})
                  </span>
                </div>
                <span className="text-sm font-semibold text-gray-800 bg-gray-100 px-3 py-1 rounded-full">
                  {product.rating}/5
                </span>
              </div>

              {/* Product Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-rose-600 transition-colors duration-300">
                {product.title}
              </h3>

              {/* Product Description */}
              <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                {product.shortDescription}
              </p>

              {/* Price */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl font-bold gradient-text-primary">
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg text-gray-500 line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>
                {product.originalPrice && (
                  <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                    Save {Math.round(((parseFloat(product.originalPrice.replace('$', '')) - parseFloat(product.price.replace('$', ''))) / parseFloat(product.originalPrice.replace('$', ''))) * 100)}%
                  </span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <button
                  onClick={() => onProductClick(product)}
                  className="flex-1 bg-gray-100 text-gray-800 py-3 px-4 rounded-2xl font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-105 focus-ring"
                >
                  Quick View
                </button>
                <a
                  href={product.amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-rose-500 to-pink-500 text-white py-3 px-4 rounded-2xl font-semibold hover:from-rose-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 text-center shadow-glow hover:shadow-strong focus-ring"
                >
                  Buy on Amazon
                </a>
              </div>
            </div>
          </article>
        ))}
        </div>
      </div>

      {/* Beautiful Engagement Section */}
      <div className="text-center mt-16 relative z-10 animate-fade-in-up">
        <div className="relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-rose-50 via-pink-50 to-purple-50 rounded-3xl"></div>
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-r from-rose-200/20 to-pink-200/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-r from-purple-200/20 to-indigo-200/20 rounded-full blur-2xl"></div>
          
          {/* Content */}
          <div className="relative p-12">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full mb-6 shadow-glow animate-pulse">
                <Sparkles className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Discover Your <span className="gradient-text-primary">Perfect Match</span>
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Every product is carefully selected to help you achieve your beauty goals. 
                From skincare essentials to makeup must-haves, find what works for you.
              </p>
            </div>
            
            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  icon: "✨",
                  title: "Expertly Curated",
                  description: "Handpicked by beauty professionals"
                },
                {
                  icon: "🌟",
                  title: "Quality Assured",
                  description: "Only the best products make the cut"
                },
                {
                  icon: "💫",
                  title: "Results Driven",
                  description: "Proven effectiveness for real results"
                }
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-soft hover:shadow-medium transition-all duration-500 hover:scale-105 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default ProductGallery;