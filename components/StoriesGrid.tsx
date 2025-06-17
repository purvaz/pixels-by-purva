"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import journalMetaData from "@/data/journalMetaData.json";

function StoryModal({ isOpen, onClose, story }: { isOpen: boolean; onClose: () => void; story: any }) {
  if (!isOpen || !story) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 max-w-screen overflow-hidden">
      <div className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl shadow-black/10 border border-gray-200 p-10 md:p-12 relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-black transition"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-3xl font-serif mb-2 text-gray-900">
          {story.title.replace(/(^\w|\s\w)/g, t => t.toUpperCase())}
        </h2>
        <p className="text-sm text-gray-500 italic mb-6">
          {new Date(story.date).toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
          })}
        </p>
        <hr className="border-gray-300 mb-4" />
        <p className="text-base text-gray-900 leading-relaxed mb-8 whitespace-pre-wrap max-w-3xl mx-auto">
          <span className="text-5xl font-serif float-left leading-none mr-2 text-gray-900">
            {story.excerpt.charAt(0)}
          </span>
          {story.excerpt.slice(1)}
        </p>
        <div className={`grid gap-4 ${story.images.length <= 2 ? 'grid-cols-1' : story.images.length <= 5 ? 'grid-cols-2' : 'grid-cols-3'}`}>
          {story.images.map((img: string, idx: number) => (
            <div key={img + idx} className="relative w-full h-60">
              <Image
                src={`/images/${img}`}
                alt={story.title}
                fill
                className="object-cover shadow-lg rounded"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function StoriesGrid() {
  const [selectedStory, setSelectedStory] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="w-full max-w-7xl mx-auto px-5 py-20">
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-28">
        {/* Vertical line between columns */}
        <div className="hidden md:block absolute inset-y-0 left-1/2 w-px bg-gray-300/40" />

        {journalMetaData.map((journal, index) => (
          <div key={journal.slug} className="relative group">
            <div
              className={`flex flex-col md:flex-row gap-6 md:gap-12 items-start transition-transform duration-300 ease-in-out hover:-translate-y-2 cursor-pointer ${
                index % 2 === 1 ? "md:flex-row-reverse text-right" : ""
              }`}
              onClick={() => {
                setSelectedStory(journal);
                setIsModalOpen(true);
              }}
            >
              {/* 📷 Image Stack */}
              <div className="relative w-full max-w-[300px] h-[240px] shrink-0 mx-auto md:mx-0">

                {journal.images.filter(Boolean).slice(0, 3).map((img, i) => {
                  const rotate = (Math.random() * 16 - 8).toFixed(2);
                  return (
                    <div
                      key={img + i}
                      className="absolute bg-[#fcfcf9] border-[1.5px] border-gray-300 rounded-sm shadow-[4px_4px_12px_rgba(0,0,0,0.08)] p-3"
                      style={{
                        top: `${i * 6}px`,
                        left: `${i * 6}px`,
                        zIndex: 10 - i,
                        width: "300px",
                        height: "240px",
                        transform: `rotate(${rotate}deg)`
                      }}
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={`/images/${img}`}
                          alt={journal.title}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* 📝 Text Block */}
              <div className="flex flex-col justify-center max-w-md">
                <h3 className="text-2xl font-serif text-gray-900 group-hover:underline">
                  {journal.title.replace(/(^\w|\s\w)/g, t => t.toUpperCase())}
                </h3>
                <p className="text-sm text-gray-500 italic mt-1">
                  {new Date(journal.date).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "long",
                  })}
                </p>
                <p className="mt-3 text-base text-gray-700 leading-relaxed line-clamp-4">
                  {journal.excerpt}
                </p>
                <p className="text-sm text-blue-600 font-medium mt-4 opacity-0 group-hover:opacity-100 transition">
                  Read Story →
                </p>
              </div>
            </div>

            {/* Horizontal line under each entry (except last row) */}
            {index < journalMetaData.length - 2 && (
              <div className="absolute -bottom-14 left-0 w-full border-t border-gray-300/50" />
            )}
          </div>
        ))}
      </div>

      {/* Modal */}
      <StoryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        story={selectedStory}
      />
    </section>
  );
}
