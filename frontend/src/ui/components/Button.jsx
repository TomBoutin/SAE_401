import { cva } from "class-variance-authority";

// Base definition
const base = "";

const button = cva(base, {
  variants: { 
    intent: {
      primary: [
        "bg-main",
        "text-white",
        "border-transparent",
        "hover:outline",
        "hover:outline-offset-2",
        "hover:outline-2",
        "hover:outline-white",
        "hover:bg-red-400",
        "rounded-lg",
      ],
      secondary: [
        "text-white",
        "border-b-8",
        "border-transparent",
        "hover:border-main",
      ],
    },
    size: {
      small: ["text-base", "py-2", "px-2"],
      medium: ["text-base", "py-2", "px-12"],
      large: ["text-2xl", "py-3", "px-12"],
    },
  },
  compoundVariants: [{ intent: "primary", size: "medium", class: "none" }],
  defaultVariants: {
    intent: "secondary",
    size: "medium",
  },
});

function Button({ intent, size, className, ...rest }) {
  return <button {...rest} className={button({ intent, size, className })} />;
}

export default function Button_View() {
  return (
    <div className="grid h-screen place-content-center bg-black font-openSans" >
      < Button intent="primary" className="mb-5">Click Me</ Button >
      < Button intent="secondary" size="large">Click Me</ Button >
      
    </div>
  );
}
