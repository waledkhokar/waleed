import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { studentData } from "../data/studentData";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    const u = user.trim();
    const p = pass.trim();

    const okUsers = [studentData.regNo, studentData.email, studentData.username].filter(Boolean);

    setTimeout(() => {
      if (okUsers.includes(u) && p === studentData.password) {
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("student", JSON.stringify(studentData));
  
router.replace("/dashboard?tab=profile");
      } else {
        setError("Invalid username or password");
        setLoading(false);
        setTimeout(() => setError(""), 4000);
      }
    }, 1000);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        background: 'linear-gradient(135deg, rgba(1, 68, 33, 0.9) 0%, rgba(1, 50, 32, 0.95) 100%)',
        backdropFilter: 'blur(2px)'
      }}
    >
      <form
        onSubmit={handleLogin}
        className="p-10 rounded-xl shadow-2xl max-w-sm w-full bg-white/10 backdrop-blur-sm border border-white/20"
        aria-label="Login Form"
      >
        <div className="flex justify-center mb-6">
  

  <Image
  src="/logo.jpg"
  alt="University Logo"
  width={160}
  height={160}
  className="bg-white/90 p-1 border-[5px] border-white/20 shadow-xl"
  style={{
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(5px)',
    WebkitBackdropFilter: 'blur(5px)'
  }}
/>

        </div>

        <h1 className="text-2xl font-bold text-center mb-6 text-white tracking-wider">
          LMS LOGIN
        </h1>

        {error && (
          <p role="alert" className="mb-4 text-red-300 text-center font-medium">
            {error}
          </p>
        )}

        <div className="space-y-4">
          {/* Username Input with Person Icon */}
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 text-lg select-none">👤</span>
            <input
              id="user"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              disabled={loading}
              className="w-full pl-10 p-3 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 bg-white/20 text-white placeholder-white/70"
              placeholder="LMS Login"
              autoComplete="username"
            />
          </div>

          {/* Password Input with Lock Icon */}
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 text-lg select-none">🔒</span>
            <input
              id="pass"
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              disabled={loading}
              className="w-full pl-10 p-3 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 bg-white/20 text-white placeholder-white/70"
              placeholder="Password"
              autoComplete="current-password"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full mt-6 py-3 px-4 font-semibold rounded-lg text-white transition-colors ${
            loading ? "bg-emerald-800/70 cursor-not-allowed" : "bg-emerald-700 hover:bg-emerald-600"
          }`}
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Logging in...
            </span>
          ) : (
            "LOGIN"
          )}
        </button>

        <p className="mt-8 text-center text-white/70 text-xs tracking-wide">
          &copy; 2025 MIU LEARNING MANAGEMENT SYSTEM
        </p>
      </form>
    </div>
  );
}
