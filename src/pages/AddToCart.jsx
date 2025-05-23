import React, { useState } from "react";
import data_product from "../assets/all_product";

export default function AddToCart() {
  const [count, setcount] = useState(0);

  const increaseCount = (id) => {
    setcount((c) => c + 1);
  };

  const decreaseCount = (id) => {
    setcount((c) => c - 1);
  };
  return (
    <div>
      <div className="p-10 space-y-5 w-[1000px]">
        {data_product.map((item, key) => (
          <div className="border-2 p-4" key={item.id}>
            <div className="flex justify-between">
              <div className="flex gap-x-11">
                {" "}
                <img src={item.image} alt="" width={92} height={92} />
                <div className="w-40 font-bold">
                  {item.name}
                  {/* <div className='line-through'>{item.old_price}</div> */}
                  <div className="font-light">{item.new_price}</div>
                </div>
              </div>
              <div>
                <button className="bg-orange-400 h-8 flex justify-center items-center p-2 hover:bg-orange-300">
                  Remove from cart
                </button>
                <div className="flex border-2 justify-evenly mt-4">
                  <button onClick={decreaseCount}>-</button>
                  <p>{count}</p>
                  <button onClick={increaseCount}>+</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
