import { nanoid } from "nanoid";

export const items = [
    {
        id: nanoid(),
        to: "/",
        text: "Главная"
    },
    {
        id: nanoid(),
        to: "/books",
        text: "Список книг"
    },
    {
        id: nanoid(),
        to: "/favorite-books",
        text: "Любимые книги"
    },
]
