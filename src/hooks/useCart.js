import { useRecoilState } from "recoil";
import { cartItem } from "../atom/atom";
import all_product from "../assets/all_product";

export const useCart = () => {
  const [cart, setCart] = useRecoilState(cartItem);

  const addToCart = (id) => {
    const itemExist = cart.find((item) => item.id === id); //boolean

    if (itemExist) {
      setCart(
        cart.filter((item) => {
          return item.id !== id;
        })
      );
    } else {
      const product = all_product.find((p) => p.id === id);
      if (product) {
        setCart([...cart, { ...product, quantity: 1 }]);
      }
    }
    console.log("added");
  };

  const updateQuantity = (id, delta) => {
    const productInCart = cart.find((item) => item.id === id);
    if (productInCart) {
      setCart(
        cart.map((item) => {
          return item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity + delta) }
            : item;
        })
      );
    } else {
      console.log("Item is not in cart");
    }
  };

  const isInCart = (id) => {
    const itemInCart = cart.find((item) => item.id === id);

    return itemInCart ? "item is in cart" : "item is not in cart";
  };

  const removeItem = (id) => {
    const itemInCart = cart.find((item) => item.id === id);
    if (itemInCart) {
      setCart(cart.filter((item) => item.id !== id));
    }
  };
  return {
    cart,
    addToCart,
    updateQuantity,
    isInCart,
    removeItem,
  };
};
