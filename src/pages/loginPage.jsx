import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import LoginForm from "../components/loginForm";
import { loginUser } from "../components/api";
export const loader = ({ request }) => {
  const search = new URL(request.url).searchParams.get("message");
  return search;
};
const LoginPage = () => {
  const searchData = useLoaderData();
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target.value);
    setLoginFormData((prev) => ({ ...prev, [name]: value }));
  };
  const submitForm = async () => {
    setStatus("submitting");
    setError(null);
    try {
      await loginUser(loginFormData);
      navigate("/host/vans", { replace: true });
    } catch (error) {
      setError(error);
    }
    setLoginFormData({ email: "", password: "" });
    setStatus("idle");
  };
  setTimeout(() => {
    setError(null);
  }, 10000);
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      {searchData && <h1 className="text-green-600 text-lg">{searchData}</h1>}
      {error !== null && (
        <h1 className="text-red-600 text-lg">{error.message}</h1>
      )}
      <LoginForm
        handleChange={handleChange}
        submitForm={submitForm}
        inputData={loginFormData}
        status={status}
      />
    </div>
  );
};

export default LoginPage;
