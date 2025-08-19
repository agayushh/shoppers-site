import React, { useRef } from "react";
import Hero from "../components/Hero";
import Popular from "../components/Popular";

export default function Home() {
  const collectionRef = useRef(null);
  const scrollToCollection = () => {
    collectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <Hero onScrollClick={scrollToCollection} />
      <Popular ref={collectionRef} />
    </div>
  );
}
