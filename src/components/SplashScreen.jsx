import React, { useState, useEffect, useCallback } from "react";

const WORD = "CodeOholics";
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&";

const SplashScreen = ({ onFinish }) => {
  const [letters, setLetters] = useState(
    WORD.split("").map(() => ({ char: CHARS[Math.floor(Math.random() * CHARS.length)], settled: false }))
  );
  const [phase, setPhase] = useState("scrambling");
  const [startFade, setStartFade] = useState(false);
  const [done, setDone] = useState(false);

  const scramble = useCallback(() => {
    setLetters((prev) =>
      prev.map((l) =>
        l.settled ? l : { ...l, char: CHARS[Math.floor(Math.random() * CHARS.length)] }
      )
    );
  }, []);

  useEffect(() => {
    const scrambleInterval = setInterval(scramble, 60);
    const settleTimers = [];

    WORD.split("").forEach((correctChar, i) => {
      const delay = 600 + i * 180;
      const t = setTimeout(() => {
        setLetters((prev) => {
          const next = [...prev];
          next[i] = { char: correctChar, settled: true };
          return next;
        });
      }, delay);
      settleTimers.push(t);
    });

    const finishTimer = setTimeout(() => {
      clearInterval(scrambleInterval);
      setPhase("settled");
      setTimeout(() => {
        setStartFade(true);
        setTimeout(() => {
          setDone(true);
          onFinish();
        }, 800);
      }, 1000);
    }, 600 + WORD.length * 180 + 400);

    return () => {
      clearInterval(scrambleInterval);
      settleTimers.forEach((t) => clearTimeout(t));
      clearTimeout(finishTimer);
    };
  }, [scramble, onFinish]);

  if (done) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black transition-opacity duration-800 ${
        startFade ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="text-center">
        <div className="flex items-center justify-center gap-1 md:gap-2 mb-6">
          {letters.map((l, i) => (
            <span
              key={i}
              className={`inline-block font-hero text-4xl md:text-7xl font-bold transition-all duration-300 ${
                l.settled ? "text-white scale-100" : "text-gray-500 scale-90"
              }`}
              style={{
                textShadow: l.settled ? "0 0 20px rgba(255,255,255,0.3)" : "none",
              }}
            >
              {l.char}
            </span>
          ))}
        </div>
        <p className="text-gray-600 text-xs md:text-sm font-mono tracking-[0.2em] uppercase">
          {phase === "scrambling" ? "Initializing..." : "System Ready"}
        </p>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <div className="w-24 h-[1px] bg-gray-800">
          <div
            className="h-full bg-white transition-all duration-300"
            style={{
              width: `${(letters.filter((l) => l.settled).length / WORD.length) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
