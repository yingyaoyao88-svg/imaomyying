import React from "react";

export function ShinyText({
  text,
  disabled = false,
  speed = 4,
  className = "",
  style = {},
}) {
  const animationDuration = `${speed}s`;

  return (
    <span
      className={`shiny-text ${disabled ? "" : "animate-shine"} ${className}`}
      style={{
        animationDuration,
        ...style,
      }}
    >
      {text}
    </span>
  );
}
