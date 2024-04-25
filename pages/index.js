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
      <div class="container my-10 md:flex">
        <div class="md:flex items-center">
          <div class="md:w-3/4">
            <h1 class="lg:text-6xl font-bold leading-10 text-4xl">
              Lets bring your digital vision to life!
            </h1>
            <p class="mt-4 text-lg font-normal ">
              Welcome to triWeb development agency, where we turn your ideas
              into stunning websites and mobile apps. Get ready to stand out in
              the digital world!
            </p>
            <div class="flex mt-10 w-40 items-center space-x-3 py-3 px-6 bg-indigo-600 text-white rounded-lg  transition-all duration-400 transform hover:scale-105 cursor-pointer hover:shadow-lg">
              <button class="text-lg text-md ">Lets talk</button>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>

        <div class="max-w-lg md:flex justify-center items-center  hidden">
          <Image
            class="rounded-lg"
            src="/images/hero.gif"
            alt=""
            width={500}
            height={500}
          />
        </div>
      </div>
      <div class="hidden lg:block">
        <ul class="flex mt-32 space-x-36 justify-center">
          <li>
            <Link href="#" class="text-2xl font-semibold text-gray-600">
              Google
            </Link>
          </li>
          <li>
            <Link href="#" class="text-2xl font-semibold text-gray-600">
              UBER
            </Link>
          </li>
          <li>
            <Link href="#" class="text-2xl font-semibold text-gray-600">
              Stripe
            </Link>
          </li>
          <li>
            <Link href="#" class="text-2xl font-semibold text-gray-600">
              Nike
            </Link>
          </li>
          <li>
            <Link href="#" class="text-2xl font-semibold text-gray-600">
              Mashable
            </Link>
          </li>
          <li>
            <Link href="#" class="text-2xl font-semibold text-gray-600">
              Airbnb
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
