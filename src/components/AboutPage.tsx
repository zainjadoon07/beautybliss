import React from 'react';
import { Heart, Target } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <section id="about" className="py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            About 
            <span className="bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent"> Beauty Bliss</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Beauty Bliss, we’re passionate about finding and sharing the best beauty and skincare products available on Amazon. 
            We research, compare, and review items so you can shop smarter and feel confident in your purchases.
          </p>
        </div>

        {/* What We Do */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 mb-16 animate-fade-in-up">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">What We Do</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We are an independent beauty product review site and Amazon Associate. 
                Our mission is to help you discover beauty products that truly work — from skincare essentials and haircare must-haves to trending makeup items.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Every recommendation on Beauty Bliss comes from thorough product research, 
                comparison of real customer feedback, and in some cases, hands-on testing. 
                We earn a small commission when you buy through our links, at no extra cost to you.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Curated beauty products from Amazon"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-rose-500 to-pink-500 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold">★</div>
                  <div className="text-sm">Shop Smart</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-8 animate-fade-in-up">
            <div className="bg-gradient-to-r from-rose-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To save you time and money by curating Amazon’s best beauty finds — highlighting products that are worth buying 
              and avoiding those that aren’t.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8 animate-fade-in-up">
            <div className="bg-gradient-to-r from-purple-500 to-indigo-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Promise</h3>
            <p className="text-gray-700 leading-relaxed">
              We will never recommend a product we don’t believe in. 
              Our reviews are based on unbiased research and genuine user experiences.
            </p>
          </div>
        </div>

        {/* Affiliate Disclaimer */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 text-center animate-fade-in-up">
          <p className="text-sm text-gray-600">
            <strong>Affiliate Disclaimer:</strong> Beauty Bliss is a participant in the Amazon Services LLC Associates Program. 
            This means we may earn a commission on qualifying purchases made through our links, at no additional cost to you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
