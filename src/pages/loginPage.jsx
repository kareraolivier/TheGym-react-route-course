import {
  useLoaderData,
  useNavigation,
  redirect,
  useActionData,
} from "react-router-dom";
import LoginForm from "../components/loginForm";
import { loginUser } from "../components/api";
export const loader = ({ request }) => {
  const search = new URL(request.url).searchParams.get("message");
  return search;
};
export const action = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const pathname =
    new URL(request.url).searchParams.get("redirectTo") || "/host";
  try {
    await loginUser({ email, password });
    localStorage.setItem("logedin", true);
    return redirect(pathname);
  } catch (error) {
    return error.message;
  }
};
const LoginPage = () => {
  const searchData = useLoaderData();
  const errorMessage = useActionData();
  const navigation = useNavigation();

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      {searchData && <h1 className="text-green-600 text-lg">{searchData}</h1>}
      {errorMessage !== null && (
        <h1 className="text-red-600 text-lg">{errorMessage}</h1>
      )}
      <LoginForm navigation={navigation} />
    </div>
  );
};

export default LoginPage;
