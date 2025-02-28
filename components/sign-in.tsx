"use client";
import { setCookie } from "cookies-next";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import Image from "next/image";
interface SignInProps {
  className?: string; // Optional className prop
  id: string;
}
export default function SignIn({ id, className = "" }: SignInProps) {
  const { data: session } = useSession();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const handleSignOut = async () => {
    const confirmed = window.confirm("Are you sure you want to sign out?");
    if (confirmed) {
      await signOut({ callbackUrl: "/" });
    }
  };

  useEffect(() => {
    const fetchProfileImage = async () => {
      if (session?.user?.image) {
        try {
          console.log("User Image URL:", session.user.image); // Log the image URL to the console
          const imageUrl = await Promise.resolve(session.user.image);
          setProfileImage(imageUrl);
        } catch (error) {
          console.error("Error loading profile image:", error);
        }
      }
    };
    setCookie("userEmail", session?.user?.email, { maxAge: 60 * 60 * 24 * 7, path: "/" });
    fetchProfileImage();
  }, [session?.user?.image]);

  return (
    <div id={id} className={`relative {$className}`}>
      {session?.user ? (
        <div>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden focus:outline-none"
          >
            {/* Display user profile image or placeholder */}
            {session.user.image ? (
              <Image
                src={profileImage ?? "/default-avatar.png"}
                alt="Profile"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-xl text-gray-700">👤</span>
            )}
          </button>

          {/* Dropdown */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white/70 backdrop-blur-md rounded-lg shadow-lg border border-gray-200 z-50">
              <div className="p-4">
                <p className="font-semibold text-gray-800 truncate">
                  {session.user.name}
                </p>
                <p className="text-sm text-gray-600 truncate">
                  {session.user.email}
                </p>
              </div>
              <div className="border-t">
                <button
                  onClick={handleSignOut}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="bg-white hover:bg-slate-200 text-black font-bold py-2 px-4 rounded"
        >
          Sign In with Google
        </button>
      )}
    </div>
  );
}
