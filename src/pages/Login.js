import Image from 'next/image';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white-100">
      <Head>
        <title>Login Portal</title>
      </Head>
      <div className="bg-white shadow-md rounded-lg max-w-4xl w-full flex flex-col md:flex-row overflow-hidden">
        <div className="relative w-full md:w-1/2 h-64 md:h-auto">
          <Image
            src="/images/swimmer.png" // Replace with your image path
            alt="Swimmer"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold mb-1">Login Portal</h2>
              <p className="text-gray-600 text-sm">Login as a student or instructor</p>
            </div>
            <div>
              <Image
                src="/images/turtle.png" // Replace with your logo path
                alt="Logo"
                width={200}
                height={240}
              />
            </div>
          </div>
          <form className="space-y-4">
            <div>
              <label htmlFor="id" className="block text-sm font-medium text-gray-700">
                ID
              </label>
              <input
                type="text"
                id="id"
                name="id"
                placeholder="FTS34568"
                className="mt-1 block w-full px-3 py-2 border-b border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                style={{ borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 border-b border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                style={{ borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 block w-full px-3 py-2 border-b border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                style={{ borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-bgblack hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Log into swim account
              </button>
            </div>
            <div>
              <button
                type="button"
                className="w-full flex justify-center py-2 px-4 border border-black rounded-md shadow-sm text-sm font-medium text-black bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Register swim account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
