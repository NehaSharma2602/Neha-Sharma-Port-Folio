import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#D8C1AA] border-t border-[#B69779] py-6">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-[#5B4B40] text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-[#8F6B4C]">
            Neha Sharma
          </span>
          . All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
