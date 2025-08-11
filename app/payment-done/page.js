import Link from "next/link";

const PaymentDone = () => {
  return (
    <section className="w-full h-screen flex justify-center items-center">
    <div className="flex flex-col text-center items-center px-8 sm:px-0">
      <img src="/success.jpg" className="w-5/6 h-4/5 ml-12 mt-16 sm:mt-0 sm:ml-24" alt="success" />
      <h1 className="text-blue-600 text-base sm:text-4xl mt-4 font-bold ">Booking Successfully completed</h1>
      <p className="mt-1 sm:mt-2 mb-44 sm:mb-4 text-base sm:text-lg">Your trip schedule is ready,please check under profile.</p>
      <Link href="/" className="mt-4 px-4 py-2 w-full sm:w-40 bg-blue-600 text-white rounded">
        Home
      </Link>
    </div>
  </section>
  );
};
export default PaymentDone;
