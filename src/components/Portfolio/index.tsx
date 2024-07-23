const Portfolio = () => {
  return (
    <>
      <section className="w-full py-36">
        <div className="container">
          <div className="w-full h-full">
            <h1 className="text-white text-4xl md:text-5xl font-bold text-center text-shadow mb-5">
              My Portfolio
            </h1>
            <p className="text-center text-secondary">
              Selamat datang di portofolio saya! Di sini, Anda akan menemukan
              kumpulan proyek dan karya saya di bidang web programming.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full px-4 pt-36 pb-32 bg-slate-800">
        <div className="mx-auto mb-16 max-w-xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">
            Project Terbaru
          </h2>
          <p className="text-md font-medium text-secondary md:text-lg">
            Setiap proyek mencerminkan kemampuan saya dalam menggunakan berbagai
            teknologi dan framework seperti HTML, CSS, JavaScript, React, dan
            Node.js. Saya sangat antusias dalam menciptakan aplikasi web yang
            fungsional, responsif, dan user-friendly.
          </p>
        </div>

        <div className="flex w-full flex-wrap justify-center px-4 xl:mx-auto xl:w-10/12">
          <div className="mb-12 p-4 md:w-1/2 shadow">
            <div className="overflow-hidden rounded-md shadow-md shadow-primary">
              <img
                src="/img/portfolio/1.png"
                alt="Landing Page"
                width="w-full"
              />
            </div>
            <h3 className="mt-5 mb-3 text-xl font-semibold text-white">
              Landing Page
            </h3>
            <p className="text-base font-medium text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius,
              iusto! Aliquam, corporis.
            </p>
          </div>
          <div className="mb-12 p-4 md:w-1/2 shadow">
            <div className="overflow-hidden rounded-md shadow-md shadow-primary">
              <img src="/img/portfolio/2.png" alt="E-Commerce" width="w-full" />
            </div>
            <h3 className="mt-5 mb-3 text-xl font-semibold text-white">Crud</h3>
            <p className="text-base font-medium text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius,
              iusto! Aliquam, corporis.
            </p>
          </div>
          <div className="mb-12 p-4 md:w-1/2 shadow">
            <div className="overflow-hidden rounded-md shadow-md shadow-primary">
              <img
                src="/img/portfolio/3.png"
                alt="Technical Documentation"
                width="w-full"
              />
            </div>
            <h3 className="mt-5 mb-3 text-xl font-semibold text-white">
              Technical Documentation
            </h3>
            <p className="text-base font-medium text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius,
              iusto! Aliquam, corporis.
            </p>
          </div>
          <div className="mb-12 p-4 md:w-1/2 shadow">
            <div className="overflow-hidden rounded-md shadow-md shadow-primary">
              <img
                src="/img/portfolio/4.png"
                alt="Tribute Page"
                width="w-full"
              />
            </div>
            <h3 className="mt-5 mb-3 text-xl font-semibold text-white">
              Landing Page
            </h3>
            <p className="text-base font-medium text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius,
              iusto! Aliquam, corporis.
            </p>
          </div>
          <div className="mb-12 p-4 md:w-1/2 shadow">
            <div className="overflow-hidden rounded-md shadow-md shadow-primary">
              <img src="/img/portfolio/5.png" alt="Anime List" width="w-full" />
            </div>
            <h3 className="mt-5 mb-3 text-xl font-semibold text-white">
              Anime List
            </h3>
            <p className="text-base font-medium text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius,
              iusto! Aliquam, corporis.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio
