import React from 'react';

const ArticleSection: React.FC = () => {
  return (
    <article className="max-w-7xl mx-auto mb-16 bg-white rounded-2xl shadow-xl p-8 lg:p-12 animate-fade-in-up">
      {/* Article Header */}
      <header className="mb-8">
        
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          The Ultimate Guide to Building Your Perfect Skincare Routine in 2025
        </h1>
        
        <p className="text-xl text-gray-600 leading-relaxed">
          Discover the science-backed secrets to achieving radiant, healthy skin with our comprehensive guide 
          to modern skincare. From understanding your skin type to choosing the right products, we'll help you 
          create a routine that delivers real results.
        </p>
      </header>

      {/* Jump to Products Button */}
      <div className="mb-8 text-center animate-fade-in-up">
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-amber-900 mb-3">
            🛍️ Ready to Shop? Skip to Curated Products!
          </h3>
          <p className="text-amber-800 mb-4 text-sm">
            Save time and jump directly to our handpicked Amazon beauty products. 
            Secure checkout, Prime shipping, and easy returns guaranteed.
          </p>
          <a
            href="#products"
            className="inline-flex items-center bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-3 rounded-full font-bold hover:from-rose-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            🛒 Shop Now on Amazon
          </a>
        </div>
      </div>

      {/* Featured Image */}
      <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
        <img 
          src="https://images.pexels.com/photos/3762869/pexels-photo-3762869.jpeg?auto=compress&cs=tinysrgb&w=800" 
          alt="Beautiful woman applying skincare products with natural lighting"
          className="w-full h-64 lg:h-80 object-cover"
          loading="lazy"
        />
      </div>

      {/* Article Content */}
      <div className="prose prose-lg max-w-none">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-8">
          Why Your Skincare Routine Matters More Than Ever
        </h2>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          In today's fast-paced world, our skin faces more challenges than ever before. Environmental 
          pollutants, blue light exposure, stress, and lifestyle factors all contribute to premature aging 
          and skin concerns. A well-structured skincare routine isn't just about vanity—it's about 
          maintaining the health and barrier function of your largest organ.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Research shows that consistent skincare habits can significantly improve skin texture, reduce 
          signs of aging, and prevent future damage. The key is understanding your unique skin needs and 
          choosing products with scientifically-proven ingredients that work synergistically together.
        </p>

        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-8">
          Understanding Your Skin Type: The Foundation of Great Skincare
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          Before diving into product recommendations, it's crucial to identify your skin type. This 
          knowledge will guide every decision in your skincare journey, from cleansers to serums to moisturizers.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-6">
          The Five Main Skin Types
        </h3>

        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
          <li><strong>Normal Skin:</strong> Balanced oil production, minimal sensitivity, few blemishes</li>
          <li><strong>Oily Skin:</strong> Excess sebum production, enlarged pores, prone to acne</li>
          <li><strong>Dry Skin:</strong> Insufficient oil production, rough texture, may feel tight</li>
          <li><strong>Combination Skin:</strong> Oily T-zone with normal to dry cheeks</li>
          <li><strong>Sensitive Skin:</strong> Easily irritated, prone to redness and reactions</li>
        </ul>

        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-8">
          The Science-Backed Skincare Routine Order
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          The order in which you apply your skincare products can make or break your routine's effectiveness. 
          Follow the golden rule: apply products from thinnest to thickest consistency, and always start 
          with clean skin.
        </p>

        <div className="bg-rose-50 p-6 rounded-lg mb-6">
          <h4 className="font-semibold text-rose-900 mb-3">Morning Routine Order:</h4>
          <ol className="list-decimal pl-6 space-y-1 text-rose-800">
            <li>Gentle cleanser</li>
            <li>Toner (if using)</li>
            <li>Vitamin C serum</li>
            <li>Hyaluronic acid serum</li>
            <li>Moisturizer</li>
            <li>SPF 30+ sunscreen</li>
          </ol>
        </div>

        <div className="bg-purple-50 p-6 rounded-lg mb-6">
          <h4 className="font-semibold text-purple-900 mb-3">Evening Routine Order:</h4>
          <ol className="list-decimal pl-6 space-y-1 text-purple-800">
            <li>Oil cleanser (if wearing makeup)</li>
            <li>Water-based cleanser</li>
            <li>Exfoliant (2-3x per week)</li>
            <li>Treatment serum (retinol, niacinamide)</li>
            <li>Hydrating serum</li>
            <li>Night moisturizer</li>
            <li>Face oil (optional)</li>
          </ol>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-8">
          Key Ingredients That Transform Your Skin
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          Not all skincare ingredients are created equal. Focus on these proven powerhouses that have 
          extensive research backing their effectiveness:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-lg">
            <h4 className="font-semibold text-orange-900 mb-2">Vitamin C</h4>
            <p className="text-orange-800 text-sm">
              Powerful antioxidant that brightens skin, stimulates collagen production, and protects 
              against environmental damage. Use in the morning for best results.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">Hyaluronic Acid</h4>
            <p className="text-blue-800 text-sm">
              Holds up to 1000 times its weight in water, providing intense hydration and plumping 
              effect. Suitable for all skin types, including oily and acne-prone skin.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg">
            <h4 className="font-semibold text-purple-900 mb-2">Retinol</h4>
            <p className="text-purple-800 text-sm">
              The gold standard for anti-aging, retinol accelerates cell turnover, reduces fine lines, 
              and improves skin texture. Start slowly and always use with sunscreen.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg">
            <h4 className="font-semibold text-green-900 mb-2">Niacinamide</h4>
            <p className="text-green-800 text-sm">
              Regulates oil production, minimizes pores, and reduces inflammation. This versatile 
              ingredient works well with other actives and suits sensitive skin.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-8">
          Common Skincare Mistakes to Avoid
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          Even with the best intentions, these common mistakes can sabotage your skincare results:
        </p>

        <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-6">
          <ul className="space-y-3 text-red-800">
            <li>• Over-exfoliating or using too many active ingredients at once</li>
            <li>• Skipping sunscreen or using insufficient amounts</li>
            <li>• Not patch-testing new products</li>
            <li>• Expecting immediate results—skincare requires patience</li>
            <li>• Using products not suited for your skin type</li>
            <li>• Inconsistent application—consistency is key to results</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-8">
          Building Your Perfect Routine: A Step-by-Step Approach
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          Rome wasn't built in a day, and neither should your skincare routine. Start with the basics 
          and gradually introduce new products every 2-4 weeks to allow your skin to adjust and to 
          identify what works best for you.
        </p>

        <div className="bg-gradient-to-r from-rose-100 to-pink-100 p-8 rounded-2xl">
          <h4 className="font-bold text-rose-900 text-xl mb-4">
            Ready to Transform Your Skin?
          </h4>
          <p className="text-rose-800 mb-4">
            Browse our carefully curated selection of premium skincare products below. Each product 
            has been selected based on ingredient quality, scientific research, and real user results.
          </p>
          <p className="text-rose-700 text-sm">
            Remember: Great skincare is an investment in yourself. Choose quality over quantity, 
            and your skin will thank you for years to come.
          </p>
        </div>
      </div>

      {/* Read More Articles Section */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="text-center bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Want More Beauty Tips?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Explore our complete collection of beauty articles, product reviews, and expert guides. 
            From makeup tutorials to skincare science, we've got you covered.
          </p>
          <a
            href="#articles"
            onClick={(e) => {
              e.preventDefault();
              // This will be handled by the parent component's navigation
              const event = new CustomEvent('navigate', { detail: 'articles' });
              window.dispatchEvent(event);
            }}
            className="inline-flex items-center bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-8 py-3 rounded-full font-bold hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            📚 Read More Articles
          </a>
        </div>
      </div>
    </article>
  );
};

export default ArticleSection;