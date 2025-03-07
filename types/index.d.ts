export interface ImageColors {
  bgColor: string;
  primaryColor: string;
  secondaryColor: string;
}
// Convert the map into an array of objects and sort by frequency (descending)
export type ColorFrequency = {
  color: string;
  count: number;
};

export interface Product {
  id: string;               // Unique identifier for the product
  name: string;             // Product name/title
  price: number;            // Price in a standard currency format
  description: string;      // Short description for product listing
  image: string;            // URL to the primary product image
  category: string;         // e.g., "Skincare", "Male Fashion", "Hood Cloths", etc.
  features?: string[];      // Optional list of key features or benefits
  details?: string;         // Extended product details for a product description page
  availableSizes?: string[];  // Optional: available sizes (e.g., for fashion items)
  availableColors?: string[]; // Optional: available colors
  rating?: number;          // Optional: customer rating (e.g., 1 to 5)
}


export type CategoryGroup = {
  name: string;
  items: Product[];
};
