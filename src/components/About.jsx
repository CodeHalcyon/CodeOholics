import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaLinkedin,
  FaInstagram,
  FaCode,
  FaUsers,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

// Member Card Component with elegant styling
const MemberCard = ({ name, src, linkedin, instagram }) => (
  <div className="group relative overflow-hidden rounded-lg bg-white/5 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 border border-transparent hover:border-emerald-500/20">
    <div className="aspect-square overflow-hidden">
      <img
        src={src}
        alt={name}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-emerald-900/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
    <div className="p-5">
      <h3 className="text-xl font-medium text-white">{name}</h3>
      <div className="mt-4 flex space-x-3">
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
          >
            <FaLinkedin size={18} />
          </a>
        )}
        {instagram && (
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
          >
            <FaInstagram size={18} />
          </a>
        )}
      </div>
    </div>
  </div>
);

// Current Team Member Component with elegant styling
const CurrentTeamMember = ({ name, src, role, desc, linkedin }) => (
  <div className="flex w-full flex-col md:flex-row items-center md:items-start gap-6 bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-transparent transition-all duration-300 hover:border-emerald-500/20">
    <div className="h-24 w-24 overflow-hidden rounded-full border-2 border-emerald-500/30">
      <img src={src} alt={name} className="h-full w-full object-cover" />
    </div>
    <div className="flex-1 text-center md:text-left">
      <h3 className="text-xl font-medium text-white">{name}</h3>
      <p className="text-emerald-400 font-medium">{role}</p>
      <p className="mt-2 text-gray-300">{desc}</p>
      {linkedin && (
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white transition-all duration-300 hover:bg-white/20"
        >
          <FaLinkedin size={16} />
          <span>Connect</span>
        </a>
      )}
    </div>
  </div>
);

// Feature Card Component for the "What defines us" section
const FeatureCard = ({ icon, title, description }) => (
  <div className="rounded-lg bg-white/5 backdrop-blur-sm p-6 border border-transparent transition-all duration-300 hover:border-emerald-500/20 hover:translate-y-[-5px]">
    <div className="mb-4 inline-flex rounded-full bg-emerald-500/10 p-3">
      {icon}
    </div>
    <h3 className="mb-2 text-xl font-medium text-emerald-400">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

const About = () => {
  const aboutRef = useRef(null);
  const foundingRef = useRef(null);
  const currentRef = useRef(null);
  const founderCardsRef = useRef([]);
  const currentTeamCardsRef = useRef([]);

  // Reset refs
  founderCardsRef.current = [];
  currentTeamCardsRef.current = [];

  // Add to founder cards ref
  const addToFounderRefs = (el) => {
    if (el && !founderCardsRef.current.includes(el)) {
      founderCardsRef.current.push(el);
    }
  };

  // Add to current team cards ref
  const addToCurrentTeamRefs = (el) => {
    if (el && !currentTeamCardsRef.current.includes(el)) {
      currentTeamCardsRef.current.push(el);
    }
  };

  useEffect(() => {
    // Add smooth scrolling to the document
    document.documentElement.style.scrollBehavior = "smooth";

    // Initialize all elements as visible
    gsap.set([aboutRef.current, foundingRef.current, currentRef.current], {
      opacity: 1,
      y: 0,
    });

    // Hide all cards initially
    gsap.set(founderCardsRef.current, { opacity: 0, y: 50 });
    gsap.set(currentTeamCardsRef.current, { opacity: 0, y: 50 });

    // About Section Animation
    gsap.from(aboutRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        onLeaveBack: (self) => {
          gsap.to(aboutRef.current, {
            opacity: 0,
            y: 50,
            duration: 0.5,
          });
        },
      },
    });

    // Founding Team Section Animation
    gsap.from(foundingRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: foundingRef.current,
        start: "top 85%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        onLeaveBack: (self) => {
          gsap.to(foundingRef.current, {
            opacity: 0,
            y: 50,
            duration: 0.5,
          });
        },
      },
    });

    // Individual animations for founder cards
    founderCardsRef.current.forEach((card, index) => {
      gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.1, // Staggered animation
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          onLeaveBack: () => {
            gsap.to(card, {
              opacity: 0,
              y: 50,
              duration: 0.5,
            });
          },
        },
      });
    });

    // Current Team Section Animation
    gsap.from(currentRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: currentRef.current,
        start: "top 85%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        onLeaveBack: (self) => {
          gsap.to(currentRef.current, {
            opacity: 0,
            y: 50,
            duration: 0.5,
          });
        },
      },
    });

    // Individual animations for current team cards
    currentTeamCardsRef.current.forEach((card, index) => {
      gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.1, // Staggered animation
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          onLeaveBack: () => {
            gsap.to(card, {
              opacity: 0,
              y: 50,
              duration: 0.5,
            });
          },
        },
      });
    });

    // Cleanup function
    return () => {
      // Reset scroll behavior
      document.documentElement.style.scrollBehavior = "";

      // Kill all ScrollTrigger instances to prevent memory leaks
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-emerald-950">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated particle background (decorative only) */}
        <div className="absolute h-full w-full">
          <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-emerald-500/5 blur-3xl animate-pulse"></div>
          <div
            className="absolute top-3/4 right-1/4 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-1/4 left-2/3 h-80 w-80 rounded-full bg-emerald-500/5 blur-3xl animate-pulse"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        {/* Glass orb decorations */}
        <div className="absolute -top-20 -left-20 h-40 w-40 rounded-full bg-emerald-500/10 blur-xl"></div>
        <div className="absolute top-1/3 -right-20 h-60 w-60 rounded-full bg-emerald-500/10 blur-xl"></div>
        <div className="absolute bottom-20 left-1/3 h-40 w-40 rounded-full bg-emerald-500/10 blur-xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 py-16 sm:px-6 lg:px-8">
        {/* About Section */}
        <section ref={aboutRef} className="mx-auto max-w-6xl py-16">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-light text-white tracking-tight">
              About{" "}
              <span className="font-bold text-emerald-400">Codeoholics</span>
            </h2>
            <div className="mt-4 h-px w-16 bg-emerald-500/50 mx-auto"></div>
          </div>

          <div className="mt-12 flex flex-col gap-12 lg:flex-row">
            {/* Image Grid */}
            <div className="grid w-full grid-cols-2 gap-4 lg:w-1/2">
              <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-500 hover:scale-102">
                <img
                  src="https://etvqaruci3mfadph.public.blob.vercel-storage.com/code1-0iFgQ8r3ziwU5kVAQE3GJJlCo0RSA4.jpg"
                  className="h-64 w-full object-cover"
                  alt="Coding together"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-500 hover:scale-102">
                <img
                  src="https://etvqaruci3mfadph.public.blob.vercel-storage.com/code2-rDyzvgyGsFaU4BAvYRv9fpucgmIFGm.jpg"
                  className="h-64 w-full object-cover"
                  alt="Code collaboration"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-500 hover:scale-102">
                <img
                  src="/code3.png"
                  className="h-64 w-full object-cover"
                  alt="Programming"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-500 hover:scale-102">
                <img
                  src="https://etvqaruci3mfadph.public.blob.vercel-storage.com/code4-mq3Pp94oVGHh7RZiDusSPaUbJAsqXJ.jpg"
                  className="h-64 w-full object-cover"
                  alt="Tech community"
                />
              </div>
            </div>

            {/* Description */}
            <div className="w-full lg:w-1/2">
              <div className="rounded-lg bg-white/5 backdrop-blur-sm p-8 border border-white/10">
                <h3 className="text-2xl font-semibold text-white">
                  A Glimpse Into Codeoholics
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-300">
                  Behind every line of code, every brainstorming session, and
                  every challenge conquered lies a thriving community of
                  innovators. Codeoholics isn't just about coding; it's about
                  <span className="text-emerald-400 mx-1 font-medium">
                    collaboration
                  </span>
                  ,
                  <span className="text-emerald-400 mx-1 font-medium">
                    creativity
                  </span>
                  , and
                  <span className="text-emerald-400 mx-1 font-medium">
                    pushing boundaries
                  </span>
                  .
                </p>

                <h3 className="mt-8 text-2xl font-semibold text-white">
                  What defines us?
                </h3>
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <FeatureCard
                    icon={<FaUsers className="h-6 w-6 text-emerald-400" />}
                    title="Passionate Minds"
                    description="A collective of coders, designers, and tech enthusiasts shaping the future."
                  />
                  <FeatureCard
                    icon={<FaLightbulb className="h-6 w-6 text-emerald-400" />}
                    title="Innovation-Driven"
                    description="From AI to Blockchain, we explore and experiment with cutting-edge technologies."
                  />
                  <FeatureCard
                    icon={<FaCode className="h-6 w-6 text-emerald-400" />}
                    title="Community First"
                    description="We grow together, sharing knowledge, ideas, and opportunities."
                  />
                  <FeatureCard
                    icon={<FaRocket className="h-6 w-6 text-emerald-400" />}
                    title="Real-World Impact"
                    description="Bridging academia and industry to solve meaningful challenges."
                  />
                </div>

                <div className="mt-8">
                  <div className="inline-block bg-emerald-500/10 backdrop-blur-sm px-6 py-3 border border-emerald-500/20 rounded-lg">
                    <p className="text-lg font-medium text-white">
                      Join us and be part of the revolution where code meets
                      creativity!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founding Team Section */}
        <section ref={foundingRef} className="mx-auto max-w-6xl py-16">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-light text-white tracking-tight">
              <span className="font-bold text-emerald-400">Founding</span> Team
            </h2>
            <div className="mt-4 h-px w-16 bg-emerald-500/50 mx-auto"></div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div ref={addToFounderRefs} className="transition-all duration-300">
              <MemberCard
                linkedin="https://www.linkedin.com/in/charan-narukulla/"
                instagram="https://www.instagram.com/charan_chowdary_n/"
                name="Charan Narukulla"
                src="https://etvqaruci3mfadph.public.blob.vercel-storage.com/charan-HdgiqB9KCsda7dJI0ubMCxWDyzqhrf.jpeg"
              />
            </div>
            <div ref={addToFounderRefs} className="transition-all duration-300">
              <MemberCard
                linkedin="https://www.linkedin.com/in/abhilashmovva/"
                instagram="https://www.instagram.com/abhilashmovva/"
                name="Abhilash Movva"
                src="https://etvqaruci3mfadph.public.blob.vercel-storage.com/abhilash-eQVpTbFeKpIK7eDCNkfw3KIckWty56.jpeg"
              />
            </div>
            <div ref={addToFounderRefs} className="transition-all duration-300">
              <MemberCard
                linkedin="https://www.linkedin.com/in/sourabh-mahindrakar-7459541b0/"
                instagram="https://www.instagram.com/itzz_sooo_rabh/"
                name="Sourabh Mahindrakar"
                src="https://etvqaruci3mfadph.public.blob.vercel-storage.com/sourabh-qiJEAsORlSMW8QIILVnzwdpjBnp5S7.jpeg"
              />
            </div>
            <div ref={addToFounderRefs} className="transition-all duration-300">
              <MemberCard
                linkedin="http://linkedin.com/in/manav-patel-3964b41ba/"
                instagram="https://www.instagram.com/m.n.v_patel/"
                name="Manav Patel"
                src="https://etvqaruci3mfadph.public.blob.vercel-storage.com/manav-mUocAEV2mKT1hGhbWaJYX44gNoHUWu.jpeg"
              />
            </div>
          </div>
        </section>

        {/* Current Team Section */}
        <section ref={currentRef} className="mx-auto max-w-6xl py-16">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-light text-white tracking-tight">
              <span className="font-bold text-emerald-400">Current</span> Team
            </h2>
            <div className="mt-4 h-px w-16 bg-emerald-500/50 mx-auto"></div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div ref={addToCurrentTeamRefs}>
              <CurrentTeamMember
                linkedin="https://www.linkedin.com/in/chetan-sirigiri/"
                src="https://etvqaruci3mfadph.public.blob.vercel-storage.com/chetan-ykTVeIxZoZmEe5rm2voHxrdVAVJMVc.webp"
                role="President"
                name="Chetan Sirigiri"
                desc="Driving technical innovation and mentoring developers."
              />
            </div>
            <div ref={addToCurrentTeamRefs}>
              <CurrentTeamMember
                src="https://etvqaruci3mfadph.public.blob.vercel-storage.com/farhan-db5xzE7xqfwmAYF3uPDlkXA7auZy3L.webp"
                role="Vice President"
                name="K. Nikhil"
                desc="Ensuring a smooth experience for all members and organizing major events."
                linkedin="https://www.linkedin.com/in/nikhil-kshirasagar08/"
              />
            </div>
            <div ref={addToCurrentTeamRefs}>
              <CurrentTeamMember
                linkedin="https://www.linkedin.com/in/mohammad-kammar-ahmed/"
                src="https://etvqaruci3mfadph.public.blob.vercel-storage.com/moid-TyErtPFUyn7rZ01zIBj9M6niIw5Jm3.webp"
                role="General Secretary"
                name="Kammar Ahmed"
                desc="Managing records, communications, and administrative tasks."
              />
            </div>
            <div ref={addToCurrentTeamRefs}>
              <CurrentTeamMember
                linkedin="https://www.linkedin.com/in/bhavish-ankam-b5446528b/"
                src="https://etvqaruci3mfadph.public.blob.vercel-storage.com/leo-26vkeg3lOwZ7bgdlcXpNjd2JkJRd6V.webp"
                role="Web Dev Lead"
                name="Bhavish"
                desc="Tech geek"
              />
            </div>
            <div ref={addToCurrentTeamRefs}>
              <CurrentTeamMember
                linkedin="https://www.linkedin.com/in/k-sruti-1733b7290/"
                src="https://etvqaruci3mfadph.public.blob.vercel-storage.com/moid-TyErtPFUyn7rZ01zIBj9M6niIw5Jm3.webp"
                role="CP Lead"
                name="Sai Sruti"
                desc="Competetive Programming runs in blood"
              />
            </div>
            <div ref={addToCurrentTeamRefs}>
              <CurrentTeamMember
                linkedin="https://www.linkedin.com/in/yashmdj/"
                src="https://etvqaruci3mfadph.public.blob.vercel-storage.com/leo-26vkeg3lOwZ7bgdlcXpNjd2JkJRd6V.webp"
                role="Technical Lead"
                name="Yashwanth"
                desc="Ensuring a smooth experience for all members and organizing major events."
              />
            </div>
            <div ref={addToCurrentTeamRefs}>
              <CurrentTeamMember
                linkedin="https://www.linkedin.com/in/anileshwar/"
                src="https://etvqaruci3mfadph.public.blob.vercel-storage.com/moid-TyErtPFUyn7rZ01zIBj9M6niIw5Jm3.webp"
                role="App Lead"
                name="Anileshwar"
                desc="App developer"
              />
            </div>
            <div ref={addToCurrentTeamRefs}>
              <CurrentTeamMember
                linkedin="https://www.linkedin.com/in/arnav-varahabhatla-4348b1291/"
                src="https://etvqaruci3mfadph.public.blob.vercel-storage.com/leo-26vkeg3lOwZ7bgdlcXpNjd2JkJRd6V.webp"
                role="Events Lead"
                name="Arnav"
                desc="Ensuring a smooth experience for all members and organizing major events."
              />
            </div>
            <div ref={addToCurrentTeamRefs}>
              <CurrentTeamMember
                linkedin="https://www.linkedin.com/in/karthik-reddy-usham-38a9b8256/"
                src="https://etvqaruci3mfadph.public.blob.vercel-storage.com/moid-TyErtPFUyn7rZ01zIBj9M6niIw5Jm3.webp"
                role="PR Lead"
                name="Karthik Usham"
                desc="Managing records, communications, and administrative tasks."
              />
            </div>
            <div ref={addToCurrentTeamRefs}>
              <CurrentTeamMember
                linkedin="https://www.linkedin.com/in/abdul-rahman18/"
                src="https://etvqaruci3mfadph.public.blob.vercel-storage.com/moid-TyErtPFUyn7rZ01zIBj9M6niIw5Jm3.webp"
                role="Design Lead"
                name="Abdul Rahman"
                desc="Managing records, communications, and administrative tasks."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
