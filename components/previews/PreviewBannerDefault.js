import React, { useContext } from "react";
import { StateContext } from "../../pages/_app";

export const PreviewBannerDefault = () => {
  const { state, dispatch } = useContext(StateContext);
  return (
    <div
      className={`w-full sm:w-96 items-center flex flex-col relative p-8 rounded-lg bg-xlight border-8 hover:cursor-pointer group transition-all duration-150 ease-in-out border-xlight`}
    >
      <div className="relative flex flex-col items-center justify-center p-8 overflow-hidden bg-white rounded-lg shadow-lg w-96 shadow-light/30">
        <div
          className={`absolute top-0 z-10 w-full overflow-hidden ${state.cardBgColor} h-28`}
        >
          <div className="h-full bg-center"></div>
        </div>
        <div className="relative z-30 flex items-center justify-center w-48">
          <div className="flex w-24 h-24 mt-2 mb-6 bg-gray-300 rounded-full"></div>
        </div>
        <div className="h-6 mb-2 rounded-md w-36 bg-dark"></div>
        <div className={`h-4 mb-4 rounded-md w-32 ${state.cardBgColor}`}></div>
        <div className="flex flex-wrap items-center justify-center space-x-2 w-60">
          <div className={`h-3 rounded-md w-16 bg-light mb-2`}>&nbsp;</div>
          <div className={`h-3 rounded-md w-12 bg-light mb-2`}>&nbsp;</div>
          <div className={`h-3 rounded-md w-8 bg-light mb-2`}>&nbsp;</div>
          <div className={`h-3 rounded-md w-10 bg-light mb-2`}>&nbsp;</div>
          <div className={`h-3 rounded-md w-12 bg-light mb-2`}>&nbsp;</div>
          <div className={`h-3 rounded-md w-8 bg-light mb-2`}>&nbsp;</div>
          <div className={`h-3 rounded-md w-12 bg-light mb-2`}>&nbsp;</div>
        </div>
      </div>
    </div>
  );
};
