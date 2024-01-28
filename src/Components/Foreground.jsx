import React, { useRef, useState } from "react";
import Card from "./Card";
import { motion } from "framer-motion";
const Foreground = () => {
  const ref = useRef(null);
  const data = [
    {
      desc: "Lorem ipsum dolor sit amet, eiusmod tempor incididunt ut labore et dolore magna aliqua",
      fileSize: "0.9mb",
      close: false,
      tagDetails: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Lorem ipsum dolor sit amet,adipiscing elit,eiusmod labore et dolore magna aliqua",
      fileSize: "0.9mb",
      close: false,
      tagDetails: { isOpen: true, tagTitle: "Upload", tagColor: "blue" },
    },
    {
      desc: "Lorem ipsum dolor sit amet, consectetur , tempor incididunt ut labore et dolore magna aliqua",
      fileSize: "0.9mb",
      close: true,
      tagDetails: { isOpen: false, tagTitle: "Download", tagColor: "green" },
    },
  ];
  return (
    <div
      ref={ref}
      className="p-5 fixed z-[3] top-0 left-0 w-full h-full flex flex-wrap gap-5"
    >
      {data.map((items, key) => (
        <Card data={items} reference={ref} />
      ))}
    </div>
  );
};

export default Foreground;
