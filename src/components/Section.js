import { useState } from "react";

const Section = ({ name, activeSection, onClick }) => {
  //   const [showDesc, setShowDesc] = useState(false);
  return (
    <div className="border border-black p-4 gap-4 mb-4">
      <h1 className="text-3xl font-bold">{name}</h1>
      <button className="px-4 border border-green w-20" onClick={onClick}>
        {activeSection ? "hide" : "show"}
      </button>
      {activeSection && (
        <h2 className="text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis,
          maiores aliquid excepturi molestiae sit quisquam placeat id nam! Ullam
          recusandae, velit voluptatibus ratione quidem provident officiis vel
          accusantium! Ea deleniti fugit ab ullam quibusdam, maiores dolore est
          nobis optio, aliquam delectus ut atque libero odio cupiditate? Harum
          repellendus perspiciatis error.
        </h2>
      )}
    </div>
  );
};

export default Section;
