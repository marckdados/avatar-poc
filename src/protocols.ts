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

type Id = {
  id: string;
};

type UpdateAvatar = {
  name?: string;
  age?: number;
  superPower?: string;
  idCategory?: number;
}

export { CreateAvatar, Avatar, Category , Id, UpdateAvatar};
