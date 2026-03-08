import { motion } from 'motion/react';

export default function Trust() {
  return (
    <section className="py-32 px-6 bg-blush/10">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-serif text-4xl md:text-6xl text-ink mb-6">
            Rebuilding <span className="italic text-gradient-gold">Trust</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Center Line for Desktop */}
          <div className="absolute left-[23px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/10 via-gold/40 to-gold/10 md:-translate-x-1/2"></div>

          <div className="space-y-20">
            {/* Step 1 */}
            <motion.div 
              className="relative flex flex-col md:flex-row items-start md:items-center md:justify-between group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="md:w-5/12 text-left md:text-right pl-16 md:pl-0 pr-0 md:pr-12">
                <h3 className="font-serif text-3xl text-ink mb-3 group-hover:text-gold transition-colors">The Seed</h3>
                <p className="text-muted font-light leading-relaxed">It starts with a promise, a genuine intention to be better, to listen, and to understand.</p>
              </div>
              <div className="absolute left-0 md:left-1/2 top-0 md:top-1/2 -translate-y-0 md:-translate-y-1/2 w-12 h-12 rounded-full bg-ivory border border-gold/30 flex items-center justify-center md:-translate-x-1/2 z-10 shadow-sm group-hover:scale-110 transition-transform">
                <div className="w-3 h-3 rounded-full bg-gold"></div>
              </div>
              <div className="hidden md:block md:w-5/12"></div>
            </motion.div>

            {/* Step 2 */}
            <motion.div 
              className="relative flex flex-col md:flex-row items-start md:items-center md:justify-between group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="hidden md:block md:w-5/12"></div>
              <div className="absolute left-0 md:left-1/2 top-0 md:top-1/2 -translate-y-0 md:-translate-y-1/2 w-12 h-12 rounded-full bg-ivory border border-gold/30 flex items-center justify-center md:-translate-x-1/2 z-10 shadow-sm group-hover:scale-110 transition-transform">
                <div className="w-3 h-3 rounded-full bg-gold"></div>
              </div>
              <div className="md:w-5/12 text-left pl-16 md:pl-12">
                <h3 className="font-serif text-3xl text-ink mb-3 group-hover:text-gold transition-colors">The Growth</h3>
                <p className="text-muted font-light leading-relaxed">It grows through consistent actions, through showing up, and through proving that my words have weight.</p>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div 
              className="relative flex flex-col md:flex-row items-start md:items-center md:justify-between group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="md:w-5/12 text-left md:text-right pl-16 md:pl-0 pr-0 md:pr-12">
                <h3 className="font-serif text-3xl text-ink mb-3 group-hover:text-gold transition-colors">The Roots</h3>
                <p className="text-muted font-light leading-relaxed">It deepens into something unbreakable, rooted in honesty, respect, and a love that refuses to give up.</p>
              </div>
              <div className="absolute left-0 md:left-1/2 top-0 md:top-1/2 -translate-y-0 md:-translate-y-1/2 w-12 h-12 rounded-full bg-ivory border border-gold/30 flex items-center justify-center md:-translate-x-1/2 z-10 shadow-sm group-hover:scale-110 transition-transform">
                <div className="w-3 h-3 rounded-full bg-gold"></div>
              </div>
              <div className="hidden md:block md:w-5/12"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
