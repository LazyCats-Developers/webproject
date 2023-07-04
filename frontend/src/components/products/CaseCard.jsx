function CaseCard({ data, index }) {
  return (
    <article className="group bg-white flex flex-col w-full drop-shadow-md lg:w-96 rounded-lg">
      <div className="relative h-full xl:h-64 overflow-hidden rounded-t-lg">
        <img id={data} className="scale-110 group-hover:scale-125 transition duration-300 ease-in-out" src={data.imageUrl} alt="" />
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