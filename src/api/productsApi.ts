import type { CreateProduct, Product } from "~/types/productsType";
import { fakeRequestTime } from "~/utils/fakeRequestTime";

export let products: Product[] = [
  {
    id: 1,
    price: "99.99",
    stock: 10,
    name: "Fone de Ouvido Bluetooth",
    description: "Fone de ouvido sem fio com alta qualidade de som.",
    category: "Eletrônicos",
    imageUrl:
      "https://i0.statig.com.br/bancodeimagens/2f/ym/i8/2fymi85z5vo5pcl5rsnsr3xgi.jpg",
  },
  {
    id: 2,
    price: "49.9",
    stock: 25,
    name: "Mouse Gamer",
    description: "Mouse com iluminação RGB e alta precisão.",
    category: "Informática",
  },
  {
    id: 3,
    price: "199.0",
    stock: 5,
    name: "Smartwatch",
    description: "Relógio inteligente com monitoramento de saúde.",
    category: "Wearables",
  },
  {
    id: 4,
    price: "29.9",
    stock: 50,
    name: "Copo Térmico",
    description: "Copo térmico para bebidas quentes e frias.",
    category: "Utilidades",
  },
  {
    id: 5,
    price: "149.99",
    stock: 8,
    name: "Teclado Mecânico",
    description: "Teclado mecânico com switches azuis.",
    category: "Informática",
  },
];

//Geralmente coloco como productService, mas como são mocka datas achei mais interessante manager
export const productManager = {
  async getAllProducts() {
    await fakeRequestTime;
    return [...products];
  },
  async getProductById(id: number) {
    await fakeRequestTime;
    return products.find((product) => product.id === id) ?? "";
  },

  async createProduct(newProductData: CreateProduct) {
    await fakeRequestTime;
    const newProduct = { ...newProductData, id: products.length + 1 };

    products.push(newProduct);
    return newProduct;
  },

  async updateProduct(id: number, data: Partial<Omit<Product, "id">>) {
    await fakeRequestTime;
    products = products.map((p) => (p.id === id ? { ...p, ...data } : p));
    return products.find((p) => p.id === id) ?? "";
  },
  async deleteProduct(id: number) {
    await fakeRequestTime;
    products = products.filter((product) => product.id !== id);
  },
};
