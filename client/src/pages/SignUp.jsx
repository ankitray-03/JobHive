import { useEffect, useState } from "react";
import SocialAuthButtons from "../components/Auth/SocialAuthButtons";
import { useNavigate } from "react-router-dom";
import api from "../axios";
import { Link } from "react-router-dom";
import { Briefcase } from "lucide-react";
import { useSelector } from "react-redux";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { currentUser } = useSelector((store) => store.user);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/dashboard");
    }
  }, [currentUser]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await api.post("/api/auth/signup", {
        name,
        email,
        password,
      });

      // console.log(response.data);
      if (response.status === 201) {
        setLoading(false);
        setError(null);
        navigate("/signin");
      } else {
        setLoading(false);
        setError(response.message);
        return;
      }
    } catch (err) {
      setLoading(false);
      setError(err.message || "SignUp failed");
    }
  };
  return (
    <div className="max-w-md mx-auto my-[5%]">
      <Link to="/">
        <Briefcase className="size-[15%] text-blue-700 mx-auto my-auto" />
      </Link>
      <div className="mt-4 mb-4">
        <div className="text-3xl font-extrabold mx-[16%]">
          {" "}
          Create your account
        </div>
        <div className="text-center mt-2">
          Already have an account?
          <Link to="/signin" className="text-blue-700 font-semibold">
            Sign in
          </Link>
        </div>
      </div>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Full name
          </label>
          <div className="mt-1">
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email address
          </label>
          <div className="mt-1">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <div className="mt-1">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Create account
          </button>
        </div>

        <SocialAuthButtons />
      </form>
    </div>
  );
};

export default SignUp;
