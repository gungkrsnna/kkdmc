import {
    CATEGORY_ICONS,
  } from "../constants/categoryIcons";
  
  export const categoryIcons =
    CATEGORY_ICONS.reduce(
      (acc, item) => {
        acc[item.name] =
          item.icon;
  
        return acc;
      },
      {}
    );