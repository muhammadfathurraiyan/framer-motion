import React from "react";

const Order = ({ mie }) => {
  return (
    <div className="max-w-[800px] m-[100px_auto_40px] text-center">
      <h2 className="text-xl">Terimakasih atas pesananya😊</h2>
      <p className="my-5 mx-auto">Pesanan kamu adalah {mie.base} dengan toping:</p>
      {mie.toppings.map((topping) => (
        <p key={topping}>{topping}</p>
      ))}
    </div>
  );
};

export default Order;
