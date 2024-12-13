import { Button } from "@/components/ui/button";
import Image from "../Image/Image";
export default function Section1() {
  return (
    <div className="bg-[#F2F0F1]">
      <div className="flex flex-col items-center gap-5 p-8">
        <div className="font-integral text-4xl text-left">
          FIND CLOTHS THAT MATCHES YOUR STYLE
        </div>
        <p className="font-satoshi text-sm text-gray-400">
          {" "}
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <Button className=" font-satoshi px-14 py-4 w-[22.375rem] rounded-2xl font-medium">
          Shop Now{" "}
        </Button>
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="flex gap-6 justify-between w-[17.375rem]">
            <div className="flex justify-start flex-col">
              <span className="font-satoshi font-bold text-[1.5rem]">200+</span>
              <span className="font-satoshi font-normal text-[0.75rem] text-[#00000099]">
                International Brands
              </span>
            </div>
            <div className="border-r-2 border-[#0000001A]"></div>
            <div className="flex justify-start flex-col">
              <span className="font-satoshi font-bold text-[1.5rem]">
                2,000+
              </span>
              <span className="font-satoshi font-normal text-[0.75rem] text-[#00000099]">
                High-Quality Products
              </span>
            </div>
          </div>
          <div className="flex justify-start flex-col">
            <span className="font-satoshi font-bold text-[1.5rem]">
              30,000+
            </span>
            <span className="font-satoshi font-normal text-[0.75rem] text-[#00000099]">
              Happy Coustomers
            </span>
          </div>
        </div>

        <Image src="/Images/Rectangle 2.svg" alt=""></Image>
        <div className="absolute top-[40rem] left-[1.688rem]">
            <Image src="/vectors/Vector (5).svg" alt=''></Image>
        </div>
        <div className="absolute top-[33.938rem] left-[18.313rem]">
            <Image src="/vectors/Vector (6).svg" alt=''></Image>
        </div>
      </div>
    </div>
  );
}
