import Image from "next/image";

export default function Login() {
  return (
    <div className="bg-green-200 min-h-screen flex items-center justify-center">
      {/* Container */}
      <div className="bg-white/70 backdrop-blur-md p-8 rounded-xl shadow-lg w-full max-w-sm">
        
        {/* University Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/logo.jpg" // make sure file is in public folder
            alt="University Logo"
            width={100}
            height={100}
          />
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-center text-green-800 mb-4">
          LMS Login
        </h2>

        {/* Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 border border-green-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-green-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Loginz
          </button>
        </form>
      </div>
    </div>
  );
}
