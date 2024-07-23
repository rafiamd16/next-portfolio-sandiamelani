import Image from "next/image"

const loading = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center gap-4">
      <div className="animate-bounce shadow-2xl shadow-sky-400 rounded-full overflow-hidden">
        <Image
          src="/img/gallery/loading.jpg"
          width={100}
          height={100}
          alt="..."
          className="w-full object-cover object-center"
        />
      </div>
      <h3 className="text-2xl font-bold text-white text-shadow">
        Tunggu Sebentar...
      </h3>
    </div>
  )
}

export default loading
