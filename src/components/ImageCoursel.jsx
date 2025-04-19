import { useState, useEffect } from "react";
import foto1 from '../assets/1.jpg';
import foto2 from '../assets/3.jpg';
import foto3 from '../assets/4.jpg';

const images = [
    foto1,
    // "/src/assets/2.jpg",
    foto2,
    foto3,
    // "/src/assets/4.jpg",
];

const ImageCoursel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-slide setiap 3 detik
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div div className="relative max-w-6xl mx-auto mt-16 px-4" >
            <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="w-full h-[500px] object-cover rounded-lg shadow-md"
            />

            {/* Indikator */}
            <div className="flex justify-center mt-3 space-x-2">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentIndex
                            ? "bg-blue-500"
                            : "bg-gray-300 dark:bg-gray-600"
                            }`}
                    ></span>
                ))}
            </div>
        </div >

    );
};

export default ImageCoursel;
