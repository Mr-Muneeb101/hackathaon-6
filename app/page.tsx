// import Image from "next/image";
import Image from "./myComponents/Image/Image";
import { Button } from "@/components/ui/button";
import Head from "./myComponents/Header/Header";
import Banner from "./myComponents/BrandsLogo/Brandlogo";
import NewArrivals from "./myComponents/NewArrivals/NewArrivals";
import TopSelling from "./myComponents/TopSelling/TopSelling";
import Cart from "./myComponents/FashoinCarts/FashoinCart";
import Review from "./myComponents/ReviewBox/ReviewBox";
import Footer from "./myComponents/Footer/Footer";
export default function Home() {
  return (
    <div className=" flex flex-col justify-center overflow-x-hidden relative">
      <Head></Head>
      <div className="bg-[#F2F0F1]">
        <div className="flex flex-col items-center gap-5 pt-6 px-4">
          <div className="font-integral text-4xl text-left">
            FIND CLOTHS THAT MATCHES YOUR STYLE
          </div>
          <p className="font-satoshi text-sm text-gray-400">
         
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Button className=" font-satoshi px-14 py-4 w-[22.375rem] rounded-2xl font-medium">
            Shop Now
          </Button>
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="flex gap-6 justify-between w-[17.375rem]">
              <div className="flex justify-start flex-col">
                <span className="font-satoshi font-bold text-[1.5rem]">
                  200+
                </span>
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
        </div>
      </div>
      <Image src="/Images/Rectangle 2.svg" alt="" className="w-screen"></Image>
      <div className="absolute top-[40rem] left-[1.688rem]">
        <Image src="/vectors/Vector (5).svg" alt=""></Image>
      </div>
      <div className="absolute top-[33.938rem] left-[18.313rem]">
        <Image src="/vectors/Vector (6).svg" alt=""></Image>
      </div>
      <Banner></Banner>

      <NewArrivals></NewArrivals>
      <TopSelling></TopSelling>
      <div className="bg-[#F0F0F0] flex flex-col justify-center items-center p-8 gap-4 mx-4 rounded-[1.25rem] mt-20">
        <span className="font-integral font-bold text-center p-2 text-[2rem] leading-tight ">
          BROWSE BY DRESS STYLE
        </span>
        <Cart image="/Images/image 11.svg" nameofimage="Casual"></Cart>
        <Cart image="/Images/image 13.svg" nameofimage="Formal"></Cart>
        <Cart image="/Images/image 12.svg" nameofimage="Party"></Cart>
        <Cart
          image="/Images/image 14.svg"
          nameofimage="Gym"
        ></Cart>
      </div>

      <div className="p-4 flex flex-col gap-12 my-12 z-10">
        <div className=" flex items-end justify-center">
          <h6 className="font-integral font-bold text-[2rem] leading-tight">
            OUR HAPPY COUSTOMERS
          </h6>
          <div className="flex mb-1">
            <Image
              src="/vectors/Vector (12).svg"
              alt="arrow"
              height={24}
              className="rotate-180 mr-4"
            ></Image>
            <Image
              src="/vectors/Vector (12).svg"
              alt="arrow"
              height={24}
              className="mr-12"
            ></Image>
          </div>
        </div>
        <Review
          username="Sarah M."
          rating={5}
          feedback="I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
        ></Review>
      </div>
      <Footer></Footer>
    </div>
  );
}
