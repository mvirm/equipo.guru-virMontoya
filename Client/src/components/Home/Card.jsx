const Card = ({ id, title, price, image }) => {
    return (
      <div className="flex flex-col items-center my-2 mx-auto p-4 bg-white rounded-lg w-[374px] h-auto md:w-72">
        <img
          src={image}
          alt={id}
          className="w-16 h-16 object-contain mb-4 md:w-32 md:h-32"
        />
        <h2 className="font-medium font-Inter text-sm  text-center mb-2">
          {title}
        </h2>
        <h6 className="text-customGray font-Inter text-xs  text-center">
          USD {price}
        </h6>
      </div>
    );
  };
  
  export default Card;
  