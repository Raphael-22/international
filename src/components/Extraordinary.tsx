import { motion } from 'motion/react';

const qualities = [
  {
    num: '01',
    title: 'Your Grace',
    desc: "La manière dont tu traverses la vie avec autant d’élégance, même lorsque tout devient lourd, force l’admiration. Tu portes en toi une force discrète, noble et rare, qui te rend profondément inoubliable."
  },
  {
    num: '02',
    title: 'Your Heart',
    desc: "Ton cœur est d’une beauté rare. Ta capacité à aimer sincèrement, à prendre soin des autres et à ressentir les choses avec autant de profondeur fait de toi une personne précieuse et irremplaçable."
  },
  {
    num: '03',
    title: 'Your Brilliance',
    desc: "Ton intelligence et ta manière de voir le monde sont fascinantes. Tu as une profondeur de pensée, une sensibilité et une clarté qui rendent chacune de tes paroles marquante."
  },
  {
    num: '04',
    title: 'Your Softness',
    desc: "Dans un monde qui pousse souvent à devenir dur, ta douceur est une force immense. Elle apaise, elle rassure, et elle révèle une forme de courage rare et magnifique."
  }
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
