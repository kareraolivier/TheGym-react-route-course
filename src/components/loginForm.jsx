const LoginForm = ({ handleChange, submitForm, inputData, status }) => {
  return (
    <div>
      <div className="bg-white px-6 py-12 rounded-lg shadow-xl shadow-black/20">
        <form className="block gap-4">
          <div>
            <input
              type="email"
              value={inputData.email}
              onChange={handleChange}
              placeholder="email"
              name="email"
              className="bg-gray-300 outline-green-400 placeholder-slate-400 py-3 px-2 w-80 my-4 rounded-sm"
            />
          </div>
          <div>
            <input
              type="password"
              value={inputData.password}
              onChange={handleChange}
              placeholder="password"
              name="password"
              className="bg-gray-300 outline-green-400 placeholder-slate-400 py-3 px-2 w-80 my-4 rounded-sm"
            />
          </div>
          <button
            type="button"
            onClick={submitForm}
            disabled={status === "submitting"}
            className="bg-green-500 hover:shadow-lg font-semibold text-white py-3 w-80 my-4 rounded-sm"
          >
            {status === "submitting" ? "Logging in..." : "Log in"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
