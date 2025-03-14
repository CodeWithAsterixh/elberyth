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


export interface stateProcess {
  status:"loading"|"error"|"done"|"not-started"
  cycle: "has-retried-many"|"has-not-retried"|"should-retry"
}

export interface cartItem{
      productDetails: Product;
      length: number;
    }


export type CategoryGroup = {
  name: string;
  items: Product[];
};


export interface Address {
  id: string;
  label: string; // Allowed values: "Home", "Office", "Billing", "Shipping", etc.
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

// Define specific types for the string arrays

// ProductID is a type alias for a string representing a product's unique identifier.
export type ProductID = string;

// AdminPermission is a union type for admin-specific permissions.
export type AdminPermission = 
  | 'MANAGE_PRODUCTS'
  | 'VIEW_ORDERS'
  | 'MANAGE_USERS'
  | 'VIEW_ANALYTICS'
  | 'EDIT_CONTENT';

// PreferredStyle is a union type for users' style preferences.
export type PreferredStyle = 
  | 'Casual'
  | 'Elegant'
  | 'Sporty'
  | 'Trendy'
  | 'Minimal';

export type UserRole = 'admin' | 'user';


export type PaymentMethodType = 'Credit Card' | 'epay' | 'Bank Transfer';

export interface PaymentMethodCard {
  id: string;
  cardNumber?: string;  // Only for Credit Card (e.g., "**** **** **** 1234")
  expiryDate?: string;  // Only for Credit Card (e.g., "MM/YY")
  cvv?: number;
  type: 'mastercard' | 'visa';
}

export interface PaymentMethodEpay {
  id: string;
  address: string;
}

export interface PaymentMethodBankTF {
  id: string;
  accountNumber: number;
  bankName: string;
}

// Define the union so that each branch is matched by its paymentType.
export type PaymentMethod =
  | { paymentType: 'Credit Card'; paymentMethodDetails: PaymentMethodCard }
  | { paymentType: 'epay'; paymentMethodDetails: PaymentMethodEpay }
  | { paymentType: 'Bank Transfer'; paymentMethodDetails: PaymentMethodBankTF };

export interface User {
  id: string;
  username: string;
  email: string;
  role: UserRole;
  fullName: string;
  passwordHash: string;
  phone: string;
  addresses: Address[];
  avatar: string;
  wishlist: ProductID[];    // Array of product IDs
  cart:ProductID[];
  paymentMethod:PaymentMethod[];
  createdAt: Date;
  updatedAt: Date;
  adminPermissions?: AdminPermission[]; // Only applicable when role is 'admin'
  preferredStyles?: PreferredStyle[];     // Allowed values: "Casual", "Elegant", "Sporty", "Trendy", "Minimal"
  subscribedToNewsletter: boolean;
}
