import { cva } from "class-variance-authority";

// Base definition
const base = "inline-flex";

const button = cva(base, {
  variants: { 
    intent: {
      primary: [
        "bg-red-500",
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
        "bg-red-600",
        "text-gray-200",
        "border-gray-400",
        "hover:bg-gray-100",
      ],
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-4"],
    },
  },
  compoundVariants: [{ intent: "primary", size: "medium", class: "none" }],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

function Button({ intent, size, className, ...rest }) {
  return <button {...rest} className={button({ intent, size, className })} />;
}

export default function Ex3_2() {
  return (
    <div className="grid h-screen place-content-center bg-black">
      <Button className="">Click Me</Button>
    </div>
  );
}
