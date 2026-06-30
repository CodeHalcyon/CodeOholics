import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaLinkedin, FaInstagram, FaGithub,
  FaCode, FaUsers, FaLightbulb, FaRocket
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const heroTitleRef = useRef(null);
  const heroSubRef = useRef(null);
  const storyRef = useRef(null);
  const statsRef = useRef(null);
  const foundingRef = useRef(null);
  const currentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroTitleRef.current,
        { y: 120, opacity: 0, rotateX: 15 },
        { y: 0, opacity: 1, rotateX: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: heroTitleRef.current, start: "top 85%", toggleActions: "play none none reverse" },
        }
      );
      gsap.fromTo(
        heroSubRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: "power2.out",
          scrollTrigger: { trigger: heroSubRef.current, start: "top 85%", toggleActions: "play none none reverse" },
        }
      );
      gsap.fromTo(
        ".about-img",
        { y: 60, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.15, ease: "power2.out",
          scrollTrigger: { trigger: ".about-imgs", start: "top 80%", toggleActions: "play none none reverse" },
        }
      );
      gsap.fromTo(
        storyRef.current,
        { x: 60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power2.out",
          scrollTrigger: { trigger: storyRef.current, start: "top 80%", toggleActions: "play none none reverse" },
        }
      );
      gsap.fromTo(
        ".stat-item",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.12, ease: "power2.out",
          scrollTrigger: { trigger: statsRef.current, start: "top 80%", toggleActions: "play none none reverse" },
        }
      );

      gsap.fromTo(
        ".founding-card",
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: "power2.out",
          scrollTrigger: { trigger: foundingRef.current, start: "top 80%", toggleActions: "play none none reverse" },
        }
      );
      // Git branch: main line draw
      document.querySelectorAll(".branch-main").forEach(line => {
        const len = line.getTotalLength();
        line.style.strokeDasharray = len;
        gsap.fromTo(line, { strokeDashoffset: len }, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: currentRef.current,
            start: "top 30%",
            end: "bottom 60%",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      });

      // Git branch: member cards reveal
      gsap.utils.toArray(".member-card").forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, x: 24 },
          { opacity: 1, x: 0, duration: 0.5, ease: "power2.out",
            scrollTrigger: { trigger: card, start: "top 85%", toggleActions: "play none none reverse" },
          }
        );
      });

      // Git branch: dots pop in
      gsap.utils.toArray(".member-dot").forEach((dot) => {
        gsap.fromTo(dot,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.35, ease: "back.out(2.5)",
            scrollTrigger: { trigger: dot, start: "top 85%", toggleActions: "play none none reverse" },
          }
        );
      });

      // Git branch: connector lines grow
      gsap.utils.toArray(".member-connector").forEach((conn) => {
        const origin = conn.classList.contains("conn-left") ? "left center" : "right center";
        gsap.fromTo(conn,
          { scaleX: 0 },
          { scaleX: 1, duration: 0.4, ease: "power2.inOut",
            transformOrigin: origin,
            scrollTrigger: { trigger: conn, start: "top 85%", toggleActions: "play none none reverse" },
          }
        );
      });
      // Footer words stagger
      gsap.fromTo(".footer-word",
        { y: 40, opacity: 0, rotateX: 15 },
        { y: 0, opacity: 1, rotateX: 0, duration: 0.6, stagger: 0.06, ease: "power3.out",
          scrollTrigger: { trigger: ".footer-words", start: "top 85%", toggleActions: "play none none reverse" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const scrollPanels = [
    { icon: <FaUsers className="w-8 h-8" />, title: "Passionate Minds", desc: "A collective of coders, designers, and tech enthusiasts shaping the future of technology." },
    { icon: <FaLightbulb className="w-8 h-8" />, title: "Innovation-Driven", desc: "From AI to Blockchain, we explore and experiment with cutting-edge technologies." },
    { icon: <FaCode className="w-8 h-8" />, title: "Community First", desc: "We grow together, sharing knowledge, ideas, and opportunities at every step." },
    { icon: <FaRocket className="w-8 h-8" />, title: "Real-World Impact", desc: "Bridging academia and industry to solve meaningful challenges that matter." },
  ];

  return (
    <div ref={sectionRef} className="bg-white">
      {/* ─── HERO ─── */}
      <section className="min-h-screen flex items-center px-6 md:px-16 pt-28 pb-20">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-[55%]">
              <span className="font-body text-xs font-medium text-gray-400 uppercase tracking-[0.2em]">About Us</span>
              <h1 ref={heroTitleRef} className="font-display text-8xl md:text-[10rem] lg:text-[12rem] leading-[0.8] text-gray-900 mt-4">
                Code<br /><span className="text-gray-200">Oholics</span>
              </h1>
              <p ref={heroSubRef} className="font-body text-base md:text-lg text-gray-500 max-w-lg mt-6 leading-relaxed">
                A community of builders, thinkers, and dreamers — where code meets creativity and every line tells a story.
              </p>
            </div>
            <div className="w-full lg:w-[45%] about-imgs grid grid-cols-2 gap-3 md:gap-4">
              <div className="about-img overflow-hidden rounded-2xl">
                <img src="/code1.jpg" className="h-48 md:h-72 w-full object-cover" alt="" />
              </div>
              <div className="about-img overflow-hidden rounded-2xl mt-8">
                <img src="/code2.jpg" className="h-48 md:h-72 w-full object-cover" alt="" />
              </div>
              <div className="about-img overflow-hidden rounded-2xl -mt-8">
                <img src="/code3.png" className="h-48 md:h-72 w-full object-cover" alt="" />
              </div>
              <div className="about-img overflow-hidden rounded-2xl">
                <img src="/code4.jpg" className="h-48 md:h-72 w-full object-cover" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section ref={statsRef} className="py-20 px-6 md:px-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
          {[
            { num: "2022", label: "Founded" },
            { num: "1000+", label: "Members" },
            { num: "20+", label: "Events" },
            { num: "∞", label: "Possibilities" },
          ].map((s, i) => (
            <div key={i} className="stat-item text-center">
              <div className="font-display text-5xl md:text-7xl text-gray-900">{s.num}</div>
              <div className="font-body text-xs text-gray-400 uppercase tracking-widest mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── STORY ─── */}
      <section className="py-20 md:py-32 px-6 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24 items-start">
          <div className="w-full md:w-[45%] about-imgs flex flex-col sm:flex-row gap-3">
            <div className="about-img overflow-hidden rounded-2xl flex-1">
              <img src="/kick.jpeg" className="h-56 md:h-72 w-full object-cover" alt="" />
            </div>
            <div className="about-img overflow-hidden rounded-2xl flex-1 mt-4 sm:mt-8">
              <img src="/join.jpg" className="h-56 md:h-72 w-full object-cover" alt="" />
            </div>
          </div>
          <div ref={storyRef} className="w-full md:w-[55%]">
            <span className="font-body text-xs font-medium text-gray-400 uppercase tracking-[0.2em]">Our Story</span>
            <h2 className="font-display text-5xl md:text-7xl text-gray-900 mt-3 leading-[0.9]">
              A Glimpse Into<br /><span className="text-gray-300">Codeoholics</span>
            </h2>
            <p className="font-body text-base text-gray-600 leading-relaxed mt-6 max-w-xl">
              Behind every line of code, every brainstorming session, and every challenge conquered lies a thriving community of innovators. Codeoholics isn't just about coding; it's about collaboration, creativity, and pushing boundaries.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-4 max-w-lg">
              {[
                { icon: <FaUsers className="w-4 h-4" />, title: "Passionate Minds" },
                { icon: <FaLightbulb className="w-4 h-4" />, title: "Innovation-Driven" },
                { icon: <FaCode className="w-4 h-4" />, title: "Community First" },
                { icon: <FaRocket className="w-4 h-4" />, title: "Real-World Impact" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white border border-gray-200 rounded-full px-4 py-2.5 shadow-sm">
                  <span className="text-gray-700">{item.icon}</span>
                  <span className="font-body text-xs font-medium text-gray-900">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── HORIZONTAL SCROLL: WHAT DEFINES US ─── */}
      <section className="bg-white">
        <div className="py-20 px-6 md:px-16 text-center relative z-10 bg-white">
          <span className="font-body text-xs font-medium text-gray-400 uppercase tracking-[0.2em]">Values</span>
          <h2 className="font-display text-5xl md:text-7xl text-gray-900 mt-3">What Defines Us</h2>
        </div>
        <div className="px-6 md:px-16 pb-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {scrollPanels.map((panel, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gray-100 mb-6">
                  <span className="text-gray-800">{panel.icon}</span>
                </div>
                <h3 className="font-display text-3xl text-gray-900 leading-[0.9] mb-3">{panel.title}</h3>
                <p className="font-body text-sm text-gray-500 leading-relaxed">{panel.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOUNDING TEAM ─── */}
      <section ref={foundingRef} className="py-20 md:py-32 px-6 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-body text-xs font-medium text-gray-400 uppercase tracking-[0.2em]">Team</span>
            <h2 className="font-display text-5xl md:text-7xl text-gray-900 mt-3">Founding Team</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Charan Narukulla", src: "https://etvqaruci3mfadph.public.blob.vercel-storage.com/charan-HdgiqB9KCsda7dJI0ubMCxWDyzqhrf.jpeg", linkedin: "https://www.linkedin.com/in/charan-narukulla/", instagram: "https://www.instagram.com/charan_chowdary_n/" },
              { name: "Abhilash Movva", src: "https://etvqaruci3mfadph.public.blob.vercel-storage.com/abhilash-eQVpTbFeKpIK7eDCNkfw3KIckWty56.jpeg", linkedin: "https://www.linkedin.com/in/abhilashmovva/", instagram: "https://www.instagram.com/abhilashmovva/" },
              { name: "Sourabh Mahindrakar", src: "https://etvqaruci3mfadph.public.blob.vercel-storage.com/sourabh-qiJEAsORlSMW8QIILVnzwdpjBnp5S7.jpeg", linkedin: "https://www.linkedin.com/in/sourabh-mahindrakar-7459541b0/", instagram: "https://www.instagram.com/itzz_sooo_rabh/" },
              { name: "Manav Patel", src: "https://etvqaruci3mfadph.public.blob.vercel-storage.com/manav-mUocAEV2mKT1hGhbWaJYX44gNoHUWu.jpeg", linkedin: "http://linkedin.com/in/manav-patel-3964b41ba/", instagram: "https://www.instagram.com/m.n.v_patel/" },
            ].map((m, i) => (
              <div key={i} className="founding-card group relative overflow-hidden rounded-2xl bg-white border border-gray-200 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={m.src} alt={m.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white font-semibold text-sm md:text-base">{m.name}</h3>
                  <div className="flex gap-3 mt-2">
                    {m.linkedin && <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors"><FaLinkedin size={14} /></a>}
                    {m.instagram && <a href={m.instagram} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors"><FaInstagram size={14} /></a>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CURRENT TEAM: GIT BRANCH ─── */}
      <section ref={currentRef} className="py-20 md:py-32 px-6 md:px-16 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="font-body text-xs font-medium text-gray-400 uppercase tracking-[0.2em]">Leadership</span>
            <h2 className="font-display text-5xl md:text-7xl text-gray-900 mt-3">Current Team</h2>
          </div>

          <div className="relative">
            {/* Mobile branch line */}
            <svg
              className="md:hidden absolute left-[1.65rem] top-0 h-full w-0.5 overflow-visible pointer-events-none"
              style={{ willChange: 'stroke-dashoffset' }}
            >
              <line className="branch-main text-gray-300" x1="0" y1="0" x2="0" y2="100%" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>

            {/* Desktop branch line */}
            <svg
              className="hidden md:block absolute left-1/2 -translate-x-px top-0 h-full w-0.5 overflow-visible pointer-events-none"
              style={{ willChange: 'stroke-dashoffset' }}
            >
              <line className="branch-main text-gray-300" x1="0" y1="0" x2="0" y2="100%" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>

            {[
              { name: "Chetan Sirigiri", src: "https://etvqaruci3mfadph.public.blob.vercel-storage.com/chetan-ykTVeIxZoZmEe5rm2voHxrdVAVJMVc.webp", role: "President", desc: "Leading the team with vision and driving innovation at Codeoholics.", linkedin: "https://www.linkedin.com/in/chetan-sirigiri/", github: "https://github.com/CodeHalcyon" },
              { name: "K. Nikhil", src: "https://etvqaruci3mfadph.public.blob.vercel-storage.com/Nikhil.jpg", role: "Vice President", desc: "Supporting leadership and ensuring smooth execution of initiatives.", linkedin: "https://www.linkedin.com/in/nikhil-kshirasagar08/" },
              { name: "Kammar Ahmed", src: "https://etvqaruci3mfadph.public.blob.vercel-storage.com/-k.jpg", role: "General Secretary", desc: "Coordinating operations and managing communication within the team.", linkedin: "https://www.linkedin.com/in/mohammad-kammar-ahmed/" },
              { name: "Karthik Usham", src: "https://etvqaruci3mfadph.public.blob.vercel-storage.com/karthik.jpg", role: "PR Lead", desc: "Building the community's presence through impactful public relations.", linkedin: "https://www.linkedin.com/in/karthik-reddy-usham-38a9b8256/", github: "https://github.com/Karthik-reddie" },
              { name: "Bhavish", src: "https://etvqaruci3mfadph.public.blob.vercel-storage.com/Bhavish.jpeg", role: "Web Dev Lead", desc: "Crafting engaging and functional web experiences for the community.", linkedin: "https://www.linkedin.com/in/bhavish-ankam-b5446528b/", github: "https://github.com/2005bhavish" },
              { name: "Anileshwar", src: "https://etvqaruci3mfadph.public.blob.vercel-storage.com/Anileshwar.jpg", role: "App Lead", desc: "Driving mobile innovation by building powerful and user-friendly apps.", linkedin: "https://www.linkedin.com/in/anileshwar/", github: "https://github.com/anileshwar12" },
              { name: "Sai Sruti", src: "https://etvqaruci3mfadph.public.blob.vercel-storage.com/Sruti.jpeg", role: "CP Lead", desc: "Guiding members in problem-solving and excelling in competitive programming.", linkedin: "https://www.linkedin.com/in/k-sruti-1733b7290/", github: "https://github.com/sruti1234" },
              { name: "Yashwanth", src: "https://etvqaruci3mfadph.public.blob.vercel-storage.com/Yashwanth.png", role: "Technical Lead", desc: "Providing technical expertise and mentoring in advanced technologies.", linkedin: "https://www.linkedin.com/in/yashmdj/", github: "https://github.com/Yashwanthmdj" },
              { name: "Arnav", src: "https://etvqaruci3mfadph.public.blob.vercel-storage.com/Arnav.jpg", role: "Events Lead", desc: "Organizing creative and impactful events for learning and collaboration.", linkedin: "https://www.linkedin.com/in/arnav-varahabhatla-4348b1291/" },
              { name: "Abdul Rahman", src: "https://etvqaruci3mfadph.public.blob.vercel-storage.com/Abdul%20Rahman.jpg", role: "Design Lead", desc: "Designing engaging visuals and branding to bring ideas to life.", linkedin: "https://www.linkedin.com/in/abdul-rahman18/", github: "https://github.com/abdul-rahman18" },
            ].map((m, i) => (
              <React.Fragment key={i}>
                {/* Mobile row */}
                <div className="md:hidden relative flex items-start py-7 pl-14">
                  <div className="member-dot absolute left-[1.15rem] top-5 w-3.5 h-3.5 rounded-full border-2 border-gray-900 bg-white z-10" />
                  <div className="member-connector conn-left absolute left-8 top-[1.35rem] h-px bg-gray-300 w-6" />
                  <div className="member-card ml-4 flex-1 bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex gap-3 items-start">
                      <img src={m.src} alt={m.name} className="w-11 h-11 rounded-full object-cover shrink-0 ring-2 ring-gray-100" />
                      <div className="min-w-0">
                        <h3 className="font-body text-sm font-semibold text-gray-900">{m.name}</h3>
                        <span className="text-[10px] font-mono text-gray-400">{m.role}</span>
                        {m.desc && <p className="text-xs text-gray-400 mt-1 leading-relaxed">{m.desc}</p>}
                        <div className="flex gap-2.5 mt-1.5">
                          {m.linkedin && <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-700 transition-colors"><FaLinkedin size={13} /></a>}
                          {m.github && <a href={m.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-700 transition-colors"><FaGithub size={13} /></a>}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop row */}
                <div className="hidden md:flex relative items-start py-10">
                  <div className={`w-[calc(50%-2rem)] ${i % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}>
                    <div className="member-card relative bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                      <div className={`member-connector absolute top-[1.15rem] h-px bg-gray-300 w-8 ${
                        i % 2 === 0 ? 'conn-left right-0 translate-x-full' : 'conn-right left-0 -translate-x-full'
                      }`} />
                      <div className="flex gap-3 items-start">
                        <img src={m.src} alt={m.name} className="w-14 h-14 rounded-full object-cover shrink-0 ring-2 ring-gray-100" />
                        <div className="min-w-0">
                          <h3 className="font-body text-sm font-semibold text-gray-900">{m.name}</h3>
                          <span className="text-xs font-mono text-gray-500 font-medium">{m.role}</span>
                          {m.desc && <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">{m.desc}</p>}
                          <div className="flex gap-2.5 mt-2">
                            {m.linkedin && <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-700 transition-colors"><FaLinkedin size={14} /></a>}
                            {m.github && <a href={m.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-700 transition-colors"><FaGithub size={14} /></a>}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="member-dot absolute left-1/2 -translate-x-1/2 top-[1.15rem] z-10">
                    <div className="w-4 h-4 rounded-full border-2 border-gray-900 bg-white" />
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOOTER NOTE ─── */}
      <section className="py-20 px-6 md:px-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <p className="footer-words font-display text-4xl md:text-6xl leading-[0.9] flex flex-wrap justify-center gap-x-4 gap-y-2">
            {"Built with love by the CodeOholics community".split(" ").map((word, i) => (
              <span
                key={i}
                className="footer-word inline-block text-gray-200 cursor-default transition-colors duration-300 hover:text-gray-900"
                style={{ willChange: 'transform, opacity' }}
              >
                {word === "love" ? "❤️" : word}
              </span>
            ))}
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
