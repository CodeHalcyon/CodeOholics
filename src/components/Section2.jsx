import React from "react";
import { FaCode, FaGraduationCap, FaTrophy } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const cards = [
  {
    icon: <FaCode className="w-6 h-6" />,
    id: "01",
    title: "Workshops",
    desc: "Hands-on skill labs where demos become working projects. No lectures, only build time.",
    tag: "Skill lab",
    tone: "bg-zing",
    image: "/gfe.JPG",
    alt: "Gemini For Everything workshop session",
  },
  {
    icon: <FaGraduationCap className="w-6 h-6" />,
    id: "02",
    title: "Bootcamps",
    desc: "Intensive sprints that shape careers — a portfolio in days, not semesters.",
    tag: "Intensive",
    tone: "bg-paper",
    image: "/kick.jpeg",
    alt: "Community Kickoff bootcamp",
  },
  {
    icon: <FaTrophy className="w-6 h-6" />,
    id: "03",
    title: "Hackathons",
    desc: "24-hour nationwide team builds. Ship something real before the sun comes up.",
    tag: "24H",
    tone: "bg-volt",
    image: "/htv.png",
    alt: "Hack The Verse hackathon",
  },
];

const Section2 = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      <div className="sec-head">
        <h2 className="font-display text-4xl sm:text-5xl uppercase">
          What we <span className="text-paper bg-punk px-2">do</span>
        </h2>
        <span className="label-mono hidden sm:block text-ink/60">SEC.01-03 / MANIFEST</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 items-stretch">
        {cards.map((c, i) => (
          <motion.article
            key={c.id}
            className={`hard-card p-0 flex flex-col ${c.tone} overflow-hidden h-full`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            {/* Fixed image height */}
            <div className="relative h-[360px] w-full shrink-0">
              <img
                src={c.image}
                alt={c.alt}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="label-mono text-zing">{c.id}</span>
              </div>
            </div>

            {/* Card content */}
            <div className="p-6 flex flex-col flex-1 gap-4">
              <div className="flex items-center justify-between">
                <span className="label-mono text-zing">
                  {c.title.toUpperCase()}
                </span>

                <span
                  className={`grid place-items-center h-12 w-12 shrink-0 border-2 border-ink bg-paper text-ink ${c.id === "02" ? "rotate-3" : ""
                    }`}
                >
                  {c.icon}
                </span>
              </div>

              <p className="font-medium text-[15px] leading-relaxed text-ink">
                {c.desc}
              </p>

              <span className="chip mt-auto self-start !bg-zing text-ink">
                {c.tag}
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Section2;