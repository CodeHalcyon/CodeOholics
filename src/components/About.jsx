import React, { useEffect, useRef, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaLinkedin, FaInstagram, FaGithub,
  FaUsers, FaLightbulb, FaCode, FaRocket,
} from "react-icons/fa";
import getCoreTeam from "../Helper/coreTeam";
import defaultCoreTeam from "../data/coreTeam.json";

const founding = [
  {
    name: "Charan Narukulla",
    role: "Founder",
    ser: "MEM-001",
    src: "https://etvqaruci3mfadph.public.blob.vercel-storage.com/charan-HdgiqB9KCsda7dJI0ubMCxWDyzqhrf.jpeg",
    linkedin: "https://www.linkedin.com/in/charan-narukulla/",
    instagram: "https://www.instagram.com/charan_chowdary_n/",
  },
  {
    name: "Abhilash Movva",
    role: "Co-founder",
    ser: "MEM-002",
    src: "https://etvqaruci3mfadph.public.blob.vercel-storage.com/abhilash-eQVpTbFeKpIK7eDCNkfw3KIckWty56.jpeg",
    linkedin: "https://www.linkedin.com/in/abhilashmovva/",
    instagram: "https://www.instagram.com/abhilashmovva/",
  },
  {
    name: "Sourabh Mahindrakar",
    role: "Co-founder",
    ser: "MEM-003",
    src: "https://etvqaruci3mfadph.public.blob.vercel-storage.com/sourabh-qiJEAsORlSMW8QIILVnzwdpjBnp5S7.jpeg",
    linkedin: "https://www.linkedin.com/in/sourabh-mahindrakar-7459541b0/",
    instagram: "https://www.instagram.com/itzz_sooo_rabh/",
  },
  {
    name: "Manav Patel",
    role: "Co-founder",
    ser: "MEM-004",
    src: "https://etvqaruci3mfadph.public.blob.vercel-storage.com/manav-mUocAEV2mKT1hGhbWaJYX44gNoHUWu.jpeg",
    linkedin: "http://linkedin.com/in/manav-patel-3964b41ba/",
    instagram: "https://www.instagram.com/m.n.v_patel/",
  },
];

const values = [
  { icon: <FaUsers className="w-6 h-6" />, title: "Passionate Minds", desc: "A collective of coders, designers, and tech enthusiasts shaping the future of technology." },
  { icon: <FaLightbulb className="w-6 h-6" />, title: "Innovation-Driven", desc: "From AI to Blockchain, we explore and experiment with cutting-edge technologies." },
  { icon: <FaCode className="w-6 h-6" />, title: "Community First", desc: "We grow together, sharing knowledge, ideas, and opportunities at every step." },
  { icon: <FaRocket className="w-6 h-6" />, title: "Real-World Impact", desc: "Bridging academia and industry to solve meaningful challenges that matter." },
];

const About = () => {
  const [team, setTeam] = useState(defaultCoreTeam);
  const statsRef = useRef(null);

  useEffect(() => {
    getCoreTeam().then((rows) => {
      if (rows.length > 0) setTeam(rows);
    });
  }, []);

  const stats = [
    { num: "2022", label: "Founded", tone: "bg-ink text-paper" },
    { num: "1000+", label: "Members", tone: "bg-zing text-ink" },
    { num: "20+", label: "Events", tone: "bg-punk text-paper" },
    { num: "∞", label: "Possibilities", tone: "bg-volt text-paper" },
  ];

  return (
    <div className="bg-paper">
      {/* ─── HERO ─── */}
      <section className="relative border-b-4 border-ink overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 gridpaper opacity-[0.06] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-16 grid lg:grid-cols-[1fr_1fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="label-mono flex items-center gap-3 mb-5">
              <span className="inline-block w-12 h-1 bg-punk" aria-hidden="true" />
              About us
            </p>
            <h1 className="font-display text-[clamp(4rem,12vw,11rem)] leading-[0.82] uppercase">
              Code
              <br />
              <span className="outline-word">Oholics</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg font-medium text-ink/75">
              A community of builders, thinkers, and dreamers — where code meets
              creativity and every line tells a story.
            </p>
            <div className="flex items-center gap-3 mt-8">
              <span className="stamp !rotate-[-4deg]">EST 2022</span>
              <span className="chip !bg-zing">1K+ Members</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {["/code1.jpg", "/code2.jpg", "/code3.png", "/code4.jpg"].map((src, i) => (
              <motion.div
                key={src}
                className={`border-[3px] border-ink bg-paper p-2 shadow-[8px_8px_0_0_var(--color-ink)] ${i === 1 ? "translate-y-6" : ""} ${i === 2 ? "-translate-y-6" : ""} transition-transform duration-200 hover:-translate-x-1 hover:-translate-y-1`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.15 + i * 0.08 }}
              >
                <img src={src} alt="" className="w-full h-44 sm:h-64 object-cover border-2 border-ink" loading="lazy" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section ref={statsRef} className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="sec-head">
          <h2 className="font-display text-4xl sm:text-5xl uppercase">The receipts</h2>
          <span className="label-mono hidden sm:block text-ink/60">PROOF OF WORK</span>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className={`border-[3px] border-ink shadow-[8px_8px_0_0_var(--color-ink)] p-8 flex flex-col items-center justify-center gap-1 text-center aspect-[4/4.5] ${s.tone}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
            >
              <div className="font-display text-6xl sm:text-7xl leading-none">{s.num}</div>
              <div className="label-mono text-[10px] opacity-90">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── STORY ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 grid md:grid-cols-2 gap-12 items-start">
        <div className="flex gap-4">
          {["/kick.jpeg", "/join.jpg"].map((src, i) => (
            <div key={src} className={`flex-1 border-[3px] border-ink bg-paper p-2 shadow-[8px_8px_0_0_var(--color-ink)] ${i ? "translate-y-6" : ""}`}>
              <img src={src} alt="CodeOholics story moments" className="w-full h-56 sm:h-72 object-cover border-2 border-ink" loading="lazy" />
            </div>
          ))}
        </div>
        <div>
          <p className="label-mono flex items-center gap-3 mb-4">
            <span className="inline-block w-12 h-1 bg-punk" aria-hidden="true" />
            Our story
          </p>
          <h2 className="font-display text-4xl sm:text-6xl uppercase leading-none">
            A glimpse into<br /><span className="text-punk underline decoration-ink decoration-4 underline-offset-8">Codeoholics</span>
          </h2>
          <p className="mt-6 text-lg font-medium text-ink/80 leading-relaxed max-w-xl">
            Behind every line of code, every brainstorming session, and every challenge
            conquered lies a thriving community of innovators. Codeoholics isn't just
            about coding; it's about collaboration, creativity, and pushing boundaries.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 max-w-lg">
            {values.slice(0, 4).map((v) => (
              <div key={v.title} className="chip justify-start !bg-paper gap-2.5 !py-3">
                {v.icon}
                {v.title}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section className="border-t-4 border-ink py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="sec-head">
            <h2 className="font-display text-4xl sm:text-5xl uppercase">What defines us</h2>
            <span className="label-mono hidden sm:block text-ink/60">SEC.04 / VALUES</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className={`hard-card p-6 flex flex-col gap-4 ${i % 2 ? "bg-zing" : "bg-paper"}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <span className="label-mono">0{i + 1}</span>
                <span className="grid place-items-center h-12 w-12 border-2 border-ink bg-paper text-ink">
                  {v.icon}
                </span>
                <h3 className="font-display text-2xl uppercase leading-none">{v.title}</h3>
                <p className="font-medium text-sm opacity-90">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOUNDING TEAM ─── */}
      <section className="border-t-4 border-ink py-16 bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="sec-head">
            <h2 className="font-display text-4xl sm:text-5xl uppercase">The ops</h2>
            <span className="label-mono hidden sm:block text-ink/60">FOUNDERS / MEM 001-004</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {founding.map((m, i) => (
              <motion.article
                key={m.name}
                className="flip-card border-[3px] border-ink bg-paper shadow-[9px_9px_0_0_var(--color-ink)] transition-transform duration-150 hover:-translate-x-1 hover:-translate-y-1"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="border-b-[3px] border-ink overflow-hidden bg-acid">
                  <img src={m.src} alt={m.name} className="flip-img w-full aspect-square object-cover" loading="lazy" />
                </div>
                <div className="p-4">
                  <h3 className="font-display text-2xl uppercase leading-none">{m.name}</h3>
                  <p className="label-mono text-ink/60 mt-1.5 mb-3">
                    <span aria-hidden="true" className="inline-block w-2.5 h-2.5 bg-acid border-2 border-ink mr-1.5 align-middle" />
                    {m.role}
                  </p>
                  <div className="flex items-center justify-between border-t-2 border-ink pt-2.5">
                    <span className="font-mono font-bold text-[11px] tracking-widest">{m.ser}</span>
                    <div className="flex gap-2.5">
                      {m.linkedin && (
                        <a href={m.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${m.name} on LinkedIn`} className="font-mono font-bold text-[11px] border-b-2 border-ink hover:bg-ink hover:text-paper transition-colors">
                          <FaLinkedin size={13} />
                        </a>
                      )}
                      {m.instagram && (
                        <a href={m.instagram} target="_blank" rel="noopener noreferrer" aria-label={`${m.name} on Instagram`} className="font-mono font-bold text-[11px] border-b-2 border-ink hover:bg-ink hover:text-paper transition-colors">
                          <FaInstagram size={13} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CURRENT TEAM: GROWING GIT TREE ─── */}
      <section className="border-t-4 border-ink py-16 overflow-hidden bg-paper">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="sec-head">
            <h2 className="font-display text-4xl sm:text-5xl uppercase">
              Current team
            </h2>
            <span className="label-mono hidden sm:block text-ink/60">
              LEADERSHIP / GIT BRANCH
            </span>
          </div>

          <div className="relative">
            {/* Growing trunk */}
            <motion.div
              aria-hidden="true"
              className="
          absolute
          left-[1.65rem]
          md:left-1/2
          md:-translate-x-1/2
          top-0
          bottom-0
          w-[3px]
          bg-ink
          origin-top
          z-0
        "
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: Math.max(team.length * 0.45, 1.8),
                ease: "easeInOut",
              }}
            />

            {team.map((m, i) => {
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={m.name || i}
                  className="relative py-6 md:py-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{
                    delay: i * 0.35,
                    duration: 0.3,
                  }}
                >
                  {/* Git commit node */}
                  <motion.span
                    aria-hidden="true"
                    className="
                absolute
                left-[1.05rem]
                md:left-1/2
                md:-translate-x-1/2
                top-7
                w-4
                h-4
                border-[3px]
                border-ink
                bg-zing
                z-10
              "
                    initial={{ scale: 0, rotate: 45 }}
                    whileInView={{ scale: 1, rotate: 45 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{
                      delay: i * 0.35 + 0.15,
                      duration: 0.25,
                      type: "spring",
                      stiffness: 300,
                    }}
                  />

                  {/* Growing branch */}
                  <motion.div
                    aria-hidden="true"
                    className={`
                hidden md:block
                absolute
                top-[35px]
                h-[3px]
                bg-ink
                z-0
                ${isLeft
                        ? "right-1/2 mr-0 origin-right"
                        : "left-1/2 ml-0 origin-left"}
              `}
                    style={{
                      width: "calc(50% - 2rem)",
                    }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{
                      delay: i * 0.35 + 0.25,
                      duration: 0.45,
                      ease: "easeOut",
                    }}
                  />

                  {/* Team card */}
                  <motion.div
                    className={`
                relative
                md:w-[calc(50%-2rem)]
                pl-12
                md:pl-0
                ${isLeft
                        ? "md:mr-auto"
                        : "md:ml-auto"}
              `}
                    initial={{
                      opacity: 0,
                      x: isLeft ? -35 : 35,
                      y: 10,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.35,
                    }}
                    transition={{
                      delay: i * 0.35 + 0.45,
                      duration: 0.45,
                      ease: "easeOut",
                    }}
                  >
                    <div className="
                flip-row
                border-[3px]
                border-ink
                bg-paper
                p-4
                shadow-[6px_6px_0_0_var(--color-ink)]
                transition-transform
                duration-150
                hover:-translate-x-1
                hover:-translate-y-1
              ">
                      <div className="flex gap-3 items-start">
                        <img
                          src={m.src}
                          alt={m.name}
                          className="
                      w-12
                      h-12
                      object-cover
                      border-2
                      border-ink
                      shrink-0
                    "
                          loading="lazy"
                        />

                        <div className="min-w-0">
                          <h3 className="font-display text-lg uppercase leading-none">
                            {m.name}
                          </h3>

                          <span className="
                      font-mono
                      text-[10px]
                      font-bold
                      tracking-widest
                      text-ink/60
                      uppercase
                    ">
                            {m.role}
                          </span>

                          {m.desc && (
                            <p className="
                        text-sm
                        font-medium
                        text-ink/70
                        mt-1
                        leading-snug
                      ">
                              {m.desc}
                            </p>
                          )}

                          <div className="flex gap-2.5 mt-2">
                            {m.linkedin && (
                              <a
                                href={m.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${m.name} on LinkedIn`}
                                className="
                            text-ink/60
                            hover:text-ink
                            transition-colors
                          "
                              >
                                <FaLinkedin size={13} />
                              </a>
                            )}

                            {m.github && (
                              <a
                                href={m.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${m.name} on GitHub`}
                                className="
                            text-ink/60
                            hover:text-ink
                            transition-colors
                          "
                              >
                                <FaGithub size={13} />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* ─── FOOTER NOTE ─── */}
      <section className="border-t-4 border-ink py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="font-display text-3xl sm:text-5xl md:text-6xl uppercase leading-[0.95] flex flex-wrap justify-center gap-x-5 gap-y-2">
            {"Built with love by the CodeOholics community".split(" ").map((word, i) => (
              <span key={i} className={`inline-block transition-colors duration-300 ${i % 3 === 0 ? "outline-word hover:[-webkit-text-stroke-color:var(--color-punk)]" : "text-ink/25 hover:text-ink"}`}>
                {word === "love" ? "♥" : word}
              </span>
            ))}
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;