
import Header from "../Header/Header";
import Image from "../Image/Image";
import { Button } from "@/components/ui/button";
import Review from "../ReviewBox/ReviewBox";
import ProductCard from "../ProductCard/ProductCard";
import ProductCard2 from "../ProductCard2/ProductCard2";
import Footer from "../Footer/Footer";
interface Product {
  name: string;
  rating: number;
  Price: number;
  OrgPrice?: number;
  disocount?: string;
  discription: string;
  image: string[];
}
const Star = (
  <svg
    width="19"
    height="18"
    viewBox="0 0 19 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.39536 0.166138L12.0397 5.86028L18.2724 6.61566L13.6741 10.8902L14.8816 17.0512L9.39536 13.9989L3.90907 17.0512L5.11664 10.8902L0.518353 6.61566L6.75096 5.86028L9.39536 0.166138Z"
      fill="#FFC633"
    />
  </svg>
);
const halfStar = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="9"
    height="18"
    viewBox="0 0 9 18"
    fill="none"
  >
    <path
      d="M3.51376 17.0512L9.00005 13.9989V0.166138L6.35566 5.86028L0.123047 6.61566L4.72133 10.8902L3.51376 17.0512Z"
      fill="#FFC633"
    />
  </svg>
);
const pages: React.FC<Product> = ({
  name,
  rating,
  Price,
  OrgPrice,
  disocount,
  discription,
  image,
}) => {
  return (
    <div className="flex flex-col justify-center overflow-x-hidden relative">
      <Header></Header>
      <div className="px-6 flex flex-col  justify-center items-center gap-4">
        <div className="font-satoshi font-normal text-[#00000099] flex border-t-2 gap-[0.375rem] text-sm justify-start items-center w-full p-2">
          <span className="flex  gap-[0.375rem]">
            <span>Home</span>{" "}
            <Image src="vectors/Vector (15).svg" alt=""></Image>
          </span>
          <span className="flex  gap-[0.375rem]">
            <span>Shop</span>{" "}
            <Image src="vectors/Vector (15).svg" alt=""></Image>
          </span>
          <span className="flex  gap-[0.375rem]">
            <span>Menu</span>{" "}
            <Image src="vectors/Vector (15).svg" alt=""></Image>
          </span>
          <span className="flex  gap-[0.375rem]">
            <span>Menu</span>{" "}
            <Image src="vectors/Vector (15).svg" alt=""></Image>
          </span>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <Image src={image[0]} alt=""></Image>
          <div className="flex gap-4">
            <Image src={image[1]} alt=""></Image>
            <Image src={image[2]} alt=""></Image>
            <Image src={image[3]} alt=""></Image>
          </div>
        </div>
        <div className="w-full flex flex-col gap-1 pr-32">
          <h3 className="font-integral font-bold text-2xl">{name}</h3>

          <div className="flex items-center mt-2 space-x-2 text-sm">
            {Array.from({ length: rating }, (_, i) => (
              <span key={i}>{Star}</span>
            ))}
            {halfStar}
            <span className="ml-5 text-gray-600 font-satoshi font-normal">
              ({rating}/<span className="text-gray-400">5</span>)
            </span>
          </div>
          <div className="flex gap-2">
            <span className="font-satoshi font-bold text-2xl">
              {"$" + Price}
            </span>
            <span className="font-satoshi font-bold text-2xl text-gray-400 line-through">
              {"$" + OrgPrice}
            </span>
            <span className="bg-[#ff33332b] text-[#FF3333] text-[14px] px-[14px] py-[6px] rounded-xl font-satoshi font-medium">
              {disocount}
            </span>
          </div>
        </div>
        <p className="font-satoshi font-normal text-sm  text-[#00000099]">
          {discription}
        </p>
        <div className="w-full">
          <div className="flex flex-col py-6 gap-4 border-y-2 w-full">
            <span className="font-satoshi font-normal text-sm text-[#00000099]">
              Select Colors
            </span>
            <div className=" flex gap-[0.769rem]">
              <div className="rounded-full  h-[2.463rem] w-[2.463rem] bg-[#4F4631] flex items-center justify-center">
                <Image src="/vectors/Vector (16).svg" alt=""></Image>
              </div>
              <div className="rounded-full  h-[2.463rem] w-[2.463rem] bg-[#314F4A]"></div>
              <div className="rounded-full  h-[2.463rem] w-[2.463rem] bg-[#31344F]"></div>
            </div>
          </div>
          <div className="flex flex-col py-4 gap-4 border-b-2 w-full">
            <span className="font-satoshi font-normal text-sm text-[#00000099]">
              Choose Size
            </span>
            <div className="font-satoshi font-normal text-[#00000099] flex gap-2">
              <Button
                className="rounded-[3.875rem] text-[#00000099] py-[0.625rem] px-5"
                variant="secondary"
              >
                Small
              </Button>
              <Button
                className="rounded-[3.875rem] text-[#00000099] py-[0.625rem] px-5"
                variant="secondary"
              >
                Medium
              </Button>
              <Button
                className="rounded-[3.875rem] py-[0.625rem] px-5"
                variant="default"
              >
                Large
              </Button>
              <Button
                className="rounded-[3.875rem] text-[#00000099]  py-[0.625rem] px-5"
                variant="secondary"
              >
                X-large
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col py-2 gap-4  w-full">
          <div className="font-satoshi font-normal text-[#00000099] flex gap-2">
            <Button
              className="rounded-[3.875rem] text-black py-4 px-5 flex gap-4 w-[6.875rem]"
              variant="outline"
            >
              <Image src="/vectors/Vector (18).svg" alt=""></Image>
              <span>1</span>
              <Image src="/vectors/Vector (17).svg" alt=""></Image>
            </Button>
            <Button
              className="rounded-[3.875rem] py-4 px-[3.375rem] w-[14.75rem]"
              variant="default"
            >
              Add to Cart
            </Button>
          </div>
        </div>
        <div className="  border-b-2  flex w-full  justify-between items-center">
          <Button
            variant="ghost"
            className="py-2 font-satoshi font-normal text-base text-[#00000099]"
          >
            Product Details
          </Button>
          <Button
            variant="ghost"
            className="text-black border-b-black rounded-none border-b-[0.15rem] font-medium text-base"
          >
            Ratings & Reviews
          </Button>
          <Button
            variant="ghost"
            className="py-2 font-satoshi font-normal text-base text-[#00000099]"
          >
            FAQs
          </Button>
        </div>
        <div className="flex w-full justify-between ">
          <span className="flex items-center gap-2">
            {" "}
            <h6 className="font-satoshi font-bold text-xl">All Reveiews</h6>
            <span className="fontt-satoshi font-normal text-[#00000099] text-sm">
              {"(451)"}
            </span>
          </span>
          <span className="flex gap-2 ">
            <div className="h-10 w-10 rounded-full  bg-[#F0F0F0] flex items-center justify-center">
              <Image src="vectors/Vector (19).svg" alt=""></Image>
            </div>
            <Button className="font-satoshi font-medium text-xs rounded-[3.875rem] py-3 px-4">
              Write a Reveiew{" "}
            </Button>
          </span>
        </div>
        <Review
          rating={4}
          username="Alex."
          feedback="The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."
          date="August 15 2023"
        ></Review>
        <Review
          rating={3}
          username="Samantha D."
          feedback="I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."
          date="August 16 2023"
        ></Review>
        <Review
          rating={3}
          username="Ethan R."
          feedback="This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."
          date="August 14 2023"
        ></Review>
        <Button
          variant="outline"
          className="rounded-[3.875rem] py-[0.875rem] px-9 text-black font-satoshi font-medium text-sm h-12 w-[12.25rem]"
        >
          Load More Reviews
        </Button>
        <h3 className="font-integral font-bold text-4xl text-center leading-tight px-8">
          You might also like
        </h3>
        <div className=" flex ml-14 gap-2">
          <ProductCard2 name="Polo with Contrast Trims" rating={4} price={212} orgPrice={242} discount="-20%" image="/Images/image 8.svg"></ProductCard2>
          <ProductCard name="Gradient Graphic T-Shirt" rating={3} price={145} image="/Images/image 8 (1).svg"></ProductCard>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default pages;
