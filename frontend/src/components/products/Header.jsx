function Header() {
  return (
    <header>
      <div className="px-4 md:px-10">
        <div className="max-w-full pt-24 pb-12 lg:pt-40 lg:pb-48">
          <div className="flex lg:justify-center">
            <div className="flex flex-col lg:w-1/2">
              <h1 className="text-5xl font-semibold tracking-tight pb-4 lg:text-6xl">
                Productos
              </h1>
              <p className="text-xl max-w-3xl leading-8 text-black ">
                Conoce todos nuestros productos en un solo lugar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header