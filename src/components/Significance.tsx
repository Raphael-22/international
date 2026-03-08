import { motion } from 'motion/react';

const moments = [
  { title: "My Direction", description: "You give my life a sense of purpose and direction that I didn't know I was missing." },
  { title: "My Anchor", description: "When the world is chaotic, you are the calm I return to. You ground me in what truly matters." },
  { title: "My Warmth", description: "Your presence is like a fire on a cold night. You make everything feel brighter and safer." },
  { title: "My Home", description: "Home isn't a place anymore; it's wherever you are. You are my favorite place to be." }
];

export default function Significance() {
  return (
    <section className="py-40 px-6 bg-ink text-ivory relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.05),transparent_70%)]"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="mb-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-serif text-5xl md:text-7xl mb-6 font-light">
            How <span className="italic text-gold">Significant</span><br/>You Are
          </h2>
        </motion.div>

        <div className="space-y-32 md:space-y-40">
          {moments.map((moment, index) => (
            <motion.div
              key={index}
              className={`flex flex-col ${index % 2 === 1 ? 'md:items-end text-left md:text-right' : 'md:items-start text-left'}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
            >
              <div className="max-w-2xl">
                <span className="text-gold tracking-[0.2em] uppercase text-xs md:text-sm mb-6 block font-medium">
                  {String(index + 1).padStart(2, '0')} — {moment.title}
                </span>
                <h3 className="font-serif text-3xl md:text-5xl leading-tight text-ivory/90 font-light">
                  "{moment.description}"
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
