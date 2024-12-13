import Image from "../Image/Image";
export default function Brand() {
  return (
    <div className="h-[9.125rem] w-screen bg-black flex flex-col items-center justify-center  gap-4">
      <div className=" flex gap-10 items-center">
        <Image src="/vectors/Vector (7).svg" alt=""></Image>
        <Image src="/vectors/Vector (8).svg" alt=""></Image>
        <Image src="/vectors/Vector (9).svg" alt=""></Image>
      </div>
      <div className="flex gap-8 justify-center items-center">
        <Image src="/vectors/Vector (10).svg" alt=""></Image>
        <Image src="/vectors/Vector (11).svg" alt=""></Image>
      </div>
    </div>
  );
}
