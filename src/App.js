import { useState, useEffect } from "react";
import './Style/App.css';
import { Toast } from "./Components/Toast";
import { ProductList } from "./Components/ProductList";
import { Cart } from "./Components/Cart";

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch ("https://hamburgueria-kenzie-json-serve.herokuapp.com/products");
      const data = await response.json();

      setProducts(data);
    }
    fetchData();
  }, []);

  const [userInsert, setUserInsert] = useState("");
  const [strainedProducts, setStrainedProducts] = useState([]);
  const [presentSale, setPresentSale] = useState([]);
  const [theTotal, setTheTotal] = useState(0);

  const showProducts = () => {
    const filteredUserInsert = userInsert.toLowerCase();
    setStrainedProducts (
      products.filter ((item) => item.category.toLowerCase().includes (filteredUserInsert)||
      item.name.toLowerCase().includes(filteredUserInsert)
      ));
  };
  
  const handleClick = (productId) => {

    const newProduct = products.find((item) => item.id === productId);


    if(!presentSale.some ((item) => item.id === newProduct.id)) { 
      setPresentSale ([...presentSale, newProduct])
      Toast("Produto adicionado com sucesso!")
    } else {
      setPresentSale ([...presentSale, newProduct])
      Toast("Você já adicionou esse produto no carrinho!")
    }
  }

  const totalSale = () => {
    const sale = presentSale.reduce ((acc,item) => acc + parseFloat(item.price), 0);
    setTheTotal (sale);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="container headerContainer">
          <h1 className="Apph1">
            <img src="logo.png"></img>
          </h1>

          <nav>
            <div className="form-inline">
              <input
                type="text"
                placeholder="Pesquisar"
                value={userInsert}
                onChange={(event) => setUserInsert(event.target.value)}
              />
              <button
                className="btn btn-primary btnPesquisar"
                onClick={() => showProducts()}
              >
                Pesquisar
              </button>
            </div>
          </nav>
        </div>
      </header>
      <main className="container containerProductsCart">
        <ProductList
          products={products}
          strainedProducts={strainedProducts}
          userInsert={userInsert}
          handleClick={handleClick}
        />
        <Cart
          presentSale={presentSale}
          theTotal={theTotal}
          setPresentSale={setPresentSale}
          totalSale={totalSale}
        />

        <div id="snackbar"></div>
      </main>
    </div>

  );
}

export default App;