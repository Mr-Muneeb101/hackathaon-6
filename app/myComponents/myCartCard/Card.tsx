import Image from "../Image/Image"
import { Button } from "@/components/ui/button";

interface MyCart {
  name: string;
  image: string;
  size: string;
  color: string;
  price: number;
  quantity: number;
}

const MYcartcard: React.FC<MyCart> = ({
  name,
  image,
  size,
  color,
  price,
  quantity,
  
}) => {
  return (
    <div className="my-4 flex gap-4 items-center h-[99px]">
      <div className="object-cover aspect-square rounded-[0.541rem] h-[99px] w-[99px] overflow-hidden flex justify-center items-center">
        <Image src={`${image}`} alt={`${name}`} className="rounded-[0.541rem]" />
      </div>
      <div className="w-full flex flex-col">
        <div className="flex justify-between">
          <h6 className="font-satoshi font-bold text-base">{`${name}`}</h6>
          <Image src="/Icons/Vector (20).svg" alt="Remove item" />
        </div>
        <div className="font-satoshi font-normal text-xs flex">
          <span>Size:</span>
          <span className="text-[#00000099]">{`${size}`}</span>
        </div>
        <div className="font-satoshi font-normal text-xs flex">
          <span>Color:</span>
          <span className="text-[#00000099]">{`${color}`}</span>
        </div>
        <div className="w-full flex justify-between">
          <span className="font-satoshi font-bold text-xl">${`${price}`}</span>
          <Button
            className="rounded-[3.875rem] text-black py-4 px-5 flex gap-4 bg-[#F0F0F0] h-[31px] w-[105px]"
            variant="outline"
          >
            <Image src="/vectors/Vector (18).svg" alt="Decrease quantity" />
            <span>{`${quantity}`}</span>
            <Image src="/vectors/Vector (17).svg" alt="Increase quantity" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MYcartcard;

