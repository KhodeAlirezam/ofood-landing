import { cn } from "../utils/cn";
import { Dots } from "../icons/dots";

const left = "left";

export function Chip({
  icon,
  text,
  className,
  iconDirection,
  bubbleDirection,
}) {
  return (
    <div
      className={cn(
        "relative h-[48px] flex justify-between gap-3 whitespace-nowrap p-1 font-[400] text-base text-zinc-500 rounded-full shadow-[0px_4px_16px_0px_rgba(0,164,235,0.08)]",
        className,
        iconDirection === left ? "pr-4" : "pl-4"
      )}
    >
      {iconDirection === left ? (
        <>
          {text}
          <div className="rounded-full w-[40px] h-[40px] flex justify-center items-center bg-[#ECF7FD]">
            {icon}
          </div>
        </>
      ) : (
        <>
          <div className="rounded-full w-[40px] h-[40px] flex justify-center items-center bg-[#ECF7FD]">
            {icon}
          </div>
          {text}
        </>
      )}

      <Dots
        className={cn(
          "absolute bottom-[50%] translate-y-[100%] pr-1",
          bubbleDirection === left
            ? "left-0 translate-x-[-100%]"
            : "right-0 scale-x-[-1] translate-x-[100%]"
        )}
      />
    </div>
  );
}
