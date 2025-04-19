import { Link } from 'react-scroll';
import fotoProfil from '../assets/bel.jpg';

const Header = () => {
    return (
        <header
            id="home"
            className="min-h-screen bg-white dark:bg-gray-800 text-gray-900 dark:text-white py-12 px-4 transition-colors duration-500 flex flex-col justify-center items-center text-center"
        >            
            <img
                src={fotoProfil}
                alt="Foto Profil"
                className="w-60 h-60 rounded-2xl object-cover border-4 border-blue-500 shadow-lg mb-6"
            />

            <h1 className="text-4xl font-bold text-blue-800 dark:text-blue-300 mb-2">
                Nazwa Nur Salsa Bella
            </h1>

            {/* Deskripsi singkat dengan batasan lebar */}
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 max-w-2xl">
                Mahasiswa Informatika semester 4 di Institut Teknologi Nasional Bandung. Aktif dalam kegiatan himpunan dan memiliki ketertarikan pada bidang Web Developer dan Data Science.
            </p>

            {/* Navigasi dengan animasi scroll */}
            <div className="flex justify-center gap-4 flex-wrap mt-6">
                <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    offset={-50}
                    className="cursor-pointer bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
                >
                    About
                </Link>
                <Link
                    to="projects"
                    smooth={true}
                    duration={500}
                    offset={-50}
                    className="cursor-pointer bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
                >
                    Projects
                </Link>
                <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    offset={-50}
                    className="cursor-pointer bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
                >
                    Contact
                </Link>
            </div>
        </header>
    );
};

export default Header;
