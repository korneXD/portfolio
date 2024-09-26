import React from "react";
import { CardSpotlight } from "./ui/card-spotlight";

export const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center" id="contact">
      <h2 className="text-white font-bold text-4xl pt-10">Contact</h2>
      <div className="flex flex-row gap-4">
        <CardSpotlight className="h-48 w-96 mt-5">
          <p className="text-xl relative z-20 mt-2 text-white">
            <span className="font-bold">Github</span>
            <br />
            <span className="font-mono">...</span>
            <br />
            <span className="font-mono">&#123;hover me&#125;</span>
          </p>
        </CardSpotlight>
        <CardSpotlight className="h-48 w-96 mt-5">
          <p className="text-xl relative z-20 mt-2 text-white">
            <span className="font-bold">Instagram</span>
            <br />
            <span className="font-mono">...</span>
            <br />
            <span className="font-mono">&#123;hover me&#125;</span>
          </p>
        </CardSpotlight>
        <CardSpotlight className="h-48 w-96 mt-5">
          <p className="text-xl relative z-20 mt-2 text-white">
            <span className="font-bold">Email</span>
            <br />
            <span className="font-mono">...</span>
            <br />
            <span className="font-mono">&#123;hover me&#125;</span>
          </p>
        </CardSpotlight>
      </div>
    </div>
  );
};
