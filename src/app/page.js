"use client";

import { useEffect, useCallback, useState, useRef } from "react";
import { cn } from "./utils/cn";
import { Logo } from "./icons/logo";
import { LogoFarsi } from "./icons/logoFarsi";
import { Chip } from "./components/chip";

export default function Home() {
  const [ref, setImageRef] = useState(null);
  const setElementRef = useCallback(
    (element) =>
      setImageRef((prev) =>
        element ? (prev === element ? prev : element) : prev
      ),
    []
  );
  const [isLoaded, setIsLoaded] = useState(false);

  const [step, setStep] = useState(1);

  const interval = useRef();
  useEffect(() => {
    if (interval?.current) {
      clearInterval(interval.current);
    }
    interval.current = setInterval(
      () => setStep((prev) => (prev === 5 ? 1 : prev + 1)),
      4000
    );

    return () => {
      if (interval?.current) {
        clearInterval(interval.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!ref || !ref?.complete) {
      return;
    }

    setIsLoaded(true);
  }, [ref]);

  return (
    <main className="relative h-full w-full">
      <div className="h-full flex flex-col w-full overflow-hidden px-4 md:px-8">
        <div className="w-full max-w-7xl mx-auto">
          <div className="relative h-[256px] md:h-[360px] w-full">
            <img
              ref={setElementRef}
              src="/hero.jpg"
              className="object-cover object-center rounded-b-[40px] absolute inset-0 w-full h-full -z-10"
            />
            <article className="flex flex-col w-full h-full p-8 md:p-14 gap-2 md:gap-10">
              <Logo className={cn("w-[180px] h-full md:w-[360px] z-50 mx-auto translate-y-[30vh] transition-transform ease-linear duration-300", isLoaded && 'translate-y-0')} />
              <header className="mx-auto w-full flex flex-col justify-center items-center gap-2">
                <h1 className="text-white text-[24px] md:text-[48px] font-bold">
                  دیگه وقتشه!
                </h1>
                <p className="text-white text-sm md:text-lg">
                  سفارش آنلاین غذا
                </p>
              </header>
            </article>
          </div>
        </div>
        <div className="w-full relative h-full b inset-0 max-w-7xl mx-auto flex items-end justify-center">
          <img
            src="/bg-pattern.png"
            className="object-cover object-bottom absolute inset-x-0 bottom-0 w-full h-full"
          />
          <div className="md:relative h-[300px] md:h-[600px] aspect-square border-dashed border-[3px] p-4 md:p-8 border-white rounded-full mb-[-133px] md:mb-[-266px]">
            <div className="relative p-4 md:p-8 h-full w-full bg-[#DFF0F7] rounded-full animate-spin-slow">
              <img
                src="/food-plate.png"
                className={cn("absolute object-cover object-center transition-opacity duration-500 ease-in opacity-0 w-full h-full p-4 md:p-8 inset-0", step === 1 && 'opacity-100')}
              />
               <img
                src="/QQorme.png"
                className={cn("absolute object-cover object-center transition-opacity duration-500 ease-in opacity-0 w-full h-full p-4 md:p-8 inset-0", step === 2 && 'opacity-100')}
              />
               <img
                src="/QQeyme.png"
                className={cn("absolute object-cover object-center transition-opacity duration-500 ease-in opacity-0 w-full h-full p-4 md:p-8 inset-0", step === 3 && 'opacity-100')}
              />
               <img
                src="/MMeat.png"
                className={cn("absolute object-cover object-center transition-opacity duration-500 ease-in opacity-0 w-full h-full p-4 md:p-8 inset-0", step === 4 && 'opacity-100')}
              />
               <img
                src="/CChicken.png"
                className={cn("absolute object-cover object-center transition-opacity duration-500 ease-in opacity-0 w-full h-full p-4 md:p-8 inset-0", step === 5 && 'opacity-100')}
              />
            </div>
            <div className="left-4 md:left-[unset] absolute scale-[0.80] md:scale-[1] top-[1rem] md:top-[10rem] md:right-[-3rem] md:translate-x-[100%]">
              <Chip
                text="سفارش از قنادی"
                iconDirection="left"
                bubbleDirection="left"
                icon={<img src="/Donat.png" className="w-full h-full object-contain"/>}
                className="bg-white md:flex items-center justify-center"
              />
            </div>
            <div className="right-4 md:right-[unset] absolute scale-[0.80] md:scale-[1] top-[3.5rem] md:top-0 md:left-[54px] md:translate-x-[-100%]">
              <Chip
                text="سفارش از کافه"
                iconDirection="left"
                bubbleDirection="right"
                icon={<img src="/Coffe.png" className="w-full h-full object-contain"/>}
                className="bg-white md:flex items-center justify-center"
              />
            </div>
            <div className="left-4 md:left-[unset] absolute scale-[0.80] md:scale-[1] top-[6rem] md:top-[3rem] md:right-1 md:translate-x-[100%]">
              <Chip
                text="سفارش از رستوران"
                iconDirection="right"
                bubbleDirection="left"
                icon={<img src="/Burger.png" className="w-full h-full object-contain"/>}
                className="bg-white md:flex items-center justify-center"
              />
            </div>
            <div className="right-4 md:right-[unset] absolute scale-[0.80] md:scale-[1] top-[8.5rem] md:top-32 md:left-[-2rem] md:translate-x-[-100%]">
              <Chip
                text="سفارش از تره‌بار"
                iconDirection="right"
                bubbleDirection="right"
                icon={<img src="/Avocado.png" className="w-full h-full object-contain"/>}
                className="bg-white md:flex items-center justify-center"
              />
            </div>
          </div>
        </div>
        <div className={cn("relative h-[125px] md:h-[250px] w-full flex flex-nowrap mt-auto justify-center translate-y-[100%] transition-transform ease-linear duration-300", isLoaded && 'translate-y-0')}>
          <div className="h-fit w-fit shadow-[0px_0px_150px_rgba(0,0,0,0.20)] rounded-full">
            <div
              style={{
                clipPath: "circle(50% at 50% 50%)",
              }}
              className="bg-white rounded-full h-[calc(100vw*8)] max-h-[5000px] aspect-square flex justify-center"
            >
              <div className="h-[262px] md:h-[530px] mt-[-150px] md:mt-[-300px] bg-[#E8ECED] p-4 md:p-8 aspect-square rounded-full">
                <div className="h-full bg-primary rounded-full aspect-square flex justify-center items-end">
                  <LogoFarsi className="h-20 w-[100px] md:w-[200px] mb-[16px] md:mb-[72px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={cn(
          "fixed inset-0 bg-primary opacity-100 transition-opacity duration-300",
          isLoaded && "opacity-0"
        )}
      ></div>
    </main>
  );
}
