import React from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaCode,
  FaUsers,
  FaLightbulb,
  FaRocket,
  FaGithub
} from "react-icons/fa";

const MemberCard = ({ name, src, linkedin, instagram }) => (
  <div className="group relative overflow-hidden rounded-xl bg-white border border-gray-200 transition-all duration-300 hover:shadow-lg">
    <div className="aspect-[3/4] overflow-hidden">
      <img src={src} alt={name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
    </div>
    <div className="p-4">
      <h3 className="text-base font-semibold text-gray-900">{name}</h3>
      <div className="flex gap-3 mt-3">
        {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 transition-colors"><FaLinkedin size={16} /></a>}
        {instagram && <a href={instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 transition-colors"><FaInstagram size={16} /></a>}
      </div>
    </div>
  </div>
);

const CurrentTeamMember = ({ name, src, role, desc, linkedin, github }) => (
  <div className="flex gap-5 items-center p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
    <div className="w-20 h-20 rounded-full overflow-hidden shrink-0">
      <img src={src} alt={name} className="w-full h-full object-cover" />
    </div>
    <div className="min-w-0">
      <h3 className="text-base font-semibold text-gray-900">{name}</h3>
      <p className="text-xs text-gray-500 font-medium">{role}</p>
      {desc && <p className="text-sm text-gray-500 mt-1 line-clamp-2">{desc}</p>}
      <div className="flex gap-3 mt-3">
        {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-700 transition-colors"><FaLinkedin size={16} /></a>}
        {github && <a href={github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-700 transition-colors"><FaGithub size={16} /></a>}
      </div>
    </div>
  </div>
);

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:shadow-md">
    <div className="mb-4 inline-flex rounded-lg bg-gray-100 p-3">{icon}</div>
    <h3 className="text-base font-semibold text-gray-900 mb-1">{title}</h3>
    <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
  </div>
);

const About = () => {
  return (
    <div className="bg-white min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* About Section */}
        <section className="py-16">
          <div className="text-center mb-16">
            <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">About</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              About <span className="underline decoration-gray-300 underline-offset-4">Codeoholics</span>
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="grid w-full lg:w-1/2 grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-xl">
                <img src="https://etvqaruci3mfadph.public.blob.vercel-storage.com/code1-0iFgQ8r3ziwU5kVAQE3GJJlCo0RSA4.jpg" className="h-56 w-full object-cover" alt="Coding together" />
              </div>
              <div className="overflow-hidden rounded-xl mt-6">
                <img src="https://etvqaruci3mfadph.public.blob.vercel-storage.com/code2-rDyzvgyGsFaU4BAvYRv9fpucgmIFGm.jpg" className="h-56 w-full object-cover" alt="Code collaboration" />
              </div>
              <div className="overflow-hidden rounded-xl">
                <img src="/code3.png" className="h-56 w-full object-cover" alt="Programming" />
              </div>
              <div className="overflow-hidden rounded-xl mt-6">
                <img src="https://etvqaruci3mfadph.public.blob.vercel-storage.com/code4-mq3Pp94oVGHh7RZiDusSPaUbJAsqXJ.jpg" className="h-56 w-full object-cover" alt="Tech community" />
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900">A Glimpse Into Codeoholics</h3>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Behind every line of code, every brainstorming session, and every challenge conquered lies a thriving community of innovators. Codeoholics isn't just about coding; it's about collaboration, creativity, and pushing boundaries.
                </p>

                <h3 className="mt-8 text-xl font-bold text-gray-900">What defines us?</h3>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <FeatureCard icon={<FaUsers className="w-5 h-5 text-gray-700" />} title="Passionate Minds" description="A collective of coders, designers, and tech enthusiasts shaping the future." />
                  <FeatureCard icon={<FaLightbulb className="w-5 h-5 text-gray-700" />} title="Innovation-Driven" description="From AI to Blockchain, we explore and experiment with cutting-edge technologies." />
                  <FeatureCard icon={<FaCode className="w-5 h-5 text-gray-700" />} title="Community First" description="We grow together, sharing knowledge, ideas, and opportunities." />
                  <FeatureCard icon={<FaRocket className="w-5 h-5 text-gray-700" />} title="Real-World Impact" description="Bridging academia and industry to solve meaningful challenges." />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founding Team */}
        <section className="py-16 border-t border-gray-100">
          <div className="text-center mb-12">
            <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">Team</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Founding Team</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <MemberCard linkedin="https://www.linkedin.com/in/charan-narukulla/" instagram="https://www.instagram.com/charan_chowdary_n/" name="Charan Narukulla" src="https://etvqaruci3mfadph.public.blob.vercel-storage.com/charan-HdgiqB9KCsda7dJI0ubMCxWDyzqhrf.jpeg" />
            <MemberCard linkedin="https://www.linkedin.com/in/abhilashmovva/" instagram="https://www.instagram.com/abhilashmovva/" name="Abhilash Movva" src="https://etvqaruci3mfadph.public.blob.vercel-storage.com/abhilash-eQVpTbFeKpIK7eDCNkfw3KIckWty56.jpeg" />
            <MemberCard linkedin="https://www.linkedin.com/in/sourabh-mahindrakar-7459541b0/" instagram="https://www.instagram.com/itzz_sooo_rabh/" name="Sourabh Mahindrakar" src="https://etvqaruci3mfadph.public.blob.vercel-storage.com/sourabh-qiJEAsORlSMW8QIILVnzwdpjBnp5S7.jpeg" />
            <MemberCard linkedin="http://linkedin.com/in/manav-patel-3964b41ba/" instagram="https://www.instagram.com/m.n.v_patel/" name="Manav Patel" src="https://etvqaruci3mfadph.public.blob.vercel-storage.com/manav-mUocAEV2mKT1hGhbWaJYX44gNoHUWu.jpeg" />
          </div>
        </section>

        {/* Current Team */}
        <section className="py-16 border-t border-gray-100">
          <div className="text-center mb-12">
            <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">Leadership</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Current Team</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <CurrentTeamMember github="https://github.com/CodeHalcyon" linkedin="https://www.linkedin.com/in/chetan-sirigiri/" src="https://etvqaruci3mfadph.public.blob.vercel-storage.com/chetan-ykTVeIxZoZmEe5rm2voHxrdVAVJMVc.webp" role="President" name="Chetan Sirigiri" desc="Leading the team with vision and driving innovation at Codeoholics." />
            <CurrentTeamMember src="https://etvqaruci3mfadph.public.blob.vercel-storage.com/Nikhil.jpg" role="Vice President" name="K. Nikhil" linkedin="https://www.linkedin.com/in/nikhil-kshirasagar08/" desc="Supporting leadership and ensuring smooth execution of initiatives." />
            <CurrentTeamMember linkedin="https://www.linkedin.com/in/mohammad-kammar-ahmed/" src="https://etvqaruci3mfadph.public.blob.vercel-storage.com/-k.jpg" role="General Secretary" name="Kammar Ahmed" desc="Coordinating operations and managing communication within the team." />
            <CurrentTeamMember linkedin="https://www.linkedin.com/in/karthik-reddy-usham-38a9b8256/" src="https://etvqaruci3mfadph.public.blob.vercel-storage.com/karthik.jpg" role="PR Lead" name="Karthik Usham" desc="Building the community's presence through impactful public relations." github="https://github.com/Karthik-reddie" />
            <CurrentTeamMember github="https://github.com/2005bhavish" linkedin="https://www.linkedin.com/in/bhavish-ankam-b5446528b/" src="https://etvqaruci3mfadph.public.blob.vercel-storage.com/Bhavish.jpeg" role="Web Dev Lead" name="Bhavish" desc="Crafting engaging and functional web experiences for the community." />
            <CurrentTeamMember github="https://github.com/anileshwar12" linkedin="https://www.linkedin.com/in/anileshwar/" src="https://etvqaruci3mfadph.public.blob.vercel-storage.com/Anileshwar.jpg" role="App Lead" name="Anileshwar" desc="Driving mobile innovation by building powerful and user-friendly apps." />
            <CurrentTeamMember github="https://github.com/sruti1234" linkedin="https://www.linkedin.com/in/k-sruti-1733b7290/" src="https://etvqaruci3mfadph.public.blob.vercel-storage.com/Sruti.jpeg" role="CP Lead" name="Sai Sruti" desc="Guiding members in problem-solving and excelling in competitive programming." />
            <CurrentTeamMember github="https://github.com/Yashwanthmdj" linkedin="https://www.linkedin.com/in/yashmdj/" src="https://etvqaruci3mfadph.public.blob.vercel-storage.com/Yashwanth.png" role="Technical Lead" name="Yashwanth" desc="Providing technical expertise and mentoring in advanced technologies." />
            <CurrentTeamMember linkedin="https://www.linkedin.com/in/arnav-varahabhatla-4348b1291/" src="https://etvqaruci3mfadph.public.blob.vercel-storage.com/Arnav.jpg" role="Events Lead" name="Arnav" desc="Organizing creative and impactful events for learning and collaboration." />
            <CurrentTeamMember github="https://github.com/abdul-rahman18" linkedin="https://www.linkedin.com/in/abdul-rahman18/" src="https://etvqaruci3mfadph.public.blob.vercel-storage.com/Abdul%20Rahman.jpg" role="Design Lead" name="Abdul Rahman" desc="Designing engaging visuals and branding to bring ideas to life." />
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
