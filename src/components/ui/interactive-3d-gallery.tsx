import React, { useRef, useEffect, useState, useCallback } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface Interactive3DGalleryProps {
  images: { src: string; alt: string; title: string; description: string }[];
  width?: number;
  height?: number;
  className?: string;
}

export const Interactive3DGallery: React.FC<Interactive3DGalleryProps> = ({
  images,
  width = 800,
  height = 600,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const controls = useAnimation();
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  // Simulación de carga
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setIsLoaded(true);
        controls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 1, ease: "easeOut" },
        });
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView, controls]);

  // Efecto de parallax
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    containerRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    }
  }, []);

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className={`relative ${className}`}>
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        className="w-full h-full relative cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.1s ease-out",
        }}
      >
        {!isLoaded ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gold-500 mx-auto mb-2"></div>
              <p className="text-sm">Cargando experiencia 3D...</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-full">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="relative group cursor-pointer"
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                whileTap={{ scale: 0.95 }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                }}
                onClick={() => setSelectedImage(index)}
              >
                {/* Efecto de profundidad */}
                <div
                  className="absolute inset-0 bg-linear-to-br from-transparent via-transparent to-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                  style={{
                    transform: "translateZ(-10px)",
                    zIndex: 1,
                  }}
                />

                {/* Imagen principal */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                  style={{
                    transform: "translateZ(20px)",
                    zIndex: 2,
                  }}
                />

                {/* Overlay de información */}
                <div
                  className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end p-4"
                  style={{
                    transform: "translateZ(10px)",
                    zIndex: 3,
                  }}
                >
                  <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-semibold text-sm">{image.title}</h3>
                    <p className="text-xs opacity-80 mt-1 line-clamp-2">
                      {image.description}
                    </p>
                  </div>
                </div>

                {/* Bordes iluminados */}
                <div
                  className="absolute top-0 left-0 w-full h-full pointer-events-none"
                  style={{
                    boxShadow: "0 0 20px rgba(197, 160, 89, 0.3) inset",
                    transform: "translateZ(30px)",
                    zIndex: 4,
                  }}
                />
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>

      {/* Overlay de información detallada */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={handleClose}
        >
          <motion.div
            className="bg-white rounded-lg p-8 max-w-4xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
            style={{
              transformStyle: "preserve-3d",
              perspective: "1000px",
            }}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
            >
              ✕
            </button>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <motion.img
                  src={images[selectedImage].src}
                  alt={images[selectedImage].alt}
                  className="w-full h-auto rounded-lg shadow-2xl"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  style={{
                    transform: "translateZ(50px)",
                  }}
                />
              </div>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    {images[selectedImage].title}
                  </h2>
                  <div className="w-16 h-1 bg-gold-500 mb-4"></div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {images[selectedImage].description}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                  className="space-y-4"
                >
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      Galería 3D Interactiva
                    </span>
                    <span className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                      Animaciones Fluidas
                    </span>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Características:
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Efecto parallax 3D</li>
                      <li>• Animaciones con Framer Motion</li>
                      <li>• Interacción por hover y click</li>
                      <li>• Responsive design</li>
                      <li>• Transiciones suaves</li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                  className="flex space-x-4"
                >
                  <button className="bg-gold-500 text-white px-6 py-2 rounded-full hover:bg-gold-600 transition-colors duration-300 font-medium">
                    Ver más proyectos
                  </button>
                  <button
                    onClick={handleClose}
                    className="border border-gray-300 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-50 transition-colors duration-300 font-medium"
                  >
                    Cerrar
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};
