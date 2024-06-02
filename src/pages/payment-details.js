// pages/index.js
import Image from 'next/image';

const PaymentPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header Section */}
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Payment Details</h1>
        <Image src="/turtle-logo.png" alt="Turtles Swim School" width={100} height={50} />
      </header>

      {/* Payment Method Section */}
      <div className="flex items-center mb-8">
        <span className="mr-4 font-medium">Payment Method</span>
        <Image src="/payment-methods.png" alt="Payment Methods" width={200} height={40} />
      </div>

      <div className="grid grid-cols-3 gap-8">
        {/* Registered Cards Section */}
        <div className="col-span-2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Registered cards</h2>
          <div className="space-y-4">
            <div className="flex items-center p-4 border rounded-lg">
              <input type="radio" name="card" className="mr-4" checked />
              <div className="flex-1">
                <div className="flex justify-between">
                  <span className="font-medium">Bank</span>
                  <span className="font-medium">Son dört hane</span>
                  <span className="font-medium">Full Name</span>
                  <span className="font-medium">Exp date</span>
                </div>
                <div className="flex justify-between">
                  <span>Standard Chartered</span>
                  <span>1234</span>
                  <span>Eric Kocaman</span>
                  <span>12/34</span>
                </div>
              </div>
            </div>

            <div className="flex items-center p-4 border rounded-lg">
              <input type="radio" name="card" className="mr-4" />
              <div className="flex-1">
                <div className="flex justify-between">
                  <span className="font-medium">Bank</span>
                  <span className="font-medium">Son dört hane</span>
                  <span className="font-medium">Full Name</span>
                  <span className="font-medium">Exp date</span>
                </div>
                <div className="flex justify-between">
                  <span>Standard Chartered</span>
                  <span>1234</span>
                  <span>Eric Kocaman</span>
                  <span>12/34</span>
                </div>
              </div>
            </div>

            <div className="flex items-center p-4 border rounded-lg">
            <input type="radio" name="card" className="mr-4" />
              <div className="flex-1">
                <div className="flex justify-between">
                  <span className="font-medium">Bank</span>
                  <span className="font-medium">Son dört hane</span>
                  <span className="font-medium">Full Name</span>
                  <span className="font-medium">Exp date</span>
                </div>
                <div className="flex justify-between">
                  <span>Standard Chartered</span>
                  <span>1234</span>
                  <span>Eric Kocaman</span>
                  <span>12/34</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Momo Payment Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Momo Payment</h2>
          <div className="flex items-center mb-4">
            <Image src="/momo-logo.png" alt="Momo Logo" width={50} height={50} />
            <input
              type="text"
              placeholder="Phone Number"
              className="ml-4 p-2 border rounded-lg w-full"
            />
          </div>
        </div>
      </div>

      {/* Receipt Section */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Receipt</h2>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span>Product 1</span>
            <span>1 x $10.00</span>
          </div>
          <div className="flex justify-between">
            <span>Product 2</span>
            <span>2 x $20.00</span>
          </div>
          <div className="flex justify-between">
            <span>Product 3</span>
            <span>1 x $30.00</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>$80.00</span>
          </div>
        </div>
        <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg">
          Review your order
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;