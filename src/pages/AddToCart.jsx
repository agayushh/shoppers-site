import { useCart } from "../hooks/useCart";

export default function AddToCart() {
  const { cart, updateQuantity, removeItem } = useCart();

  return (
    <div>
      <div className="p-10 space-y-5 w-[1000px]">
        {cart.map((item, key) => (
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
                <button
                  className="bg-orange-400 h-8 flex justify-center items-center p-2 hover:bg-orange-300"
                  onClick={() => removeItem(item.id)}
                >
                  Remove from cart
                </button>
                <div className="flex border-2 justify-evenly mt-4">
                  <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <p>{item.quantity}</p>
                  <button onClick={() => updateQuantity(item.id, +1)}>+</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
