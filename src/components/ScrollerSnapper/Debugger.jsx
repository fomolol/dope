/**
 * @file Debugger.jsx
 */
import { useWindowSize } from '@/hooks/useWindowSize';

const Debugger = ({ calcHeight, scrollY, scrollYProgress }) => {
  const { width, height } = useWindowSize();

  return (
    <section className="fixed flex items-center justify-center w-full text-center top-4 z-infinity ">
      <div className="flex w-auto px-6 py-2 mx-auto space-x-4 font-mono text-sm font-normal rounded-2xl bg-white/50">
        <p className="after:content-['_|']">
          <span className="font-bold">height:</span>
          <span>{calcHeight.get()}</span>
        </p>

        <p className="after:content-['_|']">
          <span className="font-bold">y:</span>
          <span>{scrollY}</span>
        </p>

        <p className="after:content-['_|']">
          <span className="font-bold">percentage:</span>
          <span>{(scrollYProgress * 100).toFixed(0)}%</span>
        </p>

        <p>
          <span className="font-bold">window </span>
          <span className="after:content-['_|_']">h:{height}</span>
          <span className="">w:{width}</span>
        </p>
      </div>
    </section>
  );
};

export default Debugger;
