import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const appreciations = [
  { id: 1, title: "Your Patience", content: "Thank you for the times you've waited for me to understand, for the grace you've shown when I stumbled. Your patience is a quiet kind of love that I never take for granted." },
  { id: 2, title: "Your Smile", content: "It is the single most beautiful thing I have ever seen. When you smile, the whole world feels lighter, and my heart feels fuller." },
  { id: 3, title: "Your Presence", content: "Just being near you is enough. You don't have to do anything or say anything; your energy alone brings me peace." },
  { id: 4, title: "Your Wisdom", content: "I appreciate the way you think, the advice you give, and the depth of your understanding. You make me want to be a better person." },
  { id: 5, title: "Your Laughter", content: "It is my favorite sound. It is the melody I want to hear for the rest of my life. Thank you for sharing your joy with me." },
  { id: 6, title: "Your Light", content: "Thank you for existing. Thank you for being exactly who you are. You make the world a brighter, softer place." }
];

export default function Appreciation() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 bg-champagne/10">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-serif text-4xl md:text-6xl text-ink mb-6">
            What I <span className="italic text-gradient-gold">Appreciate</span>
          </h2>
        </motion.div>

        <div className="border-t border-ink/10">
          {appreciations.map((item, index) => (
            <motion.div 
              key={item.id} 
              className="border-b border-ink/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <button 
                onClick={() => setActiveId(activeId === item.id ? null : item.id)} 
                className="w-full py-8 md:py-10 flex justify-between items-center text-left group"
              >
                <span className={`font-serif text-2xl md:text-4xl transition-colors duration-500 ${activeId === item.id ? 'text-gold italic' : 'text-ink group-hover:text-gold/70'}`}>
                  {item.title}
                </span>
                <span className="text-3xl font-light text-muted/50 group-hover:text-gold transition-colors">
                  {activeId === item.id ? '−' : '+'}
                </span>
              </button>
              <AnimatePresence>
                {activeId === item.id && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }} 
                    animate={{ height: 'auto', opacity: 1 }} 
                    exit={{ height: 0, opacity: 0 }} 
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-10 text-lg md:text-xl text-muted font-light leading-relaxed max-w-2xl">
                      {item.content}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
