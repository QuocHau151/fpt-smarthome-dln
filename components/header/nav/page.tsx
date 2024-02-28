"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import React, {
  useState,
  ChangeEvent,
  FormEvent,
  useRef,
  useEffect,
} from "react";
import { RefObject } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useStore } from "@/store/useStore";

interface Product {
  id: number;
  name: string;
  link: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Đèn LED Downlight",
    link: "/den-thong-minh/den-led-downlight",
  },
  { id: 2, name: "Đèn LED Bulb", link: "/den-thong-minh/den-led-bulb" },
  { id: 3, name: "Đèn LED Panel", link: "/den-thong-minh/den-led-panel" },
  { id: 4, name: "Đèn LED Dây", link: "/den-thong-minh/den-led-day" },
  {
    id: 5,
    name: "Đèn LED Tracklight",
    link: "/den-thong-minh/den-led-tracklight",
  },
  { id: 6, name: "Cảm biến cửa", link: "/cam-bien/cam-bien-cua" },
  {
    id: 7,
    name: "Cảm biến chuyển dộng",
    link: "/cam-bien/cam-bien-chuyen-dong",
  },
  {
    id: 8,
    name: "Cảm biến chuyển dộng âm trần",
    link: "/cam-bien/cam-bien-chuyen-dong-am-tran",
  },
  { id: 9, name: "Cảm biến khói", link: "/cam-bien/cam-bien-khoi" },
  {
    id: 10,
    name: "Công Tắc Cảm Ứng Athena",
    link: "/cong-tac-thong-minh/cong-tac-cam-ung-athena",
  },
  {
    id: 11,
    name: "Công Tắc Cảm Ứng Hera",
    link: "/cong-tac-thong-minh/cong-tac-cam-ung-hera",
  },
  {
    id: 12,
    name: "Nút Bấm Ngữ Cảnh Không Dây",
    link: "/cong-tac-thong-minh/nut-bam-ngu-canh-khong-day",
  },
  {
    id: 13,
    name: "Động Cơ Rèm Thông Minh",
    link: "/bo-rem-cua-thong-minh/dong-co-rem-thong-minh",
  },
  {
    id: 14,
    name: "Bộ Điều Khiển Rèm Cửa",
    link: "/bo-rem-cua-thong-minh/bo-dieu-khien-rem-cua",
  },
  { id: 15, name: "Ray Rèm Điện", link: "/bo-rem-cua-thong-minh/ray-rem-dien" },
  {
    id: 16,
    name: "Công Tắc Điều Khiển Rèm Cửa",
    link: "/bo-rem-cua-thong-minh/cong-tac-dieu-khien-rem-cua",
  },
  {
    id: 17,
    name: "Ổ Cắm Thông Minh",
    link: "/phu-kien-thong-minh/o-cam-thong-minh",
  },
  {
    id: 18,
    name: "Bộ Điều Khiển Hồng Ngoại",
    link: "/phu-kien-thong-minh/bo-dieu-khien-hong-ngoai",
  },
  {
    id: 19,
    name: "Ổ Cắm Mặt Kính Âm Tường",
    link: "/phu-kien-thong-minh/o-cam-mat-kinh-am-tuong",
  },
  { id: 20, name: "USB ZigBee", link: "/phu-kien-thong-minh/usb-zigbee" },
  {
    id: 21,
    name: "Khoá Cửa Vân Tay Yale",
    link: "/khoa-cua-thong-minh/khoa-cua-van-tay-yale",
  },
  {
    id: 22,
    name: "Khoá Cửa Thẻ Từ Yale",
    link: "/khoa-cua-thong-minh/khoa-cua-the-tu-yale",
  },
  {
    id: 23,
    name: "Camera SE FPT",
    link: "/thiet-bi-an-ninh-thong-minh/camera-se-fpt",
  },
];
function useOutsideClick(
  ref: RefObject<HTMLElement>,
  callback: () => void
): void {
  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });
}

export default function Nav() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const [isSuggestionsVisible, setSuggestionsVisible] = useState(false);
  const cart = useStore((state) => state.cart);
  const removeFromCart = useStore((state) => state.removeFromCart);
  const increaseQuantity = useStore((state) => state.increaseQuantity);
  const decreaseQuantity = useStore((state) => state.decreaseQuantity);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  const wrapperRef = useRef(null);

  useOutsideClick(wrapperRef, () => setSuggestionsVisible(false));

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSuggestions(filteredProducts);
  };

  const handleSearchSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Do something with searchTerm
  };

  return (
    <div className=" max-lg:hidden   bg-black w-full h-[75px] ">
      <div className="container flex items-center h-full justify-between ">
        <Link href="/" className="p-4">
          <Image src="/assets/logofptsh.png" width={205} height={100} alt="" />
        </Link>
        <div className="flex  items-center space-x-2 ">
          <form className="flex  items-center" onSubmit={handleSearchSubmit}>
            <div ref={wrapperRef} className="relative mr-2">
              <Input
                className="w-[580px] h-[42px] z-0 text-slate-600 text-sm placeholder:italic placeholder:text-slate-400 placeholder:text-[14px] "
                type="search"
                placeholder="Tìm kiếm sản phẩm Smart Home..."
                value={searchTerm}
                onChange={handleSearchChange}
                onFocus={() => setSuggestionsVisible(true)}
              />
              {isSuggestionsVisible && searchTerm && suggestions.length > 0 && (
                <div className="flex flex-col items-start absolute border-[1px] border-black top-12 z-50 left-0 rounded-lg py-4 text-[16px] font-medium px-4  gap-4 text-black w-[580px] h-min bg-white">
                  {suggestions.map((product) => (
                    <Link href={product.link} className="" key={product.id}>
                      {product.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Button
              className=" bg-orange-600 text-btn_medium text-white w-[97px] h-[42px]"
              type="submit"
            >
              Search
            </Button>
          </form>
        </div>
        <div className="flex gap-8 items-center">
          <div>
            <Image
              src="/assets/icon/favorite.png"
              width={24}
              height={24}
              alt=""
            />
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button className="relative bg-black outline-none p-0">
                <Image
                  src="/assets/icon/cart.png"
                  width={24}
                  height={24}
                  alt=""
                />
                <div className="absolute top-0 -right-[10px] bg-orange-500 w-[15px] h-[15px] text-[10px] text-white rounded-full flex items-center justify-center">
                  {cart.length}
                </div>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="text-[20px]  text-center w-full h-min mt-12  p-2  border-y-[1px] border-black bg-orange-300">
                  Cart
                </SheetTitle>
              </SheetHeader>
              <div className="px-2">
                <div>
                  {cart.map((item) => (
                    <div key={item.id} className="flex flex-col ">
                      <div className="flex items-center justify-between p-2 border-b-[1px] w-full gap-2">
                        <div className="flex items-center gap-2">
                          <Image
                            src={item.image}
                            width={40}
                            height={40}
                            alt=""
                          />
                          <div>
                            <h5 className="text-[14px] font-semibold max-md:text-[12px]">
                              {item.name}
                            </h5>
                            <p className="text-[12px] max-md:text-[10px]">
                              {item.type} {item.color} {item.button}{" "}
                              {item.connect} {item.power} {item.type_key}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                          <p className="text-orange-500 font-semibold max-md:text-[14px]">
                            {item.price}
                          </p>
                          <div className="flex items-center gap-2 text-[12px]">
                            <button
                              className="border-[1px] border-black px-[4px] hover:bg-orange-500 rounded-sm"
                              onClick={() => decreaseQuantity(item.id)}
                            >
                              -
                            </button>
                            <p>{item.quantity}</p>
                            <button
                              className="border-[1px] border-black px-[4px]  hover:bg-orange-500 rounded-sm"
                              onClick={() => increaseQuantity(item.id)}
                            >
                              +
                            </button>
                          </div>
                          <button
                            className="text-[12px] hover:text-orange-500"
                            onClick={() => removeFromCart(item.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      <div className=""></div>
                    </div>
                  ))}
                </div>
              </div>
              <SheetFooter className="flex items-center mt-6 mr-2">
                <SheetClose asChild>
                  {/* checkout */}
                  <Button type="submit">
                    <Link className="max-md:text-[12px]" href="/checkout">
                      Checkout
                    </Link>
                  </Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
