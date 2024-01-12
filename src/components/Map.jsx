// @ts-nocheck
/* eslint-disable no-unused-vars */
"use client";

import React from "react";

// import for responsive
import { useMediaQuery } from "react-responsive";

// imports for map
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

// leaflet css
import "leaflet/dist/leaflet.css";

// imports motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const markers = [
  {
    position: [52.515325, 13.372412],
    title: "Let's Eat 3",
    subtitle: "Berlin",
    image: "/map/1.png",
  },
  {
    position: [50.842306, 4.351382],
    title: "Let's Eat 2",
    subtitle: "Bruxelles",
    image: "/map/2.png",
  },
  {
    position: [48.855497, 2.358544],
    title: "Let's Eat 1",
    subtitle: "Paris",
    image: "/map/3.png",
  },
];

const customIcon = new Icon({
  iconUrl: "/pin-solid.svg",
  iconSize: [40, 40],
});

const Map = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      id="contact"
      className="relative xl:after:w-full xl:after:h-[240px] xl:after:bg-gradient-to-b xl:after:from-white xl:after:via-white/80 xl:after:to-white/20 xl:after:absolute xl:after:top-0 xl:after:z-20"
    >
      <MapContainer
        center={[50.842306, 4.351382]}
        zoom={isMobile ? 5 : 7}
        className={`${isMobile ? "h-[300px]" : "h-[900px]"}  z-10`}
        zoomControl={false}
      >
        <TileLayer
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        {/* markers */}
        {markers.map((marker, index) => {
          return (
            <Marker
              key={index}
              position={marker.position}
              icon={customIcon}
            >
              <Popup>
                <div className="text-center">
                  <div>
                    <h3>{marker.title}</h3>
                    <p>{marker.subtitle}</p>
                  </div>
                  <div>
                    {/* image */}
                    <img
                      src={marker.image}
                      alt={marker.subtitle}
                      width={130}
                      height={160}
                    />
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </motion.section>
  );
};

export default Map;
