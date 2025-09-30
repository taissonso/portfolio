"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { useEffect, useState, useRef } from "react";

const MouseChaser = () => {
  const { theme } = useTheme();

  const [position, setPosition] = useState({ x: 0, y: 0 }); 
  const mousePosition = useRef({ x: 0, y: 0 }); 
  const animationFrameRef = useRef<number | null>(null); 

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current = { x: event.clientX, y: event.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

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

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

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