import Image from "next/image";
import Link from "next/link";
import journalMetaData from "@/data/journalMetaData.json";

export default function StoriesGrid() {
  return (
    <section className="w-full max-w-7xl mx-auto px-10 py-20">
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-28">
        {/* Vertical line between columns */}
        <div className="hidden md:block absolute inset-y-0 left-1/2 w-px bg-gray-300/40" />

        {journalMetaData.map((journal, index) => (
          <div key={journal.slug} className="relative group">
            <Link
              href={`/stories/${journal.slug}`}
              className={`flex gap-12 items-center transition-transform duration-300 ease-in-out hover:-translate-y-2 ${
                index % 2 === 1 ? "md:flex-row-reverse text-right" : ""
              }`}
            >
              {/* 📷 Image Stack */}
              <div className="relative w-[280px] h-[200px] shrink-0">
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
                        width: "280px",
                        height: "200px",
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
                    day: "numeric",
                  })}
                </p>
                <p className="mt-3 text-base text-gray-700 leading-relaxed line-clamp-3">
                  {journal.excerpt}
                </p>
                <p className="text-sm text-blue-600 font-medium mt-4 opacity-0 group-hover:opacity-100 transition">
                  Read Story →
                </p>
              </div>
            </Link>

            {/* Horizontal line under each entry (except last row) */}
            {index < journalMetaData.length - 2 && (
              <div className="absolute -bottom-14 left-0 w-full border-t border-gray-300/50" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
