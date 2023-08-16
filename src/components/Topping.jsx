import React from "react";
import { Link } from "react-router-dom";

const Topping = ({ addTopping, mie }) => {
  const toppings = ["Telur🥚", "Kepiting🦀", "Udang🍤", "Cumi-cumi🦑", "Daging🥩"];
  return (
    <div className="max-w-[300px] m-[100px_auto_40px]">
      <h3 className="mb-3 pb-3 border-b border-b-[rgba(255,255,255,0.6)]">
        Step 2: Pilih Topping
      </h3>
      <ul>
        {toppings.map((topping) => (
          <li
            className="p-3 cursor-pointer"
            key={topping}
            onClick={() => addTopping(topping)}
          >
            <span
              className={
                mie.toppings.includes(topping)
                  ? "font-bold before:content-['>'] before:relative before:-top-[2px] before:mr-2 before:inline-block before:scale-[0.8,1]"
                  : ""
              }
            >
              {topping}
            </span>
          </li>
        ))}
      </ul>
      <Link to="/order">
        <button className="py-2 px-7 m-[40px_auto_0] rounded-full border-[2px] font-light cursor-pointer opacity-70">
          Pesan
        </button>
      </Link>
    </div>
  );
};

export default Topping;
