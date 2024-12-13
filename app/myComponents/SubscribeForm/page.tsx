import { Button } from "@/components/ui/button";
import Image from "../Image/Image";
export default function SubForm() {
  return (
    <div className=" bg-black rounded-[1.25rem] flex flex-col px-6 py-6 gap-2 justify-center items-center absolute mx-4">
      <h6 className="font-integral font-bold text-[2rem] leading-tight text-white mb-4">
        {" "}
        STAY UPTO DATE ABOUT FOR LATEST OFFERS
      </h6>
      <div className="flex rounded-[3.875rem] bg-white justify-center items-center w-full">
        <span className="h-3 ml-3">
          <Image src="/vectors/Vector (14).svg" alt="hello"></Image>
        </span>
        <input
          type="email"
          name=""
          id=""
          height={42}
          placeholder={`Enter your email adress`}
          className="rounded-r-[3.875rem] w-full px-4 py-3 pl-[12px]"
        />
      </div>
      <Button
        variant="outline"
        className="rounded-[3.875rem] px-6 py-3 w-full font-satoshi font-medium text-base h-[42px] "
      >
        {" "}
        Subscribe to NewsLetter{" "}
      </Button>
    </div>
  );
}
