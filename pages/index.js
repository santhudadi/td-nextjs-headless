import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title key="pagetitle">Welcome to Triweb</title>
        <meta name="description" content="Triweb is a developmnet agency specialised in web development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div class="container my-10 md:flex">
        <div class="md:flex items-center">
          <div class="md:w-3/4">
            <h1 class="lg:text-6xl font-bold leading-10 text-4xl">Let's bring your digital vision to life!</h1>
            <p class="mt-4 text-lg font-normal ">Welcome to triWeb development agency, where we turn your ideas into stunning websites and mobile apps. Get ready to stand out in the digital world!</p>
            <div class="flex mt-10 w-40 items-center space-x-3 py-3 px-6 bg-indigo-600 text-white rounded-lg  transition-all duration-400 transform hover:scale-105 cursor-pointer hover:shadow-lg">
              <button class="text-lg text-md ">Lets talk</button>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                </svg>
              </span>
            </div>
          </div>
        </div>

        <div class="max-w-lg md:flex justify-center items-center  hidden">
          <img class="rounded-lg" src="images/hero.gif" alt="" />
        </div>
      </div>
      <div class="hidden lg:block">
      <ul class="flex mt-32 space-x-36 justify-center">
        <li><a href="#" class="text-2xl font-semibold text-gray-600">Google</a></li>
        <li><a href="#" class="text-2xl font-semibold text-gray-600">UBER</a></li>
        <li><a href="#" class="text-2xl font-semibold text-gray-600">Stripe</a></li>
        <li><a href="#" class="text-2xl font-semibold text-gray-600">Nike</a></li>
        <li><a href="#" class="text-2xl font-semibold text-gray-600">Mashable</a></li>
        <li><a href="#" class="text-2xl font-semibold text-gray-600">Airbnb</a></li>
      </ul>
  </div>
    </>
  );
}