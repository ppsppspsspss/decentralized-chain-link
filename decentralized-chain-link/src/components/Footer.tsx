import React from 'react';
import Link from 'next/link';

function Footer() {
  return (
    <div className="relative overflow-x-hidden">
      <div className="absolute top-0 right-0 z-20 flex">
        {[...Array(6)].map((_, index) => (
          <video key={index} className="w-64 h-auto object-cover" autoPlay loop muted>
            <source src="/crowd.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ))}
      </div>
      <footer className="bg-zinc-950 text-white py-28 px-8 mt-auto relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-semibold mb-4">Decentralized Chain Link</h2>
              <p className="text-sm">
                Decentralized Chain Link is a robust and user-friendly blockchain simulation platform
                <br />
                that replicates key features of a real-world blockchain network. This includes
                <br />
                decentralized transaction processing, smart contracts, gas fees,
                <br />
                and wallet management.
              </p>
            </div>
            <div className="flex space-x-8">
              <div className="flex flex-col items-end">
                <h3 className="font-semibold mb-8">Ecosystem</h3>
                <ul className="space-y-1 text-right">
                  <li>
                    <Link href="/ecosystem/dclscan-explorer" className="hover:text-blue-500">
                      DCLscan Explorer
                    </Link>
                  </li>
                  <li>
                    <Link href="/ecosystem/exchange" className="hover:text-blue-500">
                      Exchange
                    </Link>
                  </li>
                  <li>
                    <Link href="/ecosystem/wallet" className="hover:text-blue-500">
                      Wallet
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-end">
                <h3 className="font-semibold mb-8">Community</h3>
                <ul className="space-y-1 text-right">
                  <li>
                    <Link href="/community/documentation" className="hover:text-blue-500">
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link href="/community/github" className="hover:text-blue-500">
                      Github
                    </Link>
                  </li>
                  <li>
                    <Link href="/community/developers-chat" className="hover:text-blue-500">
                      Developers Chat
                    </Link>
                  </li>
                  <li>
                    <Link href="/community/blog" className="hover:text-blue-500">
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-end">
                <h3 className="font-semibold mb-8">Explore</h3>
                <ul className="space-y-1 text-right">
                  <li>
                    <Link href="/about" className="hover:text-blue-500">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="hover:text-blue-500">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-blue-500">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
