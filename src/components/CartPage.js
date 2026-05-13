import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="max-w- mx-auto px-6 py-20 text-center">
        <div className="text-6xl mb-4">🛒</div>
        <h2 className="text-3xl font-black text-black mb-4 uppercase tracking-tight">Your Bag is Empty</h2>
        <p className="text-slate-600 mb-8">Add some sneakers to get started!</p>
        <Link to="/" className="bg-black hover:bg-slate-800 text-white px-8 py-4 rounded-full font-bold inline-block uppercase tracking-wide">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w- mx-auto px-6">
        <h1 className="text-4xl font-black text-black mb-8 uppercase tracking-tight">Bag</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item, idx) => (
              <div key={idx} className="bg-white border border-slate-200 p-6 flex gap-6">
                <img
                  src={item.color.images[0]}
                  alt={item.product.name}
                  className="w-32 h-32 object-contain bg-slate-50"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-black">{item.product.name}</h3>
                  <p className="text-slate-600">{item.product.brand}</p>
                  <p className="text-sm text-slate-500 mt-1">
                    Color: {item.color.name} | Size: {item.size}
                  </p>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center border-2 border-slate-300">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.color.name, item.size, item.quantity - 1)}
                        className="px-3 py-1 hover:bg-slate-100"
                      >
                        -
                      </button>
                      <span className="px-4 py-1 font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.color.name, item.size, item.quantity + 1)}
                        className="px-3 py-1 hover:bg-slate-100"
                      >
                        +
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="text-2xl font-bold text-black">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </p>
                      <button
                        onClick={() => removeFromCart(item.product.id, item.color.name, item.size)}
                        className="text-slate-500 hover:text-black text-sm mt-1 underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border border-slate-200 p-6 h-fit sticky top-24">
            <h2 className="text-2xl font-black text-black mb-6 uppercase tracking-tight">Summary</h2>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Estimated Shipping</span>
                <span className="font-bold text-black">Free</span>
              </div>
              <div className="border-t-2 border-slate-200 pt-3 flex justify-between text-xl font-bold text-black">
                <span>Total</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
            </div>
            <button className="w-full bg-black hover:bg-slate-800 text-white font-bold py-4 rounded-full transition uppercase tracking-wide">
              Checkout
            </button>
            <Link to="/" className="block text-center text-black hover:text-slate-600 font-medium mt-4 underline">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}