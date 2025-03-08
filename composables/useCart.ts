import { type Product } from "~/types";

const cartState = reactive<
  {
    items: {
      productDetails: Product;
      length: number;
    }[];
  }
>({
  items: []
});

const actions = {
  loadCart: async () => {
    console.log("loaded cart");
  },
  addToCart: async (product: Product) => {
    const findItem = cartState.items.find(
      (p) => p.productDetails.id === product.id
    );
    if (!findItem) {
      cartState.items = [
        ...cartState.items,
        {
          length: 1,
          productDetails: product,
        },
      ];
    } else {
      const filtered = cartState.items.filter(
        (p) => p.productDetails.id !== product.id
      );
      cartState.items = [
        ...filtered,
        {
          ...findItem,
          length: findItem.length + 1,
        },
      ];
    }

  },
  removeFromCart: async (id: string) => {
    const findItem = cartState.items.find((p) => p.productDetails.id === id);

    if (findItem) {
      const filtered = cartState.items.filter(
        (p) => p.productDetails.id !== id
      );
      cartState.items = filtered;
    }
  },
  crementing: async (type: "ADD" | "REMOVE", id: string) => {
    const findItem = cartState.items.find((p) => p.productDetails.id === id);
    const filtered = cartState.items.filter((p) => p.productDetails.id !== id);
    if (findItem) {
      if (findItem.length >= 1) {
        switch (type) {
          case "ADD":
            cartState.items = [
              ...filtered,
              {
                ...findItem,
                length: findItem.length + 1,
              },
            ];
            break;
          case "REMOVE":
            
            if (findItem.length<=1){
                actions.removeFromCart(id);
            }else{
                cartState.items = [
                    ...filtered,
                    {
                      ...findItem,
                      length: findItem.length - 1,
                    },
                  ];
            }
            break;

          default:
            break;
        }
      }
    }
  },
};

export const useCart = () => {
  return {
    cart: cartState,
    actions,
  };
};
