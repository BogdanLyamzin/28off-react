import { nanoid } from "nanoid";

export const items = [
    {
        id: nanoid(),
        to: "/",
        text: "Главная"
    },
    {
        id: nanoid(),
        to: "/products",
        text: "Товары"
    },
    {
        id: nanoid(),
        to: "/contacts",
        text: "Контакты"
    },
]