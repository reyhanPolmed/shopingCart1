import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart, decreaseCart } from "../features/cartSlice.js";
const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    
    const handleRemove = (cartItem) => {
        dispatch(removeFromCart(cartItem));
    }

    const handleDecrease = (cartItem) => {
        dispatch(decreaseCart(cartItem))
    }

    return ( 
        <div className="cart-container">
        <h2>Shopping Cart</h2>
        {cart.cartItems.length === 0 ? (
            <div className="cart-empty">
                <p>your cart curently empty</p>
                <div className="start-shopping">
                    <Link to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                        </svg>
                        <span>Start shopping</span>
                    </Link>
                </div>
            </div>
        ) : (
            <div>    
                <div className="titles">
                    <h3 className="product-title">Product</h3>
                    <h3 className="price">Price</h3>
                    <h3 className="Quantity">Quantity</h3>
                    <h3 className="total">Total</h3>
                </div>
                <div className="cart-items">
                    {cart.cartItems?.map(cartItem  => (
                        <div className="cart-item" key={cartItem.id}>
                            <div className="cart-product">
                                <img src={cartItem.image} alt={cartItem.name} />
                                <div>
                                    <h3>{cartItem.name}</h3>
                                    <p>{cartItem.desc}</p>
                                    <button onClick={() => handleRemove(cartItem)}>Remove</button>
                                </div>
                            </div>
                            <div className="cart-product-price">${cartItem.price}</div>
                            <div className="cart-product-quantity">
                                <button onClick={() => handleDecrease(cartItem)}>-</button>
                                <div className="count">{cartItem.cartQuantity}</div>
                                <button>+</button>
                            </div>
                            <div className="cart-product-total-price">
                                ${cartItem.price * cartItem.cartQuantity}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="cart-summary">
                    <button className="clear-cart" >Clear Cart</button>
                    <div className="cart-checkout">
                        <div className="subtotal">
                            <span>Subtotal</span>
                            <span className="amount">${Cart.cartTotalAmount}</span>
                        </div>
                        <p>taxes and shipping calculated at checkout</p>
                        <button>Check Out</button>
                        <div className="continue-shopping">
                          <Link to="/">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                              <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                              </svg>
                              <span>Continue shopping</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>
     );
}
 
export default Cart;