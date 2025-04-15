import { Link } from 'react-router-dom'

export default function Signup() {
    return (
    //   <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="min-h-60 flex items-center justify-center bg-white">

        <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Sign Up</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-2 border rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border rounded"
            />
            <button className="w-full bg-purple-700 text-white p-2 rounded hover:bg-purple-800">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    )
  }