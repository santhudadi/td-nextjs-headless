export default function SiteHeader() {
    return (
        <header className="shadow">
  <nav class="flex items-center py-8 px-14 justify-between">
  <div class="flex items-center">
    <h1 class="text-2xl font-bold text-white-bold">triWeb</h1>
  </div>
  <div class="ml-10">
      <ul class="md:flex space-x-8 hidden ">
        <li><a href="#" class="text-white font-semibold">Services</a></li>
        <li><a href="#" class="text-white font-semibold">About</a></li>
        <li><a href="#" class="text-white font-semibold">Blog</a></li>
        <li><a href="#" class="text-white font-semibold">Contact</a></li>
      </ul>
    </div>
  </nav>

        </header>
    );
}