"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";

export default function Page() {
  return (
    <div>
      <div>
        <div className="bg-[url('/assets/images/product/thumnail/1668566931-cover-page-khoa-cua.jpg')] w-full h-[500px] bg-cover bg-no-repeat bg-center"></div>
      </div>
      <div className="container">
        <div className="text-center flex flex-col py-[100px]">
          <h4 className="text-h5 text-gray-400 font-semibold">
            Thiết bị FPT Smart Home
          </h4>
          <h2 className=" text-[48px] text-slate-800 font-semibold">
            Các thiết bị Cửa khoá thông minh
          </h2>
        </div>
        <div className="flex items-center justify-center mb-10 gap-6">
          <div className="flex flex-col items-center w-[230px] h-[355px] rounded-2xl bg-slate-100 pt-10 gap-4 px-4">
            <Image
              src="/assets/images/product/1668568426-3.YDM7116A_Black_Front.png"
              width={170}
              height={100}
              alt=""
            />
            <h3 className="text-center font-semibold">Khoá Cửa Vân Tay Yale</h3>
            <Button className="w-[129px] h-[28px] border-[1px] border-black rounded-lg bg-slate-100 text-black hover:text-white hover:bg-orange-500 text-[13px]">
              <Link href="/khoa-cua-thong-minh/khoa-cua-van-tay-yale">
                Xem thêm
              </Link>
            </Button>
          </div>
          <div className="flex flex-col items-center w-[230px] h-[355px] rounded-2xl bg-slate-100 pt-10 gap-4 px-4">
            <Image
              src="/assets/images/product/1668569197-7.-YDM3109-SILVER-DHZY0110.png"
              width={170}
              height={100}
              alt=""
            />
            <h3 className="text-center font-semibold">Khoá Cửa Thẻ Từ Yale</h3>
            <Button className="w-[129px] h-[28px] border-[1px] border-black rounded-lg bg-slate-100 text-black hover:text-white hover:bg-orange-500 text-[13px]">
              <Link href="/khoa-cua-thong-minh/khoa-cua-the-tu-yale">
                Xem thêm
              </Link>
            </Button>
          </div>
        </div>
        <div className="text-center flex flex-col items-center p-10 gap-6">
          <p className="text-[20px]">
            Khóa thông minh là sản phẩm khóa cửa điện tử được áp dụng công nghệ
            thông minh giúp người dùng dễ dàng thực hiện các thao tác đóng/mở
            cửa mà không cần đến chìa cơ, thay vào đó sử dụng các phương thức mở
            khóa bằng vân tay, mã số, thẻ từ hay điện thoại.
          </p>
          <p className="text-[20px]">
            Khóa cửa thông minh được thiết kế với công nghệ bảo mật cao giúp cho
            người dùng an tâm hơn khi sử dụng, đặc biệt một số mẫu khóa thông
            minh có chức năng kiểm soát và quản lý hoạt động của ngôi nhà từ xa
            thông qua ứng dụng điện thoại.
          </p>
        </div>
      </div>
    </div>
  );
}
