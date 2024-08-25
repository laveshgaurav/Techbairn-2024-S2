export type T_Rating = {
  rate: number;
  count: number;
};

export type T_Product = {
  _id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity: number;
  rating: T_Rating;
  __v: number;
};
