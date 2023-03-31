type UniqueId = number;////alias for primitive 

interface User {
  id:UniqueId;
}


////declaration merging” that you aren’t able to do with a type

interface Base{
  name: string;
  age: number;
}

interface Base{
  gender: string;
}

const extendedBase: Base = {
  name: "Bill",
  age: 30,
  gender:"male"
}