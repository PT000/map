import React, { useState } from "react";

export const DarkMode = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <div style={isDarkMode ? { backgroundColor: "black", color: "white" } : {}}>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        TOGGLE DARK MODE
      </button>
      {children}
    </div>
  );
};
