import type { CategoryGroup, Product } from "~/types";


export function groupProductsByCategory(products: Product[]): CategoryGroup[] {
  const groups: Record<string, Product[]> = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {} as Record<string, Product[]>);

  return Object.entries(groups).map(([category, items]) => ({
    name: category,
    items,
  }));
}
