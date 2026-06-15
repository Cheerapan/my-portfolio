"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Image as ImageIcon, ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.17A5.9 5.9 0 0 0 19 5.5a5.9 5.9 0 0 0-.2-3.5s-1.5-.5-5 1.5a14.1 14.1 0 0 0-9 0c-3.5-2-5-1.5-5-1.5a5.9 5.9 0 0 0-.2 3.5 5.9 5.9 0 0 0-1.5 2.3c0 5.77 3.35 6.79 6.5 7.17A4.8 4.8 0 0 0 3 18v4"></path>
  </svg>
);

interface Media {
  type: string;
  url: string;
}

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveDemo: string;
  sourceCode: string;
  media?: Media[];
}

export default function ProjectCard({ title, description, image, tags, liveDemo, sourceCode, media }: ProjectProps) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextMedia = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (media) {
      setCurrentIndex((prev) => (prev + 1) % media.length);
    }
  };

  const prevMedia = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (media) {
      setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
    }
  };

  return (
    <>
      <motion.div 
        whileHover={{ y: -5 }}
        className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 flex flex-col group"
      >
        <div 
          className={`relative w-full h-48 bg-zinc-800 border-b border-zinc-800 overflow-hidden ${media ? 'cursor-pointer group/collage' : ''}`}
          onClick={() => media && setIsGalleryOpen(true)}
        >
          {media && media.length >= 3 ? (
            <div className="w-full h-full flex gap-1 bg-zinc-950 p-1">
              <div className="relative w-2/3 h-full rounded-l-lg overflow-hidden bg-zinc-800">
                {media[0].type === "image" ? (
                  <Image src={media[0].url} fill className="object-cover opacity-80 group-hover/collage:opacity-100 transition-all duration-500 group-hover/collage:scale-105" alt="" />
                ) : (
                  <video src={media[0].url} className="w-full h-full object-cover opacity-80 group-hover/collage:opacity-100 transition-opacity duration-500" muted playsInline />
                )}
              </div>
              <div className="w-1/3 flex flex-col gap-1">
                <div className="relative w-full h-1/2 rounded-tr-lg overflow-hidden bg-zinc-800">
                  {media[1].type === "image" ? (
                    <Image src={media[1].url} fill className="object-cover opacity-70 group-hover/collage:opacity-100 transition-opacity duration-500" alt="" />
                  ) : (
                    <video src={media[1].url} className="w-full h-full object-cover opacity-70 group-hover/collage:opacity-100 transition-opacity duration-500" muted playsInline />
                  )}
                </div>
                <div className="relative w-full h-1/2 rounded-br-lg overflow-hidden bg-zinc-800 flex items-center justify-center">
                  {media[2].type === "image" ? (
                    <Image src={media[2].url} fill className="object-cover opacity-60 group-hover/collage:opacity-80 transition-opacity duration-500" alt="" />
                  ) : (
                    <video src={media[2].url} className="w-full h-full object-cover opacity-60 group-hover/collage:opacity-80 transition-opacity duration-500" muted playsInline />
                  )}
                  {media.length > 3 && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white font-bold text-lg backdrop-blur-[2px]">
                      +{media.length - 3}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <>
              {image !== "/mock-kodklong.jpg" && image !== "/mock-dashboard.jpg" ? (
                <Image src={image} alt={title} fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity group-hover:scale-105 duration-500" />
              ) : (
                <div className="w-full h-full flex items-center justify-center"><span className="text-zinc-500 font-medium">Image Placeholder</span></div>
              )}
              {media && (
                <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg flex items-center gap-2 text-xs font-medium text-white shadow-lg">
                  <ImageIcon size={14} />
                  {media.length}
                </div>
              )}
            </>
          )}
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-zinc-100 mb-2">{title}</h3>
          <p className="text-zinc-400 text-sm mb-4 line-clamp-3">{description}</p>
          
          <div className="flex flex-wrap gap-2 mb-6 mt-auto">
            {tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs rounded-full border border-zinc-700">
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center gap-4 mt-auto">
            {liveDemo !== "#" && (
              <a 
                href={liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg transition-colors"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
            {sourceCode !== "#" && (
              <a 
                href={sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-white px-4 py-2 rounded-lg border border-zinc-700 hover:border-zinc-500 transition-colors"
              >
                <GithubIcon size={16} />
                Source
              </a>
            )}
            {/* If neither Live Demo nor Source exists, show a subtle prompt to open gallery if media exists */}
            {liveDemo === "#" && sourceCode === "#" && media && (
               <button 
                 onClick={(e) => { e.stopPropagation(); setIsGalleryOpen(true); }}
                 className="flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-white px-4 py-2 rounded-lg border border-zinc-700 hover:border-zinc-500 transition-colors"
               >
                 <ImageIcon size={16} />
                 View Gallery
               </button>
            )}
          </div>
        </div>
      </motion.div>

      {/* Media Gallery Lightbox */}
      <AnimatePresence>
        {isGalleryOpen && media && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsGalleryOpen(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/90 backdrop-blur-md"
          >
            <button 
              onClick={() => setIsGalleryOpen(false)}
              className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 bg-zinc-800/50 hover:bg-zinc-700 text-white rounded-full flex items-center justify-center transition-colors z-10"
            >
              <X size={24} />
            </button>

            <div 
              className="relative w-full max-w-6xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {media[currentIndex].type === "image" ? (
                <Image src={media[currentIndex].url} alt={`Gallery item ${currentIndex + 1}`} fill className="object-contain" />
              ) : (
                <video src={media[currentIndex].url} controls autoPlay className="w-full h-full object-contain" />
              )}
              
              {/* Navigation Arrows */}
              {media.length > 1 && (
                <>
                  <button 
                    onClick={prevMedia}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-colors"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={nextMedia}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-colors"
                  >
                    <ChevronRight size={24} />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-medium z-10">
                    {currentIndex + 1} / {media.length}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
