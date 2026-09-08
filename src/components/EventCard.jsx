import React from "react";

const EventCard = (props) => {
  const dateLabel = props.date
    ? new Date(props.date + "T00:00:00").toLocaleDateString("en-IN", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "";

  return (
    <article className="group border-[3px] border-ink bg-paper shadow-[8px_8px_0_0_var(--color-ink)] transition-transform duration-150 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0_0_var(--color-punk)]">
      <div className="relative border-b-[3px] border-ink overflow-hidden bg-acid">
        <img
          src={props.img}
          alt={props.title}
          className="w-full h-52 sm:h-60 object-cover"
          loading="lazy"
        />
        <span className="stamp absolute top-3 left-3 !text-[10px] !py-1.5 !px-2.5">
          {dateLabel}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-display text-2xl uppercase leading-tight">{props.title}</h3>
        <p className="mt-2 text-sm font-medium text-ink/70 leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
          {props.description}
        </p>
        <div className="flex items-center gap-2 mt-4 pt-3.5 border-t-2 border-ink label-mono text-[10px] text-ink/60">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="uppercase">{props.venue}</span>
        </div>
      </div>
    </article>
  );
};

export default EventCard;