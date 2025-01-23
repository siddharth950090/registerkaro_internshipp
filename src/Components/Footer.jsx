import React from "react";

export default function Footer() {
  return (
    <div className="bg-blue-900 text-white flex flex-col justify-between p-4 md:py-6 px-10">
      <header className="flex justify-between items-center flex-col md:flex-row gap-2">
        <div>
          <div>
            <p className="text-gray-300">
              Design outstanding interfaces with advanced Figma features in a
              matter of minutes.
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="/">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="/">
              <i className="fa-brands fa-google"></i>
            </a>
            <a href="/">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="/">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </div>
        </div>
        <div className="flex gap-6 flex-col sm:flex-row">
          <div>
            <h3 className="text-orange-500">START A BUISNESS</h3>
            <ul>
              <li>Features</li>
              <li>Solutions</li>
              <li>Integration</li>
              <li>Enterprise</li>
            </ul>
          </div>
          <div>
            <h3 className="text-orange-500">GOVERMENT REGISTRATION</h3>
            <ul>
              <li>Partners</li>
              <li>Community</li>
              <li>Developers</li>
              <li>App</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h3 className="text-orange-500">COMPLIANCE & TAX</h3>
            <ul>
              <li>Channels</li>
              <li>Scale</li>
              <li>Watch the Demo</li>
              <li>Our Competition</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h3 className="text-orange-500">BIS & DISCO</h3>
            <ul>
              <li>About Us</li>
              <li>News</li>
              <li>Leadership</li>
              <li>Media Kit</li>
            </ul>
          </div>
        </div>
      </header>

      <footer className="text-center mt-6">
        © 2024 Registerkaro. All Rights Reserved.
      </footer>
    </div>
  );
}
