import { FaPlus } from "react-icons/fa";

type ProductCardProps = {
    productId: string,
    name: string,
    image: string,
    price: number,
    stock: number,
    handler: () => void;
}

const ProductCard = ({ productId, name, image, price, stock, handler }: ProductCardProps) => {
    return (
        <>
            <div className="product-card">
                <img src={image} alt={name} />
                <p>{name}</p>
                <span> ₹ {price}</span>
                <div>
                    <button onClick={() => handler()}>
                        <FaPlus />
                    </button>
                </div>
            </div>
        </>
    )
}

export default ProductCard;