import "./style.css";
import { Toast } from "../Toast";

export const Cart = ({presentSale, theTotal, setPresentSale, totalSale,}) => {
  totalSale();


  const Remover = () => {
    setPresentSale([]);
    Toast("Todos os produtos foram removidos!")
  };

  const removerProduto = (stuff) => {
    setPresentSale(presentSale.filter((item, index) => index !== stuff));
    Toast("Produto removido com sucesso!")
  };

  return (
    <section className="sectionCart">

      <h3 className="heading3 headingCart">Carrinho de compras</h3>
      <main className="contentCart">
        <>
          {presentSale.length > 0 ? (
            <>
              <ul className="ulCart">
                {presentSale.map((product, index) => (
                  <li className="liCart productCart" key={index}>
                      <figure>
                        <picture>
                          <img
                            className="imgCart"
                            src={product.img}
                            alt={product.name}
                          ></img>
                        </picture>

                        <figcaption>
                          <div className="productCartContent">
                            <h4 className="heading4">{product.name}</h4>
                            <p className="caption">{product.category}</p>
                          </div>

                          <button
                            className="btnRemover caption"
                            onClick={() => removerProduto(index)}>Remover</button>
                        </figcaption>

                      </figure>
                  </li>
                ))}
              </ul>

              <hr></hr>

              <div className="footerCart">
                <p className="headline black bold Total">Total</p>
                <p className="body600 PrecoCart">R$ {theTotal.toFixed(2)}</p>
              </div>
              <button className="btn btn-grey btn-large w-100 btnRemoverTudo" onClick={() => Remover()}>Remover Produtos</button>
            </>
          ) : (
            <div className="text-center">
              <h3 className="heading3">Sua sacola está vazia</h3>
              <p className="body">Adicione itens</p>
            </div>
          )}
        </>
      </main>
    </section>
  );
};
