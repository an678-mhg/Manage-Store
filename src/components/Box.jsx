import React from "react";
import CountUp from "react-countup";

const Box = ({ dashboard }) => {
  return (
    <div className="shadow-md h-[150px] rounded-md overflow-hidden relative px-4 flex items-center">
      <div
        className={`absolute h-full w-[5px] top-0 bottom-0 left-0`}
        style={{ backgroundColor: dashboard.color }}
      ></div>

      <div>
        <h3 className="font-semibold text-sm uppercase text-gray-600">
          {dashboard.name}
        </h3>

        <p className="mt-4 text-2xl font-semibold">
          <CountUp end={dashboard.count} duration={1} />
        </p>
      </div>
    </div>
  );
};

export default Box;
