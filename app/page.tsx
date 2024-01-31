"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper";
import { FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";

// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/thumbs";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React, { useEffect, useRef, useState } from "react";
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";
import { auth } from "@/auth";

export default function Home() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);

  return (
    <>
      <Header />
      <section className="">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper z-0 "
        >
          <SwiperSlide>
            <Image
              src="/assets/images/banner/1691569870-Trang-Chu-Website1920x680-resize.jpg"
              width={1920}
              height={680}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/assets/images/banner/1686294072-Bo-dieu-khien-hong-ngoai-trang-chu.jpg"
              width={1920}
              height={680}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/assets/images/banner/1691569853-TrangChuWebsite1920x680-cam-bien-fix-size.jpg"
              width={1920}
              height={680}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/assets/images/banner/1696234102-Trang-Chu-Website1920x680-fix.jpg"
              width={1920}
              height={680}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/assets/images/banner/1698721365-TrangChuWebsite1920x680-1-copy.jpg"
              width={1920}
              height={680}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/assets/images/banner/1701162787-1920x680-copy.jpg"
              width={1920}
              height={680}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/assets/images/banner/1702626067-1920x680-copy-1.jpg"
              width={1920}
              height={680}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/assets/images/banner/1701162787-1920x680-copy.jpg"
              width={1920}
              height={680}
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </section>
      {/*  */}
      <section className=" container flex flex-col items-center py-[100px] gap-20">
        <div className="">
          <h6 className="text-h6 font-bold text-gray-500 text-center mb-2">
            FPT Smart Home - Thương hiệu nhà thông minh từ FPT
          </h6>
          <h2 className="text-center text-h4 font-bold text-slate-700 antialiased  ">
            Sản Phẩm Nổi Bật
          </h2>
        </div>
        <div className="flex items-center justify-between gap-10">
          <div className="flex flex-col items-start max-w-[310px] gap-6">
            <h3 className="text-h4 font-bold antialiased uppercase text-gray-800">
              Ổ Cắm Thông Minh WiFi
            </h3>
            <p className="text-justify font-regular">
              Ổ cắm thông minh WiFi giúp biến các thiết bị điện gia dụng trong
              nhà như quạt, đèn, sạc, ấm đun… thành các thiết bị thông minh khi
              dễ dàng điều khiển chúng từ xa, hẹn giờ tự động.
            </p>
            <h3 className="text-h4 font-bold text-gray-800">350.000 VNĐ</h3>
            <span className="mt-[-29px] text-gray-400">(Chưa bao gồm VAT)</span>
            <Button className="bg-gray-700">
              <p className="w-[150px] h-[50px] text-center my-auto ">
                Tìm hiểu ngay
              </p>
            </Button>
          </div>
          <Image
            src="/assets/images/session/1691480717-831x552px-Key-copy.jpg"
            width={831}
            height={552}
            alt=""
          />
        </div>
      </section>
      {/*  */}
      <section className="container flex flex-col items-center gap-20 py-[100px]">
        <div className="text-center text-h4 font-bold text-slate-700 antialiased">
          <h2>Bộ sưu tập công tắc</h2>
        </div>
        <div className="flex items-center justify-center gap-6 ">
          <div className="basis-1/2 relative">
            <Image
              src="/assets/images/session/athena-collection.webp"
              width={614}
              height={707}
              alt="athena-collection"
            />
            <Button className="absolute left-[50%] translate-x-[-50%] bottom-[30px] bg-white bg-opacity-0 border-2 w-[180px] hover:bg-opacity-1 hover:bg-white hover:text-black">
              Xem thêm
            </Button>
          </div>
          <div className="basis-1/2 relative">
            <Image
              src="/assets/images/session/hera-collection.webp"
              width={614}
              height={707}
              alt="hera-collection"
            />
            <Button className="absolute left-[50%] translate-x-[-50%] bottom-[30px] bg-white bg-opacity-0 border-2 border-black text-black w-[180px] hover:bg-opacity-1 hover:text-white">
              Xem thêm
            </Button>
          </div>
        </div>
      </section>
      {/*  */}
      <section className="container py-[100px]">
        <div className="flex flex-col gap-10 items-center justify-center">
          <h2 className="text-center text-h4 font-bold text-gray-800">
            Những công trình tiêu biểu
          </h2>
          <p className="text-center px-10">
            Đồng hành cùng chủ đầu tư từ khâu tư vấn đến hoàn thiện, đội ngũ kĩ
            sư đã lắp đặt hệ thống thiết bị nhà thông minh FPT Smart Home như (
            đèn, công tắc cảm ứng, rèm thông minh, cảm biến...) để giúp gia chủ
            điều khiển & quản lý ngôi nhà từ xa bằng giọng nói tiếng Việt hoặc
            smartphone.
          </p>
          <Button className="w-[180px] h-[50px] bg-white bg-opacity-0 border-2 border-black text-black hover:bg-opacity-1 hover:text-white">
            Xem ngay
          </Button>
        </div>
        <div className="py-[100px] flex items-center gap-6 ">
          <div className="bg-gray-100 basis-1/3 flex flex-col items-center justify-center p-4 rounded-xl">
            <Image
              className="rounded-xl"
              src="/assets/images/session/1695890880-9cbfa122fc2e2870713f.jpg"
              width={2560}
              height={1920}
              alt=""
            />
            <div className="flex flex-col  py-6 px-2 border-b-[1px] border-slate-300 w-full text-center mb-4">
              <h5 className="text-h5 font-semibold">Làng Yến Kiên Giang</h5>
              <p>Tỉnh Kiên Giang</p>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/icon/1668674205-phong-ngu.png"
                  width={30}
                  height={30}
                  alt=""
                />
                <span className="text-[14px]">2</span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/icon/1668674215-phong-tam.png"
                  width={30}
                  height={30}
                  alt=""
                />
                <span className="text-[14px]">2</span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/icon/1668674224-dien-tich.png"
                  width={30}
                  height={30}
                  alt=""
                />
                <span className="text-[14px]">115m2</span>
              </div>
              <div className="border-l-[1px] border-black px-2 ">
                Nhà Phố 3 Tầng
              </div>
            </div>
            <div className="flex items-center justify-between gap-4">
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <div className="p-[1px] border-[1px] border-black rounded-sm">
                    <Image
                      className=""
                      src="/assets/icon/icon-check.png"
                      width={12}
                      height={12}
                      alt=""
                    />
                  </div>
                  <span className="text-[12px]">Giải pháp chiếu sáng</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-[1px] border-[1px] border-black rounded-sm">
                    <Image
                      className=""
                      src="/assets/icon/icon-check.png"
                      width={12}
                      height={12}
                      alt=""
                    />
                  </div>
                  <span className="text-[12px]">Giải pháp an ninh</span>
                </div>
              </div>
              <div className="flex flex-col ">
                <div className="flex items-center gap-4">
                  <div className="p-[1px] border-[1px] border-black rounded-sm">
                    <Image
                      className=""
                      src="/assets/icon/icon-check.png"
                      width={12}
                      height={12}
                      alt=""
                    />
                  </div>
                  <span className="text-[12px]">Giải pháp điều khiển</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-[1px] border-[1px] border-black rounded-sm">
                    <Image
                      className=""
                      src="/assets/icon/icon-check.png"
                      width={12}
                      height={12}
                      alt=""
                    />
                  </div>
                  <span className="text-[12px]">Giải pháp truyền hình</span>
                </div>
              </div>
            </div>
            <div>
              <Button className="bg-white bg-opacity-0 border-[1px] mt-6 border-black text-black hover:bg-opacity-1 hover:text-white">
                Xem ngay
              </Button>
            </div>
          </div>
          <div className="bg-gray-100 basis-1/3 flex flex-col items-center justify-center p-4 rounded-xl">
            <Image
              className="rounded-xl"
              src="/assets/images/session/1695632188-952e0fa37dbcafe2f6ad9.jpg"
              width={2560}
              height={1920}
              alt=""
            />
            <div className="flex flex-col  py-6 px-2 border-b-[1px] border-slate-300 w-full text-center mb-4">
              <h5 className="text-h5 font-semibold">Nhà phố Ninh Thuận</h5>
              <p>Tỉnh Ninh Thuận</p>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/icon/1668674205-phong-ngu.png"
                  width={30}
                  height={30}
                  alt=""
                />
                <span className="text-[14px]">2</span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/icon/1668674215-phong-tam.png"
                  width={30}
                  height={30}
                  alt=""
                />
                <span className="text-[14px]">2</span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/icon/1668674224-dien-tich.png"
                  width={30}
                  height={30}
                  alt=""
                />
                <span className="text-[14px]">110m2</span>
              </div>
              <div className="border-l-[1px] border-black px-2 ">
                Nhà Phố 3 Tầng
              </div>
            </div>
            <div className="flex items-center justify-between gap-4">
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <div className="p-[1px] border-[1px] border-black rounded-sm">
                    <Image
                      className=""
                      src="/assets/icon/icon-check.png"
                      width={12}
                      height={12}
                      alt=""
                    />
                  </div>
                  <span className="text-[12px]">Giải pháp chiếu sáng</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-[1px] border-[1px] border-black rounded-sm">
                    <Image
                      className=""
                      src="/assets/icon/icon-check.png"
                      width={12}
                      height={12}
                      alt=""
                    />
                  </div>
                  <span className="text-[12px]">Giải pháp an ninh</span>
                </div>
              </div>
              <div className="flex flex-col ">
                <div className="flex items-center gap-4">
                  <div className="p-[1px] border-[1px] border-black rounded-sm">
                    <Image
                      className=""
                      src="/assets/icon/icon-check.png"
                      width={12}
                      height={12}
                      alt=""
                    />
                  </div>
                  <span className="text-[12px]">Giải pháp điều khiển</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-[1px] border-[1px] border-black rounded-sm">
                    <Image
                      className=""
                      src="/assets/icon/icon-check.png"
                      width={12}
                      height={12}
                      alt=""
                    />
                  </div>
                  <span className="text-[12px]">Giải pháp truyền hình</span>
                </div>
              </div>
            </div>
            <div>
              <Button className="bg-white bg-opacity-0 border-[1px] mt-6 border-black text-black hover:bg-opacity-1 hover:text-white">
                Xem ngay
              </Button>
            </div>
          </div>
          <div className="bg-gray-100 basis-1/3 flex flex-col items-center justify-center p-4 rounded-xl">
            <Image
              className="rounded-xl"
              src="/assets/images/session/1695631236-e443edd8ce031c5d4512.jpg"
              width={2560}
              height={1920}
              alt=""
            />
            <div className="flex flex-col  py-6 px-2 border-b-[1px] border-slate-300 w-full text-center mb-4">
              <h5 className="text-h5 font-semibold">Căn hộ Phú Mỹ Hưng</h5>
              <p>Phú Mỹ Hưng Quận 7</p>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/icon/1668674205-phong-ngu.png"
                  width={30}
                  height={30}
                  alt=""
                />
                <span className="text-[14px]">2</span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/icon/1668674215-phong-tam.png"
                  width={30}
                  height={30}
                  alt=""
                />
                <span className="text-[14px]">2</span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/icon/1668674224-dien-tich.png"
                  width={30}
                  height={30}
                  alt=""
                />
                <span className="text-[14px]">95m2</span>
              </div>
              <div className="border-l-[1px] border-black px-2 text-center ">
                Căn hộ 2 phòng ngủ
              </div>
            </div>
            <div className="flex items-center justify-between gap-4">
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <div className="p-[1px] border-[1px] border-black rounded-sm">
                    <Image
                      className=""
                      src="/assets/icon/icon-check.png"
                      width={12}
                      height={12}
                      alt=""
                    />
                  </div>
                  <span className="text-[12px]">Giải pháp chiếu sáng</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className=" border-[1px] border-black rounded-sm p-[7px]"></div>
                  <span className="text-[12px]">Giải pháp an ninh</span>
                </div>
              </div>
              <div className="flex flex-col ">
                <div className="flex items-center gap-4">
                  <div className="p-[1px] border-[1px] border-black rounded-sm">
                    <Image
                      className=""
                      src="/assets/icon/icon-check.png"
                      width={12}
                      height={12}
                      alt=""
                    />
                  </div>
                  <span className="text-[12px]">Giải pháp điều khiển</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-[1px] border-[1px] border-black rounded-sm">
                    <Image
                      className=""
                      src="/assets/icon/icon-check.png"
                      width={12}
                      height={12}
                      alt=""
                    />
                  </div>
                  <span className="text-[12px]">Giải pháp truyền hình</span>
                </div>
              </div>
            </div>
            <div>
              <Button className="bg-white bg-opacity-0 border-[1px] mt-6 border-black text-black hover:bg-opacity-1 hover:text-white">
                Xem ngay
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <section className="py-[100px] bg-gray-200">
        <div className="container ">
          <div className="flex flex-col items-center justify-center gap-10 mb-[80px]">
            <h2 className="text-[40px] font-bold text-gray-800">
              Gói thiết bị Smart Home dành riêng cho gia đình bạn
            </h2>
            <p className="text-center px-[200px]">
              Các gói sản phẩm tích hợp đầy đủ các thiết bị thông minh cần thiết
              trong mỗi gia đình Việt, giúp những trải nghiệm được trở nên trọn
              vẹn nhất
            </p>
          </div>
          <div className="flex items-center justify-between bg-white rounded-[60px] mb-10">
            <div className="basis-1/2 rounded-l-[60px]  overflow-hidden">
              <Image
                className="object-cover"
                src="/assets/images/session/apartment-types-1.webp"
                width={624}
                height={502}
                alt=""
              />
            </div>
            <div className="basis-1/2 p-[30px] ">
              <div className=" flex flex-col text-center border-b-[1px] mb-10 border-b-black ">
                <h5 className="text-[22px]">Gói Giải Pháp</h5>
                <h4 className="text-h4 font-semibold mb-10">
                  Căn hộ 2 Phòng ngủ
                </h4>
              </div>
              <div className="flex items-center justify-between px-6 pb-10  border-b-[1px] border-b-black">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="border-[1px] w-[16px] h-[16px] border-black relative rounded-sm">
                      <Image
                        className=" absolute -left-[1px] -top-[1px] "
                        src="/assets/icon/icon-check.png"
                        width={14}
                        height={14}
                        alt=""
                      />
                    </div>
                    <p className="text-[18px]">Giải pháp điều khiển</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="border-[1px] w-[16px] h-[16px] border-black relative rounded-sm"></div>
                    <p className="text-[18px]">Giải pháp chiếu sáng</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <div className="border-[1px] w-[16px] h-[16px] border-black relative rounded-sm">
                      <Image
                        className=" absolute -left-[1px] -top-[1px] "
                        src="/assets/icon/icon-check.png"
                        width={14}
                        height={14}
                        alt=""
                      />
                    </div>
                    <p className="text-[18px]">Giải pháp chiếu sáng</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="border-[1px] w-[16px] h-[16px] border-black relative rounded-sm"></div>
                    <p className="text-[18px]">Giải pháp truyền hình</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-around p-[30px]">
                <div className="flex flex-col text-center">
                  <h5 className="text-[22px] font-medium">
                    Giá gói sản phẩm từ:
                  </h5>
                  <h4 className="text-h4 font-semibold">19.900.000 VNĐ</h4>
                  <span className="text-[14px] ">
                    (Chưa có thuế VAT và phí thi công)
                  </span>
                </div>
                <Button className="bg-opacity-0 bg-white border-[3px] text-black">
                  Chọn gói này
                </Button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between bg-white rounded-[60px] flex-row-reverse  ">
            <div className="basis-1/2 rounded-r-[60px]  overflow-hidden">
              <Image
                className="object-cover"
                src="/assets/images/session/apartment-types-2.webp"
                width={624}
                height={502}
                alt=""
              />
            </div>
            <div className="basis-1/2 p-[30px] ">
              <div className=" flex flex-col text-center border-b-[1px] mb-10 border-b-black ">
                <h5 className="text-[22px]">Gói Giải Pháp</h5>
                <h4 className="text-h4 font-semibold mb-10">
                  Căn hộ 3 Phòng ngủ
                </h4>
              </div>
              <div className="flex items-center justify-between px-6 pb-10  border-b-[1px] border-b-black">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="border-[1px] w-[16px] h-[16px] border-black relative rounded-sm">
                      <Image
                        className=" absolute -left-[1px] -top-[1px] "
                        src="/assets/icon/icon-check.png"
                        width={14}
                        height={14}
                        alt=""
                      />
                    </div>
                    <p className="text-[18px]">Giải pháp điều khiển</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="border-[1px] w-[16px] h-[16px] border-black relative rounded-sm">
                      <Image
                        className=" absolute -left-[1px] -top-[1px] "
                        src="/assets/icon/icon-check.png"
                        width={14}
                        height={14}
                        alt=""
                      />
                    </div>
                    <p className="text-[18px]">Giải pháp chiếu sáng</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <div className="border-[1px] w-[16px] h-[16px] border-black relative rounded-sm">
                      <Image
                        className=" absolute -left-[1px] -top-[1px] "
                        src="/assets/icon/icon-check.png"
                        width={14}
                        height={14}
                        alt=""
                      />
                    </div>
                    <p className="text-[18px]">Giải pháp chiếu sáng</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="border-[1px] w-[16px] h-[16px] border-black relative rounded-sm">
                      <Image
                        className=" absolute -left-[1px] -top-[1px] "
                        src="/assets/icon/icon-check.png"
                        width={14}
                        height={14}
                        alt=""
                      />
                    </div>
                    <p className="text-[18px]">Giải pháp truyền hình</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-around p-[30px]">
                <div className="flex flex-col text-center">
                  <h5 className="text-[22px] font-medium">
                    Giá gói sản phẩm từ:
                  </h5>
                  <h4 className="text-h4 font-semibold">26.590.000 VNĐ</h4>
                  <span className="text-[14px] ">
                    (Chưa có thuế VAT và phí thi công)
                  </span>
                </div>
                <Button className="bg-opacity-0 bg-white border-[3px] text-black">
                  Chọn gói này
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <section className=" bg-cover 2xl:h-[1000px] bg-center h-[680px] bg-no-repeat bg-[url('/assets/images/session/ads-banner.webp')]"></section>
      {/*  */}
      <section className="py-[100px] container">
        <div>
          <h2 className="text-center text-h3 mb-[100px] font-semibold text-gray-700">
            Video sản phẩm nhà thông minh
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 ">
          <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2  "
          >
            <SwiperSlide>
              <iframe
                width="1280"
                height="720"
                src="https://www.youtube.com/embed/qu8H7iaQutA?si=MehD8yNZN3huFxtI"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </SwiperSlide>
            <SwiperSlide>
              <iframe
                width="1280"
                height="720"
                src="https://www.youtube.com/embed/qu8H7iaQutA?si=MehD8yNZN3huFxtI"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </SwiperSlide>
            <SwiperSlide>
              <iframe
                width="1280"
                height="720"
                src="https://www.youtube.com/embed/l0dhROiJ7jg?si=9p1XosxjSOL2DRRb"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </SwiperSlide>
            <SwiperSlide>
              <iframe
                width="1280"
                height="720"
                src="https://www.youtube.com/embed/Gb3d3DrRRGo?si=55QWPsOHa7i1fDSQ"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </SwiperSlide>
            <SwiperSlide>
              <iframe
                width="1280"
                height="720"
                src="https://www.youtube.com/embed/jn-Ehy1rVzw?si=190sVNcVreQdFtKE"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </SwiperSlide>
            <SwiperSlide>
              <iframe
                width="1280"
                height="720"
                src="https://www.youtube.com/embed/xzAlNG-EyBo?si=MoZxF9mL8DzZVfHr"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </SwiperSlide>
            <SwiperSlide>
              <iframe
                width="1280"
                height="720"
                src="https://www.youtube.com/embed/L2JDLjYXq0U?si=RDLpZ-yPsWMCOPlk"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </SwiperSlide>
            <SwiperSlide>
              <iframe
                width="1280"
                height="720"
                src="https://www.youtube.com/embed/GhPNFNYrk_k?si=JdZaeZvvh5eocO46"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </SwiperSlide>
            <SwiperSlide>
              <iframe
                width="1280"
                height="720"
                src="https://www.youtube.com/embed/PCeZyVmXfNg?si=erFqzEPe84Y25oPZ"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </SwiperSlide>
            <SwiperSlide>
              <iframe
                width="1280"
                height="720"
                src="https://www.youtube.com/embed/4wDEcSPbc9M?si=T_eSeL2Ff9xLVV-s"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </SwiperSlide>
            <SwiperSlide>
              <iframe
                width="1280"
                height="720"
                src="https://www.youtube.com/embed/Mq6Y23URD98?si=arOpIZtcxihaoNZm"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </SwiperSlide>
            <SwiperSlide>
              <iframe
                width="1280"
                height="720"
                src="https://www.youtube.com/embed/Mq6Y23URD98?si=1GKqSwRGbY9-Mu5i"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </SwiperSlide>
            <SwiperSlide>
              <iframe
                width="1280"
                height="720"
                src="https://www.youtube.com/embed/u02LnbsFPsE?si=Y0tyBPyMJgx1_IGQ"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </SwiperSlide>
            <SwiperSlide>
              <iframe
                width="1280"
                height="720"
                src="https://www.youtube.com/embed/304XGQm1IHI?si=m-d2rJGlN0ggah3y"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </SwiperSlide>
            <SwiperSlide>
              <iframe
                width="1280"
                height="720"
                src="https://www.youtube.com/embed/7fmC-i7oTIE?si=LmxtIQvbeUA8PQpK"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </SwiperSlide>
            <SwiperSlide>
              <iframe
                width="1280"
                height="720"
                src="https://www.youtube.com/embed/IqfgCNQLyok?si=2__3BaOLMX5-F-vs"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </SwiperSlide>
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={7}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper  "
          >
            <SwiperSlide>
              <Image
                className=""
                src="/assets/images/thumnail/1668675146-thumb-tvc-hanh-phuc-gian-don.png"
                width={831}
                height={552}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <div className="overflow-hidden h-[90px]">
                <Image
                  className="object-cover "
                  src="/assets/images/thumnail/1668675245-310720832_889022925815309_5539906073800026258_n.jpg"
                  width={831}
                  height={552}
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="overflow-hidden h-[90px] ">
                <Image
                  className="object-cover "
                  src="/assets/images/thumnail/1668675289-DSCF5069-compressed.jpg"
                  width={831}
                  height={552}
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/assets/images/thumnail/1668676434-song-thong-minh-hon-voi-fpt-smart-home.png"
                width={831}
                height={552}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/assets/images/thumnail/1668676619-amazing-living-compressed.jpg"
                width={831}
                height={552}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/assets/images/thumnail/1668676634-clip-duy-luan.png"
                width={831}
                height={552}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/assets/images/thumnail/1668676654-dan-anh.png"
                width={831}
                height={552}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/assets/images/thumnail/1668676675-vat-vo-studio.png"
                width={831}
                height={552}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/assets/images/thumnail/1668676700-can-ho-thong-minh-20t.png"
                width={831}
                height={552}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/assets/images/thumnail/1669797840-Tim-phim-bang-ten-dien-vien.png"
                width={831}
                height={552}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/assets/images/thumnail/1669798500-Ket-Hop-Giua-Cam-Bien-Cua-va-Cam-Bien-Chuyen-Dong.png"
                width={831}
                height={552}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/assets/images/thumnail/1669798520-Trai-Nghiem-Thuc-Te-He-Thong-Rem-Thong-Minh.png"
                width={831}
                height={552}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/assets/images/thumnail/1669798534-Huong-Dan-Cac-Cau-Lenh-Tim-Noi-Dung-Tren-FPT-Play-Box.png"
                width={831}
                height={552}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/assets/images/thumnail/1669798557-dieu-khien-he-thong-den-bang-giong-noi.png"
                width={831}
                height={552}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/assets/images/thumnail/1669798601-Demo-hoat-dong-cam-bien-cua.png"
                width={831}
                height={552}
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section className="container flex items-center justify-between py-[100px]">
        <div>
          <h2 className="text-h3 font-semibold text-gray-800 mb-10">
            Câu hỏi thường gặp
          </h2>
          <div className="max-w-[500px] ">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem className="py-4" value="item-1">
                <AccordionTrigger>
                  Nhà thông minh (Smart Home) là gì?
                </AccordionTrigger>
                <AccordionContent>
                  Nhà thông minh (Smart Home) là ngôi nhà được trang bị các
                  thiết bị điện tử có thể điều khiển trực tiếp hoặc từ xa qua
                  smartphone. Đặc biệt với FPT Smart Home bạn có thể điều khiển
                  ngôi nhà của mình bằng giọng nói Tiếng Việt, hệ thống nhà
                  thông minh giúp bạn quản lý, điều khiển và kiểm soát an ninh
                  của ngôi nhà một cách an toàn.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem className="py-4" value="item-2">
                <AccordionTrigger>
                  Lắp đặt thiết bị nhà thông minh FPT Smart Home có phức tạp
                  không?
                </AccordionTrigger>
                <AccordionContent>
                  Với sản phẩm FPT Smart Home bạn có thể tự lắp đặt thiết bị
                  thông minh cho gia đình của mình. Ngoài ra, đội ngũ kỹ thuật
                  từ FPT Smart Home luôn sẵn sàng hỗ trợ bạn trong quá trình tư
                  vấn cũng như cài đặt sản phẩm.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem className="py-4" value="item-3">
                <AccordionTrigger>
                  Với khoản kinh phí bao nhiêu thì có thể lắp đặt được nhà thông
                  minh FPT Smart Home?
                </AccordionTrigger>
                <AccordionContent>
                  Với kinh phí từ khoảng 10 triệu đồng bạn có thể biến ngôi nhà
                  của mình thành ngôi nhà thông minh.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem className="py-4" value="item-4">
                <AccordionTrigger>
                  Nhà tôi đã hoàn thiện rồi và muốn thay thế thiết bị trong nhà
                  thành thiết bị thông minh có được không?
                </AccordionTrigger>
                <AccordionContent>
                  Hoàn toàn được và dễ dàng nâng cấp từ thiết bị bình thường lên
                  các thiết bị thông minh. FPT Smart Home sẽ hỗ trợ tư vấn, khảo
                  sát để đưa ra phương án nâng cấp tối ưu cho khách hàng, mang
                  lại sự trải nghiệm tuyệt vời nhất.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem className="py-4" value="item-5">
                <AccordionTrigger>
                  Tôi vẫn chưa yên tâm về chất lượng và nguồn gốc xuất xứ?
                </AccordionTrigger>
                <AccordionContent>
                  Với FPT Smart Home khách hàng hoàn toàn yên tâm và tin tưởng
                  sử dụng dịch vụ. Các thiết bị nhà thông minh đến từ FPT Smart
                  Home đều do các kỹ sư của FPT Smart Home nghiên cứu và hoàn
                  thiện, bộ xử lý trung tâm được Google xác thực và cấp chứng
                  chỉ để triển khai đến khách hàng.Các sản phẩm đều được tuân
                  theo các TCVN trước khi đưa ra thị trường, có các chứng nhận
                  về ROHS, CE… Khách hàng hoàn toàn yên tâm về chất lượng dịch
                  vụ và nguồn gốc xuất xứ các sản phẩm của FPT Smart Home.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem className="py-4" value="item-6">
                <AccordionTrigger>
                  Trong quá trình sử dụng, nếu gặp vấn đề thì FPT Smart Home hỗ
                  trợ ra sao?
                </AccordionTrigger>
                <AccordionContent>
                  FPT Smart Home là đơn vị trực thuộc của FPT Telecom, luôn dẫn
                  đầu trong việc hỗ trợ khách hàng và mang lại sự trải nghiệm
                  tốt nhất đến khách hàng. Dịch vụ hiện đang có mặt tại tất cả
                  tỉnh thành trên toàn quốc và hỗ trợ 24/7. Khi có vấn đề, Quý
                  khách hàng có thể liên hệ tổng đài 19006600 để tiếp nhận thông
                  tin, chăm sóc, hỗ trợ và bảo hành, sửa chữa tận nhà.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem className="py-4" value="item-7">
                <AccordionTrigger>
                  Sử dụng nhà thông minh FPT Smart Home có bị mất kết nối không?
                </AccordionTrigger>
                <AccordionContent>
                  FPT Smart Home sử dụng các chuẩn kết nối Bluetooth Mesh và
                  Zigbee, đảm bảo hoạt động ổn định trong hệ thống. Các thiết bị
                  sẽ liên kết với nhau thành mạng lưới kết nối được điều khiển
                  bởi thiết bị trung tâm (FPT Play Box). Trường hợp nhà khách
                  hàng mất Internet thì hệ thống FPT Smart Home vẫn hoạt động
                  bình thường, khách hàng có thể điều khiển trực tiếp trên giao
                  diện từ Bộ điều khiển trung tâm hoặc thông qua ứng dụng trên
                  di động.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div className="basis-1/2">
          <Image
            src="/assets/images/session/faq-image.webp"
            width={511}
            height={689}
            alt=""
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
