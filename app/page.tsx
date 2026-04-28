import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-white">Bajao</div>
          <div className="flex gap-4">
            <Link href="/login">
              <Button variant="ghost" className="text-white hover:text-slate-300">
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Welcome to <span className="text-blue-500">Bajao</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Your modern platform for managing and organizing your daily tasks efficiently. 
            Get started today and boost your productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
                Get Started
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="text-white border-slate-600 hover:bg-slate-800 px-8 py-6 text-lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Easy to Use",
                description: "Simple and intuitive interface designed for everyone",
                icon: "✨"
              },
              {
                title: "Fast & Reliable",
                description: "Built on modern technology for optimal performance",
                icon: "⚡"
              },
              {
                title: "Secure",
                description: "Your data is protected with industry-standard security",
                icon: "🔒"
              }
            ].map((feature, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-lg bg-slate-700/50 border border-slate-600 hover:border-blue-500/50 transition"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to get started?</h2>
          <p className="text-slate-300 mb-8 text-lg">
            Join thousands of users already using Bajao to transform their productivity.
          </p>
          <Link href="/signup">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
              Create Your Free Account
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-slate-400">
          <p>&copy; 2024 Bajao. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
