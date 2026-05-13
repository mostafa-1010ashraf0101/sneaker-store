import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data';
import { useCart } from '../context/CartContext';

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();

  const [selectedColor, setSelectedColor] = useState(product?.colors[0]);
  const [selectedImage, setSelectedImage] = useState(product?.colors[0].images[0]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [showToast, setShowToast] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😢</div>
          <h2 className="text-3xl font-bold text-black mb-4">Product not found</h2>
          <Link to="/" className="bg-black hover:bg-slate-800 text-white px-6 py-3 rounded-full font-semibold inline-block">
            Back to Store
          </Link>
        </div>
      </div>
    );
  }

  const discount = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('اختار المقاس الأول يا دون 😂');
      return;
    }
    addToCart(product, selectedColor, selectedSize, quantity);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="bg-white min-h-screen">
      {showToast && (
        <div className="fixed top-20 right-4 bg-black text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-bounce">
          ✅ Added to Bag!
        </div>
      )}

      <div className="max-w- mx-auto px-6 py-8">
        <Link to="/" className="text-black hover:text-slate-600 font-medium mb-6 inline-block">
          ← Back
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 mt-6">
          <div className="space-y-4">
            <div className="bg-slate-50 p-8">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h- object-contain"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {selectedColor.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`bg-slate-50 p-2 border-2 transition ${
                    selectedImage === img? 'border-black' : 'border-slate-200 hover:border-slate-400'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-20 object-contain" />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-slate-600 font-medium">{product.brand}</p>
              <h1 className="text-4xl font-black text-black mt-2 uppercase tracking-tight">{product.name}</h1>
              <p className="text-slate-600 mt-2">{product.category}</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-black">★</span>
                <span className="text-slate-600">{product.rating} ({product.reviews})</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-black">${product.price}</span>
              {product.oldPrice > product.price && (
                <>
                  <span className="text-xl text-slate-400 line-through">${product.oldPrice}</span>
                  <span className="bg-red-600 text-white px-3 py-1 text-sm font-bold">
                    {discount}% OFF
                  </span>
                </>
              )}
            </div>

            <p className="text-slate-600 leading-relaxed">{product.description}</p>

            <div>
              <h3 className="font-bold text-black mb-3 uppercase text-sm">Select Color</h3>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => {
                      setSelectedColor(color);
                      setSelectedImage(color.images[0]);
                    }}
                    className={`w-12 h-12 rounded-full border-2 transition ${
                      selectedColor.name === color.name? 'border-black scale-110' : 'border-slate-300'
                    }`}
                    style={{ backgroundColor: color.hex }}
                  />
                ))}
              </div>
              <p className="text-sm text-slate-600 mt-2">{selectedColor.name}</p>
            </div>

            <div>
              <h3 className="font-bold text-black mb-3 uppercase text-sm">Select Size</h3>
              <div className="grid grid-cols-5 gap-3">
                {product.sizes.map((size) => {
                  const isOutOfStock = product.outOfStock.includes(size);
                  return (
                    <button
                      key={size}
                      disabled={isOutOfStock}
                      onClick={() => setSelectedSize(size)}
                      className={`h-14 rounded-lg border-2 font-medium transition ${
                        isOutOfStock
                     ? 'bg-slate-100 text-slate-300 cursor-not-allowed line-through border-slate-200'
                          : selectedSize === size
                     ? 'bg-black text-white border-black'
                          : 'bg-white text-black border-slate-300 hover:border-black'
                      }`}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-black mb-3 uppercase text-sm">Quantity</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center border-2 border-slate-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 text-xl hover:bg-slate-100"
                  >
                    -
                  </button>
                  <span className="px-6 py-2 font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 text-xl hover:bg-slate-100"
                  >
                    +
                  </button>
                </div>
                <span className="text-slate-500 text-sm">{product.inStock} in stock</span>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full bg-black hover:bg-slate-800 text-white font-bold py-5 rounded-full transition uppercase tracking-wide"
            >
              Add to Bag - ${(product.price * quantity).toFixed(2)}
            </button>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-200 pt-12">
          <h2 className="text-3xl font-black text-black mb-6 uppercase tracking-tight">Reviews</h2>
          <div className="space-y-6">
            {product.reviewsList?.map((review) => (
              <div key={review.id} className="border-b border-slate-200 pb-6 last:border-0">
                <div className="flex items-start gap-4">
                  <img src={review.avatar} alt={review.user} className="w-12 h-12 rounded-full" />
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-bold text-black">{review.user}</h4>
                      <div className="flex text-black">
                        {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                      </div>
                      <span className="text-sm text-slate-500">{review.date}</span>
                    </div>
                    <p className="text-slate-600">{review.comment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}