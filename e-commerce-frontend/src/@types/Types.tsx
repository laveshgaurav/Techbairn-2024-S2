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

export type T_SignInBody = {
  email: string;
  password: string;
};

export type T_User = {
  _id: string;
  createdAt: string; // ISO date format as string
  email: string;
  password: string;
  phone: string;
  profilePhoto: string;
  userName: string;
  __v: number;
};
