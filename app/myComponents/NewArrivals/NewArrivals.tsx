import Card from "../ProductCard/ProductCard";
import Card2 from "../ProductCard2/ProductCard2";
import { Button } from "@/components/ui/button";
export default function NewArrivals(){

    return(
        <div className="flex flex-col justify-center items-center">
        <span className="font-integral font-bold text-center text-[2rem] my-6"> NEW ARRIVALS</span>
        <div className="grid grid-cols-2 gap-12">
          <Card
            name="T-shirt with Tape Details"
            image="/Images/image 7.svg"
            rating={4.5}
            price={200}
          ></Card>
          <Card2
            name="Skinny Fit Jeans"
            image="/Images/image 7 (1).svg"
            rating={4.5}
            price={240}
            orgPrice={260}
            discount="-20%"
          ></Card2>
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