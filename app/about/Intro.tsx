import React from 'react';

const NextJsIntro = () => {
    return (
        <section className="relative flex items-center justify-center h-screen bg-black text-white overflow-hidden">

            <div className="absolute inset-0 bg-black">
                <div className="w-full h-full bg-[length:20px_20px] bg-[linear-gradient(transparent_95%,rgba(255,255,255,0.1)_5%),linear-gradient(90deg,transparent_95%,rgba(255,255,255,0.1)_5%)]"></div>
            </div>

            <div className="relative z-10 text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in">
                    The React Framework for the Web
                </h1>
                <p className="text-lg md:text-xl mb-8 animate-fade-in-delay">
                    Used by some of the world's largest companies, Next.js enables you to
                    create <strong>high-quality web applications</strong> with the power
                    of React components.
                </p>
                <div className="flex justify-center gap-4 mb-6">
                    <button className="px-6 py-3 border-2 border-dashed border-white text-white hover:bg-white hover:text-black transition">
                        Get Started
                    </button>
                    <button className="px-6 py-3 border-2 border-dashed border-white text-white hover:bg-white hover:text-black transition">
                        Learn Next.js
                    </button>
                </div>
                <p className="font-mono text-gray-400">
                    ▲ ~ npx create-next-app@latest
                </p>
            </div>
        </section>
    );
};

export default NextJsIntro;
