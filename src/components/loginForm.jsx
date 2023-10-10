import { Form } from "react-router-dom";
const LoginForm = ({ navigation }) => {
  return (
    <div>
      <div className="bg-white px-6 py-12 rounded-lg shadow-xl shadow-black/20">
        <Form method="post" replace className="block gap-4">
          <div>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="bg-gray-300 outline-green-400 placeholder-slate-400 py-3 px-2 w-80 my-4 rounded-sm"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="bg-gray-300 outline-green-400 placeholder-slate-400 py-3 px-2 w-80 my-4 rounded-sm"
            />
          </div>
          <button
            className="bg-green-500 hover:shadow-lg font-semibold text-white py-3 w-80 my-4 rounded-sm"
            disabled={navigation.state === "submitting"}
          >
            {navigation.state === "submitting" ? "Loggingin ..." : "Log in"}{" "}
          </button>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
