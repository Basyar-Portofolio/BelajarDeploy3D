import { Html,  } from "@react-three/drei";

const Loader = () => {

  return (
    <Html>
      <div className="loader border-t-2 rounded-full border-red-500 bg-purple-200 animate-spin
      h-8 aspect-square w-8 flex justify-center items-center text-yellow-700"></div>

    </Html>
  );
};

export default Loader;
