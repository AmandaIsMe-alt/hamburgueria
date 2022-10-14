import "./style.css";
import { Product } from "../Product"

export const ProductList  = ({ products, strainedProducts,userInsert, handleClick }) =>{
    return (
        <>
        {userInsert.length > 0 ? (
            <>
                {strainedProducts.length > 0 ? (
                    <section className="productsSection">
                        <h2 className="heading1">
                            Resultados para: <span className="grey">{userInsert}</span>
                        </h2>
                        <ul className="productsContainer">
                            {strainedProducts.map((item,index) => (
                                <Product handleClick = {handleClick} product = {item} key = {index} />
                            ))}
                        </ul>
                    </section>
                ) : (
                    <section className="productsSection">
                        <h2 className="heading1">
                            Resultados não encontrados para:
                            <span className="negative"> {userInsert}</span>
                        </h2>
                    </section>
                )}
            </>
        ) : (
            <section className="productsSection">
                <>
                    <ul className="productsContainer">
                        {products.map((item, index) => (
                            <Product handleClick={handleClick} product={item} key={index} />
                        ))}
                    </ul>
                </>
            </section>
        )}
        </>
    );
};
