import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Animation variants
const textVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const flickerVariants = {
  flicker: {
    opacity: [0.7, 1, 0.6, 1, 0.5],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

const Resource = () => {
  // Sample resource data - replace with your actual data
  const resourcesData = [
    {
      id: 1,
      title: "React.js Fundamentals",
      description:
        "Master the basics of React.js with this comprehensive guide.",
      category: "Frontend",
      level: "Beginner",
      image: "/api/placeholder/400/250",
      link: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Node.js API Development",
      description: "Learn to build robust APIs with Node.js and Express.",
      category: "Backend",
      level: "Intermediate",
      image: "/api/placeholder/400/250",
      link: "#",
      featured: false,
    },
    {
      id: 3,
      title: "Docker & Kubernetes",
      description:
        "Containerize your applications and orchestrate deployments.",
      category: "DevOps",
      level: "Advanced",
      image: "/api/placeholder/400/250",
      link: "#",
      featured: false,
    },
    {
      id: 4,
      title: "Machine Learning Basics",
      description:
        "Introduction to machine learning concepts and practical applications.",
      category: "AI/ML",
      level: "Beginner",
      image: "/api/placeholder/400/250",
      link: "#",
      featured: true,
    },
    {
      id: 5,
      title: "Flutter App Development",
      description: "Build cross-platform mobile apps with Flutter.",
      category: "Mobile",
      level: "Intermediate",
      image: "/api/placeholder/400/250",
      link: "#",
      featured: false,
    },
    {
      id: 6,
      title: "GraphQL API Design",
      description: "Learn modern API design principles with GraphQL.",
      category: "Backend",
      level: "Intermediate",
      image: "/api/placeholder/400/250",
      link: "#",
      featured: false,
    },
  ];

  // Categories for filtering
  const categories = [
    "All",
    "Frontend",
    "Backend",
    "DevOps",
    "Mobile",
    "AI/ML",
  ];

  // States
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [resources, setResources] = useState(resourcesData);

  // Filter resources based on category and search term
  useEffect(() => {
    let filtered = resourcesData;

    // Category filter
    if (activeCategory !== "All") {
      filtered = filtered.filter(
        (resource) => resource.category === activeCategory
      );
    }

    // Search filter
    if (searchTerm.trim() !== "") {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (resource) =>
          resource.title.toLowerCase().includes(term) ||
          resource.description.toLowerCase().includes(term) ||
          resource.category.toLowerCase().includes(term)
      );
    }

    setResources(filtered);
  }, [activeCategory, searchTerm]);

  // Handle search input
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-950 min-h-screen pt-24 pb-16 px-4 sm:px-6">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0ibm9uZSI+PC9yZWN0Pgo8cGF0aCBkPSJNMzAgMzAgTDYwIDMwIEw2MCA2MCBMMzAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzEyYjk4MSIgc3Ryb2tlLXdpZHRoPSIxIj48L3BhdGg+Cjwvc3ZnPg==')]"></div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Page Title */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-400 mb-3">
            Tech Resources Hub
          </h1>
          <div className="h-1 w-24 bg-emerald-500 mx-auto rounded-full mb-4"></div>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg">
            Curated learning materials to help you master the latest and most
            in-demand technologies
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          className="max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full py-3 px-6 pr-12 rounded-lg bg-gray-800/80 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 backdrop-blur-sm"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <svg
                className="h-5 w-5 text-emerald-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Category Filters */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  activeCategory === category
                    ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/20"
                    : "bg-gray-800/70 text-gray-300 border border-gray-700 hover:bg-gray-700/50"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Featured Resources Section (only if we have featured items and not filtering) */}
        {resources.some((r) => r.featured) &&
          activeCategory === "All" &&
          searchTerm === "" && (
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-emerald-400 mb-6">
                Featured Resources
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resources
                  .filter((resource) => resource.featured)
                  .map((resource, index) => (
                    <motion.div
                      key={resource.id}
                      custom={index}
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="bg-gray-800/70 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 shadow-xl hover:shadow-emerald-600/10 transition-all duration-300"
                    >
                      <div className="md:flex">
                        <div className="md:flex-shrink-0 md:w-1/3">
                          <img
                            src={resource.image}
                            alt={resource.title}
                            className="h-48 w-full md:h-full object-cover"
                          />
                        </div>
                        <div className="p-6 md:w-2/3">
                          <div className="flex items-center justify-between mb-3">
                            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-medium rounded-full">
                              {resource.category}
                            </span>
                            <span className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs font-medium rounded-full">
                              {resource.level}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-2">
                            {resource.title}
                          </h3>
                          <p className="text-gray-300 mb-4">
                            {resource.description}
                          </p>
                          <motion.a
                            href={resource.link}
                            className="inline-block px-4 py-2 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-emerald-600/20"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Explore Resource
                          </motion.a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          )}

        {/* All Resources Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-emerald-400 mb-6">
            {activeCategory === "All"
              ? "All Resources"
              : `${activeCategory} Resources`}
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {resources
              .filter(
                (resource) =>
                  activeCategory !== "All" ||
                  !resource.featured ||
                  searchTerm !== ""
              )
              .map((resource, index) => (
                <motion.div
                  key={resource.id}
                  custom={index}
                  variants={cardVariants}
                  className="bg-gray-800/70 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 shadow-xl hover:shadow-emerald-600/10 transition-all duration-300"
                >
                  <div className="relative">
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1 bg-gray-900/80 backdrop-blur-sm text-gray-300 text-xs font-medium rounded-full">
                        {resource.level}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-medium rounded-full mb-3">
                      {resource.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{resource.description}</p>
                    <motion.a
                      href={resource.link}
                      className="inline-block px-4 py-2 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-emerald-600/20"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Explore Resource
                    </motion.a>
                  </div>
                </motion.div>
              ))}
          </motion.div>

          {/* Empty State */}
          {resources.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-700 shadow-xl"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-emerald-400 mb-2">
                No resources found
              </h3>
              <p className="text-gray-300 max-w-md mx-auto">
                We couldn't find any resources matching your search criteria.
                Try adjusting your filters or check back later.
              </p>
            </motion.div>
          )}
        </div>

        {/* Submit Resource Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-8 border border-gray-700 shadow-xl">
            <div className="md:flex items-center">
              <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                <h2 className="text-2xl font-bold text-emerald-400 mb-3">
                  Have a Resource to Share?
                </h2>
                <p className="text-gray-300 mb-4">
                  If you've created or found a valuable learning resource that
                  could benefit others in our community, we'd love to feature it
                  on our platform.
                </p>
                <motion.button
                  className="px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-emerald-600/20 flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    className="mr-2 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  Submit a Resource
                </motion.button>
              </div>
              <div className="md:w-1/3">
                <div className="bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 rounded-lg p-6 text-center">
                  <motion.div variants={flickerVariants} animate="flicker">
                    <svg
                      className="h-16 w-16 text-emerald-500 mx-auto mb-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                  </motion.div>
                  <p className="text-emerald-400 font-medium">
                    Help others learn and grow
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Categories Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-emerald-400 mb-3">
              Browse by Category
            </h2>
            <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {categories
              .filter((cat) => cat !== "All")
              .map((category, index) => (
                <motion.div
                  key={category}
                  className="bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl border border-gray-700 shadow-lg hover:shadow-emerald-600/10 transition-all duration-300 text-center"
                  whileHover={{ scale: 1.03 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <motion.div variants={flickerVariants} animate="flicker">
                      {/* Icons for each category */}
                      {category === "Frontend" && (
                        <svg
                          className="h-8 w-8 text-emerald-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                          />
                        </svg>
                      )}
                      {category === "Backend" && (
                        <svg
                          className="h-8 w-8 text-emerald-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                          />
                        </svg>
                      )}
                      {category === "DevOps" && (
                        <svg
                          className="h-8 w-8 text-emerald-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                          />
                        </svg>
                      )}
                      {category === "Mobile" && (
                        <svg
                          className="h-8 w-8 text-emerald-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                          />
                        </svg>
                      )}
                      {category === "AI/ML" && (
                        <svg
                          className="h-8 w-8 text-emerald-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      )}
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-medium text-emerald-400 mb-2">
                    {category}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Explore our {category.toLowerCase()} resources to enhance
                    your skills.
                  </p>
                  <motion.button
                    onClick={() => setActiveCategory(category)}
                    className="inline-block px-4 py-2 bg-gray-700/50 text-white font-medium rounded-lg hover:bg-emerald-600 transition-colors border border-gray-700"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Browse {category}
                  </motion.button>
                </motion.div>
              ))}
          </div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-emerald-900/30 to-emerald-600/30 rounded-xl p-10 border border-emerald-800/50 shadow-xl">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">
                Stay Updated
              </h2>
              <p className="text-gray-300 mb-8">
                Subscribe to our newsletter to receive updates on new resources
                and emerging technologies.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 rounded-lg bg-gray-800/80 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 flex-grow max-w-md backdrop-blur-sm"
                />
                <motion.button
                  className="px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-emerald-600/20"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating "Add Resource" Button (for admins) */}
        <motion.div
          className="fixed bottom-8 right-8"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <button className="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-lg hover:bg-emerald-700 border border-emerald-500/50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Resource;
