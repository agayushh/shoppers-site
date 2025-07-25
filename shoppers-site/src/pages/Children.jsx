import { useRecoilValue } from "recoil";
import { kidItem } from "../atom/atom";
import { useCart } from "../hooks/useCart";

export default function Children() {
  const kidProducts = useRecoilValue(kidItem);
  const { addToCart, cart } = useCart();

  return (
    <section className="min-h-screen bg-white px-4 py-8">
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 text-center">
        Explore Our <span className="text-orange-500">Kids</span> Collection
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {kidProducts.map((product) => (
          <div
            key={product.id}
            className="group bg-neutral-900 border border-neutral-700 rounded-2xl py-4 hover:shadow-xl transition duration-300 hover:scale-[1.02] flex flex-col items-center"
          >
            <div className="w-60 h-60 overflow-hidden rounded-xl mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="w-full text-center">
              <h3 className="text-white text-xl font-semibold mb-2 truncate">
                {product.name}
              </h3>
              <div className="text-orange-400 text-lg font-medium flex justify-center gap-3">
                ₹{product.new_price}
                <div className="line-through text-white">
                  ₹{product.old_price}
                </div>
              </div>
            </div>

            <button
              className="mt-4 bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-orange-700 transition"
              onClick={() => addToCart(product.id)}
            >
              {cart.some((item) => item.id === product.id)
                ? "Remove from cart"
                : "Add to cart"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
