import Link from "next/link"
import { SignupForm } from "@/components/forms/signup-form"

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-8 text-2xl font-bold text-white hover:text-blue-500 transition">
            Bajao
          </Link>
          <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
          <p className="text-slate-400">Join us today and start your journey</p>
        </div>

        {/* Form Card */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 backdrop-blur-sm">
          <SignupForm />
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-slate-400">
          <p>
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500 hover:text-blue-400 font-medium">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
