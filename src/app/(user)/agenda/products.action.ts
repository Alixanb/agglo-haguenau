import { Product } from "@/types/entity";

export const getProductsAction = async () => {
  try {
    const res = await fetch("/api/lei", {
      headers: {
        Accept: "application/json",
      },
      method: "GET",
    });
    const { products } = (await res.json()) as { products: Product[] };
    return products.reverse();
  } catch (e) {
    console.error(e);
  } finally {
  }
};

export const extractActualProductsAction = async (products: Product[]) => {};
