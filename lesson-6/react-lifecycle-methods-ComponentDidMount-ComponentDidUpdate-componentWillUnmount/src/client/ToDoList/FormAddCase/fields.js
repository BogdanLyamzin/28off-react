export const fields = {
  text: {
    name: "text",
    type: "text",
    placeholder: "Название дела",
    required: true,
    label: "Название дела",
  },
  description: {
    name: "description",
    type: "text",
    placeholder: "Описание дела",
    required: false,
    label: "Описание дела",
  },
  urgency: {
    name: "urgency",
    type: "checkbox",
    placeholder: "",
    required: false,
    label: "Срочность дела",
  },
};
