const ProjectCard = ({ title, description, link, image }) => {
  return (
    <div className="max-w-72 rounded overflow-hidden shadow-lg bg-slate-600">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <p className="text-gray-700 text-black">{description}</p>
      </div>
      <div className="px-6 pb-2">
        <a
          href={link}
          target="_blank"
          className="inline-block bg-slate-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded prox"
          rel="noopener noreferrer"
        >
          Ver Proyecto
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
