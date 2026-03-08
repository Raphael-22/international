import { motion } from 'motion/react';

const photos = [
  { src: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=2074&auto=format&fit=crop", alt: "A beautiful moment", aspect: "aspect-[3/4]" },
  { src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop", alt: "Jane looking stunning", aspect: "aspect-square" },
  { src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop", alt: "A candid memory", aspect: "aspect-[4/3]" },
  { src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop", alt: "A quiet moment", aspect: "aspect-[3/4]" },
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
