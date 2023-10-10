import { redirect } from "react-router-dom";
export const AuthRequired = async (request) => {
  const pathname = new URL(request.url).pathname;
  const isLoggedIn = localStorage.getItem("logedin");
  if (!isLoggedIn) {
    throw redirect(
      `/login?message=You must log in first.&redirectTo=${pathname}`
    );
  }
  return null;
};
