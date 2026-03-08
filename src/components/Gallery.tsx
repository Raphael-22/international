import { motion } from 'motion/react';
const photos = [
  { src: `${import.meta.env.BASE_URL}jane2.jpg`, alt: 'Jane 1', aspect: 'aspect-[3/4]' },
  { src: `${import.meta.env.BASE_URL}jane1.jpg`, alt: 'Jane 2', aspect: 'aspect-square' },
  { src: `${import.meta.env.BASE_URL}jane3.jpg`, alt: 'Jane 3', aspect: 'aspect-[4/3]' },
  { src: `${import.meta.env.BASE_URL}jane4.jpg`, alt: 'Jane 4', aspect: 'aspect-[3/4]' },
];

export default function Gallery() {
  return (
    <section className="py-32 md:py-48 px-6 bg-ivory">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="font-serif text-4xl md:text-6xl text-ink mb-24 text-center"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        >
          Moments in time.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              className={`relative overflow-hidden ${photo.aspect} ${index % 2 !== 0 ? 'md:mt-32' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <img 
                src={photo.src} 
                alt={photo.alt} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-out"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
