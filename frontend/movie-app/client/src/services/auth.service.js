export const login = ({ email, password }) => {
  // send email and password to backend
  if (email === "a@a.com" && password === "123456789") {
    const token = "1234";
    localStorage.setItem("token", token);
    window.location = "/admin/movies";
  } else {
    alert("wrong email or password");
  }
};

export const logout = () => {
  const token = localStorage.getItem("token");
  if (token) {
    localStorage.removeItem("token");
    window.location = "/login";
  }
};
