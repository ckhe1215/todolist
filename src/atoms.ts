import { atom, selector } from "recoil";

interface IToDo {
  id: number;
  text: string;
  category: string;
}

export const todoState = atom<IToDo[]>({
  key: "todos",
  default: [
    { id: 0, text: "밥먹기", category: "ToDo" },
    { id: 1, text: "잠자기", category: "ToDo" },
  ],
});

export const currentCategoryState = atom({
  key: "currentCategory",
  default: "ToDo",
});

export const categoryState = atom({
  key: "categories",
  default: ["ToDo", "Doing", "Done"],
});

export const currentTodoState = selector({
  key: "currentCategoryToDos",
  get: ({ get }) => {
    const todos = get(todoState);
    const category = get(currentCategoryState);
    return todos.filter((item) => item.category === category);
  },
});
