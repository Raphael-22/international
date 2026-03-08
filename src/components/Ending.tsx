import { motion } from 'motion/react';

export default function Ending() {
  return (
    <section className="py-40 md:py-64 px-6 bg-ink text-ivory flex flex-col items-center justify-center min-h-screen text-center">
      <motion.h2 
        className="font-serif text-5xl md:text-8xl font-light leading-tight tracking-tight mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      >
        You are my favorite <br />
        <span className="italic text-ivory/60">what if.</span>
      </motion.h2>

      <motion.p 
        className="text-xl md:text-2xl text-ivory/70 font-light font-serif italic mb-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        Happy International Women's Day.
      </motion.p>
    </section>
  );
}
