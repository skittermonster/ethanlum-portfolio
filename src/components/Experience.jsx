// src/components/Experience.jsx
import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { tracks } from "../constants/music";

const MusicCard = ({ track }) => (
  <div className="mb-8 flex justify-center">
    <div className="w-full max-w-md">
      {track.type === "spotify" ? (
        <iframe
          src={track.embedUrl}
          width="100%"
          height="352"          // adjust as needed for Spotify embed
          frameBorder="0"
          style={{ borderRadius: '12px' }}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      ) : (
        <iframe
          width="100%"
          height="300"          // match your existing SoundCloud embed height
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src={
            `https://w.soundcloud.com/player/` +
            `?url=${encodeURIComponent(`https://api.soundcloud.com/tracks/${track.id}`)}` +
            `&color=${encodeURIComponent(track.color)}` +
            `&auto_play=false&hide_related=false` +
            `&show_comments=true&show_user=true` +
            `&show_reposts=false&show_teaser=true&visual=true`
          }
        ></iframe>
      )}
      <h3 className="text-white text-xl font-bold mt-4 text-center">
        {track.title}
      </h3>
    </div>
  </div>
);

const Experience = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} text-center`}>
        Listen My Music!
      </p>
      <h2 className={`${styles.sectionHeadText} text-center`}>
        Demo Tracks
      </h2>
    </motion.div>

    <div className="mt-12 flex flex-col items-center">
      {tracks.map((trk, idx) => (
        <MusicCard key={idx} track={trk} />
      ))}
    </div>
  </>
);

export default SectionWrapper(Experience, "experience");
