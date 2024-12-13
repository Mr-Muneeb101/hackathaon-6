import Header from "../myComponents/Header/Header";
import ProductCard from "../myComponents/ProductCard/ProductCard";
import ProductCard2 from "../myComponents/ProductCard2/ProductCard2";
import Image from "../myComponents/Image/Image";
import { Button } from "@/components/ui/button";
import Footer from "../myComponents/Footer/Footer";
export default function Page() {
  return (
    <div className="flex flex-col justify-center overflow-x-hidden relative">
      <Header></Header>
      <div className="px-4 flex flex-col">
        <div className="font-satoshi font-normal text-[#00000099] flex border-t-2 text-sm justify-start items-center w-full py-4 gap-[0.375rem]">
          <span className="flex  gap-[0.375rem]">
            <span>Home</span>{" "}
            <Image src="vectors/Vector (15).svg" alt=""></Image>
          </span>
          <span className="flex  gap-[0.375rem]">
            <span className="text-black font-normal">Casual</span>
          </span>
        </div>
        <div className="flex justify-between">
          <span className="flex gap-2 items-center">
            {" "}
            <h6 className="font-satoshi font-bold text-2xl  ">Casual</h6>{" "}
            <span className="font-satoshi font-normal text-sm text-[#00000099]">
              Showing 1-10 of 100 Products
            </span>
          </span>
          <div className="h-10 w-10 rounded-full  bg-[#F0F0F0] flex items-center justify-center">
            <Image src="vectors/Vector (19).svg" alt=""></Image>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-3 gap-4 my-4 py-4 border-b-2">
          <ProductCard2
            name="Gradient Graphic T..."
            rating={3.5}
            price={145}
            orgPrice={242}
            discount="-20%"
            image="/Images/image 8(2).svg"
          >
          </ProductCard2>
          <ProductCard2
            name="Polowith Tipping De.."
            rating={4.5}
            price={180}
            orgPrice={242}
            discount="-20%"
            image="/Images/image 9.svg"
          >
          </ProductCard2>
          <ProductCard2
            name="Black Striped T-shirt"
            rating={4.0}
            price={120}
            orgPrice={150}
            discount="-30%"
            image="/Images/image 10.svg"
          >
          </ProductCard2>
          <ProductCard2
            name="Skiny Fit Jeans"
            rating={3.5}
            price={240}
            orgPrice={260}
            discount="-20%"
            image="/Images/image 10 (1).svg"
          >
          </ProductCard2>
          <ProductCard
            name="Chercked Shirt"
            rating={4.5}
            price={180}
            image="/Images/image 9 (1).svg"
          >
          </ProductCard>
          <ProductCard2
            name="Sleeve Striped T-shirt."
            rating={4.5}
            price={130}
            orgPrice={160}
            discount="-30%"
            image="/Images/image 11 (2).svg"
          >
          </ProductCard2>
        </div>
        <div className="flex gap-2 mb-12">
            <Button variant="outline" className=" py-2 px-[0.875rem] font-satoshi font-medium text-sm border-[1px] shadow-none"><Image src="/icons/Icon.svg" alt="" ></Image>Previous</Button>
            <Button variant="link" className=" py-2 px-[0.875rem] rounded-[0.5rem] font-satoshi text-sm bg-[#0000000F] ">1</Button>
            <Button variant="ghost" className=" py-2 px-[0.875rem] rounded-[0.5rem] text-[#00000080]">2</Button>
            <Button variant="ghost" className=" py-2 px-[0.875rem] rounded-[0.5rem] #00000080">...</Button>
            <Button variant="ghost" className=" py-2 px-[0.875rem] rounded-[0.5rem] text-[#00000080]">10</Button>
            <Button variant="outline" className=" py-2 px-[0.875rem] font-satoshi font-medium text-sm border-[1px] shadow-none"><span>Next</span> <Image src="/icons/Icon.svg" className="rotate-180" alt="" ></Image></Button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
