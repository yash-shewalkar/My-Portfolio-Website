"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "../../navbar";
type Bookmark = {
  id: string;
  url: string;
  title: string;
  description: string;
  image?: string;
};

export default function Bookmarks() {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ✅ Fetch bookmarks on load
  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        const res = await fetch("/api/bookmarks");
        const data = await res.json();
        if (res.ok) setBookmarks(data);
        else setError(data.error || "Failed to load bookmarks");
      } catch (err) {
        setError("Error fetching bookmarks");
      }
    };

    fetchBookmarks();
  }, []);

  // ✅ Add bookmark
  const addBookmark = async () => {
    if (!url) return;
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/bookmarks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();
      if (res.ok) {
        setBookmarks([data, ...bookmarks]);
        setUrl("");
      } else {
        setError(data.error || "Failed to add bookmark");
      }
    } catch (err) {
      setError("Error adding bookmark");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Delete bookmark
  const deleteBookmark = async (id: string) => {
    try {
      const res = await fetch(`/api/bookmarks?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        setBookmarks(bookmarks.filter((b) => b.id !== id));
      } else {
        setError("Failed to delete bookmark");
      }
    } catch (err) {
      setError("Error deleting bookmark");
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full px-[10%] lg:px-[20%] py-[25%] lg:py-[10%]">
      <Navbar />
      {/* Background Effect */}
      <div className="absolute inset-0 w-full h-full dark:bg-black bg-white dark:bg-grid-white/[0.1] bg-grid-blue-200/[0.05]">
        <div className="absolute inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      {/* Informative Heading */}
      <div className="text-center mb-10 z-10">
        <h1 className="text-4xl font-bold text-white">My Bookmarks</h1>
        <p className="text-gray-400 mt-2 text-lg">
          Explore my bookmarks and see what I like and what I am learning .
        </p>
      </div>


      {/* Error Display */}
      {error && <p className="text-red-500 mb-2">{error}</p>}

      <div className="absolute top-[5rem] my-4 mx-4  flex w-[70%] sm:w-full max-w-md z-10">
        <input
          type="text"
          placeholder="Paste a URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="p-2 border rounded-l w-full"
          autoComplete="on"
        />
        <button onClick={addBookmark} className="bg-blue-500 text-white p-2 rounded-r" disabled={loading}>
          {loading ? "Adding..." : "Add"}
        </button>
      </div>
      
        {bookmarks.length === 0 && <p className="text-gray-600 z-10">No bookmarks yet.</p>}

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1000px] mx-auto">
        {bookmarks.map((bookmark) => (

          <a
            key={bookmark.id}
            href={bookmark.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-gray-950 border border-gray-700 rounded-xl overflow-hidden shadow-lg transition transform hover:scale-105 hover:border-blue-500">
            {bookmark.image &&
              <img
                src={bookmark.image}
                alt={bookmark.title}
                className="w-full h-48 object-cover group-hover:opacity-90 "
              />}

            <div className="p-4">
              <h2 className="text-xl font-semibold text-white group-hover:text-blue-400">
                {bookmark.title}
              </h2>

            </div>
            <button onClick={(e) => {
              e.preventDefault() // Prevents navigation
              e.stopPropagation() // Stops event bubbling
              deleteBookmark(bookmark.id)
            }

            } className="text-white ml-4 bg-red-400 px-2 py-1 mb-1 hover:pointer  hover:bg-red-600 rounded-lg">

              Remove
            </button>
          </a>
        ))}
      </div>
      {/* Footer */}
      <footer className="text-white pb-6 mt-16 sm:mt-24 z-10 w-full mx-auto absolute bottom-0">
        <div className="flex justify-center">
          <p className="text-xs sm:text-sm">&copy; 2024 Yash Shewalkar. All rights reserved.</p>
        </div>
      </footer>
    </div >
  );



}


