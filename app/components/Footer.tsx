import { faFacebook, faGithub, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Footer() {
  const contacts = [
    {
      icon: faFacebook,
      link: 'https://www.facebook.com/taweerat.poom'
    },
    {
      icon: faInstagram,
      link: 'https://www.instagram.com/taweeratzzz/'
    },
    {
      icon: faGithub,
      link: 'https://github.com/taweeratWatchara156'
    },
    {
      icon: faTiktok,
      link: 'https://www.tiktok.com/@taweeratzzz'
    }
  ]

  return (
    <div className="flex gap-5 flex-col pb-16 sm:pb-auto sm:flex-row items-center sm:items-start justify-between mt-10 py-5 sm:py-10 px-20 bg-[#2a4f88] text-white font-bold text-base md:text-lg text-bold">
        <h1>Taweerat Watcharamanokarn</h1>

        <div className="flex gap-5">
          {
            contacts.map((i, index) => {
              return <a key={index} href={i.link} target="_blank" className="duration-200 hover:bg-white hover:text-[#2a4f88] rounded-full border p-2 flex justify-center items-center"><FontAwesomeIcon icon={i.icon}/></a>
            })
          }
        </div>
    </div>
  )
}
