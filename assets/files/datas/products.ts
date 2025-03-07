import type { Product } from "~/types";

export const products: Product[] = [
  // Fashion Products (using male and hood images for clothing)
  {
    id: "fashion-male-01",
    name: "Elberyth Classic Men's T-Shirt",
    price: 1500,
    image: "/files/images/male (1).jpeg",
    category: "Fashion",
    description: "A timeless men's t-shirt designed for everyday comfort and style.",
    features: ["100% cotton", "Breathable fabric", "Regular fit"],
    details: "Crafted from premium cotton, this t-shirt is perfect for casual outings and layering under jackets. Available in multiple colors.",
    availableSizes: ["S", "M", "L", "XL"],
    availableColors: ["Black", "White", "Navy"],
    rating: 4.3
  },
  {
    id: "fashion-male-02",
    name: "Elberyth Modern Slim Fit Shirt",
    price: 3200,
    image: "/files/images/male (3).jpeg",
    category: "Fashion",
    description: "A modern slim fit shirt perfect for smart-casual occasions.",
    features: ["Tailored fit", "Premium fabric", "Versatile styling"],
    details: "This shirt offers a sleek silhouette with a refined look, making it an ideal choice for both office wear and evening events.",
    availableSizes: ["M", "L", "XL"],
    availableColors: ["Blue", "Gray"],
    rating: 4.5
  },
  {
    id: "fashion-hood-01",
    name: "Elberyth Cozy Pullover Hoodie",
    price: 4500,
    image: "/files/images/hood (1).jpeg",
    category: "Fashion",
    description: "A cozy and stylish hoodie for a relaxed, urban look.",
    features: ["Soft fleece lining", "Adjustable hood", "Relaxed fit"],
    details: "Stay warm and trendy with this pullover hoodie crafted for comfort. Ideal for chilly days and casual weekends.",
    availableSizes: ["S", "M", "L", "XL"],
    availableColors: ["Black", "Heather Gray"],
    rating: 4.6
  },
  {
    id: "fashion-hood-02",
    name: "Elberyth Urban Zip-Up Hoodie",
    price: 4800,
    image: "/files/images/hood (2).jpeg",
    category: "Fashion",
    description: "A sleek zip-up hoodie blending urban style with comfort.",
    features: ["Durable fabric", "Contemporary design", "Full-zip closure"],
    details: "Designed for the modern urbanite, this hoodie pairs effortlessly with casual and smart-casual outfits.",
    availableSizes: ["M", "L", "XL"],
    availableColors: ["Navy", "Black"],
    rating: 4.4
  },
  // Skincare Products (using skin and facials images)
  {
    id: "skincare-01",
    name: "Elberyth Luxe Skincare Cream",
    price: 4000,
    image: "/files/images/skin (1).jpeg",
    category: "Skincare",
    description:
      "Experience the ultimate in skin nourishment with our Luxe Skincare Cream. Formulated with natural ingredients and advanced hydration technology, this cream rejuvenates your skin, providing a radiant glow.",
    features: [
      "Natural ingredients",
      "Deep hydration",
      "Anti-aging benefits",
      "Lightweight formula"
    ],
    details:
      "Our Luxe Skincare Cream is meticulously crafted using premium extracts and vitamins. It penetrates deeply to offer long-lasting moisture and support skin elasticity, making it a must-have in your daily routine.",
    rating: 4.7
  },
  {
    id: "skincare-02",
    name: "Elberyth Radiant Facial Serum",
    price: 2800,
    image: "/files/images/facials (3).jpeg",
    category: "Skincare",
    description:
      "Illuminate your complexion with our Radiant Facial Serum, enriched with botanical extracts to restore your skin's natural glow.",
    features: [
      "Enhances radiance",
      "Reduces fine lines",
      "Antioxidant-rich formula"
    ],
    details:
      "This potent serum gently exfoliates and revitalizes your skin. Use it daily to enjoy a smoother, more luminous complexion that exudes health.",
    rating: 4.5
  },
  {
    id: "skincare-03",
    name: "Elberyth Gentle Facial Cleanser",
    price: 2200,
    image: "/files/images/facials (2).jpeg",
    category: "Skincare",
    description:
      "A gentle cleanser designed to remove impurities without stripping natural moisture from your skin.",
    features: [
      "Sulfate-free",
      "Nourishing formula",
      "Suitable for all skin types"
    ],
    details:
      "Our Gentle Facial Cleanser purifies and refreshes your skin, maintaining its natural balance while leaving it soft and hydrated.",
    rating: 4.6
  },
  {
    id: "skincare-04",
    name: "Elberyth Revitalizing Moisturizer",
    price: 3500,
    image: "/files/images/skin (2).jpeg",
    category: "Skincare",
    description:
      "Replenish and revitalize your skin with our advanced moisturizer that hydrates and smooths for a youthful appearance.",
    features: [
      "Intensive hydration",
      "Improves skin texture",
      "Fast-absorbing"
    ],
    details:
      "Formulated to deeply hydrate and improve your skin's texture, this moisturizer provides a supple, radiant complexion with regular use.",
    rating: 4.6
  }
];
