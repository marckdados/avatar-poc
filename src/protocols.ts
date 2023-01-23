type CreateAvatar = {
  name: string;
  age: number;
  superPower: string;
  idCategory?: number;
};

type Avatar = {
  name: string;
  age: number;
  superPower: string;
  idCategory?: number;
};

type Category = {
  name: string;
};

export { CreateAvatar, Avatar, Category };
