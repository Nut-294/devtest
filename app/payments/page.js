"use client";
import Link from "next/link";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { BsCreditCard } from "react-icons/bs";
import { TfiCreditCard } from "react-icons/tfi";
import { VscCreditCard } from "react-icons/vsc";
import { FaCcPaypal, FaAlipay } from "react-icons/fa6";
import { useSearchParams } from "next/navigation";
const methods = [
  {
    name: "Debit Card",
    icon: <BsCreditCard />,
  },
  {
    name: "UPI",
    icon: <FaAlipay />,
  },
  {
    name: "PhonePay",
    icon: <FaCcPaypal />,
  },
  {
    name: "Net Banking",
    icon: <VscCreditCard />,
  },
  {
    name: "Credit Card",
    icon: <TfiCreditCard />,
  },
];
const Payment = () => {
  const searchParams = useSearchParams();

  // อ่านค่าจาก query param (string)
  const pricePerNight = searchParams.get("pricePerNight") || "0";
  const totalAmount = searchParams.get("totalAmount") || "0";

  const totalAmountNum = parseFloat(totalAmount) || 0;

  return (
    <section className="mx-auto w-full sm:pl-44 px-4 pt-8">
      {/* ส่วนบน */}
      <div className="">
        <div className="pb-2">
          <div className="flex flex-col sm:flex-row items-center mb-1 ">
            <div className="flex items-center w-full sm:w-auto">
              <Link
                href="/hotel"
                className="w-10 h-10 sm:mr-4 rounded-full bg-gray-100 hover:bg-gray-200 flex justify-center items-center"
              >
                <FaAngleLeft />
              </Link>
              <p className="flex-1 text-center sm:hidden ml-2">
                Payment details
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="hidden sm:block sm:py-4 sm:ml-10">Payment Details</h2>
      {/* ส่วนล่าง */}
      <div className="flex flex-col-reverse sm:flex-row">
        {/* ฝั่งซ้าย */}
        <div className="w-full sm:w-3/6 sm:pl-16">
          <div className="w-full max-w-md space-y-4">
            {methods.map((m) => (
              <Link
                href={"/payment-done"}
                key={m.name}
                className="group flex items-center gap-4 p-4 rounded-lg cursor-pointer sm:hover:ml-8 hover:shadow-md hover:border hover:border-blue-600"
              >
                <div className="text-4xl">{m.icon}</div>
                <span className="flex-1 text-gray-800">{m.name}</span>
                {/* แสดงเฉพาะตอน hover */}
                <span className="hidden group-hover:inline text-blue-500">
                  <FaAngleRight />
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* ฝั่งขวา*/}
        <div className="w-full sm:w-3/6">
          <div className="space-y-6 sm:px-36">
            <div className="flex items-center space-x-4 shadow-lg p-3">
              <div className="flex flex-col w-full">
                <p className="mb-1 text-gray-400">Base fare</p>
                <p className="mb-1 text-gray-400">Total discount</p>
                <p className="mb-1 text-gray-400">Price after discount</p>
                <p className="mb-1 text-gray-400">Taxes & service fees</p>
                <p className="mt-2 font-bold text-blue-600 text-lg">
                  Total Amount
                </p>
              </div>
              <div className="flex flex-col text-right text-blue-300 font-semibold w-28">
                <p>{pricePerNight}</p>
                <p>0</p>
                <p>{pricePerNight}</p>
                <p>{(parseFloat(pricePerNight) * 0.07).toFixed(2)}</p>
                <p className="mt-2 text-xl font-bold text-blue-600">
                  {" "}
                  {totalAmountNum.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Payment;
