export const getStoredTheme = () => {
  return localStorage.getItem("theme");
};

export const saveTheme = (value: string) => {
  localStorage.setItem("theme", value);
};
