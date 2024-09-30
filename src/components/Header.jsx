function Haedaer() {
  return (
    <>
      <nav className="container bg-slate-900 w-fit mx-auto rounded-3xl flex items-center text-slate-400 fixed inset-x-0 top-5">
        <ul className="flex gap-5 font-medium">
          <li className="hover:bg-slate-800 hover:text-white py-5 text-sm rounded-l-3xl"><a href="#inicio" className="p-5">Inicio</a></li>
          <li className="hover:bg-slate-800 hover:text-white py-5 text-sm "><a href="#sobre-mi"  className="p-2">Sobre mí</a></li>
          <li className="hover:bg-slate-800 hover:text-white py-5 text-sm "><a href="#projects" className="p-2">Proyectos</a></li>
          <li className="hover:bg-slate-800 hover:text-white py-5 text-sm rounded-r-3xl"><a href="#contacto" className="p-5">Contacto</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Haedaer
