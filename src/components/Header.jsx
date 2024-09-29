function Haedaer() {
  return (
    <>
      <nav className="container bg-slate-900 h-16 w-fit mx-auto rounded-3xl flex items-center text-slate-400 fixed inset-x-0 top-0">
        <ul className="flex gap-5 font-medium">
          <li className="hover:bg-slate-800 hover:text-white p-5 rounded-l-3xl"><a href="#inicio">Inicio</a></li>
          <li className="hover:bg-slate-800 hover:text-white p-5 ">Sobre mí</li>
          <li className="hover:bg-slate-800 hover:text-white p-5 ">Proyectos</li>
          <li className="hover:bg-slate-800 hover:text-white p-5 rounded-r-3xl">Contacto</li>
        </ul>
      </nav>
    </>
  )
}

export default Haedaer
