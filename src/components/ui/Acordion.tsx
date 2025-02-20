import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

type AccordionItem = {
  question: string;
  answer: string;
};

type AccordionProps = {
  data: AccordionItem;
  isOpen: boolean;
  setIsOpen: (index: number) => void;
  index: number;
};

const Accordion: React.FC<AccordionProps> = ({
  data,
  isOpen,
  setIsOpen,
  index,
}) => {
  return (
    <div className="border border-neutral-500 rounded-xl">
      <button
        onClick={() => setIsOpen(index)}
        className="w-full flex justify-between items-center p-5"
      >
        <h1 className="font-medium text-lg md:text-xl">{data.question}</h1>
        <span className="p-2 border border-neutral-500 rounded-full text-slate-300">
          {isOpen ? <FaMinus /> : <FaPlus />}
        </span>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-200 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100 px-5 pb-5"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-neutral-300 text-sm md:text-base md:leading-relaxed">
            {data.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
