import Card from "../ProductCard/ProductCard";
import Card2 from "../ProductCard2/ProductCard2";
import { Button } from "@/components/ui/button";
export default function NewArrivals(){

    return(
        <div className="flex flex-col justify-center items-center">
        <span className="font-integral font-bold text-center text-[2rem] my-6"> TOPP SELLING</span>
        <div className="grid grid-cols-2 gap-12">
        <Card2
            name="Vertical Striped Shir"
            image="/Images/image 7 (2).svg"
            rating={5.0}
            price={212}
            orgPrice={235}
            discount="-20%"
          ></Card2>
          <Card
            name="Courage Graphic T-short"
            image="/Images/image 7 (3).svg"
            rating={4.0}
            price={145}
          ></Card>
        </div>
        <Button
          className=" font-satoshi px-14 py-4 w-[22.375rem] rounded-2xl font-medium"
          variant="outline"
        >
          VIew All
        </Button>
      </div>
    )
}