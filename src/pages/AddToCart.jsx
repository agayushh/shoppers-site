import { useCart } from "../hooks/useCart";

export default function AddToCart() {
  const { cart, updateQuantity, removeItem } = useCart();

  // Calculate total price and item count
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.new_price * item.quantity,
    0
  );
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <section className="min-h-screen bg-neutral-100 px-6 py-12">
      <h2 className="text-3xl font-bold mb-10 text-center text-neutral-800">
        Your <span className="text-orange-500">Cart</span>
      </h2>

      <div className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto">
        {/* Cart Items */}
        <div className="flex-1 space-y-6">
          {cart.length === 0 ? (
            <p className="text-lg text-neutral-600 text-center">
              Your cart is empty.
            </p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white rounded-xl shadow-md p-6"
              >
                <div className="flex items-center gap-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-semibold text-lg text-neutral-800">
                      {item.name}
                    </h3>
                    <p className="text-sm text-neutral-500">
                      ₹{item.new_price}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-4">
                  <div className="flex items-center border border-neutral-300 rounded-md overflow-hidden">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="px-3 py-1 text-xl bg-neutral-200 hover:bg-neutral-300 transition"
                    >
                      -
                    </button>
                    <p className="px-4 text-md">{item.quantity}</p>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="px-3 py-1 text-xl bg-neutral-200 hover:bg-neutral-300 transition"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-sm text-red-600 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-96 bg-white shadow-md rounded-xl p-6 h-fit">
          <h3 className="text-xl font-bold mb-4 text-neutral-800">
            Order Summary
          </h3>
          <div className="flex justify-between mb-2 text-neutral-700">
            <span>Total Items</span>
            <span>{totalItems}</span>
          </div>
          <div className="flex justify-between mb-2 text-neutral-700">
            <span>Subtotal</span>
            <span>₹{totalPrice}</span>
          </div>
          <div className="flex justify-between mb-4 text-neutral-700">
            <span>Shipping</span>
            <span className="text-green-600">Free</span>
          </div>
          <hr className="mb-4" />
          <div className="flex justify-between font-bold text-lg text-neutral-900">
            <span>Total</span>
            <span>₹{totalPrice}</span>
          </div>
          <button
            className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg text-sm font-semibold transition"
            disabled={cart.length === 0}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </section>
  );
}
