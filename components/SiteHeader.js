export default function SiteHeader() {
    return (
        <header className="bg-white shadow">
  <nav class="flex items-center py-8 px-14 justify-between">
  <div class="flex items-center">
    <h1 class="text-2xl font-bold text-gray-700 ">LandingKit</h1>
    <div class="ml-10">
      <ul class="md:flex space-x-8 hidden ">
        <li><a href="#" class="text-gray-800 font-semibold">Magazine</a></li>
        <li><a href="#" class="text-gray-800 font-semibold">World</a></li>
        <li><a href="#" class="text-gray-800 font-semibold">Tech</a></li>
        <li><a href="#" class="text-gray-800 font-semibold">Health</a></li>
        <li><a href="#" class="text-gray-800 font-semibold">Sport</a></li>
      </ul>
    </div>
  </div>
  <div class="lg:flex hidden items-center space-x-3 py-3 px-6 bg-indigo-600 text-white rounded-lg  transition-all duration-400 transform hover:scale-105 cursor-pointer hover:shadow-lg">
 <button>Buy now</button>
 <span>
   <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
</svg>
 </span>
  </div>
  </nav>

        </header>
    );
}