import React from "react";
import data_product from "../assets/all_product";

export default function Popular() {
  return (
    <section className="bg-black text-white py-10 px-4 md:px-12">
      <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">
        Latest <span className="text-orange-400">Collection</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 2xl:grid-cols-6 gap-8">
        {data_product.map((item) => (
          <div
            key={item.id}
            className="bg-zinc-900 rounded-2xl shadow-xl overflow-hidden hover:shadow-orange-400/20 transition-shadow group"
          >
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-4 space-y-2">
              <p className="text-sm text-orange-400">{item.category}</p>
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <div className="flex items-center space-x-2">
                <span className="text-orange-300 font-bold text-md">
                  ₹{item.new_price}
                </span>
                <span className="line-through text-gray-400 text-sm">
                  ₹{item.old_price}
                </span>
              </div>
              <button className="mt-4 w-full bg-orange-400 hover:bg-orange-500 text-black py-2 rounded-lg transition-colors duration-200">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
