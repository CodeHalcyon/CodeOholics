import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MemberCard from './MemberCard';
import CurrentTeamMember from './CurrentTeamMember';

gsap.registerPlugin(ScrollTrigger);

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
      y: 0
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
            duration: 0.5
          });
        }
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
            duration: 0.5
          });
        }
      },
    });

    // Individual animations for founder cards
    founderCardsRef.current.forEach((card) => {
      gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.8,
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
              duration: 0.5
            });
          }
        }
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
            duration: 0.5
          });
        }
      },
    });

    // Individual animations for current team cards
    currentTeamCardsRef.current.forEach((card) => {
      gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.8,
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
              duration: 0.5
            });
          }
        }
      });
    });

    // Cleanup function
    return () => {
      // Reset scroll behavior
      document.documentElement.style.scrollBehavior = "";

      // Kill all ScrollTrigger instances to prevent memory leaks
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-gray-900 text-gray-300 p-10">
      {/* About Section */}
      <div ref={aboutRef} className="w-full py-16 mb-16">
        <h1 className="font-extrabold text-5xl text-center text-purple-400 mb-10">About CodeOholics</h1>
        <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-2 max-w-2xl">
            <img src="https://etvqaruci3mfadph.public.blob.vercel-storage.com/code1-0iFgQ8r3ziwU5kVAQE3GJJlCo0RSA4.jpg" className="w-full h-60 object-cover rounded-lg hover:scale-105 transition-transform duration-300" alt="Code" />
            <img src="https://etvqaruci3mfadph.public.blob.vercel-storage.com/code2-rDyzvgyGsFaU4BAvYRv9fpucgmIFGm.jpg" className="w-full h-60 object-cover rounded-lg hover:scale-105 transition-transform duration-300" alt="Code" />
            <img src="/code3.png" className="w-full h-60 object-cover rounded-lg hover:scale-105 transition-transform duration-300" alt="Code" />
            <img src="https://etvqaruci3mfadph.public.blob.vercel-storage.com/code4-mq3Pp94oVGHh7RZiDusSPaUbJAsqXJ.jpg" className="w-full h-60 object-cover rounded-lg hover:scale-105 transition-transform duration-300" alt="Code" />
          </div>

          {/* Description */}
          <div className="w-full md:w-1/2 p-5 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h1 className="font-bold text-2xl text-cyan-300">A Glimpse Into Codeoholics 🚀</h1>
            <p className="text-lg mt-3">
              Behind every line of code, every brainstorming session, and every challenge conquered lies a thriving community of innovators.
              Codeoholics isn't just about coding; it's about <span className="text-purple-400 font-semibold">collaboration</span>, <span className="text-purple-400 font-semibold">creativity</span>, and <span className="text-purple-400 font-semibold">pushing boundaries</span>.
            </p>
            <h1 className="font-bold text-2xl text-cyan-300 mt-6">What defines us?</h1>
            <ul className="mt-3 space-y-2">
              <li className="text-lg"><strong className="text-purple-400">Passionate Minds:</strong> A collective of coders, designers, and tech enthusiasts shaping the future.</li>
              <li className="text-lg"><strong className="text-purple-400">Innovation-Driven:</strong> From AI to Blockchain, we explore and experiment with cutting-edge technologies.</li>
              <li className="text-lg"><strong className="text-purple-400">Community First:</strong> We grow together, sharing knowledge, ideas, and opportunities.</li>
              <li className="text-lg"><strong className="text-purple-400">Real-World Impact:</strong> Bridging academia and industry to solve meaningful challenges.</li>
            </ul>
            <div className="mt-4 text-gray-300">🚀 Join us and be part of the revolution where code meets creativity!</div>
          </div>
        </div>
      </div>

      {/* Founding Team Section */}
      <div ref={foundingRef} className="w-full py-16 mb-16">
        <h1 className="text-3xl font-bold text-center mb-10 text-purple-400">Founding Team</h1>
        <div className="flex flex-wrap gap-5 justify-center items-center">
          <div ref={addToFounderRefs} className="card-container">
            <MemberCard linkedin="https://www.linkedin.com/in/charan-narukulla/" instagram="https://www.instagram.com/charan_chowdary_n/" name="Charan Narukulla" src="https://etvqaruci3mfadph.public.blob.vercel-storage.com/charan-HdgiqB9KCsda7dJI0ubMCxWDyzqhrf.jpeg" />
          </div>
          <div ref={addToFounderRefs} className="card-container">
            <MemberCard linkedin="https://www.linkedin.com/in/abhilashmovva/" instagram="https://www.instagram.com/abhilashmovva/" name="Abhilash Movva" src="https://etvqaruci3mfadph.public.blob.vercel-storage.com/abhilash-eQVpTbFeKpIK7eDCNkfw3KIckWty56.jpeg" />
          </div>
          <div ref={addToFounderRefs} className="card-container">
            <MemberCard linkedin="https://www.linkedin.com/in/sourabh-mahindrakar-7459541b0/" instagram="https://www.instagram.com/itzz_sooo_rabh/" name="Sourabh Mahindrakar" src="https://etvqaruci3mfadph.public.blob.vercel-storage.com/sourabh-qiJEAsORlSMW8QIILVnzwdpjBnp5S7.jpeg" />
          </div>
          <div ref={addToFounderRefs} className="card-container">
            <MemberCard linkedin="http://linkedin.com/in/manav-patel-3964b41ba/" instagram="https://www.instagram.com/m.n.v_patel/" name="Manav Patel" src="https://etvqaruci3mfadph.public.blob.vercel-storage.com/manav-mUocAEV2mKT1hGhbWaJYX44gNoHUWu.jpeg" />
          </div>
        </div>
      </div>

      {/* Current Team Section */}
      <div ref={currentRef} className="w-full py-16">
        <h1 className="font-bold text-3xl text-center text-cyan-300 mb-10">Current Team</h1>
        <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div ref={addToCurrentTeamRefs} className="bg-gray-800 p-5 rounded-lg shadow-lg flex items-center gap-4">
            <CurrentTeamMember role="President" name="Farhan Ahmed" desc="Leading the community to new heights with innovation and collaboration." />
          </div>
          <div ref={addToCurrentTeamRefs} className="bg-gray-800 p-5 rounded-lg shadow-lg flex items-center gap-4">
            <CurrentTeamMember role="Vice President" name="Leo Nikhil" desc="Ensuring a smooth experience for all members and organizing major events." />
          </div>
          <div ref={addToCurrentTeamRefs} className="bg-gray-800 p-5 rounded-lg shadow-lg flex items-center gap-4">
            <CurrentTeamMember role="General Secretary" name="Moiduddin Ahmed" desc="Managing records, communications, and administrative tasks." />
          </div>
          <div ref={addToCurrentTeamRefs} className="bg-gray-800 p-5 rounded-lg shadow-lg flex items-center gap-4">
            <CurrentTeamMember role="Development Lead" name="Chetan Sirigiri" desc="Driving technical innovation and mentoring developers." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;