import { motion } from 'motion/react';

const qualities = [
  { num: "01", title: "Your Grace", desc: "The way you move through the world with such elegance, even when things are heavy. You carry yourself with a quiet strength that leaves me in awe." },
  { num: "02", title: "Your Heart", desc: "Your capacity to love, to care, and to feel deeply is your superpower. You bring warmth to every room and comfort to my soul." },
  { num: "03", title: "Your Brilliance", desc: "Your mind is a beautiful place. I am constantly amazed by your intelligence, your perspective, and the way you see the world." },
  { num: "04", title: "Your Softness", desc: "In a world that demands hardness, your gentleness is a gift. It is a rare and profound kind of bravery to remain so soft." }
];

export default function Extraordinary() {
  return (
    <section id="extraordinary" className="py-32 md:py-48 px-6 bg-ivory relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        <div className="lg:w-1/3">
          <motion.div 
            className="sticky top-32"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink mb-6 leading-tight">
              Why You Are <br />
              <span className="italic text-gradient-gold">Extraordinary</span>
            </h2>
            <p className="text-muted text-lg font-light leading-relaxed">
              You are not just beautiful. You are rare, meaningful, and deeply valuable. There is a light in you that I have never seen in anyone else.
            </p>
          </motion.div>
        </div>
        
        <div className="lg:w-2/3 flex flex-col gap-24 md:gap-40 mt-10 lg:mt-0">
          {qualities.map((q, i) => (
            <motion.div 
              key={i} 
              className="relative pl-8 md:pl-0"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <span className="absolute left-0 md:-left-24 top-[-20px] md:top-[-40px] text-7xl md:text-9xl font-serif text-champagne/50 font-light leading-none select-none">
                {q.num}
              </span>
              <h3 className="font-serif text-3xl md:text-4xl text-ink mb-4 relative z-10">{q.title}</h3>
              <p className="text-muted text-lg font-light leading-relaxed max-w-xl relative z-10">{q.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
