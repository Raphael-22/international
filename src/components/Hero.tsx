import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between p-6 md:p-12 bg-ivory overflow-hidden">
      <div className="w-full flex justify-between items-start pt-8">
        <motion.span 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}
          className="text-xs uppercase tracking-[0.3em] text-ink/50 font-medium"
        >
          March 8th
        </motion.span>
        <motion.span 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 0.5 }}
          className="text-xs uppercase tracking-[0.3em] text-ink/50 font-medium"
        >
          A Digital Letter
        </motion.span>
      </div>

      <div className="max-w-7xl mx-auto w-full pb-20">
        <motion.h1 
          className="font-serif text-[20vw] md:text-[14vw] leading-[0.85] tracking-tighter text-ink"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          For <span className="italic text-muted/60">Jane.</span>
        </motion.h1>
        
        <motion.div 
          className="mt-12 md:mt-24 md:ml-auto max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          <p className="text-lg md:text-xl text-ink/70 font-light leading-relaxed">
            There are things I need to say, things I want you to remember, and things you deserve to hear.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
