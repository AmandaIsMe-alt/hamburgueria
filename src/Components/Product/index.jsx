import "./style.css";

export const Product = ({ handleClick, product,}) => {

    return (
    <li className="product">
        <figure>
            <img className="img-Product" src={product.img} alt={product.name}></img>
            <figcaption>
                <h3 id="name" className="heading3">{product.name}</h3>
                <p id="category" className="caption">{product.category}</p>
                <strong id="price" className="body600 success">R$ {product.price.toFixed(2)}</strong>
                <button className="btn btn-primary btnAdd" onClick= {() => handleClick (product.id)}> Adicionar</button>
            </figcaption>
        </figure>
    </li>
    );
};