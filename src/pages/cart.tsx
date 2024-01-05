import { useEffect, useState } from "react";
import { VscError } from 'react-icons/vsc';
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const cartItems = [
    {
        productId: "123",
        name: "Laptop",
        price: 40000,
        quantity: 2,
        stock: 2,
        image: 'https://numan-dev.web.app/images/projects/edufun.png'
    }
];
const subTotal = 4000;
const tax = Math.round(subTotal * 0.18);
const shippingCharges = 200;
const discount = 450;
const total = subTotal + tax + shippingCharges;

const Cart = () => {

    const [couponCode, setCouponCode] = useState<string>("");
    const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (Math.random() > 0.5) {
                setIsValidCouponCode(true);
            } else {
                setIsValidCouponCode(false);
            }
        }, 1000);
        return () => {
            clearTimeout(timeoutId);
            setIsValidCouponCode(false);
        }
    }, [couponCode])


    return (
        <div className="cart">
            <main>
                {cartItems.length > 0 ? cartItems.map((item, index) => (
                    <CartItem
                        key={index}
                        cartItem={item}
                    />
                )) : (
                    <h1>No Items added</h1>
                )}
            </main>

            <aside>
                <p>Subtotal: ₹{subTotal}</p>
                <p>Shipping Charges: ₹{shippingCharges}</p>
                <p>Tax: ₹{tax}</p>
                <p>Discount: <em className="">₹{discount}</em></p>
                <p><b>Total: ₹{total}</b></p>
                <input type="text"
                    placeholder="coupon code"
                    value={couponCode}
                    onChange={(event) => setCouponCode(event.target.value)}
                />

                {
                    couponCode && (
                        isValidCouponCode ? (
                            <span className="green"> ₹{discount} off using the <code>{couponCode}</code> </span>
                        ) : (
                            <span className="red">Invalid Coupon code <VscError /> </span>
                        )
                    )
                }

                {cartItems.length > 0 && (
                    <Link to={'shipping'}>Checkout</Link>
                )}
            </aside>
        </div>
    )
}

export default Cart;