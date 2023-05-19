import { Link, useRouteError } from "react-router-dom";

export const NotFound = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">
        {error.status}
      </h1>

      <button className="mt-5">
        <a className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
            <Link to="/">Go Home</Link>
          </span>
        </a>
      </button>
      <div className="bg-[#cf2d2d] px-2 text-sm rounded  text-white">
        <i>{error.statusText || error.message}</i>
      </div>
    </main>
  );
};
