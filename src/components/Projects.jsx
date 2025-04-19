import ProjectCard from "./ProjectCard";
import fotoWeb from '../assets/web.jpg';
import fotoRumah from '../assets/rumah.jpg';

const projects = [
    {
        title: "Website E-Ticketing",
        description: "Website event ticketing ini memudahkan pengguna untuk memesan tiket konser serta menyediakan informasi lengkap tentang berbagai acara, sehingga pengguna dapat dengan mudah mencari dan mengikuti event yang diinginkan",
        tech: "Laravel, Tailwind",
        time: "Desember 2024 - Januari 2025",
        image: fotoWeb,
        link: "https://github.com/fifovalle/WEBSITE-PORTOFOLIO-PRIBADI-VERSI-3.0?tab=readme-ov-file", // Link 1
    },
    {
        title: "Smart Gatelock",
        description: "Sistem smart home ini memungkinkan pengguna memantau gerbang via website (ESP32-CAM) dan membuka kunci (solenoid lock) melalui aplikasi Blynk jika orang yang terlihat dikenali",
        tech: "ESP32, Blynk APP",
        time: "Mei - Juni 2024",
        image: fotoRumah,
        link: "https://youtu.be/4f0Z6igTW-w?si=qoNCi5guzVTmIR2G", // Link 2
    },
];

const Projects = () => {
    return (
        <section id="projects" className=" py-16 bg-gray-100 dark:bg-[#0d1b2a] transition-colors duration-500">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10 text-blue-900 dark:text-blue-300">My Projects</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
