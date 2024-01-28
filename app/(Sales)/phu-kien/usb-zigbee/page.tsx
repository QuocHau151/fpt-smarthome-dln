"use client";
import { fetchProduct } from "@/actions/fetchProduct";
import { Button } from "@/components/ui/button";
import { useStore } from "@/store/useStore";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useState } from "react";

export default function Page() {
  const [products, setProducts] = useState<ProductData[]>([]);
  const addToCart = useStore((state) => state.addToCart);
  const cart = useStore((state) => state.cart);

  const fetchData = async () => {
    try {
      const res = await fetchProduct();
      setProducts(res as unknown as ProductData[]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const [selectedOptions, setSelectedOptions] = useState({
    id: "UNZD012",
  });

  const handleChange = (event: any) => {
    setSelectedOptions({
      ...selectedOptions,
      [event.target.name]: event.target.value,
    });
  };

  const option = products.find((item) => item.id === selectedOptions.id);

  const handleAddToCart = (product: ProductData) => {
    addToCart(product);
  };

  return (
    <div className="">
      <div className="text-center flex flex-col py-[100px] bg-slate-100">
        <div className="container">
          <h4 className="text-h5 text-gray-400 font-semibold">
            Thiết bị FPT Smart Home
          </h4>
          <h2 className=" text-[48px] text-slate-800 font-semibold">
            Phụ Kiện Thông Minh FPT Smart Home
          </h2>
          <div className="flex items-start justify-center gap-10 pt-[50px]">
            <div className="basis-1/2 bg-white w-full h-min rounded-2xl">
              {option ? (
                <Image
                  className="mx-auto"
                  src={option?.image}
                  width={300}
                  height={300}
                  alt=""
                />
              ) : (
                <div className="bg-white w-[585px] h-[585px]"></div>
              )}
            </div>
            <div className="basis-1/2 bg-white w-full h-min rounded-2xl px-6 pb-[30px]">
              <div className="flex flex-col items-center pt-[50px] ">
                <h1 className="text-[27px] font-semibold">USB ZigBee</h1>
                <div className="flex items-center flex-col text-slate-500 border-b-[1px] w-full border-black py-4 ">
                  <h4 className=" flex items-center">
                    Thương hiệu:
                    <p className="font-semibold">FPT Smart Home</p>
                  </h4>
                  <h4>Mã Sản phẩm: {option?.id} </h4>
                </div>
              </div>

              <div className="pt-2 border-b-[1px] border-black pb-[20px]">
                <p className="text-[50px] font-bold ">{option?.price} VNĐ</p>
                <p className="-mt-4 text-[12px]">(Chưa bao gồm VAT)</p>
              </div>
              <div className="py-4">
                <p className="text-[18px] text-slate-600 font-medium mb-4 px-6">
                  Thời gian bảo hành sản phẩm là 24 tháng tính từ ngày mua hàng.
                </p>
                <div className="flex items-center justify-center gap-2 w-full">
                  <Button
                    onClick={() => option && handleAddToCart(option)}
                    className="basis-1/2 bg-white font-medium border-[1px] border-black text-black hover:bg-orange-500 hover:text-white"
                  >
                    <Link href="/checkout"> Mua ngay</Link>
                  </Button>
                  <Button
                    onClick={() => option && handleAddToCart(option)}
                    className="basis-1/2 bg-white font-medium border-[1px] border-black text-black hover:bg-orange-500 hover:text-white"
                  >
                    Thêm vào giỏ hàng
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center flex flex-col py-[100px] ">
        <div className="container border-b-[1px] pb-[100px]">
          <h4 className="text-h5 text-gray-400 font-semibold">USB ZigBee</h4>
          <h2 className=" text-[48px] text-slate-800 font-semibold mb-10">
            Thông số kỹ thuật
          </h2>
          <div className="flex items-center justify-center gap-6">
            <Image
              className="rounded-2xl basis-1/2"
              src="/assets/images/product/thumnail/1704872213-dieu-khien-rem.jpg"
              width={1000}
              height={500}
              alt=""
            />
            <div className="basis-1/2 ">
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2">
                <p>Điện áp làm việc</p>
                <p>5VDC</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2">
                <p>Giao tiếp</p>
                <p>USB Type A</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2">
                <p>Công suất tiêu thụ tĩnh</p>
                <p>0.33W</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2">
                <p>Công suất</p>
                <p>+10dBm</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2">
                <p>Chất liệu</p>
                <p>Nhựa ABS chống cháy</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2">
                <p>Nhiệt độ hoạt động</p>
                <p>10 ÷ 40˚C</p>
              </div>
              <div className="flex items-center justify-between w-full text-[18px] border-b-[1px] border-black font-regular px-4 py-2">
                <p>Độ ẩm làm việc</p>
                <p>{"<"}95%RH</p>
              </div>
              <div className="flex items-center justify-between w-full text-[18px] border-b-[1px] border-black font-regular px-4 py-2">
                <p>Kích thước</p>
                <p>72x23x11mm</p>
              </div>
              <div className="flex items-center justify-between w-full text-[18px] border-b-[1px] border-black font-regular px-4 py-2">
                <p>Chuẩn kết nối</p>
                <p>Bluetooth Mesh, Zigbee</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center flex flex-col  ">
        <div className="container border-b-[1px] pb-[100px]">
          <h4 className="text-h5 text-gray-400 font-semibold">
            Thiết bị FPT Smart Home
          </h4>
          <h2 className=" text-[48px] text-slate-800 font-semibold mb-10">
            Kiến thức về sản phẩm
          </h2>
          <div className="flex flex-col items-start gap-4 text-left text-[18px]">
            <h5 className="font-semibold text-[22px]">
              Có gì đặc biệt ở thiết bị USB ZigBee của FPT Smart Home?
            </h5>
            <p>
              Các thiết bị nhà thông minh trở thành lựa chọn hàng đầu cho các hộ
              gia đình, mà điển hình hơn cả là các hộ gia đình trẻ. Vừa đảm bảo
              tính linh hoạt, vừa cho hiệu năng sử dụng ổn định, các sản phẩm
              trong hệ sinh thái nhà thông minh hẳn sẽ nâng tầm chất lượng sống
              đáng kể cho các đối tượng người dùng. Trong đó, nhắc đến các thiết
              bị nhà thông minh này, sẽ thật sự thiếu xót nếu bỏ qua thiết bị hỗ
              trợ kết nối - USB ZigBee.
            </p>
            <p>
              Vậy, sản phẩm này được ứng dụng cho các mục đích nào? Hãy cùng tìm
              hiểu các thông tin liên quan với bài viết dưới đây nhé.
            </p>
            <h5 className="font-semibold text-[22px]">
              Giới thiệu chung về sản phẩm USB ZigBee
            </h5>
            <p>
              Hiện nay, nhu cầu sử dụng thiết bị thông minh tại các gia đình
              đang tăng lên nhanh chóng. Không chỉ 1 mà mỗi gia đình có thể linh
              hoạt sử dụng nhiều sản phẩm khác nhau để tối ưu hóa nhu cầu của
              bản thân, mang đến tính tiện ích hơn cho sinh hoạt thường ngày.{" "}
            </p>
            <p>
              Các thiết bị thông minh được sử dụng có thể là đèn chiếu sáng, hệ
              thống rèm tự động hay các thiết bị cảm biến, camera,....{" "}
            </p>
            <p>
              Để theo dõi cũng như kiểm soát các thiết bị nói trên 1 cách đồng
              bộ, từ đó, nhận và phát đường truyền đến bộ điều khiển trung tâm
              nhanh chóng, USB ZigBee là sản phẩm được lựa chọn và ứng dụng lúc
              này.
            </p>
            <p>
              Sản phẩm về cơ bản sẽ hỗ trợ tiếp sóng, tăng cường tín hiệu hoạt
              động cho thiết bị luôn duy trì ở mức ổn định.
            </p>
            <h5 className="font-semibold text-[22px]">
              Chức năng chính của sản phẩm USB ZigBee
            </h5>
            <p>
              Về cơ bản, có thể thấy, sản phẩm USB ZigBee sẽ được ứng dụng nhằm
              thực hiện các chức năng sau:
            </p>
            <ul className="ml-10 list-disc">
              <li>
                Thực hiện chuyển tiếp cũng như tăng cường sóng ZigBee, điển hình
                hơn cả là tại các khu vực có sóng yếu.
              </li>
              <li>
                Đảm bảo việc kết nối giữa các thiết bị cùng bộ điều khiển trung
                tâm FPT Play Box S luôn được hiệu quả, cho độ ổn định cao.
              </li>
            </ul>
            <h5 className="font-semibold text-[22px]">
              Những ưu điểm của thiết bị USB ZigBee
            </h5>
            <p>
              Về cơ bản, tính linh hoạt cao chính là ưu điểm nổi bật hàng đầu ở
              thiết bị này. Trong đó, kích thước sản phẩm chỉ 4.1mm x 1.6 cm, độ
              dày 1.6cm.
            </p>
            <p>
              Như vậy, sản phẩm có thể thuận tiện cho việc cắm, kết nối cùng bộ
              điều khiển trung tâm, cho hiệu quả nhận và phát đường truyền từ hệ
              thống các thiết bị thông minh được sử dụng đến FPT Play Box S ổn
              định, chất lượng và tối ưu hơn hẳn.
            </p>
            <p>
              USB ZigBee này có khả năng tiếp sóng cũng như tăng cường tín hiệu
              sóng hiệu quả trong khoảng cách khá tốt, lên đến 100m trong môi
              trường không có vật cản.{" "}
            </p>
            <p>
              Đặc biệt, chỉ số tốc độ của USB đặt mức 250 Kbaud. Qua đó, giúp
              tăng tốc độ truyền dữ liệu 1 cách chất lượng hơn.{" "}
            </p>
            <p>
              Khi đặt mua sản phẩm này, khách hàng sẽ được hỗ trợ bảo hành chính
              hãng lên đến 24 tháng. Như vậy, bạn hoàn toàn có thể an tâm, thoải
              mái sử dụng thiết bị trong cho mục đích dẫn truyền trong 1 thời
              gian khá dài. Yếu tố này cũng góp phần tối ưu hóa kinh phí hơn hẳn
              cho người dùng.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}