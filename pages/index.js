import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title key="pagetitle">Welcome to Triweb</title>
        <meta
          name="description"
          content="Triweb is a developmnet agency specialised in web development"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container my-10 px-5 md:flex md:p-0">
        <div className="md:flex items-center">
          <div className="md:w-3/4">
            <h1 className="lg:text-6xl font-bold leading-12 text-4xl text-white hero-text">
              Lets bring your digital vision to life!
            </h1>
            <p className="mt-4 text-lg font-normal ">
              Welcome to triWeb development agency, where we turn your ideas
              into stunning websites and mobile apps. Get ready to stand out in
              the digital world!
            </p>
            <div className="flex mt-6 w-fit items-center space-x-3 py-3 px-6 bg-indigo-600 text-white rounded-lg  transition-all duration-400 transform hover:scale-105 cursor-pointer hover:shadow-lg">
              <Link
                href="mailto:triwebdigital@gmail.com"
                role="button"
                className="text-lg text-md"
              >
                Lets talk
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-lg md:flex justify-center items-center  hidden">
          <Image
            className="rounded-lg"
            src="/images/hero.gif"
            alt=""
            width={550}
            height={550}
          />
        </div>
      </div>
      <div className="container my-10 px-5 md:flex md:p-0">
        <div className="hidden lg:block">
          <ul className="flex mt-32 space-x-36 justify-center content-center">
            <li className="text-center">
              <Link href="#" className="text-2xl font-semibold text-gray-600">
                Wordpress Custom Sites
              </Link>
            </li>
            <li className="text-center">
              <Link href="#" className="text-2xl font-semibold text-gray-600">
                Laravel Web Apps
              </Link>
            </li>
            <li className="text-center">
              <Link
                href="#"
                className="text-2xl text-center font-semibold text-gray-600"
              >
                React & React Native Apps
              </Link>
            </li>
            <li className="text-center">
              <Link
                href="#"
                className="text-2xl text-center font-semibold text-gray-600"
              >
                Next.Js Web Apps
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
