import Image from "../Image/Image";
import SubForm from "../SubscribeForm/page";
export default function Footer() {
  return (
    <div>
      <SubForm></SubForm>
      <div className="bg-[#F0F0F0] p-4 -z-10 mt-36 pt-[140px]">
        <div className="flex flex-col gap-3 py-10 ">
          <h4 className="font-integral font-bold text-[28.85px] ">SHOP.CO</h4>
          <span className="font-satoshi font-normal text-sm text-[#00000099]">
          
            We have clothes that suits your style and which youre proud to wear.
            From women to men.
          </span>
          <div className="flex gap-2 h-7">
            <Image src="/icons/1.svg" alt=""></Image>
            <Image src="/icons/2.svg" alt=""></Image>
            <Image src="/icons/3.svg" alt=""></Image>
            <Image src="/icons/4.svg" alt=""></Image>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-y-4">
            <div>
              <h6 className="font-satoshi font-medium tracking-widest py-[18px]">
                COMPANY
              </h6>
              <ul className="font-satoshi text-sm text-[#00000099] flex flex-col gap-4  ">
                <li>About</li>
                <li>Features</li>
                <li>Works</li>
                <li>Career</li>
              </ul>
            </div>
            <div>
              <h6 className="font-satoshi font-medium tracking-widest py-[18px]">
                HELP
              </h6>
              <ul className="font-satoshi text-sm text-[#00000099] flex flex-col gap-4  ">
                <li>Customer Support</li>
                <li>Delivery Details</li>
                <li>Terms & Conditons</li>
                <li> Privacy Policy</li>
              </ul>
            </div>

            <div>
              <h6 className="font-satoshi font-medium tracking-widest py-[18px]">
                FAQ
              </h6>
              <ul className="font-satoshi text-sm text-[#00000099] flex flex-col gap-4  ">
                <li>Account</li>
                <li>Manage Deleveires</li>
                <li>Orders</li>
                <li>Payment</li>
              </ul>
            </div>
            <div>
              <h6 className="font-satoshi font-medium tracking-widest py-[18px]">
                RESOURCES
              </h6>
              <ul className="font-satoshi text-sm text-[#00000099] flex flex-col gap-4  ">
                <li>Free eBook</li>
                <li>Developments Tutorials</li>
                <li>Hoe to - Blog</li>
                <li>Youtube Playlist</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t-2 flex flex-col gap-4 py-8 my-4 items-center justify-center">
          <span className="text-center font-satoshi font-normal text-sm text-[#00000099]">
           
            Shop.co &copy; 2000-2020, All Rights Reserved
          </span>
          <div className="flex justify-center items-center h-[24.75px] w-[3.2rem]">
            <Image src="/banking/Badge.svg" alt=""></Image>
            <Image src="/banking/Badge (1).svg" alt=""></Image>
            <Image src="/banking/Badge (2).svg" alt=""></Image>
            <Image src="/banking/Badge (3).svg" alt=""></Image>
            <Image src="/banking/Badge (4).svg" alt=""></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
