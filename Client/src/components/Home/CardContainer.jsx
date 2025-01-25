import { useSelector } from "react-redux";
import Card from "./Card";

const CardContainer = () => {
  const allProducts = useSelector((state) => state.products);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 lg:grid-cols-5 mx-auto lg:mx-2 lg:mt-4 lg: gap-4">
      {allProducts.map((product, index) => (
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
