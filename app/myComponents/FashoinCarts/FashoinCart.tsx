import Image from "../Image/Image";
interface FashionCards {
  nameofimage: string; // Name of the image
  image: string; // Image source
}

const Cart: React.FC<FashionCards> = ({ nameofimage, image }) => {
  return (
    <div className="h-[190px] w-[310px] rounded-[1.25rem] overflow-hidden bg-white relative">
      <span className="absolute font-satoshi mt-4 ml-6 font-bold text-2xl text-black z-10">
        {`${nameofimage}`}
      </span>
      <Image
        src={`${image}`}
        alt={`${nameofimage}`}
        className="object-cover h-full w-full"
      ></Image>
    </div>
  );
};

export default Cart;
