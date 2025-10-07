"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { useEffect, useState, useRef } from "react";

const MouseChaser = () => {
  const { theme } = useTheme();

  const [position, setPosition] = useState({ x: 0, y: 0 }); 
  const mousePosition = useRef({ x: 0, y: 0 }); 
  const animationFrameRef = useRef<number | null>(null); 
  const [isActive, setIsActive] = useState(false); // State to activate after page load

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current = { x: event.clientX, y: event.clientY };
    };

    const animate = () => {
      setPosition((prev) => {
        const dx = mousePosition.current.x - prev.x; 
        const dy = mousePosition.current.y - prev.y; 

        const newX = prev.x + dx * 0.1; 
        const newY = prev.y + dy * 0.1;

        return { x: newX, y: newY };
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    if (isActive) {
      window.addEventListener("mousemove", handleMouseMove);
      animationFrameRef.current = requestAnimationFrame(animate);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isActive]);

  useEffect(() => {
    const handlePageLoad = () => {
      setIsActive(true); // Activate after page load
    };

    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad);
    }

    return () => {
      window.removeEventListener("load", handlePageLoad);
    };
  }, []);

  if (!isActive) return null; // Render nothing until active

  return (
    <div
      className="mouse-circle"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        backgroundColor: theme === "dark" ? "#42a5f5" : "#ff4081",
        transition: "background-color 0.3s ease", 
      }}
    ></div>
  );
};

export default MouseChaser;