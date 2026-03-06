import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-emerald-500/10 py-16 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-semibold text-white">heyIsmail</span>
              <Image
                src={"/green-dot.png"}
                width={12}
                height={12}
                alt="heyIsmail"
                className="mt-2.5 -ml-1.75"
              />
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Building SaaS MVPs for non-technical founders. One sprint at a
              time.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Navigate</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="/"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/process"
                  className="hover:text-emerald-400 transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="/builds"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Builds
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-emerald-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Connect</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="https://www.linkedin.com/in/heyismail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://upwork.com/freelancers/ismailm16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Upwork
                </a>
              </li>
              <li>
                <a
                  href="https://cal.com/heyismail/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Book a Call
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>© 2025 Ismail Muhammad · heyismail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
