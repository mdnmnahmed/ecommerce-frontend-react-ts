import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
const Home = lazy(() => import("./pages/home"));
const Search = lazy(() => import("./pages/search"));
const Cart = lazy(() => import("./pages/cart"));
import Loader from './components/Loader';


const App = () => {
    return (
        <>
            <Router>
                <Suspense fallback={<Loader />}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/search" element={<Search />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </Suspense>
            </Router>
        </>
    )
}

export default App;