const Contact = () => {
    return (
        <section
            id="contact"
            className="py-16 bg-gray-100 dark:bg-[#0d1b2a] transition-colors duration-500"
        >
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-6 text-blue-900 dark:text-blue-300">
                    Contact Me
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Saya terbuka untuk kolaborasi dan diskusi lebih lanjut!
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-200">
                    <li>
                        <span className="font-semibold text-blue-800 dark:text-blue-400">
                            Email:
                        </span>{" "}
                        nazwa.nur@mhs.itenas.ac.id
                    </li>
                    <li>
                        <span className="font-semibold text-blue-800 dark:text-blue-400">
                            WhatsApp:
                        </span>{" "}
                        0813-8330-0587
                    </li>
                    <li>
                        <span className="font-semibold text-blue-800 dark:text-blue-400">
                            Instagram:
                        </span>{" "}
                        <a
                            href="https://www.instagram.com/salsabllaav_/"
                            className="hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            @salsabllaav_
                        </a>
                    </li>
                    {/* <li>
                        <span className="font-semibold text-blue-800 dark:text-blue-400">
                            GitHub:
                        </span>{" "}
                        <a
                            href="https://github.com/naxwa-dev"
                            className="hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            github.com/nazwa-dev
                        </a>
                    </li> */}
                </ul>
            </div>
        </section>
    );
};

export default Contact;
