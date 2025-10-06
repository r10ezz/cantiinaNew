"use client"
import React, { useState, useEffect, useRef } from 'react';

// --- Improved TypeCycle Component ---
// This component creates a typewriter effect with a blinking cursor.
const TypeCycle = ({ words, className }) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const typeSpeed = isDeleting ? 75 : 150;

    const handleTyping = () => {
      setText(
        isDeleting
          ? currentWord.substring(0, text.length - 1)
          : currentWord.substring(0, text.length + 1)
      );

      // Switch to deleting when word is fully typed
      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1500); // Pause before deleting
      } 
      // Switch to next word when word is fully deleted
      else if (isDeleting && text === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(handleTyping, typeSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words]);

  return (
    <span className={className}>
      {text}
      <span className="cursor-blink">|</span>
    </span>
  );
};

// --- Improved Reveal Component ---
// This component animates its children into view when they scroll onto the screen.
const Reveal = ({ children, className, delay = 0 }) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1, // Trigger when 10% of the element is visible
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);
    
    // Base classes for initial state (invisible and ready for transition)
    const baseClasses = "transition-all duration-1000 ease-out";
    // Classes for the visible state
    const visibleClasses = "opacity-100 translate-y-0";
    // Classes for the initial hidden state
    const hiddenClasses = "opacity-0 translate-y-5";

    return (
        <div 
            ref={ref} 
            className={`${className} ${baseClasses} ${isVisible ? visibleClasses : hiddenClasses}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};


// --- Re-created Button Component ---
// A simple button component to match the usage in the Hero section.
const Button = ({ children, asChild, size, variant, href, "aria-label": ariaLabel }) => {
    const sizeClasses = size === "lg" ? "px-6 py-3 text-lg" : "px-4 py-2 text-base";
    
    const variantClasses = {
        primary: "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg shadow-blue-500/20",
        secondary: "bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm"
    };
    
    const currentVariant = variant === "secondary" ? variantClasses.secondary : variantClasses.primary;
    
    const commonClasses = "font-semibold rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/50 flex items-center justify-center gap-2";

    if (asChild && href) {
        return (
            <a href={href} className={`${commonClasses} ${sizeClasses} ${currentVariant}`} aria-label={ariaLabel}>
                {children}
            </a>
        );
    }

    return (
        <button className={`${commonClasses} ${sizeClasses} ${currentVariant}`} aria-label={ariaLabel}>
            {children}
        </button>
    );
};


// --- The Main Hero Component ---
// Now with a background image and improved animations.
export function Hero() {
  return (
    <header className="relative overflow-hidden" aria-label="Cantiina hero">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2832&auto=format&fit=crop"
          alt="Modern office canteen background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-28 pb-24 text-white md:pt-32 md:pb-28">
        <Reveal className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-gray-300 backdrop-blur-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
            New: Real-time menu updates
          </div>
        </Reveal>

        <Reveal className="mt-6 text-center" delay={200}>
          <h1 className="text-balance text-4xl font-bold tracking-tight md:text-6xl">
            Cantiina — modern canteen for{" "}
            <span className="inline-block text-left min-w-[8rem] md:min-w-[15rem]">
              <TypeCycle className="text-blue-400" words={["Schools", "Offices", "Hospitals", "Campuses"]} />
            </span>
            that run better
          </h1>
        </Reveal>

        <Reveal className="mx-auto mt-5 max-w-2xl text-center text-gray-300 md:text-lg" delay={400}>
          Streamline menu management, ordering, and analytics in one clean, responsive platform.
        </Reveal>

        <Reveal className="mt-8 flex flex-wrap justify-center gap-4" delay={600}>
          <Button asChild size="lg">
            <a href="#pricing" aria-label="Get Started with Cantiina">
              Get Started
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg> */}
            </a>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <a href="#how-it-works" aria-label="Learn more about how Cantiina works">
              Learn More
            </a>
          </Button>
        </Reveal>

        <Reveal className="mt-16" delay={800}>
          <div className="rounded-xl border border-white/10 bg-black/30 p-2 shadow-2xl shadow-blue-500/10 backdrop-blur-sm">
            <img
              src={"https://placehold.co/1120x560/000000/FFF?text=Cantiina+Dashboard"}
              alt="Cantiina dashboard preview"
              className="h-auto w-full rounded-lg"
            />
          </div>
        </Reveal>
      </div>
    </header>
  );
}

// --- App Component for Rendering ---
// This is a wrapper to make the component previewable and include global styles.
export default function App() {
  return (
    <div className="bg-black">
      {/* This style block contains the blinking animation for the cursor. 
        In a real app, you would place this in your global CSS file.
      */}
      <style jsx global>{`
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
        .cursor-blink {
          animation: blink 1s step-end infinite;
          font-weight: 300;
        }
      `}</style>
      <Hero />
    </div>
  );
}

