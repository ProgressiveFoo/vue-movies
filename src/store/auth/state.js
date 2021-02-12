export const state = () => {
  return {
    token: JSON.parse(localStorage.getItem("token")),
    activeUser: {},
  };
};
