import React from 'react';
import { Tag, ArrowRight, Sparkles, Clock, TrendingUp } from 'lucide-react';

import GenericModal from './GenericModal'; // ✅ Import modal

interface Article {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  tags: string[];
  link: string;
}

// Helper functions to get detailed content for each article
const getArticleBenefits = (articleId: string): string[] => {
  const benefitsMap: { [key: string]: string[] } = {
    '1': [
      'Professional-grade exfoliation with dual AHA/BHA formula',
      'Targets stubborn pores and blackheads effectively',
      'Smooths skin texture and improves overall radiance',
      'Suitable for all skin types including sensitive skin',
      'Achieves the coveted Korean glass skin effect',
      'Prevents future breakouts and pore congestion'
    ],
    '2': [
      'Intense overnight hydration with hydrogel technology',
      'Pore minimization and elasticity improvement',
      'Bio-collagen infusion for anti-aging benefits',
      'Creates protective barrier for maximum absorption',
      'Professional-grade results from home use',
      'Suitable for all skin types and concerns'
    ],
    '3': [
      'Complete double cleansing experience',
      'Removes makeup, sunscreen, and environmental pollutants',
      'Targets blackheads and unclogs pores',
      'Maintains skin\'s natural moisture barrier',
      'Gentle yet effective for daily use',
      'Korean skincare innovation for optimal results'
    ],
    '4': [
      '100% USDA Biobased eco-friendly alternative',
      'Eliminates bacteria and residue from traditional towels',
      'Perfect for makeup removal and product application',
      'Maintains optimal skin hygiene',
      'Enhances effectiveness of skincare products',
      'Eczema association accepted for sensitive skin'
    ],
    '5': [
      'Dermatologist-recommended formula',
      'Immediate comfort and long-lasting hydration',
      'Strengthens skin\'s natural barrier',
      'Repairs damaged skin and reduces redness',
      'Perfect foundation for makeup application',
      'Suitable for all skin types including sensitive'
    ],
    '6': [
      'Revolutionary Korean oil cleansing technology',
      'Dissolves stubborn makeup and sunscreen',
      'Penetrates deep into pores for thorough cleaning',
      'Prevents future breakouts and blackheads',
      'Maintains skin\'s natural moisture balance',
      'Ideal for double cleansing routines'
    ],
    '7': [
      'Medical-grade hydrocolloid technology',
      'Shrinks pimples and whiteheads in one use',
      'Creates perfect healing environment',
      'Absorbs excess oil and protects from bacteria',
      'Prevents scarring and reduces inflammation',
      'Dermatologist-tested and proven effective'
    ],
    '8': [
      '24-hour intense hydration with natural shea butter',
      'Luxurious vanilla cashmere fragrance',
      'Lightweight and non-greasy formula',
      'Vegan-friendly and dermatologist-tested',
      'Transforms skin texture and elasticity',
      'Perfect for daily use on all skin types'
    ]
  };
  return benefitsMap[articleId] || [];
};

const getArticleInstructions = (articleId: string): string[] => {
  const instructionsMap: { [key: string]: string[] } = {
    '1': [
      'Start with clean, dry skin',
      'Gently wipe one pad over your face in upward motions',
      'Focus on areas with visible pores or texture concerns',
      'Use 2-3 times per week for best results',
      'Follow with your regular moisturizer and sunscreen',
      'Store in a cool, dry place to maintain effectiveness'
    ],
    '2': [
      'Cleanse your face thoroughly before application',
      'Remove the mask from its packaging carefully',
      'Apply the hydrogel mask to clean, dry skin',
      'Leave on overnight for maximum benefits',
      'Remove in the morning and rinse with lukewarm water',
      'Use 2-3 times per week for optimal results'
    ],
    '3': [
      'Begin with oil-based cleanser to remove makeup',
      'Follow with this water-based foam cleanser',
      'Apply a small amount to damp skin',
      'Gently massage in circular motions for 1-2 minutes',
      'Rinse thoroughly with lukewarm water',
      'Continue with your regular skincare routine'
    ],
    '4': [
      'Use a fresh towel for each skincare step',
      'Gently pat face after cleansing or applying products',
      'Use for makeup removal and product application',
      'Dispose of used towels properly',
      'Store in a clean, dry location',
      'Replace regularly to maintain hygiene'
    ],
    '5': [
      'Apply to clean, dry skin morning and evening',
      'Use a pea-sized amount for the entire face',
      'Gently massage in upward, circular motions',
      'Allow to absorb for 1-2 minutes',
      'Follow with sunscreen in the morning',
      'Can be used alone or under makeup'
    ],
    '6': [
      'Start with dry hands and dry face',
      'Apply 2-3 pumps of oil to your face',
      'Gently massage in circular motions for 1-2 minutes',
      'Rinse with lukewarm water',
      'Follow with water-based cleanser',
      'Continue with your regular routine'
    ],
    '7': [
      'Clean the affected area thoroughly',
      'Remove one patch from the backing',
      'Apply directly to the blemish',
      'Leave on for 6-8 hours or overnight',
      'Remove gently and dispose of properly',
      'Repeat as needed until blemish heals'
    ],
    '8': [
      'Apply to clean, dry skin after showering',
      'Use generous amount for full body coverage',
      'Massage in circular motions until absorbed',
      'Focus on dry areas like elbows and knees',
      'Can be used morning and evening',
      'Store in a cool, dry place'
    ]
  };
  return instructionsMap[articleId] || [];
};

const getArticleTips = (articleId: string): string[] => {
  const tipsMap: { [key: string]: string[] } = {
    '1': [
      'Start with 1-2 times per week and gradually increase',
      'Always follow with SPF as AHA/BHA increase sun sensitivity',
      'Don\'t use on broken or irritated skin',
      'Store in refrigerator for extra cooling effect',
      'Use in the evening for best results',
      'Combine with gentle exfoliation for enhanced benefits'
    ],
    '2': [
      'Store masks in refrigerator for extra cooling effect',
      'Use after a warm shower for better absorption',
      'Don\'t use if you have active breakouts',
      'Combine with gentle facial massage for better results',
      'Use consistently for 2-4 weeks to see results',
      'Keep skin hydrated throughout the day'
    ],
    '3': [
      'Use lukewarm water for rinsing to avoid irritation',
      'Don\'t over-cleanse - twice daily is sufficient',
      'Follow with hydrating toner to restore pH balance',
      'Use gentle, circular motions to avoid irritation',
      'Don\'t use on broken or irritated skin',
      'Combine with gentle exfoliation 2-3 times per week'
    ],
    '4': [
      'Use different towels for different skincare steps',
      'Store in a clean, dry location away from moisture',
      'Replace towels regularly to maintain hygiene',
      'Use gentle patting motions, not rubbing',
      'Keep a small stash in your travel bag',
      'Consider using for sensitive areas like under eyes'
    ],
    '5': [
      'Apply to slightly damp skin for better absorption',
      'Use in the morning for makeup preparation',
      'Can be layered with other products if needed',
      'Store in a cool, dry place away from direct sunlight',
      'Use consistently for 4-6 weeks to see full results',
      'Combine with gentle exfoliation for enhanced benefits'
    ],
    '6': [
      'Use on dry skin for maximum effectiveness',
      'Don\'t skip the double cleanse step',
      'Use gentle, circular motions to avoid irritation',
      'Rinse thoroughly to remove all oil residue',
      'Follow with water-based cleanser for complete cleansing',
      'Use 1-2 times daily for best results'
    ],
    '7': [
      'Don\'t pop pimples before applying patches',
      'Use on clean, dry skin for best adhesion',
      'Leave patches on for at least 6 hours',
      'Don\'t reuse patches - use fresh ones each time',
      'Combine with gentle cleansing routine',
      'Use consistently for best results'
    ],
    '8': [
      'Apply to damp skin for better absorption',
      'Use in the morning for all-day hydration',
      'Can be layered with other body products',
      'Store in a cool, dry place away from heat',
      'Use consistently for 2-4 weeks to see results',
      'Combine with gentle exfoliation for enhanced benefits'
    ]
  };
  return tipsMap[articleId] || [];
};

const getArticleFeatures = (articleId: string): string[] => {
  const featuresMap: { [key: string]: string[] } = {
    '1': [
      '4.5% AHA Lactic Acid for gentle exfoliation',
      '0.45% BHA Salicylic Acid for pore care',
      'Dual-textured pads for optimal application',
      'Korean skincare innovation',
      'Suitable for all skin types',
      '70 units per package'
    ],
    '2': [
      'Bio-collagen technology for anti-aging',
      'Hydrogel formula for maximum absorption',
      '34g per mask for intensive treatment',
      'Overnight application for best results',
      'Pore minimizing properties',
      'Elasticity improvement formula'
    ],
    '3': [
      'Heartleaf extract for gentle cleansing',
      'BHA for pore unclogging',
      'Hyaluronic acid for hydration',
      'Glycerin for moisture retention',
      '150ml/5.07 fl.oz. size',
      'Korean skincare formulation'
    ],
    '4': [
      '100% USDA Biobased material',
      'Eczema association accepted',
      'Ultra-soft texture for gentle use',
      '50 count package',
      'Disposable for optimal hygiene',
      'Makeup remover compatible'
    ],
    '5': [
      'Ceramide-infused formula',
      'Niacinamide for skin barrier support',
      'Fragrance-free formulation',
      'Suitable for all skin types',
      'Immediate comfort formula',
      'Long-lasting hydration'
    ],
    '6': [
      'Heartleaf extract for gentle cleansing',
      'Advanced oil cleansing technology',
      '200ml/6.76 fl.oz. size',
      'Korean skincare innovation',
      'Makeup and sunscreen removal',
      'Blackhead prevention formula'
    ],
    '7': [
      'Medical-grade hydrocolloid technology',
      '36 count package',
      'Overnight spot treatment',
      'Dermatologist-tested formula',
      'Oil-absorbing properties',
      'Gentle on all skin types'
    ],
    '8': [
      'Natural shea butter for intense hydration',
      'Vanilla cashmere fragrance',
      '24-hour moisture formula',
      'Vegan-friendly ingredients',
      '16 fl.oz. size',
      'Lightweight, non-greasy texture'
    ]
  };
  return featuresMap[articleId] || [];
};

const ArticlesPage: React.FC = () => {
   const articles: Article[] = [
    {
      id: '1',
      title: 'Transform Your Skin with Medicube Zero Pore Pads 2.0: The Ultimate Korean Exfoliation Solution',
      excerpt: 'Discover the revolutionary power of dual-textured facial toner pads that combine 4.5% AHA Lactic Acid and 0.45% BHA Salicylic Acid for professional-grade exfoliation. These innovative Korean skincare pads are designed to target stubborn pores, smooth skin texture, and reveal your most radiant complexion. Perfect for all skin types, the Medicube Zero Pore Pads 2.0 offer a gentle yet effective approach to pore care that fits seamlessly into your daily routine. Learn how this breakthrough formula can transform your skincare game and achieve the glass skin effect that Korean beauty is famous for.',
      image: 'https://dubuypk.com/cdn/shop/files/file_1200x1200.jpg?v=1751602530',
      category: 'Skincare',
      tags: ['exfoliation', 'pore care', 'korean skincare', 'aha bha'],
      link:'https://amzn.to/3V2QPkc'
    },
    {
      id: '2',
      title: 'Unlock Overnight Skin Transformation with BIODANCE Bio-Collagen Deep Masks',
      excerpt: 'Experience the future of overnight skincare with these revolutionary hydrogel masks infused with bio-collagen technology. These innovative 34g masks deliver intense hydration while working their magic while you sleep, targeting pore minimization and elasticity improvement. The unique hydrogel formula creates a protective barrier that locks in moisture and active ingredients, ensuring maximum absorption and results. Discover how this cutting-edge Korean beauty innovation can transform your skin\'s texture, firmness, and overall radiance in just one night. Perfect for those seeking professional-grade results from the comfort of their home.',
      image: 'https://highfy.pk/cdn/shop/files/Biodance-_-Bio-Collagen-Real-Deep-Mask-with-box_1024x1024_4374ea7f-5f72-4128-a18c-0810b9bb87d5.webp?v=1729057787&width=1445',
      category: 'Skincare',
      tags: ['overnight masks', 'collagen', 'hydration', 'anti-aging'],
      link:'https://amzn.to/45gz1rU'
    },
    {
      id: '3',
      title: 'Master the Art of Double Cleansing with ANUA Heartleaf Quercetinol Foam',
      excerpt: 'Elevate your skincare routine with the ultimate double cleansing experience featuring this Korean powerhouse cleanser. The ANUA Heartleaf Quercetinol Pore Deep Cleansing Foam combines the gentle power of heartleaf extract with potent BHA, hyaluronic acid, and glycerin for a cleansing experience that goes beyond surface-level cleaning. This innovative formula not only removes makeup and impurities but also targets blackheads, unclogs pores, and maintains your skin\'s natural moisture barrier. Discover the science behind double cleansing and how this 150ml wonder can transform your skin\'s clarity, texture, and overall health while preserving its natural balance.',
      image: 'https://ameena.pk/cdn/shop/files/anua-cleanser-150ml-heartleaf-quercetinol-pore-deep-cleansing-foam-44110356611350_1024x1024_7835feca-f662-4647-a178-57e805dc46d1.webp?v=1729262982',
      category: 'Skincare',
      tags: ['double cleansing', 'korean skincare', 'bha', 'pore care'],
      link:'https://amzn.to/45gWZTV'
    },
    {
      id: '4',
      title: 'Revolutionize Your Skincare Routine with Clean Skin Club\'s Biobased Face Towels',
      excerpt: 'Transform your daily skincare ritual with these innovative 100% USDA Biobased disposable face towels that are revolutionizing the beauty industry. These ultra-soft, eczema association-accepted towelettes provide the perfect foundation for any skincare routine, ensuring your skin receives maximum benefits from your products. The Clean Skin Club Clean Towels XL™ eliminate the bacteria and residue that traditional towels can harbor, making them ideal for makeup removal, product application, and maintaining skin hygiene. Discover how switching to these eco-friendly alternatives can improve your skin\'s health, prevent breakouts, and enhance the effectiveness of your entire skincare regimen.',
      image: 'https://i5.walmartimages.com/seo/Clean-Skin-Club-XL-Disposable-Face-Towels-100-Biobased-Dermatologist-Approved-Ultra-Soft-Makeup-Remover-Wipes-300-ct-6-pack_fde7dc87-c937-4335-91b1-36dffee28ba6.f9aa546921fbbca15b320e1436066f80.jpeg',
      category: 'Skincare Tools',
      tags: ['skincare tools', 'hygiene', 'eco-friendly', 'makeup removal'],
      link:'https://amzn.to/46Y5EvU'
    },
    {
      id: '5',
      title: 'Achieve Skin Perfection with La Roche-Posay Toleriane Double Repair Face Moisturizer',
      excerpt: 'Discover the dermatologist-recommended solution for achieving perfectly balanced, hydrated skin with this revolutionary ceramide and niacinamide-infused moisturizer. The La Roche-Posay Toleriane Double Repair Face Moisturizer delivers immediate comfort and long-lasting hydration while strengthening your skin\'s natural barrier. This fragrance-free formula is specifically designed for all skin types, including sensitive skin, and provides the perfect foundation for makeup application. Learn how the combination of ceramides and niacinamide works synergistically to repair damaged skin, reduce redness, and maintain optimal moisture levels throughout the day. Experience the confidence that comes with having skin that looks and feels its absolute best.',
      image: 'https://springs.com.pk/cdn/shop/files/3337875545846.jpg?v=1751974122',
      category: 'Skincare',
      tags: ['moisturizer', 'ceramides', 'niacinamide', 'dermatologist-recommended'],
      link:'https://amzn.to/4mI6elJ'
    },
    {
      id: '6',
      title: 'Master the Korean Double Cleanse with ANUA Heartleaf Pore Control Cleansing Oil',
      excerpt: 'Unlock the secret to flawless skin with this revolutionary Korean oil cleanser that transforms the way you remove makeup and impurities. The ANUA Heartleaf Pore Control Cleansing Oil combines the gentle power of heartleaf extract with advanced oil cleansing technology to dissolve even the most stubborn makeup, sunscreen, and environmental pollutants. This 200ml powerhouse not only removes surface impurities but also penetrates deep into pores to eliminate blackheads and prevent future breakouts. Discover how incorporating this oil cleanser into your double cleansing routine can transform your skin\'s clarity, texture, and overall health while maintaining its natural moisture balance.',
      image: 'https://www.medoget.com/cdn/shop/files/Anua_Heartleaf_Pore_Control_Cleansing_Oil_Mild_-_Sensitive_Skin.png?v=1736354039',
      category: 'Skincare',
      tags: ['oil cleansing', 'double cleansing', 'korean skincare', 'makeup removal'],
      link:'https://amzn.to/4lm1gtT'
    },
    {
      id: '7',
      title: 'Banish Breakouts Overnight with Mighty Patch™ Original Acne Patches',
      excerpt: 'Experience the revolutionary power of hydrocolloid technology that\'s changing the way we treat acne and blemishes. The Mighty Patch™ Original patches from Hero Cosmetics utilize advanced medical-grade hydrocolloid to shrink pimples and whiteheads in just one use. These innovative nighttime spot stickers create the perfect healing environment by absorbing excess oil and protecting blemishes from bacteria and irritation. Discover how these dermatologist-tested patches can transform your acne treatment routine, reduce inflammation, and prevent scarring while you sleep. Learn the science behind hydrocolloid technology and how it\'s become the #1 choice for effective, gentle acne treatment.',
      image: 'https://i5.walmartimages.com/asr/6d3bfe9b-8869-4ebe-bb70-670116f0b174.5031e96be432c6b7eed17f482645ef98.png',
      category: 'Acne Treatment',
      tags: ['acne treatment', 'hydrocolloid patches', 'spot treatment', 'overnight care'],
      link:'https://amzn.to/46X8Uri'
    },
    {
      id: '8',
      title: 'Indulge in 24-Hour Luxury with eos Shea Better Body Lotion Vanilla Cashmere',
      excerpt: 'Transform your daily moisturizing ritual into a luxurious spa experience with this premium 24-hour moisture body lotion. The eos Shea Better Body Lotion in Vanilla Cashmere combines the nourishing power of natural shea butter with a sophisticated vanilla cashmere fragrance that lingers throughout the day. This lightweight, non-greasy formula is specially formulated to provide intense hydration while maintaining the skin\'s natural moisture barrier. Discover how this vegan-friendly, dermatologist-tested formula can transform your skin\'s texture, elasticity, and overall radiance. Perfect for daily use, this 16 fl oz wonder provides the perfect balance of luxury and effectiveness for all skin types.',
      image: 'https://evolutionofsmooth.com/cdn/shop/files/eos-body-lotion-vanilla-cashmere_5d16bdfa-a9b5-42a2-b7ab-4009f782aab6.jpg?v=1745518779',
      category: 'Body Care',
      tags: ['body lotion', 'shea butter', '24-hour moisture', 'vanilla cashmere'],
      link:'https://amzn.to/4lpkTBh'
    }
  ];

  const redirect = (link: string) => {
    window.open(link, '_blank');
  };
  
  const categories = ['All', 'Skincare', 'Skincare Tools', 'Acne Treatment', 'Body Care'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const [openArticle, setOpenArticle] = React.useState<Article | null>(null);

  const filteredArticles = selectedCategory === 'All'
    ? articles
    : articles.filter(article => article.category === selectedCategory);

  return (
    <section id="articles" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-200/10 to-indigo-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-r from-rose-200/10 to-pink-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-sm font-medium rounded-full mb-6 shadow-glow">
            <Sparkles className="h-4 w-4 mr-2 animate-pulse" />
            Expert Beauty Insights
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Beauty 
            <span className="gradient-text-primary"> Articles</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Expert tips, in-depth reviews, and the latest beauty trends to help you 
            look and feel your absolute best.
          </p>
        </div>

        {/* Enhanced Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up stagger-1">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-500 focus-ring ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-glow transform scale-105'
                  : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-rose-50 hover:text-rose-600 border border-gray-200 hover:border-rose-200 hover:shadow-soft'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Enhanced Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <article 
              key={article.id}
              className="group bg-white/90 backdrop-blur-sm rounded-3xl shadow-soft hover:shadow-strong transition-all duration-700 overflow-hidden transform hover:-translate-y-4 animate-fade-in-up card-hover cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setOpenArticle(article)}
            >
              {/* Enhanced Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/95 backdrop-blur-sm text-gray-800 text-xs font-semibold px-3 py-2 rounded-2xl shadow-soft">
                    {article.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Read More Indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <div className="bg-white/95 backdrop-blur-sm text-rose-600 text-xs font-semibold px-3 py-2 rounded-2xl shadow-soft flex items-center space-x-1">
                    <span>Read More</span>
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </div>

              {/* Enhanced Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-rose-600 transition-colors duration-300">
                  {article.title}
                </h2>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>

                {/* Enhanced Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center text-xs bg-rose-50 text-rose-700 px-3 py-1 rounded-full border border-rose-100 hover:bg-rose-100 transition-colors duration-300"
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Enhanced Modal */}
      {openArticle && (
        <GenericModal title={openArticle.title} onClose={() => setOpenArticle(null)}>
          <div className="space-y-6">
            {/* Hero Image */}
            <img
              src={openArticle.image}
              alt={openArticle.title}
              className="w-full rounded-2xl shadow-strong"
            />
            
            {/* Main Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {openArticle.excerpt}
              </p>
              
              {/* Key Benefits Section */}
              <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-6 rounded-2xl mb-6 border border-rose-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Sparkles className="h-5 w-5 mr-2 text-rose-500" />
                  ✨ Key Benefits
                </h3>
                <ul className="space-y-3">
                  {getArticleBenefits(openArticle.id).map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-rose-500 text-lg">•</span>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* How to Use Section */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl mb-6 border border-blue-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-blue-500" />
                  🔧 How to Use
                </h3>
                <ol className="space-y-3">
                  {getArticleInstructions(openArticle.id).map((instruction, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="bg-blue-500 text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-gray-700">{instruction}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Pro Tips Section */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl mb-6 border border-amber-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-amber-500" />
                  💡 Pro Tips
                </h3>
                <ul className="space-y-3">
                  {getArticleTips(openArticle.id).map((tip, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-amber-500 text-lg">💡</span>
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ingredients/Features Section */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl mb-6 border border-green-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Tag className="h-5 w-5 mr-2 text-green-500" />
                  🌿 Key Ingredients & Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {getArticleFeatures(openArticle.id).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <span className="text-green-500 text-lg">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced Call to Action */}
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-8 rounded-2xl text-center border border-purple-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Skin?</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Experience the results for yourself with this premium {openArticle.category.toLowerCase()} solution.
                </p>
                <button 
                  onClick={() => redirect(openArticle.link)} 
                  className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:from-rose-600 hover:to-pink-600 transition-all duration-500 transform hover:scale-105 shadow-glow hover:shadow-strong focus-ring"
                >
                  Buy on Amazon
                </button>
              </div>
            </div>
          </div>
        </GenericModal>
      )}
    </section>
  );
};

export default ArticlesPage;


