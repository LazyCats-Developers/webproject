function CaseCard({ data, index }) {
  return (
    <article className="group bg-white flex flex-col w-full drop-shadow-md mb-4 md:w-56 lg:w-64 xl:w-72 2xl:w-80">
      <div className="">
        <div className="relative h-full lg:h-48 overflow-hidden">
          <img id={data} className="group-hover:scale-110 transition duration-300 ease-in-out" src={data.imageUrl} alt="" />
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between p-6">
        <div className="">
          <a href={data.href} className="">
            <h3 id={index} className="text-3xl font-semibold transition duration-100 ease-in-out text-black group-hover:text-orange-500 md:text-xl">
              {data.title}
            </h3>
            <p className="text-lg space-y-2 leading-9 text-gray-700">
              {data.author.name}
            </p>
            <p className="text-lg space-y-2 leading-9 text-gray-700">
              {data.date}
            </p>
          </a>
        </div>
      </div>
    </article>
  )
}

export default CaseCard