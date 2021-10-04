import { generate } from "shortid";

export const toDoListItems = [
  {
    id: generate(),
    text: "Погладить кота",
  },
  {
    id: generate(),
    text: "Постирать кота",
  },
];
