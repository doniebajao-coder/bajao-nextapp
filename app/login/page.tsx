import Link from "next/link"
import { LoginForm } from "@/components/forms/login-form"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-8 text-2xl font-bold text-white hover:text-blue-500 transition">
            Bajao
          </Link>
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-slate-400">Login to your account to continue</p>
        </div>

        {/* Form Card */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 backdrop-blur-sm">
          <LoginForm />
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-slate-400">
          <p>
            Don't have an account?{" "}
            <Link href="/signup" className="text-blue-500 hover:text-blue-400 font-medium">
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
