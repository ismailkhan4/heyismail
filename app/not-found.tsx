export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-dark-text mb-4">404</h1>
        <p className="text-dark-text/60 mb-8">Page not found</p>
        <a 
          href="/" 
          className="px-6 py-3 bg-primary text-white hover:bg-dark-primary transition-colors"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}