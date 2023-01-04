import { memo } from "react";

// Footer Component
const Footer = memo(() => {
  return (
    <>
      <footer className="bg-amber-500 mt-auto">
      <hr className="border-black"/>
        <p className="text-center p-3">&copy; kuw book-review</p>
      </footer>
    </>
  );
});

export default Footer;
