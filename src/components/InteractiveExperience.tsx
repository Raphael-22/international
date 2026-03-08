import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const hiddenMessages = [
  { id: 1, title: "A Promise", message: "I promise to choose you, not just on the easy days, but especially on the hard ones." },
  { id: 2, title: "A Truth", message: "You are the best part of my day, every single day." },
  { id: 3, title: "A Hope", message: "I hope we get to keep learning each other, growing together, and building a life that feels like home." }
];

export default function InteractiveExperience() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="py-32 md:py-48 px-6 bg-ink text-ivory relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          className="font-serif text-4xl md:text-6xl mb-24"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        >
          Read my mind.
        </motion.h2>

        <div className="flex flex-col border-t border-ivory/20">
          {hiddenMessages.map((item) => (
            <div key={item.id}>
              <button
                onClick={() => setSelected(selected === item.id ? null : item.id)}
                className="w-full text-left py-8 md:py-12 border-b border-ivory/20 flex justify-between items-center group"
              >
                <span className="font-serif text-3xl md:text-5xl text-ivory/70 group-hover:text-ivory transition-colors duration-500">
                  {item.title}
                </span>
                <span className="text-ivory/30 group-hover:text-ivory transition-colors duration-500 text-2xl font-light">
                  {selected === item.id ? '−' : '+'}
                </span>
              </button>
              
              <AnimatePresence>
                {selected === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="py-8 text-xl md:text-2xl font-light text-ivory/80 leading-relaxed max-w-2xl">
                      {item.message}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
