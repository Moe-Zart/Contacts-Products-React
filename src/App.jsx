import "./App.css";
import ContactsCard from "./components/ContactsCard";
import Products from "./components/Products";
import ProductData from "./components/ProductData";

function App() {
  const productComponents = ProductData.map((product) => (
    <Products
      key={product.id}
      productName={product.name}
      productPrice={product.price}
      productDescription={product.description}
    />
  ));
  return (
    <div className="ContactsList">
      <ContactsCard
        name="Coco Zreika"
        phone="+61 483 847 499"
        imgURL="https://media.istockphoto.com/photos/domestic-blue-point-ragdoll-cat-portrait-picture-id139904084"
        email="cocozreika@moew.com"
      />
      <ContactsCard
        name="Rando cat"
        phone="+61 383 938 388"
        imgURL="https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg"
        email="randocat@moew.com"
      />
      <ContactsCard
        name="street cat"
        phone="+61 438 833 923"
        imgURL="https://cdn.britannica.com/91/181391-050-1DA18304/cat-toes-paw-number-paws-tiger-tabby.jpg?q=60"
        email="streetcat@moew.com"
      />
      <ContactsCard
        name="mask cat"
        phone="+61 392 013 392"
        imgURL="https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
        email="maskcat@moew.com"
      />
      <div className="products-list">{productComponents}</div>
    </div>
  );
}

export default App;
