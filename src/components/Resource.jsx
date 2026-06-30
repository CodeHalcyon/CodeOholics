import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Resource = () => {
  const resourcesData = [
    { id: 1, title: "React.js Fundamentals", description: "Master the basics of React.js with this comprehensive guide.", category: "Frontend", level: "Beginner", image: "/api/placeholder/400/250", link: "#", featured: true },
    { id: 2, title: "Node.js API Development", description: "Learn to build robust APIs with Node.js and Express.", category: "Backend", level: "Intermediate", image: "/api/placeholder/400/250", link: "#", featured: false },
    { id: 3, title: "Docker & Kubernetes", description: "Containerize your applications and orchestrate deployments.", category: "DevOps", level: "Advanced", image: "/api/placeholder/400/250", link: "#", featured: false },
    { id: 4, title: "Machine Learning Basics", description: "Introduction to machine learning concepts and practical applications.", category: "AI/ML", level: "Beginner", image: "/api/placeholder/400/250", link: "#", featured: true },
    { id: 5, title: "Flutter App Development", description: "Build cross-platform mobile apps with Flutter.", category: "Mobile", level: "Intermediate", image: "/api/placeholder/400/250", link: "#", featured: false },
    { id: 6, title: "GraphQL API Design", description: "Learn modern API design principles with GraphQL.", category: "Backend", level: "Intermediate", image: "/api/placeholder/400/250", link: "#", featured: false },
  ];

  const categories = ["All", "Frontend", "Backend", "DevOps", "Mobile", "AI/ML"];

  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [resources, setResources] = useState(resourcesData);

  useEffect(() => {
    let filtered = resourcesData;
    if (activeCategory !== "All") filtered = filtered.filter((r) => r.category === activeCategory);
    if (searchTerm.trim() !== "") {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter((r) => r.title.toLowerCase().includes(term) || r.description.toLowerCase().includes(term));
    }
    setResources(filtered);
  }, [activeCategory, searchTerm]);

  return (
    <div className="bg-white min-h-screen pt-28 pb-16 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">Resources</span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Tech Resources Hub</h1>
          <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto">Curated learning materials to help you master the latest technologies.</p>
        </div>

        <div className="max-w-xs mx-auto mb-10">
          <div className="relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input type="text" placeholder="Search resources..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full py-2.5 pl-10 pr-4 bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 rounded-full text-sm focus:outline-none focus:border-gray-400 transition-all" />
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button key={category} onClick={() => setActiveCategory(category)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeCategory === category ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}>
              {category}
            </button>
          ))}
        </div>

        {resources.some((r) => r.featured) && activeCategory === "All" && searchTerm === "" && (
          <div className="mb-12">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Featured Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {resources.filter((r) => r.featured).map((resource) => (
                <div key={resource.id} className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img src={resource.image} alt={resource.title} className="h-40 w-full md:h-full object-cover" />
                    </div>
                    <div className="p-5 md:w-2/3">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2.5 py-0.5 bg-gray-200 text-gray-700 text-xs font-medium rounded">{resource.category}</span>
                        <span className="px-2.5 py-0.5 bg-gray-100 text-gray-500 text-xs font-medium rounded">{resource.level}</span>
                      </div>
                      <h3 className="text-base font-semibold text-gray-900 mb-1">{resource.title}</h3>
                      <p className="text-sm text-gray-500 mb-4">{resource.description}</p>
                      <a href={resource.link} className="inline-flex items-center text-sm font-medium text-gray-900 hover:underline">
                        Explore Resource &rarr;
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-6">{activeCategory === "All" ? "All Resources" : `${activeCategory} Resources`}</h2>
          {resources.filter((r) => activeCategory !== "All" || !r.featured || searchTerm !== "").length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {resources.filter((r) => activeCategory !== "All" || !r.featured || searchTerm !== "").map((resource) => (
                <div key={resource.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative">
                    <img src={resource.image} alt={resource.title} className="w-full h-40 object-cover" />
                    <span className="absolute top-3 right-3 px-2.5 py-0.5 bg-white/90 text-gray-700 text-xs font-medium rounded">{resource.level}</span>
                  </div>
                  <div className="p-5">
                    <span className="inline-block px-2.5 py-0.5 bg-gray-100 text-gray-600 text-xs font-medium rounded mb-3">{resource.category}</span>
                    <h3 className="text-base font-semibold text-gray-900 mb-1">{resource.title}</h3>
                    <p className="text-sm text-gray-500 mb-4">{resource.description}</p>
                    <a href={resource.link} className="inline-flex items-center px-4 py-2 bg-gray-900 text-white text-xs font-medium rounded-full hover:bg-gray-800 transition-colors">
                      Explore Resource
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-gray-50 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">No resources found</h3>
              <p className="text-sm text-gray-500">Try adjusting your filters or check back later.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Resource;
