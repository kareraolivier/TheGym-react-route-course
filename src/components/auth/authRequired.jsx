import { redirect } from "react-router-dom";
export const AuthRequired = async () => {
  const isLoggedIn = true;
  if (!isLoggedIn) {
    throw redirect("/login?message=You must log in first");
  }
  return null;
};
