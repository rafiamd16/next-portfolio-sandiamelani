import SkillList from "@/components/About/MapData"
import { skills, Skill } from "@/components/data/skills"
import Image from "next/image"
import Link from "next/link"

const About: React.FC = () => {
  const skillData: Skill[] = skills()

  return (
    <>
      <section className="w-full py-36">
        <div className="container">
          <div className="w-full h-full">
            <h1 className="text-white text-4xl md:text-5xl font-bold text-center text-shadow mb-2">
              About Me
            </h1>
            <p className="text-center text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, hic
              ducimus!
            </p>
          </div>
        </div>
      </section>

      <section className="w-full px-4 pt-36 pb-32 bg-slate-800">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full md:px-4 lg:w-1/2 self-center">
              <div className="mb-14 lg:mb-0">
                <Image
                  src="/img/gallery/about.png"
                  className="max-w-full mx-auto custom-shadow"
                  width={550}
                  height={550}
                  alt="sandia melani"
                />
              </div>
            </div>

            <div className="w-full md:px-4 lg:w-1/2 self-end">
              <div className="flex items-center gap-3 mb-3">
                <svg
                  role="img"
                  className="text-primary border border-primary rounded-full bg-primary"
                  width={40}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <title>Authy</title>
                  <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm3.42 5.338c.274 0 .551.105.769.315l2.862 2.862c2.054 2.039 2.084 5.35.105 7.449a.21.21 0 0 1-.045.06l-.03.03-.03.03c-.015.015-.045.03-.06.045-2.098 1.978-5.41 1.948-7.463-.105l-2.863-2.863a1.05 1.05 0 0 1 0-1.499 1.05 1.05 0 0 1 1.5 0l2.861 2.863a3.23 3.23 0 0 0 4.542.03 3.244 3.244 0 0 0-.03-4.541l-2.863-2.862a1.05 1.05 0 0 1 0-1.5c.203-.209.472-.314.746-.314zM8.758 6.397a5.33 5.33 0 0 1 3.715 1.564l2.863 2.862c.42.42.42 1.08 0 1.5-.42.419-1.08.419-1.5 0L10.975 9.46a3.249 3.249 0 0 0-4.558-.015 3.243 3.243 0 0 0 .03 4.54l2.863 2.863c.42.42.42 1.08 0 1.499a1.05 1.05 0 0 1-1.499 0L4.95 15.484c-2.054-2.053-2.084-5.365-.105-7.463.015-.03.03-.045.045-.06l.03-.03.03-.03c.015-.015.045-.03.06-.045a5.355 5.355 0 0 1 3.748-1.46z" />
                </svg>
                <h2 className="text-xl font-bold text-primary">Tentang Saya</h2>
              </div>
              <p className="text-base font-medium text-secondary leading-relaxed mb-3">
                Halo! Nama saya Sandia Melani, dan saya adalah siswa berusia 18
                tahun di SMKN 2 Mataram. Saya memiliki minat yang besar dalam
                dunia teknologi dan saat ini saya adalah seorang junior web
                developer. Selama waktu luang, saya aktif dalam ekstrakurikuler
                Pasukan Pengibar Bendera, yang telah membantu saya mengembangkan
                keterampilan kepemimpinan dan kerjasama tim.
              </p>
              <p className="text-base font-medium text-secondary leading-relaxed">
                Saya selalu bersemangat untuk belajar hal-hal baru, terutama
                yang berkaitan dengan pemrograman dan pengembangan web. Saya
                percaya bahwa kombinasi antara pendidikan formal dan kegiatan
                ekstrakurikuler memberikan saya keseimbangan yang baik antara
                akademik dan soft skills, mempersiapkan saya untuk tantangan
                masa depan di dunia profesional. Terima kasih telah mengunjungi
                profil saya!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container">
          <div className="flex items-center lg:justify-center gap-1 mb-2">
            <Image
              src="/img/skills/code.png"
              className="custom-shadow"
              width={64}
              height={64}
              alt="code"
            />
            <h2 className="font-bold text-primary text-xl md:text-4xl">
              Skills
            </h2>
          </div>
          <div className="marquee-container">
            <div className="marquee-content block">
              <div className="flex flex-col gap-y-3">
                <SkillList skills={skillData} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-36 pb-32 bg-slate-800">
        <div className="container">
          <div className="flex items-center lg:justify-center gap-2 mb-5">
            <Image
              src="/img/skills/education.png"
              width={64}
              height={64}
              alt="education"
            />
            <h2 className="font-bold text-primary text-xl md:text-4xl">
              Education
            </h2>
          </div>

          <div className="max-w-4xl mx-auto bg-dark rounded-xl custom-shadow p-6">
            <div className="w-full mb-5">
              <div className="flex flex-col h-max items-center gap-2 float-left mr-4 mb-2">
                <Image
                  src="/img/skills/smkn2mataram.png"
                  alt="smkn2mataram"
                  className="custom-shadow"
                  width={100}
                  height={100}
                />
                <h2 className="font-bold text-white text-shadow text-lg text-center">
                  SMKN 2 MATARAM
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-secondary">
                SMK Negeri 2 Mataram merupakan sekolah menengah tingkat atas
                yang didirikan tahun 1962 dengan nama SKOPMA ( Sekolah Koperasi
                Menengah Atas ), seiring perkembangan dunia pendidikan dan
                kebutuhan dunia usaha dan dunia industri akan tenaga siap pakai
                yang semakin meningkat pada beberapa bidang keahlian maka pada
                tahun 1968 SKOPMA mengalami perubahan nama menjadi SMEA (
                Sekolah Menengah Ekonomi Atas ). Nama SMK Negeri 2 Mataram
                digunakan seiring keputusan pemerintah semenjak tahun 1998. SMK
                Negeri 2 Mataram melakukan proses pembelajaan pada bidang Bisnis
                Manajemen dan Pariwisata dengan 4 kompetensi keahlian yaitu
                Usaha Jasa Pariwisata, Akuntansi, Administrasi Perkantoran dan
                Pemasaran.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <Link
                href="https://smkn2mataram.sch.id"
                target="_blank"
                className="py-2 px-8 rounded bg-primary text-dark font-medium hover:bg-opacity-80 transition-all duration-300 ease-in-out">
                Learn More
              </Link>
              <p className="self-center sm:self-end text-secondary text-sm">
                Source: smkn2mataram.sch.id
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
