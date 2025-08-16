import { Product } from '../types/Product';

export const products: Product[] = [
  {
    id: '1',
    title: 'Premium Vitamin C Brightening Serum',
    shortDescription: 'Advanced anti-aging serum with 20% Vitamin C for radiant, youthful skin.',
    fullDescription: 'Transform your skincare routine with our premium Vitamin C serum. Formulated with 20% pure L-Ascorbic Acid, this powerful anti-aging treatment reduces dark spots, fine lines, and promotes collagen production. Suitable for all skin types, this lightweight serum absorbs quickly and delivers visible results in just 2 weeks.',
    price: '$29.99',
    originalPrice: '$39.99',
    rating: 4.3,
    reviewCount: 2847,
    image: 'https://drmedcosmetics.com/cdn/shop/files/WhatsApp_Image_2024-08-22_at_13.22.39_ac473fff-1121-462f-917a-c6e4d3bde2fc.webp?v=1739441644',
    amazonLink: 'https://amzn.to/45Pilb4',
    category: 'Skincare',
    features: [
      '20% Pure Vitamin C (L-Ascorbic Acid)',
      'Reduces dark spots and hyperpigmentation',
      'Stimulates collagen production',
      'Lightweight, fast-absorbing formula',
      'Suitable for all skin types',
      'Cruelty-free and paraben-free'
    ],
    seoKeywords: ['vitamin c serum', 'anti-aging', 'brightening serum', 'skincare', 'dark spots']
  },
  {
    id: '2',
    title: 'Hydrating Hyaluronic Acid Moisturizer',
    shortDescription: 'Intensive moisture lock cream with hyaluronic acid for plump, hydrated skin.',
    fullDescription: 'Experience ultimate hydration with our hyaluronic acid moisturizer. This luxurious cream contains multiple types of hyaluronic acid that penetrate different skin layers, providing 24-hour moisture retention. Enriched with ceramides and peptides, it strengthens the skin barrier while delivering a youthful, plump appearance.',
    price: '$24.99',
    originalPrice: '$34.99',
    rating: 4.7,
    reviewCount: 1923,
    image: 'https://m.media-amazon.com/images/I/71XfFMsGNAL._SL1500_.jpg',
    amazonLink: 'https://amzn.to/45llvmQ',
    category: 'Skincare',
    features: [
      'Multi-molecular hyaluronic acid complex',
      '24-hour moisture retention',
      'Ceramides for barrier repair',
      'Anti-aging peptides',
      'Non-comedogenic formula',
      'Fragrance-free and gentle'
    ],
    seoKeywords: ['hyaluronic acid', 'moisturizer', 'hydrating cream', 'anti-aging', 'skincare']
  },
  {
    id: '3',
    title: 'Luxe Matte Liquid Lipstick Set',
    shortDescription: '6-piece long-wearing matte lipstick collection in trending nude shades.',
    fullDescription: 'Elevate your makeup game with our premium matte liquid lipstick collection. This curated set features 6 gorgeous nude shades that complement all skin tones. Each lipstick delivers full coverage, long-wearing color that stays put for up to 12 hours without flaking or fading. The comfortable, lightweight formula feels smooth on lips.',
    price: '$32.99',
    originalPrice: '$45.99',
    rating: 4.9,
    reviewCount: 3241,
    image: 'https://img.drz.lazcdn.com/static/pk/p/714873eb41b0ad5d1657894cbb812e9b.jpg_960x960q80.jpg_.webp',
    amazonLink: 'https://amzn.to/4mHXIU0',
    category: 'Makeup',
    features: [
      '6 versatile shades',
      '12-hour long-wearing formula',
      'Full coverage, matte finish',
      'Comfortable, lightweight feel',
      'Transfer-resistant',
      'Cruelty-free and vegan'
    ],
    seoKeywords: ['matte lipstick', 'liquid lipstick', 'nude lipstick', 'long-wearing', 'makeup set']
  },
  {
    id: '4',
    title: 'Professional Makeup Brush Set',
    shortDescription: '15-piece premium synthetic brush collection for flawless makeup application.',
    fullDescription: 'Achieve professional makeup results with our comprehensive 15-piece brush set. Each brush features ultra-soft synthetic bristles that pick up and blend product seamlessly. The ergonomic handles provide comfortable grip and precise control. Perfect for both beginners and makeup artists, this set includes all essential brushes for face and eye makeup.',
    price: '$39.99',
    originalPrice: '$59.99',
    rating: 4.6,
    reviewCount: 1876,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTiNhDMvK-_1aWPrpRmdzOf_cxrZ0d6GEYXg&s',
    amazonLink: 'https://amzn.to/45PNJq2',
    category: 'Tools',
    features: [
      '15 professional-grade brushes',
      'Ultra-soft synthetic bristles',
      'Ergonomic wooden handles',
      'Includes storage pouch',
      'Suitable for powder and liquid products',
      'Easy to clean and maintain'
    ],
    seoKeywords: ['makeup brushes', 'brush set', 'professional brushes', 'makeup tools', 'synthetic bristles']
  },
  {
    id: '5',
    title: 'Gentle Exfoliating Face Scrub',
    shortDescription: 'Natural bamboo and oat exfoliant for smooth, radiant skin texture.',
    fullDescription: 'Reveal smoother, brighter skin with our gentle exfoliating face scrub. Formulated with finely ground bamboo and colloidal oatmeal, this natural scrub removes dead skin cells without over-drying or irritation. Infused with jojoba oil and vitamin E, it leaves skin soft, smooth, and glowing. Perfect for weekly use on all skin types.',
    price: '$19.99',
    originalPrice: '$26.99',
    rating: 4.5,
    reviewCount: 1435,
    image: 'https://images.ctfassets.net/f3tkdizvrgki/DN2H78axIRc9WkSuBWFLV/11e633da84a54460ed7e0b5507b9fe24/ave_381370036760_00000f-fr-ca',
    amazonLink: 'https://amzn.to/4mfnBum',
    category: 'Skincare',
    features: [
      'Natural bamboo and oat exfoliants',
      'Gentle on sensitive skin',
      'Enriched with jojoba oil',
      'Vitamin E for nourishment',
      'Removes dead skin cells',
      'Eco-friendly packaging'
    ],
    seoKeywords: ['face scrub', 'exfoliating scrub', 'natural exfoliant', 'bamboo scrub', 'skincare']
  },
  {
    id: '6',
    title: 'Revitalizing Eye Cream Complex',
    shortDescription: 'Advanced peptide eye cream targeting dark circles, puffiness, and fine lines.',
    fullDescription: 'Combat signs of aging around the delicate eye area with our advanced peptide complex. This luxurious eye cream combines powerful peptides, caffeine, and hyaluronic acid to reduce dark circles, minimize puffiness, and smooth fine lines. The lightweight formula absorbs quickly without leaving residue, perfect for morning and evening use.',
    price: '$34.99',
    originalPrice: '$49.99',
    rating: 4.7,
    reviewCount: 2156,
    image: 'https://m.media-amazon.com/images/I/61Pjuv0dYYL._UF1000,1000_QL80_.jpg',
    amazonLink: 'https://amzn.to/4mGvFnR',
    category: 'Skincare',
    features: [
      'Advanced peptide complex',
      'Caffeine for puffiness reduction',
      'Hyaluronic acid for hydration',
      'Targets dark circles and fine lines',
      'Lightweight, non-greasy formula',
      'Ophthalmologist tested'
    ],
    seoKeywords: ['eye cream', 'peptide cream', 'dark circles', 'anti-aging', 'eye care']
  }
];