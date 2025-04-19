const ProjectCard = ({ title, description, tech, time, image, link }) => (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-5">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">{description}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                <span className="font-medium text-blue-800 dark:text-blue-400">Tech:</span> {tech}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                <span className="font-medium text-blue-800 dark:text-blue-400">Year:</span> {time}
            </p>
            {link && (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-blue-600 dark:text-blue-400 hover:underline text-sm"
                >
                    View Project →
                </a>
            )}
        </div>
    </div>
);

export default ProjectCard;
