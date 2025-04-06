import React from "react";
import data_product from "../assets/all_product";

export default function Popular() {
  return (
    <div>
      <div>Popular in Women</div>
      <div className="grid grid-cols-3 space-x-6 space-y-5">
        {data_product.map((item, key) => (
          <div className="border-2" key={item.id}>
            <div>
              <div>
                {" "}
                <img src={item.image} alt="" />
              </div>
              <div>{item.category}</div>
              <div>{item.name}</div>
              <div>{item.new_price}</div>
              <div>{item.old_price}</div>
              <button className="bg-orange-400 flex justify-center w-full p-2 hover:bg-orange-300">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
