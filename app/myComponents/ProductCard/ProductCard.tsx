import Image from "../Image/Image";

const Star = (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.64488 0.279785L9.83595 4.99779L15.0001 5.62367L11.1901 9.16544L12.1907 14.2703L7.64488 11.7412L3.0991 14.2703L4.09966 9.16544L0.289649 5.62367L5.45381 4.99779L7.64488 0.279785Z"
      fill="#FFC633"
    />
  </svg>
);
const halfStar = (
  <svg
    width="9"
    height="15"
    viewBox="0 0 9 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.54297 14.2703L8.08875 11.7412V0.279785L5.89768 4.99779L0.733521 5.62367L4.54353 9.16544L3.54297 14.2703Z"
      fill="#FFC633"
    />
  </svg>
);
interface ProductCardProps {
  name: string;
  image: string;
  rating: number;
  price: number;
}
const ProductCard: React.FC<ProductCardProps> = ({
  name,
  image,
  rating,
  price,
}) => {
  return (
    <div className=" rounded-lg  flex flex-col">
      <div className=" rounded-[13.42px] h-[200px] w-[200px] overflow-hidden">
        <Image
          src={image}
          alt={name}
          // width={200}
          // height={200}
          className="rounded-[13.42px  object-fit: cover aspect-[3/4]"
        />
      </div>
      <span className="font-satoshi font-bold mt-2 text-base w-full">
        {name}
      </span>
      <div className="flex items-center mt-2 space-x-1 text-xs">
        {Array.from({ length: rating }, (_, i) => (
          <span key={i}>{Star}</span>
        ))}
        {halfStar}
        <span className="ml-2 text-gray-600 font-satoshi font-normal">
          ({rating}/<span className="text-gray-400">5</span>)
        </span>
      </div>
      <span className="font-satoshi font-bold text-xl">{"$" + price}</span>
    </div>
  );
};
export default ProductCard;
