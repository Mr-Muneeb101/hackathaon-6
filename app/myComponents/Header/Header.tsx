import Image from "../Image/Image";
export default function Header() {
  return (
    <div>
      <div className="flex items items-center  justify-between p-6">
        <div className="flex items-center justify-center gap-4">
          <div className="mt-1">
            <Image
              src="/vectors/Vector.svg"
              alt="image"
              className="w-[1.5rem]"
            ></Image>
          </div>
          <div className="font-integral text-[1.575rem] ">SHOP.CO</div>
        </div>
        <div className="flex gap-3 items-center">
          <Image
            src="/vectors/Vector (1).svg"
            alt=""
            className="w-[1.5rem]"
          ></Image>
          <Image
            src="/vectors/Vector (2).svg"
            alt=""
            className="w-[1.5rem]"
          ></Image>
          <Image
            src="/vectors/Vector (3).svg"
            alt=""
            className="w-[1.5rem]"
          ></Image>
        </div>
      </div>
    </div>
  );
}
