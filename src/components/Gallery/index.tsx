import ReactPlayer from "react-player"
import Videos from "./Videos"

const Gallery = () => {
  return (
    <>
      <section className="w-full py-36">
        <div className="container">
          <div className="w-full h-full">
            <h1 className="text-white text-4xl md:text-5xl font-bold text-center text-shadow mb-2">
              My Gallery
            </h1>
            <p className="text-center text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, hic
              ducimus!
            </p>
          </div>
        </div>
      </section>

      <section className="pt-36 pb-32 bg-slate-800">
        <div className="container">
          <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
            <h2 className="h-15 text-xl font-semibold text-secondary md:col-start-4 md:row-start-2 md:flex">
              <span className="self-center">Welcome to My Gallery</span>
            </h2>
            <div className="h-15 text-lg font-bold text-secondary md:col-start-2 md:row-start-2 md:flex">
              <span className="self-end">@sandiamelani</span>
            </div>

            <div className="h-15 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] overflow-hidden group relative hover:scale-95 shadow transition-all duration-500">
              <div className="w-full h-full bg-[url('/img/gallery/1.jpg')] bg-cover bg-center absolute group-hover:scale-125 group-hover:rotate-12 transition-all duration-500"></div>
            </div>
            <div className="h-15 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] md:col-start-3 overflow-hidden group relative hover:scale-95 shadow transition-all duration-500">
              <div className="w-full h-full bg-[url('/img/gallery/2.jpg')] bg-cover bg-center absolute group-hover:scale-125 group-hover:rotate-12 transition-all duration-500"></div>
            </div>
            <div className="h-15 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] overflow-hidden group relative hover:scale-95 shadow transition-all duration-500">
              <div className="w-full h-full bg-[url('/img/gallery/3.jpg')] bg-cover bg-center absolute group-hover:scale-125 group-hover:rotate-12 transition-all duration-500"></div>
            </div>
            <div className="h-15 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] overflow-hidden group relative hover:scale-95 shadow transition-all duration-500">
              <div className="w-full h-full bg-[url('/img/gallery/4.jpg')] bg-cover bg-center absolute group-hover:scale-125 group-hover:rotate-12 transition-all duration-500"></div>
            </div>
            <div className="h-15 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] overflow-hidden group relative hover:scale-95 shadow transition-all duration-500">
              <div className="w-full h-full bg-[url('/img/gallery/5.jpg')] bg-cover bg-center absolute group-hover:scale-125 group-hover:rotate-12 transition-all duration-500"></div>
            </div>
            <div className="h-15 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] md:col-start-2 overflow-hidden group relative hover:scale-95 shadow transition-all duration-500">
              <div className="w-full h-full bg-[url('/img/gallery/6.jpg')] bg-cover bg-center absolute group-hover:scale-125 group-hover:rotate-12 transition-all duration-500"></div>
            </div>
            <div className="h-15 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] md:col-start-4 overflow-hidden group relative hover:scale-95 shadow transition-all duration-500">
              <div className="w-full h-full bg-[url('/img/gallery/7.jpg')] bg-cover bg-center absolute group-hover:scale-125 group-hover:rotate-12 transition-all duration-500"></div>
            </div>
            <div className="h-15 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] overflow-hidden group relative hover:scale-95 shadow transition-all duration-500">
              <div className="w-full h-full bg-[url('/img/gallery/8.jpg')] bg-cover bg-center absolute group-hover:scale-125 group-hover:rotate-12 transition-all duration-500"></div>
            </div>
            <div className="h-15 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] md:col-start-3 overflow-hidden group relative hover:scale-95 shadow transition-all duration-500">
              <div className="w-full h-full bg-[url('/img/gallery/9.jpg')] bg-cover bg-center absolute group-hover:scale-125 group-hover:rotate-12 transition-all duration-500"></div>
            </div>
            <div className="h-15 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] md:col-start-3 overflow-hidden group relative hover:scale-95 shadow transition-all duration-500">
              <div className="w-full h-full bg-[url('/img/gallery/10.jpg')] bg-cover bg-center absolute group-hover:scale-125 group-hover:rotate-12 transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      <Videos />
    </>
  )
}

export default Gallery
