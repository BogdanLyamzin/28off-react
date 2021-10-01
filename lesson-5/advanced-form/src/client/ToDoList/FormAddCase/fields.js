export const list = {
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

export const createFields = (handleChange, state) => {
  for (const key in list) {
    list[key].onChange = handleChange;
    const { name, type, checked } = list[key];
    if (type === "checkbox" || type === "radio") {
      list[key].checked = state[name];
      break;
    }
    list[key].value = state[name];
  }
  return list;
};
