import { useState, useEffect } from "react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import ArticlesPage from "./components/ArticlesPage";
import ArticleSection from "./components/ArticleSection";
import ProductGallery from "./components/ProductGallery";
import ProductModal from "./components/ProductModal";
import Footer from "./components/Footer";
import { Product } from "./types/Product";
import { products } from "./data/products";
import { Analytics } from '@vercel/analytics/react';


function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentPage, setCurrentPage] = useState("home");
  const [isLoading, setIsLoading] = useState(true);
  const [floatingIcons, setFloatingIcons] = useState<
    Array<{ id: number; x: number; y: number; icon: string; delay: number }>
  >([]);

  useEffect(() => {
    const handleNavigate = (event: CustomEvent) => {
      setCurrentPage(event.detail);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("navigate", handleNavigate as EventListener);

    const icons = ["✨", "💄", "🌸", "💅", "🌺", "🦋", "💎", "🌙", "⭐", "🌿"];
    const newFloatingIcons = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      icon: icons[Math.floor(Math.random() * icons.length)],
      delay: Math.random() * 10,
    }));
    setFloatingIcons(newFloatingIcons);

    return () => {
      window.removeEventListener("navigate", handleNavigate as EventListener);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const openProductModal = (product: Product) => {
    setSelectedProduct(product);
    document.body.style.overflow = "hidden";
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = "unset";
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <>
            <HomePage />
            <ArticleSection />
            <ProductGallery products={products} onProductClick={openProductModal} />
          </>
        );
      case "about":
        return <AboutPage />;
      case "contact":
        return <ContactPage />;
      case "products":
        return <ProductGallery products={products} onProductClick={openProductModal} />;
      case "articles":
        return <ArticlesPage />;
      default:
        return (
          <>
            <HomePage />
            <ArticleSection />
            <ProductGallery products={products} onProductClick={openProductModal} />
          </>
        );
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 via-purple-50 to-indigo-100 flex items-center justify-center relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-rose-400/20 to-pink-400/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-indigo-400/20 rounded-full blur-3xl animate-float-slow"></div>
        </div>
        
        {/* Enhanced Floating Icons */}
        {floatingIcons.map((item) => (
          <div
            key={item.id}
            className="absolute text-3xl opacity-60 animate-float"
            style={{
              left: `${item.x}%`,
              top: `${item.y}%`,
              animationDelay: `${item.delay}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          >
            {item.icon}
          </div>
        ))}
        
        {/* Enhanced Loading Content */}
        <div className="text-center relative z-10 flex flex-col items-center justify-center">
          <div className="relative mb-6 flex items-center justify-center">
            <div className="w-20 h-20 border-4 border-rose-200 rounded-full animate-spin"></div>
            <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-t-rose-500 rounded-full animate-spin" style={{ animationDuration: '1s' }}></div>
            <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-b-pink-500 rounded-full animate-spin" style={{ animationDuration: '1.5s' }}></div>
          </div>
          <h2 className="text-2xl font-bold gradient-text-primary mb-2">Beauty Bliss</h2>
          <p className="text-rose-600 font-medium">Loading your beauty journey...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 via-purple-50 to-indigo-100 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-50 via-rose-50 via-purple-50 to-indigo-100"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-rose-400/5 to-pink-400/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-400/5 to-indigo-400/5 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-rose-200/3 to-purple-200/3 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      {/* Enhanced Floating Icons */}
      {floatingIcons.map((item) => (
        <div
          key={item.id}
          className="fixed text-2xl opacity-10 animate-float pointer-events-none z-0"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            animationDelay: `${item.delay}s`,
            animationDuration: `${8 + Math.random() * 4}s`,
          }}
        >
          {item.icon}
        </div>
      ))}

      <div className="relative z-10">
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

        <main className="container mx-auto px-4 py-8">
          <div className="animate-fade-in">{renderCurrentPage()}</div>
        </main>

        <Footer setCurrentPage={setCurrentPage} />

        {selectedProduct && <ProductModal product={selectedProduct} onClose={closeProductModal} />}
      </div>
      
      <Analytics />
    </div>
  );
}

export default App;
