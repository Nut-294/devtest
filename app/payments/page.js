import Image from "next/image";
import Link from "next/link";
import { FaAngleLeft,FaAngleRight } from "react-icons/fa";
import { BsCreditCard } from "react-icons/bs";
import { TfiCreditCard } from "react-icons/tfi";
import { VscCreditCard } from "react-icons/vsc";
import { FaCcPaypal ,FaAlipay} from "react-icons/fa6";

const Payment = () => {
  const methods = [
    {
      name: "Debit Card",
      icon: <BsCreditCard/>,
  
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
      icon: <VscCreditCard/>,
   
    },
    {
      name: "Credit Card",
      icon: <TfiCreditCard />,

    },
  ];
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
              <div className="text-4xl">
                {m.icon}
              </div>
              <span className="flex-1 text-gray-800">{m.name}</span>
              {/* แสดงเฉพาะตอน hover */}
              <span className="hidden group-hover:inline text-blue-500"><FaAngleRight/></span>
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
                <p>1,000.00</p>
                <p>0.00</p>
                <p>1,000.00</p>
                <p>140.00</p>
                <p className="mt-2 text-xl font-bold text-blue-600">1,140.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Payment;

// {methods.map((m) => (
//   <div
//     key={m.name}
//     className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer ${
//       m.selected
//         ? "border border-blue-500 shadow-sm ml-4"
//         : "hover:shadow-md"
//     }`}
//   >
//     <Image
//       src={m.icon}
//       alt={m.name}
//       width={30}
//       height={30}
//       className="object-contain"
//     />
//     <span className="flex-1 text-gray-800">{m.name}</span>
//     {m.selected && <span className="text-blue-500">{">"}</span>}
//   </div>
// ))}
