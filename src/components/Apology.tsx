import { motion } from 'motion/react';

export default function Apology() {
  return (
    <section className="py-40 px-6 bg-ivory">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-muted mb-12 font-medium">
            My Sincerity
          </h2>
          
          <div className="relative mb-16">
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-8xl font-serif text-champagne/40 leading-none">"</span>
            <p className="font-serif text-3xl md:text-5xl leading-relaxed text-ink italic relative z-10">
              I know that I have hurt you, and for that, I am profoundly sorry.
            </p>
          </div>

          <div className="w-px h-16 bg-gradient-to-b from-gold/50 to-transparent mx-auto mb-16"></div>

          <p className="text-lg md:text-xl text-muted font-light leading-loose max-w-2xl mx-auto mb-8">
            You deserve a love that is gentle, consistent, and safe. I regret the moments when I fell short of giving you that. 
          </p>
          <p className="text-lg md:text-xl text-muted font-light leading-loose max-w-2xl mx-auto">
            I am not asking you to forget, nor am I trying to erase the past. I am simply standing before you, taking responsibility for my actions, and promising to be better. Your heart is precious, and I want to protect it, not break it.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
