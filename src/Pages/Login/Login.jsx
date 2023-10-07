import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div>
        <h2 className="text-5xl my-10 text-center font-bold text-blue-800">Please Login</h2>
        <div className="w-[500px] mx-auto h-[400px] bg-white shadow-2xl rounded-lg mb-9 p-8">
          <form >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary  font-bold">Login</button>
            </div>
          </form>
          <p className="text-center mt-4">
          Do not have an account? <Link className="text-blue-600 font-bold" to="/register">Register</Link>
        </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
