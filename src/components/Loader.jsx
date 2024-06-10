import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      
      <div className="flex mt-16 color ">
      <span className="loading loading-ring loading-xs text-indigo-300"></span>
  <span className="loading loading-ring loading-sm text-violet-700"></span>
<span span className="loading loading-ring loading-md text-fuchsia-600"></span>
<span className="loading loading-ring loading-lg text-rose-950"></span>
      </div>
    </Html>
  );
};

export default Loader;
