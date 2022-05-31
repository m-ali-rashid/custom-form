import React from "react";
import useOutsideClick from "../hooks/useOutsideClick";
import { clr } from "../globals/theme";

const Input = ({
  placeholder,
  type = "text",
  value,
  setValue,
  color = clr.gray,
  name,
  desc,
  err,
  setError,
}: any) => {
  const placeholderRef: any = React.useRef();
  const containerRef: any = React.useRef();
  const inputRef: any = React.useRef();

  function inputFocused() {
    placeholderRef.current.style.top = "-8px";
    placeholderRef.current.style.color = color;
    placeholderRef.current.style.fontSize = "12px";
    placeholderRef.current.style.padding = "0px 3px";
  }

  function inputUnfocused() {
    placeholderRef.current.style.top = "30%";
    placeholderRef.current.style.color = "black";
    placeholderRef.current.style.fontSize = "16px";
    placeholderRef.current.style.padding = "0px";
  }

  useOutsideClick(containerRef, () => {
    if (value[name].length === 0) inputUnfocused();
    else inputFocused();
  });
  return (
    <div className=" w-full mb-5">
      <div
        ref={containerRef}
        onFocus={() => {
          inputFocused();
        }}
        className="relative"
      >
        <input
          ref={inputRef}
          tabIndex={0}
          type={type}
          className={`form-input h-12 bg-white ring-yellow 500 mt-1 block w-full rounded border py-2 px-3 /shadow outline-none ring-[${color}] /ring-yellow-500 focus:ring`}
          style={{ borderColor: err ? clr.red : "#e5e7eb" }}
          autoComplete="new-password"
          value={value[name]}
          onChange={(e: any) => {
            setError({ [name]: "" });
            setValue({
              ...value,
              [name]: e.target.value,
            });
          }}
        />

        <label
          ref={placeholderRef}
          className="absolute top-[30%] left-4 bg-white transition-all duration-500"
          onClick={() => inputRef.current.focus()}
        >
          <div className="">{placeholder}</div>
        </label>
      </div>
      {(err || desc) && (
        <p className={`text-xs leading-5 tracking-[0.26px] text-[#777] mt-3`}>
          {err ? (
            <span style={{ color: clr.red }}>{err}</span>
          ) : desc ? (
            desc
          ) : (
            ""
          )}
        </p>
      )}
    </div>
  );
};

export default Input;
