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

export type Product = {
  category: string;
  productName: string;
  price: number;
  src: string;
};

export type CategoryGroup = {
  name: string;
  items: Product[];
};
