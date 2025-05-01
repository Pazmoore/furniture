export interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  product: string;
  quantity?: number;
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  rating: number;
  product: string;
  quantity?: number;
}
