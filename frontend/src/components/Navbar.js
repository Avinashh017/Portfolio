function Navbar() {
  return (
    <div className="fixed top-0 w-full backdrop-blur-md bg-white/10 text-white flex justify-between px-10 py-4 shadow-lg z-50">
      <h1 className="text-xl font-bold">Portfolio</h1>

      <div className="space-x-6">
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;