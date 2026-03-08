import { motion } from 'motion/react';

export default function DeservesWorld() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Replace this with Jane's photo */}
        <img 
          src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2070&auto=format&fit=crop" 
          alt="Beautiful landscape" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-ink/40"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.h2 
          className="font-serif text-5xl md:text-8xl text-ivory leading-tight tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          You deserve a love that feels like <span className="italic">sunlight.</span>
        </motion.h2>
      </div>
    </section>
  );
}
