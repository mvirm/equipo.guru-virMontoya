import { useSelector } from "react-redux";
import Card from "./Card";

const CardContainer = () => {
  const allProducts = useSelector((state) => state.products);
  console.log('productos', allProducts);
  

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 lg:grid-cols-5 mx-auto lg:mx-2 lg:mt-4 lg: gap-4">
      {!allProducts.length ? <h1 className="w-screen h-screen pt-72 md:pt-32 text-2xl  md:text-5xl font-bold font-Inter text-customGray ">WE'RE SORRY! <br/>THERE ARE NO PRODUCTS TO SHOW </h1> : allProducts.map((product, index) => (
        <Card
          key={index}
          id={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default CardContainer;
