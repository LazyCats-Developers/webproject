function CaseCard({data,index}) {
    return(
        <div className="group flex flex-col overflow-hidden rounded-lg shadow-lg">
        <div className="flex-shrink-0">
          <img id={data} className="h-96 w-full object-cover group-hover:object-scale-down hover:transition hover:duration-300 hover:ease-in-out" src={data.imageUrl} alt="" />
        </div>
        <div className="flex flex-1 flex-col justify-between bg-white p-6">
          <div className="flex-1">
            <p className="text-xl font-medium text-gray-900">
              <a href={data.category.href} className="hover:underline">
                {data.category.name}
              </a>
            </p>
            <a href={data.href} className="mt-2 block">
              <p id={index} className="lg:text-4xl pt-4 pb-6 text-2xl font-semibold transition duration-100 ease-in-out text-gray-900 group-hover:text-orange-500">{data.title}</p>
              <p className="mt-3 text-2xl space-y-2 leading-9 text-gray-500">{data.description}</p>
            </a>
          </div>
        </div>
      </div>
    )
}

export default CaseCard