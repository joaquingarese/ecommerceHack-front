import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./styles/categoryTabs.css";
import Card from "../components/Card";
import api from "../api/axios";
import { useEffect, useState } from "react";

function CategoryTabs() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    const categories = await api.getCategories();
    setCategories(categories);
  };

  const fetchData = async () => {
    const products = await api.getProducts();
    setProducts(products);
  };
  useEffect(() => {
    fetchData();
    fetchCategories();
  }, []);

  return (
    categories.length > 0 && (
      <div className="container mb-5">
        <Tabs defaultActiveKey={categories[0].name} id="uncontrolled-tab-example" className="mb-3" justify>
          {categories.map(
            (category, i) =>
              category.products.length > 0 && (
                <Tab eventKey={category.name} title={category.name} className="products" key={i}>
                  <div className="text-center row">
                    {category.products.map((product, i) => {
                      return <Card key={i} product={product} id={product.id} name={product.name} category={product.category} description={product.description} photo={product.photo} price={product.price} stock={product.stock} slug={product.slug} />;
                    })}
                  </div>
                </Tab>
              )
          )}
        </Tabs>
      </div>
    )
  );
}

export default CategoryTabs;
