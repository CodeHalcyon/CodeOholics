import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import supabase from "../config/supabaseConfig";

const filterOptions = ["all", "youtube", "article"];

const fallbackResources = [
  {
    title: "Striver's A2Z DSA Playlist",
    type: "youtube",
    url: "https://www.youtube.com/playlist?list=PLgUwDviBIf0oFON1SRGcMqMIhiZ4EXx_F"
  },
  {
    title: "Complete Series",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=fzip9Aml6og",
    note: "Try watching the complete series."
  },
  {
    title: "DSA Video",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=ktEyWsU7G94"
  },
  {
    title: "Apna College DSA Playlist",
    type: "youtube",
    url: "https://www.youtube.com/playlist?list=PLpIkg8OmuX-J7OdEA2hDjc1V7yvLQXqXc"
  },
  {
    title: "Must-Do Math for Competitive Programming",
    type: "article",
    url: "https://medium.com/@rajat01221/must-do-math-for-competitive-programming-5b6b7097b215"
  },
  {
    title: "DSA Mathematics Video",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=g5Fuxn_AvSk"
  },
  {
    title: "Maths for Data Structures and Algorithms",
    type: "article",
    url: "https://www.geeksforgeeks.org/dsa/maths-for-data-structure-and-algorithms-dsa-a-complete-guide/"
  }
];

const toneCycle = ["bg-zing", "bg-acid", "bg-volt", "bg-punk"];

const getYoutubeVideoId = (url) => {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.replace("www.", "") !== "youtube.com") return null;
    if (parsed.pathname === "/watch") return parsed.searchParams.get("v");
    return null;
  } catch {
    return null;
  }
};

const getHost = (url) => {
  try {
    return new URL(url).hostname.replace("www.", "");
  } catch {
    return "";
  }
};

const isPlaylist = (url) => {
  try {
    return new URL(url).pathname === "/playlist";
  } catch {
    return false;
  }
};

const ResourceCard = ({ resource, index }) => {
  const isYoutube = resource.type === "youtube";
  const videoId = isYoutube ? getYoutubeVideoId(resource.url) : null;
  const playlist = isYoutube && isPlaylist(resource.url);
  const tone = toneCycle[index % toneCycle.length];

  if (isYoutube) {
    return (
      <motion.article
        className="hard-card p-0 flex flex-col gap-0 overflow-hidden h-full"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.06 }}
      >
        <a href={resource.url} target="_blank" rel="noopener noreferrer" className="block group">
          <div className={`relative w-full aspect-video flex items-center justify-center overflow-hidden ${tone}`}>
            {videoId ? (
              <img
                src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
                alt={resource.title}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              <span className="text-6xl">🎬</span>
            )}
            <div className="absolute inset-0 flex items-center justify-center bg-ink/30 group-hover:bg-ink/10 transition-colors">
              <span className="chip !bg-ink text-paper text-2xl px-5 group-hover:bg-punk transition-colors">
                {playlist ? "▶ PLAYLIST" : "▶ WATCH"}
              </span>
            </div>
          </div>
        </a>
        <div className="p-6 flex flex-col gap-3 flex-1">
          <span className={`chip ${tone} self-start`}>{playlist ? "YT PLAYLIST" : "YT VIDEO"}</span>
          <h3 className="font-display text-2xl uppercase leading-none text-ink">{resource.title}</h3>
          {resource.note && <p className="text-sm text-ink/70 leading-snug">{resource.note}</p>}
          <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto btn btn-solid justify-center"
          >
            Open on YouTube →
          </a>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      className="hard-card p-6 flex flex-col gap-4 h-full"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <div className="flex items-center justify-between gap-3">
        <span className={`chip ${tone}`}>ARTICLE</span>
        <span className="label-mono text-ink/50">{getHost(resource.url)}</span>
      </div>
      <h3 className="font-display text-2xl uppercase leading-none text-ink">{resource.title}</h3>
      {resource.note && <p className="text-sm text-ink/70 leading-snug">{resource.note}</p>}
      <a
        href={resource.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto btn btn-outline justify-center"
      >
        Read Article →
      </a>
    </motion.article>
  );
};

const Resources = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [resources, setResources] = useState(fallbackResources);

  useEffect(() => {
    const fetchResources = async () => {
      const { data, error } = await supabase
        .from("resources")
        .select("*")
        .order("order", { ascending: true });
      if (!error && data?.length) setResources(data);
    };
    fetchResources();
  }, []);

  const youtubeCount = resources.filter((r) => r.type === "youtube").length;
  const articleCount = resources.length - youtubeCount;
  const filteredResources =
    activeFilter === "all" ? resources : resources.filter((r) => r.type === activeFilter);

  const filterLabel = {
    all: `ALL (${resources.length})`,
    youtube: `YOUTUBE (${youtubeCount})`,
    article: `ARTICLES (${articleCount})`,
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      <div className="sec-head">
        <h2 className="font-display text-4xl sm:text-5xl uppercase">
          Resources <span className="text-paper bg-punk px-2">Hub</span>
        </h2>
        <span className="label-mono hidden sm:block text-ink/60">
          {youtubeCount} YT / {articleCount} ARTICLES
        </span>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {filterOptions.map((option) => (
          <button
            key={option}
            onClick={() => setActiveFilter(option)}
            className={`chip uppercase cursor-pointer transition-colors ${
              activeFilter === option
                ? "!bg-ink text-paper shadow-[3px_3px_0_var(--color-punk)]"
                : "hover:!bg-zing"
            }`}
          >
            {filterLabel[option]}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch">
        {filteredResources.map((resource, i) => (
          <ResourceCard key={i} resource={resource} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Resources;
