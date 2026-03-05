import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#19453A] flex items-center justify-center px-6">
      <div className="text-center">
        {/* Large 404 with low opacity */}
        <div className="font-sans text-[200px] md:text-[300px] font-bold text-white/10 leading-none select-none">
          404
        </div>
        
        {/* Heading */}
        <h1 className="font-sans text-4xl md:text-5xl text-white mb-4 -mt-16 md:-mt-24">
          Page not found.
        </h1>
        
        {/* Help text */}
        <p className="text-white/80 text-lg mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        {/* Back to home link */}
        <Link 
          href="/"
          className="inline-flex items-center px-6 py-3 bg-[#79CEB8] text-[#19453A] font-bold text-sm rounded-xl hover:bg-[#6bbfaa] transition-all duration-150"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}