import Header from "../myComponents/Header/Header";
import Footer from "../myComponents/Footer/Footer";
import Image from "../myComponents/Image/Image";
import { Button } from "@/components/ui/button";
import MYcartcard from "../myComponents/myCartCard/Card";
export default function page() {
  return (
    <div className="flex flex-col justify-center overflow-x-hidden relative">
      <Header></Header>
      <div className="px-4 flex flex-col gap-2 mb-12">
        <div className="font-satoshi font-normal text-[#00000099] flex border-t-2 text-sm justify-start items-center w-full  pt-4 gap-[0.375rem]">
          <span className="flex  gap-[0.375rem]">
            <span>Home</span>{" "}
            <Image src="vectors/Vector (15).svg" alt=""></Image>
          </span>
          <span className="flex">
            <span className="text-black font-normal">Casual</span>
          </span>
        </div>
        <h3 className="font-integral font-bold text-left text-[2rem]">
          Your Cart
        </h3>
        <div className="px-4 border-2 rounded-[1.25rem]">
          <MYcartcard
            name="Gradient Grapihic T-shirt"
            image="/Images/image 8(2).svg"
            size="large"
            color="white"
            price={145}
            quantity={1}
          ></MYcartcard>
          <MYcartcard
            name="Gradient Grapihic T-shirt"
            image="/Images/image 9 (1).svg"
            size="large"
            color="white"
            price={145}
            quantity={1}
          ></MYcartcard>
          <MYcartcard
            name="Gradient Grapihic T-shirt"
            image="/Images/image 10 (1).svg"
            size="large"
            color="white"
            price={145}
            quantity={1}
          ></MYcartcard>
        </div>
        <div className="border-2 rounded-3xl p-4 flex flex-col gap-3">
          <h6 className="font-satoshi font-bold text-2xl">Order Summary</h6>
          <span className="flex w-full justify-between">
            <span className="font-satoshi font-normal text-base text-[#00000099]">
              Subtotal
            </span>{" "}
            <span className="font-satoshi font-bold text-base">$565 </span>
          </span>
          <span className="flex w-full justify-between">
            <span className="font-satoshi font-normal text-base text-[#00000099]">{`Discount (-20%)`}</span>{" "}
            <span className="font-satoshi font-bold text-base text-red-600">
              -$113
            </span>
          </span>
          <span className="flex w-full justify-between">
            <span className="font-satoshi font-normal text-base text-[#00000099]">
              Delivery Fee
            </span>{" "}
            <span className="font-satoshi font-bold text-base">$15</span>
          </span>
          <div className="w-full border-b-2"></div>
          <div className="flex w-full justify-between">
            <span className="font-satoshi font-normal text-lg text-[#00000099]">
              Total
            </span>
            <span className="font-satoshi font-bold text-lg">$467</span>
          </div>
          <div className=" flex gap-3 justify-center items-center">
            <span className="bg-[#00000011] w-[13.65rem] h-12 rounded-[3.9rem] font-satoshi flex items-center text-white iems-center px-4 gap-[0.625rem] py-3">
              <Image src="./vectors/Vector (21).svg" alt=""></Image>
              <input
                type="password"
                className="w-[100%] bg-transparent text-white"
                placeholder="Add promo code"
              />
            </span>
            <Button className="py-3 w-22  h-12 px-4 font-satoshi font-medium rounded-[3.8rem] text-white">
              Apply
            </Button>
          </div>
          <Button className="py-3 px-14 font-satoshi font-medium rounded-[3.8rem] text-white flex items-center gap-3">
            
            Go out to Check
            <Image
              src="/vectors/Vector (22).svg"
      
              alt=""
            ></Image>
          </Button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
