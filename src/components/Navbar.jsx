function Navbar() {
  return (
    <nav className="fixed w-full bg-black bg-opacity-50 backdrop-blur-md z-50">
      <div className="container mx-auto flex justify-between items-center p-5">
        <div className="text-2xl font-bold cursor-pointer text-white">
          Yeamim Hossain Sajid
        </div>
        <ul className="hidden md:flex space-x-8 text-lg text-white">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-yellow-400 transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;



