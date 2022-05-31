import { useRef } from "react";
import useOutsideClick from "../hooks/useOutsideClick";
import { clr } from "../globals/theme";

const Select = ({
  data,
  setData,
  name,
  list,
  color,
  placeHolder,
  err,
  desc,
  setError,
}: any) => {
  const dropdownRef: any = useRef();
  const containerRef: any = useRef();
  useOutsideClick(containerRef, () => {
    dropdownRef.current.style.maxHeight = "0px";
  });
  return (
    <>
      <div
        ref={containerRef}
        className=" /mb-5 block w-full relative z-10"
        style={{ minHeight: "3rem" }}
      >
        <div
          tabIndex={0}
          className={`min-h-full group absolute bg-white 500 block w-full transition-all duration-700 rounded border py-2 /shadow outline-none ring-[${color}] /ring-yellow-500 focus:ring`}
          style={{ borderColor: err ? clr.red : "#e5e7eb" }}
        >
          <div
            className="cursor-pointer px-3"
            onClick={() => {
              dropdownRef.current.style.maxHeight = "400px";
            }}
          >
            {placeHolder}{" "}
            <span className={` text-blue-500 font-bold`}>{data.user_type}</span>
          </div>
          <div
            ref={dropdownRef}
            className="max-h-0 overflow-hidden group-focus:max-h-[400px] transition-all duration-700"
          >
            {list.map((item: any) => (
              <div
                key={item.id}
                onClick={() => {
                  setError({ ...err, [name]: "" });
                  dropdownRef.current.style.maxHeight = "0px";
                  setData({ ...data, [name]: item.title });
                }}
                className="w-full px-3 cursor-pointer hover:text-blue-500 hover:pl-5 /hover:text-white transition-all"
              >
                {item.title}
              </div>
            ))}
          </div>
        </div>
      </div>
      {(err || desc) && (
        <p
          className={`text-xs leading-5 tracking-[0.26px] w-full text-[#777] mt-3`}
        >
          {err ? (
            <span style={{ color: clr.red }}>{err}</span>
          ) : desc ? (
            desc
          ) : (
            ""
          )}
        </p>
      )}
      <div className="mb-5"></div>
    </>
  );
};

export default Select;
