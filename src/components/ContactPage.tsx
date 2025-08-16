import React, { useState } from 'react';
import { Mail, Send, Clock, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.send(
        import.meta.env.VITE_service_key, // Service ID
        import.meta.env.VITE_template_key, // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        import.meta.env.VITE_public_key // Public Key
      );

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 3000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Get In
            <span className="bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
              {' '}
              Touch
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have a question about our Amazon-recommended beauty products? Looking for a personal
            skincare or makeup suggestion? We’re here to help you find products that truly work for
            your skin type and beauty goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-fade-in-up">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Let’s Connect</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-rose-500 to-pink-500 p-3 rounded-xl shadow-lg flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email Us</h3>
                    <p className="text-gray-600 mb-2">
                      Whether it’s about a product review, brand collaboration, or affiliate
                      partnership — we’d love to hear from you.
                    </p>
                    <a
                      href="mailto:affiliatebeauty@glowreviews.com"
                      className="text-rose-600 hover:text-rose-700 font-medium"
                    >
                      zainulabdin.atd@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4"></div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-3 rounded-xl shadow-lg flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Response Time</h3>
                    <p className="text-gray-600 mb-2">
                      We respond quickly so you can shop confidently.
                    </p>
                    <span className="text-emerald-600 font-medium">Within 24 hours</span>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="mt-10 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Can you suggest beauty products for my skin type?
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Absolutely! Send us your skin concerns, and we’ll share Amazon products with
                      high ratings that match your needs.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Do you accept free samples from brands?
                    </h4>
                    <p className="text-gray-600 text-sm">
                      We do, but only products that meet our testing criteria will be featured and
                      linked to Amazon via our affiliate partnership.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-up">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-xl">
              {!isSubmitted ? (
                <>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select a topic</option>
                        <option value="product-question">Amazon Product Question</option>
                        <option value="recommendation">Get a Product Recommendation</option>
                        <option value="collaboration">Brand Collaboration</option>
                        <option value="feedback">Website Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="Tell us about your beauty needs..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-rose-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                    >
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h3>
                  <p className="text-gray-600 mb-6">
                    Thanks for reaching out! Our beauty team will respond with Amazon product
                    recommendations tailored just for you.
                  </p>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4">
                    <p className="text-green-800 text-sm">
                      💌 Please keep an eye out for our
                      reply.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
