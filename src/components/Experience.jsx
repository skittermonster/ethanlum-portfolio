// src/components/MusicDemo.jsx
import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { tracks } from "../constants/music";

const MusicCard = ({ track }) => (
  <div className="mb-8 flex justify-center">
    <div className="w-full max-w-md">
      <iframe
        width="100%"
        height="300"            // match your embed’s height
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={
          `https://w.soundcloud.com/player/` +
          `?url=https%3A//api.soundcloud.com/tracks/${track.id}` +
          `&color=${encodeURIComponent(track.color)}` +
          `&auto_play=false&hide_related=false` +
          `&show_comments=true&show_user=true` +
          `&show_reposts=false&show_teaser=true&visual=true`
        }
      ></iframe>
      <h3 className="text-white text-xl font-bold mt-4 text-center">
        {track.title}
      </h3>
    </div>
  </div>
);

const MusicDemo = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} text-center`}>
        My Music Showcase
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

export default SectionWrapper(MusicDemo, "music");
