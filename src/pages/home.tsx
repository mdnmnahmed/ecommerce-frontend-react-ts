import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Home = () => {

    const addToCartHandler = () => {

    }

    return (
        <>
            <div className="home">
                <section>

                </section>

                <h1>
                    Latest Products
                    <Link to="/search" className="find-more">More</Link>
                </h1>

                <main>
                    <ProductCard
                        key={123}
                        productId="123"
                        name="Laptop"
                        price={40000}
                        stock={2}
                        image={'https://numan-dev.web.app/images/projects/edufun.png'}
                        handler={addToCartHandler}
                    />
                </main>

            </div>
        </>
    )
}

export default Home;