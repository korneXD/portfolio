import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { gridItems } from "@/data";

export const Grid = () => {
  return (
    <section id="grids">
      <BentoGrid>
        {gridItems.map((item, index) => (
          <BentoGridItem
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
            className={
              index === 3 || index === 6
                ? "md:col-span-2 bg-grid-pattern bg-no-repeat"
                : ""
            }
          />
        ))}
      </BentoGrid>
    </section>
  );
};
