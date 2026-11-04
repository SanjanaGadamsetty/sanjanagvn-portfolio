import { useRef } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, ChevronLeft, ChevronRight, CalendarDays, Award } from 'lucide-react';
import { education } from '@/data/education';

export default function Education() {
  const trackRef = useRef<HTMLDivElement>(null);
  const move = (direction: number) => trackRef.current?.scrollBy({ left: direction * 380, behavior: 'smooth' });
  return (
    <section id="education" className="relative overflow-hidden py-20 lg:py-28" style={{ background: 'linear-gradient(180deg, #002A20 0%, #003B2B 55%, #002A20 100%)', scrollMarginTop: 80 }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 80% 25%, rgba(213,166,79,.11), transparent 45%)' }} />
      <div className="relative content-wrapper px-4 md:px-8">
        <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .65 }} className="text-center mb-12">
          <span className="text-gold-champagne tracking-[.25em] uppercase text-xs font-semibold">Academic journey</span>
          <h2 className="text-4xl md:text-5xl font-bold text-ivory mt-4">Education</h2>
          <div className="mx-auto mt-5 h-[2px] w-24" style={{ background: 'linear-gradient(90deg, transparent, #D5A64F, transparent)' }} />
          <p className="text-ivory/65 mt-5">The foundations behind my curiosity and growth.</p>
        </motion.div>
        <div className="flex justify-end gap-3 mb-5">
          <button type="button" aria-label="Scroll education left" onClick={() => move(-1)} className="rounded-full border border-gold-champagne/40 p-3 text-gold-champagne hover:bg-gold-champagne/15 transition-colors"><ChevronLeft size={19} /></button>
          <button type="button" aria-label="Scroll education right" onClick={() => move(1)} className="rounded-full border border-gold-champagne/40 p-3 text-gold-champagne hover:bg-gold-champagne/15 transition-colors"><ChevronRight size={19} /></button>
        </div>
        <div ref={trackRef} tabIndex={0} aria-label="Education cards, scroll horizontally" className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8" style={{ scrollbarWidth: 'thin', scrollbarColor: '#D5A64F transparent' }}>
          {education.map((entry, index) => (
            <motion.article key={entry.id} initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .12 }} className="shrink-0 snap-start w-[min(85vw,390px)] min-h-[310px] rounded-3xl border border-gold-champagne/35 p-7 md:p-9 flex flex-col" style={{ background: 'linear-gradient(145deg, rgba(17,79,61,.92), rgba(3,43,32,.96))', boxShadow: '0 16px 45px rgba(0,0,0,.18)' }}>
              <div className="flex items-start justify-between gap-3"><span className="inline-flex rounded-2xl p-3 bg-gold-champagne/10 text-gold-champagne"><GraduationCap size={27}/></span><span className="text-xs tracking-wider text-gold-champagne/80">{String(index + 1).padStart(2, '0')}</span></div>
              <h3 className="text-2xl font-semibold text-ivory mt-6 leading-snug">{entry.institution}</h3>
              <p className="text-gold-champagne font-medium mt-2">{entry.qualification}</p>
              <div className="flex items-center gap-2 text-ivory/70 text-sm mt-5"><CalendarDays size={16}/>{entry.period}</div>
              {entry.score && <div className="flex items-center gap-2 text-ivory mt-3 text-sm"><Award size={16} className="text-gold-champagne"/>{entry.score}</div>}
              {entry.details && <p className="text-ivory/65 text-sm leading-relaxed mt-5">{entry.details}</p>}
            </motion.article>
          ))}
        </div>
        <p className="text-center text-ivory/45 text-xs mt-3">Swipe or use the arrows to explore education</p>
      </div>
    </section>
  );
}
