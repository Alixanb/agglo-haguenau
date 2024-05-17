import { Product } from "@/types/entity";

export const getProductsAction = async (): Promise<Product[] | undefined> => {
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
  }
  return undefined;
};

export const productDateStringToDate = (date: Product["date_debut"]) => {
  const [day, month, year] = date.split("/").map(Number);

  return new Date(year, month - 1, day);
};

export const getProductsNotDeprecatedAction = (
  products: Product[],
  now: Date
) => {
  let productsNotDeprecated: Product[] = [];

  products.map((product, i) => {
    if (productDateStringToDate(product.date_debut) < now) {
      productsNotDeprecated.push(product);
    }
  });
  return productsNotDeprecated;
};

export const extractActualProductsAction = (products: Product[], now: Date) => {
  let actualProducts: Product[] = [];

  products.map((product, i) => {
    // console.log(product.date_fin > now, product.date_debut);
    //Push the event only if the event started and haven't ended yet
    if (
      productDateStringToDate(product.date_fin) > now &&
      productDateStringToDate(product.date_debut) < now
    ) {
      actualProducts.push(product);
    }
  });

  return actualProducts;
};

export const deleteIntersectingProducts = (
  notDeprecatedProducts: Product[],
  actualProducts: Product[]
) => {
  const identifierSet = new Set(actualProducts.map((product) => product.id));
  return notDeprecatedProducts.filter(
    (product) => !identifierSet.has(product.id)
  );
};
