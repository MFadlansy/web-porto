import fotoC from '../icons/c-.png';
import fotoJava from '../icons/java.png';
import fotoPython from '../icons/python.png';
import fotoPHP from '../icons/php.png';
import fotoVSCode from '../icons/visual-studio.png';

const About = () => {
    return (
        <section id="about" className="py-16 bg-gray-100 dark:bg-[#0d1b2a] transition-colors duration-500">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-6 text-blue-900 dark:text-blue-300">About Me</h2>
                <p className="mb-10 text-gray-800 dark:text-gray-300 leading-relaxed">
                    Pendidikan terakhir di SMAN 1 Padalarang dari tahun 2020 hingga 2023, dengan fokus pada
                    pengembangan akademik dan kegiatan organisasi sekolah.
                </p>

                <div className="flex justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 text-left max-w-2xl w-full">
                        <div className="text-center">
                            <h3 className="text-xl font-bold mb-3 text-blue-800 dark:text-blue-400">Skills</h3>
                            <ul className="space-y-2 text-gray-700 dark:text-gray-300 inline-block text-left">
                                <li>C++</li>
                                <li>Python</li>
                                <li>Java</li>
                            </ul>
                        </div>

                        <div classname="text-center">
                            <h3 className="text-xl font-bold mb-3 text-blue-800 dark:text-blue-400">Tools & Framework</h3>
                            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                <li>VS Code</li>
                                <li>Pycharm</li>
                                <li>Netbeans</li>
                                <li>Laravel</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Logo tools & framework */}
                <div className="mt-10 flex flex-wrap justify-center gap-6">
                    <img src={fotoC} alt="C++" className="w-10 h-10" />
                    <img src={fotoJava} alt="Java" className="w-10 h-10" />
                    <img src={fotoPHP} alt="PHP" className="w-10 h-10" />
                    <img src={fotoPython} alt="Python" className="w-10 h-10" />
                    <img src={fotoVSCode} alt="VS Code" className="w-10 h-10" />
                </div>
            </div>
        </section>
    );
};

export default About;
