import Link from "next/link";
import ProjectsSection from "./components/ProjectsSection";


export default function Home() {
  return (
    <main className="pb-24 lg:pb-4 text-slate-50">
      <section className="mx-auto max-w-4xl px-12 sm:px-0">
        <div className="mt-10 lg:mt-20 xl:mt-24 slide-in-bottom">
          <div className="text-sm font-bold hidden lg:flex gap-3 items-center">
            <img src="/icons/hello.png" alt="hello emoji" className="h-4 w-4" />
            <p>Hello !</p>
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold mt-5">
            Moi, c'est <span className="marker">Alicia,</span>
            <br />
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mt-2 block">
              UX & UI Designer.
        
            </span>
            
          </h1>
          <div className="flex flex-col sm:flex-row mt-9 gap-3">
            <a
              className="bg-darkTwo  text-slate-50 px-6 py-3  rounded-full capitalize font-medium justify-center flex items-center transform hover:bg-white hover:text-black hover:-translate-y-1 hover:scale-110  transition-all"
              href="https://www.linkedin.com/in/alicia-meyer-951995197/"
              target="_blank"
            >
              <span className="inline-block mr-2 slide-in-bottom overflow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="feather feather-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </span>
              LinkedIn
            </a>

            <a
  className="bg-darkTwo text-slate-50 px-6 py-3 rounded-full font-medium flex items-center justify-center hover:bg-white hover:text-black hover:-translate-y-1 hover:scale-110  transition-all"
  href="https://mail.google.com/mail/?view=cm&to=aliciameyer2610@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
>
              <span className="inline-block mr-2 slide-in-bottom overflow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="feather feather-mail"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </span>
              Mail
            </a>
          </div>
          <p className="text-gray-400 text-lg tracking-wide mt-9">
            Diplômée d'un Master en UX & UI design, je suis passionnée par le création de produits digitaux intuitifs et efficaces. 
          </p>
        </div>
        <hr className="my-5 opacity-30"></hr>
        <div className="slide-in-bottom" id="timeline">
          <h2 className="text-2xl font-semibold text-slate-50 mb-5">
            Mon parcours
          </h2>
          <ul className="rs-timeline rs-timeline-align-alternate">
            <li align="alternate" className="rs-timeline-item">
              <span className="rs-timeline-item-tail"></span>
              <span className="rs-timeline-item-dot"></span>
              <div className="rs-timeline-item-content">
                <p className="text-slate-50">2018 - 2019</p>
                <p className="text-slate-50">Diplômée Baccalauréat Scientifique</p>
                <span className="text-indigo-300">
                  Lycée Victor Hugo, Poitiers
                </span>
              </div>
            </li>
            <li align="alternate" className="rs-timeline-item">
              <span className="rs-timeline-item-tail"></span>
              <span className="rs-timeline-item-dot"></span>
              <div className="rs-timeline-item-content">
                <p className="text-slate-50">2020 - 2021</p>
                <p className="text-slate-50">DUT1 Gestion des Entrprises et des Administrations</p>
                <span className="text-indigo-300">
                  Université de Poitiers

                </span>
              </div>
            </li>
            
            <li align="alternate" className="rs-timeline-item">
              <span className="rs-timeline-item-tail"></span>
              <span className="rs-timeline-item-dot"></span>
              <div className="rs-timeline-item-content">
                <p className="text-slate-50">05/2020 - 06/2020</p>
                <p className="text-slate-50">Stage, Assistante ressources humaines</p>
                <span className="text-indigo-300">
                  Proman, Poitiers

                </span>
              </div>
            </li>
            <li align="alternate" className="rs-timeline-item">
              <span className="rs-timeline-item-tail"></span>
              <span className="rs-timeline-item-dot"></span>
              <div className="rs-timeline-item-content">
                <p className="text-slate-50">2020 - 2021</p>
                <p className="text-slate-50">DUT2 Gestion des Entrprises et des Administrations</p>
                <span className="text-indigo-300">
                  Université de Poitiers

                </span>
              </div>
            </li>
            <li align="alternate" className="rs-timeline-item">
              <span className="rs-timeline-item-tail"></span>
              <span className="rs-timeline-item-dot"></span>
              <div className="rs-timeline-item-content">
                <p className="text-slate-50">04/2020 - 06/2020</p>
                <p className="text-slate-50">Stage, Responsable de communication</p>
                <span className="text-indigo-300">
                  E. Leclerc, Buxerolles

                </span>
              </div>
            </li>
            <li align="alternate" className="rs-timeline-item">
              <span className="rs-timeline-item-tail"></span>
              <span className="rs-timeline-item-dot"></span>
              <div className="rs-timeline-item-content">
                <p className="text-slate-50">2021-2022</p>
                <p className="text-slate-50">DUETI Business and Management</p>
                <span className="text-indigo-300">
                  Universidad Politecnica de Valencia
                </span>
              </div>
            </li>
            <li align="alternate" className="rs-timeline-item">
              <span className="rs-timeline-item-tail"></span>
              <span className="rs-timeline-item-dot"></span>
              <div className="rs-timeline-item-content">
                <p className="text-slate-50">2023-2024</p>
                <p className="text-slate-50">Master 1 Design d'Expériences & Design d'Interfaces (DEDI) </p>
                <span className="text-indigo-300">
                  Université de Toulon, UFR Ingémédia
                  <br />
                </span>
              </div>
            </li>
            <li align="alternate" className="rs-timeline-item">
              <span className="rs-timeline-item-tail"></span>
              <span className="rs-timeline-item-dot"></span>
              <div className="rs-timeline-item-content">
                <p className="text-slate-50">03/2024 - 07/2024</p>
                <p className="text-slate-50">Stage, Cheffe de projets numériques</p>
                <span className="text-indigo-300">
                  Diffcom +, Toulouse
                  <br />
                 
                </span>
              </div>
            </li>
            <li align="alternate" className="rs-timeline-item">
              <span className="rs-timeline-item-tail"></span>
              <span className="rs-timeline-item-dot"></span>
              <div className="rs-timeline-item-content">
                <p className="text-slate-50">2024-2025</p>
                <p className="text-slate-50">Master 2 DEDI en alternance</p>
                <span className="text-indigo-300">
                Université de Toulon, UFR Ingémédia
                </span>
              </div>
            </li>
            <li
              align="alternate"
              className="rs-timeline-item rs-timeline-item-last rs-timeline-item-active"
            >
              <span className="rs-timeline-item-tail"></span>
              <span className="rs-timeline-item-dot rs-timeline-item-custom-dot">
                <div className="relative">
                  <div className="bg-indigo-500 flex items-center justify-center p-1 rounded-full mt-2 ml-[1px] scale-125 absolute"></div>
                  <div className="bg-indigo-500 flex items-center justify-center p-1 rounded-full mt-2 ml-[1px] scale-125 animate-ping absolute"></div>
                </div>
              </span>
              <div className="rs-timeline-item-content">
                <p className="text-slate-50">10/2024 - 10/2025</p>
                <p className="text-slate-50">Apprentie UX & UI Designer</p>
                <span className="text-indigo-300">
                  FANlab, Marine nationale, Toulon
                </span>
              </div>
            </li>
          </ul>
        </div>
        <hr className="my-5 opacity-30"></hr>
        <div id="projects">
          <h2 className="text-2xl font-semibold text-slate-50 mb-5">Projets</h2>
          <div className="w-full grid gap-3 grid-cols-1 sm:grid-cols-2">
            <ProjectsSection />
          </div>
        </div>
        <hr className="my-5 opacity-30"></hr>
        <div id="skills">
          <h2 className="text-2xl font-semibold text-slate-50 mb-5">
            Compétences
          </h2>
          <div className="w-full grid gap-3 grid-cols-2 sm:grid-cols-3 ">
            <div>
            <div
  aria-label="Tech Card"
  className="w-full min-h-12 px-4 py-2 rounded-full border-2 border-indigo-300 text-white text-sm font-medium shadow-sm
             flex items-center justify-center gap-2 text-center"
>

  <span className="slide-in-left font-bold text-m leading-tight w-full min-w-0">
    Recherche utilisateur
  </span>
</div>
            </div>
            <div>
            <div
  aria-label="Tech Card"
  className="w-full min-h-12 px-4 py-2 rounded-full border-2 border-indigo-300 text-white text-sm font-medium shadow-sm
             flex items-center justify-center gap-2 text-center"
>

  <span className="slide-in-left font-bold text-m leading-tight w-full min-w-0">
    Prototypage
  </span>
</div>

            </div>
            <div>
            <div
  aria-label="Tech Card"
  className="w-full min-h-12 px-4 py-2 rounded-full border-2 border-indigo-300 text-white text-sm font-medium shadow-sm
             flex items-center justify-center gap-2 text-center"
>

  <span className="slide-in-left font-bold text-m leading-tight w-full min-w-0">
    Design Thinking
  </span>
</div>
            </div>
            <div>
            <div
  aria-label="Tech Card"
  className="w-full min-h-12 px-4 py-2 rounded-full border-2 border-indigo-300 text-white text-sm font-medium shadow-sm
             flex items-center justify-center gap-2 text-center"
>

  <span className="slide-in-left font-bold text-m leading-tight w-full min-w-0">
    Design de services
  </span>
</div>
            </div>
            <div>
            <div
  aria-label="Tech Card"
  className="w-full min-h-12 px-4 py-2 rounded-full border-2 border-indigo-300 text-white text-sm font-medium shadow-sm
             flex items-center justify-center gap-2 text-center"
>

  <span className="slide-in-left font-bold text-m leading-tight w-full min-w-0">
    Méthode agile
  </span>
</div>
            </div>
            <div>
            </div>
            <div>
            </div>
          </div>
        </div>
        <hr className="my-1.5 opacity-0"></hr>
        <div id="skills">

          <div className="w-full grid gap-3 grid-cols-2 sm:grid-cols-3 ">
            <div>
            <div
  aria-label="Tech Card"
  className="w-full min-h-12 px-4 py-2 rounded-full border-2 border-fuchsia-600 text-white text-sm font-medium shadow-sm
             flex items-center justify-center gap-2 text-center"
>

  <span className="slide-in-left font-bold text-m leading-tight w-full min-w-0">
    Travail en collaboration
  </span>
</div>
            </div>
            <div>
            <div
  aria-label="Tech Card"
  className="w-full min-h-12 px-4 py-2 rounded-full border-2 border-fuchsia-600 text-white text-sm font-medium shadow-sm
             flex items-center justify-center gap-2 text-center"
>

  <span className="slide-in-left font-bold text-m leading-tight w-full min-w-0">
    Gestion des priorités
  </span>
</div>
            </div>
            <div>
            <div
  aria-label="Tech Card"
  className="w-full min-h-12 px-4 py-2 rounded-full border-2 border-fuchsia-600 text-white text-sm font-medium shadow-sm
             flex items-center justify-center gap-2 text-center"
>

  <span className="slide-in-left font-bold text-m leading-tight w-full min-w-0">
    Adaptabilité
  </span>
</div>
            </div>
            <div>
            </div>
            <div>
            </div>
          </div>
        </div>
        <hr className="my-5 opacity-30"></hr>
        <div id="tools">
          <h2 className="text-2xl font-semibold text-slate-50 mb-5">Outils</h2>
          <div className="w-full grid gap-3 grid-cols-2 sm:grid-cols-3">
            <div>
             
       
              <div
                aria-label="Tech Card"
                className="border-2 border-fuchsia-400 bg-fuchsia-950 bg-opacity-40 p-6 rounded-lg shadow-lg text-slate-100 relative h-32 flex justify-center items-center flex-col gap-1.5 overflow-hidden"
              >
                <span className="slide-in-right mb-2">
                <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  className="w-12 h-12 text-fuchsia-400"
  fill= "white"
>
  <title>Figma</title>
  <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"/>
</svg>              </span>
                <span className="slide-in-left font-semibold text-xs">
                  Figma
                </span>
              </div>
            </div>
            <div>
              <div
                aria-label="Tech Card"
                className="border-2 border-fuchsia-400 bg-fuchsia-950 bg-opacity-40 p-6 rounded-lg shadow-lg text-slate-100 relative h-32 flex justify-center items-center flex-col gap-1.5 overflow-hidden"
                >
                <span className="slide-in-right mb-2">
                <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 48 48"
  className="w-12 h-12 text-white"
  fill="currentColor"
>
  <title>Illustrator</title>
  <path d="M29.7998 42V45H18.2002V42H29.7998Z"/>
  <path d="M42 29.7998V18.2002C42 15.4907 41.998 13.6387 41.8809 12.2051C41.7666 10.8065 41.5583 10.0715 41.292 9.54883C40.6688 8.32578 39.6742 7.33119 38.4512 6.70801C37.9285 6.44169 37.1935 6.23341 35.7949 6.11914C34.7198 6.03132 33.4095 6.0081 31.6787 6.00195L29.7998 6H18.2002C15.4907 6 13.6387 6.00204 12.2051 6.11914C10.8065 6.23341 10.0715 6.44169 9.54883 6.70801C8.32578 7.33118 7.33118 8.32578 6.70801 9.54883C6.44169 10.0715 6.23341 10.8065 6.11914 12.2051C6.00204 13.6387 6 15.4907 6 18.2002V29.7998C6 32.5093 6.00204 34.3613 6.11914 35.7949C6.23341 37.1935 6.44169 37.9285 6.70801 38.4512C7.33119 39.6742 8.32578 40.6688 9.54883 41.292C10.0715 41.5583 10.8065 41.7666 12.2051 41.8809C13.6387 41.998 15.4907 42 18.2002 42V45L16.3252 44.998C12.5171 44.9849 10.2975 44.8859 8.57617 44.1465L8.1875 43.9648C6.39996 43.054 4.94595 41.6 4.03516 39.8125C2.99994 37.7804 3 35.1199 3 29.7998V18.2002C3 13.2123 3.00036 10.5624 3.85352 8.57617L4.03516 8.1875C4.88894 6.51185 6.2198 5.12958 7.85547 4.21289L8.1875 4.03516C9.96552 3.12938 12.2245 3.01611 16.3252 3.00195L18.2002 3H29.7998C35.1199 3 37.7804 2.99994 39.8125 4.03516C41.6 4.94595 43.054 6.39996 43.9648 8.1875C45.0001 10.2196 45 12.8801 45 18.2002V29.7998C45 35.1199 45.0001 37.7804 43.9648 39.8125L43.7871 40.1445C42.8704 41.7802 41.4882 43.1111 39.8125 43.9648L39.4238 44.1465C37.4376 44.9996 34.7877 45 29.7998 45V42C32.5093 42 34.3613 41.998 35.7949 41.8809C37.1935 41.7666 37.9285 41.5583 38.4512 41.292C39.6742 40.6688 40.6688 39.6742 41.292 38.4512C41.5583 37.9285 41.7666 37.1935 41.8809 35.7949C41.998 34.3613 42 32.5093 42 29.7998Z"/>
  <path d="M23.3526 29.3944H16.8442L15.52 33.6134C15.4832 33.7702 15.3389 33.8812 15.1819 33.8735H11.8854C11.6974 33.8735 11.6317 33.7676 11.6882 33.5556L17.3231 16.9107C17.3795 16.7374 17.4359 16.5399 17.4922 16.3183C17.5659 15.9328 17.6037 15.5409 17.6049 15.148C17.5888 15.0319 17.6908 14.9294 17.8022 14.9457H22.2819C22.4132 14.9457 22.4883 14.9939 22.5073 15.0902L28.9031 33.5845C28.9594 33.7773 28.9031 33.8737 28.734 33.8735H25.0712C24.9428 33.8881 24.8201 33.8 24.7895 33.6712L23.3526 29.3944ZM17.8585 25.7533H22.3101C21.5787 23.2541 20.7533 20.7876 20.0843 18.2689C19.3625 20.7919 18.575 23.3047 17.8585 25.7533Z"/>
  <path d="M32.7064 18.0087C32.419 18.0206 32.1324 17.9701 31.8654 17.8605C31.5984 17.751 31.3569 17.5848 31.1568 17.373C30.9572 17.152 30.8021 16.8927 30.7006 16.61C30.599 16.3273 30.553 16.0268 30.565 15.7258C30.5548 15.4278 30.6059 15.1309 30.7152 14.8546C30.8244 14.5782 30.9893 14.3286 31.199 14.122C31.4066 13.9176 31.6518 13.7574 31.9202 13.6508C32.1886 13.5441 32.4749 13.4931 32.7627 13.5007C33.4389 13.5007 33.9696 13.7078 34.3546 14.122C34.549 14.3373 34.7 14.5897 34.7991 14.8649C34.8982 15.1401 34.9434 15.4327 34.9322 15.7258C34.9439 16.028 34.8964 16.3295 34.7923 16.6125C34.6883 16.8954 34.5298 17.1541 34.3264 17.373C34.1138 17.5879 33.8601 17.7554 33.5813 17.8648C33.3025 17.9742 33.0046 18.0232 32.7064 18.0087ZM30.7622 33.5844V19.7714C30.7622 19.5981 30.8371 19.5114 30.9877 19.5114H34.4532C34.6033 19.5114 34.6785 19.5981 34.6786 19.7714V33.5844C34.6786 33.7772 34.6035 33.8736 34.4532 33.8734H31.0158C30.8468 33.8734 30.7623 33.7771 30.7622 33.5844Z"/>
</svg>





                </span>
                <span className="slide-in-left font-semibold text-xs">
                  Illustrator
                </span>
              </div>
            </div>
            <div>
              <div
                aria-label="Tech Card"
                className="border-2 border-fuchsia-400 bg-fuchsia-950 bg-opacity-40 p-6 rounded-lg shadow-lg text-slate-100 relative h-32 flex justify-center items-center flex-col gap-1.5 overflow-hidden"
                >
                  <span className="slide-in-right mb-2">
                  <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 48 48"
  className="w-12 h-12 text-white"
  fill="currentColor"
>
  <title>Logo</title>
  <path d="M29.7998 42V45H18.2002V42H29.7998Z"/>
  <path d="M42 29.7998V18.2002C42 15.4907 41.998 13.6387 41.8809 12.2051C41.7666 10.8065 41.5583 10.0715 41.292 9.54883C40.6688 8.32578 39.6742 7.33118 38.4512 6.70801C37.9285 6.44169 37.1935 6.23341 35.7949 6.11914C34.3613 6.00204 32.5093 6 29.7998 6H18.2002C15.4907 6 13.6387 6.00204 12.2051 6.11914C10.8065 6.23341 10.0715 6.44169 9.54883 6.70801C8.32578 7.33118 7.33118 8.32578 6.70801 9.54883C6.44169 10.0715 6.23341 10.8065 6.11914 12.2051C6.00204 13.6387 6 15.4907 6 18.2002V29.7998C6 32.5093 6.00204 34.3613 6.11914 35.7949C6.23341 37.1935 6.44169 37.9285 6.70801 38.4512C7.33118 39.6742 8.32578 40.6688 9.54883 41.292C10.0715 41.5583 10.8065 41.7666 12.2051 41.8809C13.6387 41.998 15.4907 42 18.2002 42V45L16.3252 44.998C12.5171 44.9849 10.2975 44.8859 8.57617 44.1465L8.1875 43.9648C6.39996 43.054 4.94595 41.6 4.03516 39.8125C2.99994 37.7804 3 35.1199 3 29.7998V18.2002C3 13.2123 3.00036 10.5624 3.85352 8.57617L4.03516 8.1875C4.88894 6.51185 6.2198 5.12958 7.85547 4.21289L8.1875 4.03516C9.96552 3.12938 12.2245 3.01611 16.3252 3.00195L18.2002 3H29.7998C35.1199 3 37.7804 2.99994 39.8125 4.03516C41.6 4.94595 43.054 6.39996 43.9648 8.1875C45.0001 10.2196 45 12.8801 45 18.2002V29.7998C45 35.1199 45.0001 37.7804 43.9648 39.8125L43.7871 40.1445C42.8704 41.7802 41.4882 43.1111 39.8125 43.9648L39.4238 44.1465C37.4376 44.9996 34.7877 45 29.7998 45V42C32.5093 42 34.3613 41.998 35.7949 41.8809C37.1935 41.7666 37.9285 41.5583 38.4512 41.292C39.6742 40.6688 40.6688 39.6742 41.292 38.4512C41.5583 37.9285 41.7666 37.1935 41.8809 35.7949C41.998 34.3613 42 32.5093 42 29.7998Z"/>
  <path d="M12 33.7744V15.3051C12 15.1795 12.0525 15.1077 12.175 15.1077C13.9834 15.1077 15.7911 15 17.6 15C20.5352 15 23.7135 16.0036 24.8275 19.0744C25.09 19.8282 25.23 20.6 25.23 21.4077C25.23 22.9513 24.88 24.2256 24.18 25.2308C22.2246 28.0385 18.8355 27.9949 15.7975 27.9949V33.7564C15.8213 33.927 15.6759 34.0077 15.535 34.0077H12.21C12.07 34.0077 12 33.9359 12 33.7744ZM15.815 18.5718V24.6026C17.0196 24.6908 18.2801 24.7004 19.4375 24.3154C20.7152 23.9468 21.415 22.8407 21.415 21.5154C21.4505 20.386 20.8351 19.3024 19.7875 18.8949C18.644 18.4194 17.0493 18.3909 15.815 18.5718Z"/>
  <path d="M36.145 23.4111C35.6155 23.132 35.0515 22.9279 34.4686 22.8042C33.7194 22.6279 30.7647 22.0106 30.7636 23.5555C30.7898 24.4181 32.159 24.8407 32.7639 25.0871C34.8877 25.8162 37.291 27.1196 37.2438 29.7396C37.3087 33.0012 34.1486 34.3051 31.4397 34.3054C30.0295 34.32 28.5604 34.1016 27.2698 33.4962C27.1466 33.431 27.0673 33.2916 27.0726 33.1495V30.0286C27.0587 29.9034 27.193 29.7941 27.298 29.8841C28.5625 30.6488 30.0614 31.0201 31.5242 31.04C32.17 31.04 33.4499 30.9774 33.4402 30.0286C33.4402 29.118 31.9091 28.6994 31.2988 28.4681C30.4142 28.1523 29.5753 27.7148 28.8053 27.1677C27.7293 26.4002 27.0542 25.1695 27.0726 23.8156C27.0663 20.7445 29.9752 19.3661 32.5949 19.3654C33.8196 19.3553 35.1347 19.446 36.2748 19.9434C36.4387 19.9916 36.4727 20.1643 36.472 20.319V23.2377C36.4824 23.4188 36.2812 23.4805 36.145 23.4111Z"/>
</svg>


                </span>
                <span className="slide-in-left font-semibold text-xs">
                  Photoshop
                </span>
              </div>
            </div>
            <div>
              <div
                aria-label="Tech Card"
                className="border-2 border-fuchsia-400 bg-fuchsia-950 bg-opacity-40 p-6 rounded-lg shadow-lg text-slate-100 relative h-32 flex justify-center items-center flex-col gap-1.5 overflow-hidden"
                >
                <span className="slide-in-right mb-2">
                <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 48 48"
  className="w-12 h-12 text-white"
  fill="currentColor"
>
  <title>Logo</title>
  <path d="M29.7998 42V45H18.2002V42H29.7998Z"/>
  <path d="M42 29.7998V18.2002C42 15.4907 41.998 13.6387 41.8809 12.2051C41.7666 10.8065 41.5583 10.0715 41.292 9.54883C40.6688 8.32578 39.6742 7.33119 38.4512 6.70801C37.9285 6.44169 37.1935 6.23341 35.7949 6.11914C34.7198 6.03132 33.4095 6.0081 31.6787 6.00195L29.7998 6H18.2002C15.4907 6 13.6387 6.00204 12.2051 6.11914C10.8065 6.23341 10.0715 6.44169 9.54883 6.70801C8.32578 7.33118 7.33118 8.32578 6.70801 9.54883C6.44169 10.0715 6.23341 10.8065 6.11914 12.2051C6.00204 13.6387 6 15.4907 6 18.2002V29.7998C6 32.5093 6.00204 34.3613 6.11914 35.7949C6.23341 37.1935 6.44169 37.9285 6.70801 38.4512C7.33119 39.6742 8.32578 40.6688 9.54883 41.292C10.0715 41.5583 10.8065 41.7666 12.2051 41.8809C13.6387 41.998 15.4907 42 18.2002 42V45L16.3252 44.998C12.5171 44.9849 10.2975 44.8859 8.57617 44.1465L8.1875 43.9648C6.39996 43.054 4.94595 41.6 4.03516 39.8125C2.99994 37.7804 3 35.1199 3 29.7998V18.2002C3 13.2123 3.00036 10.5624 3.85352 8.57617L4.03516 8.1875C4.88894 6.51185 6.2198 5.12958 7.85547 4.21289L8.1875 4.03516C9.96552 3.12938 12.2245 3.01611 16.3252 3.00195L18.2002 3H29.7998C35.1199 3 37.7804 2.99994 39.8125 4.03516C41.6 4.94595 43.054 6.39996 43.9648 8.1875C45.0001 10.2196 45 12.8801 45 18.2002V29.7998C45 35.1199 45.0001 37.7804 43.9648 39.8125L43.7871 40.1445C42.8704 41.7802 41.4882 43.1111 39.8125 43.9648L39.4238 44.1465C37.4376 44.9996 34.7877 45 29.7998 45V42C32.5093 42 34.3613 41.998 35.7949 41.8809C37.1935 41.7666 37.9285 41.5583 38.4512 41.292C39.6742 40.6688 40.6688 39.6742 41.292 38.4512C41.5583 37.9285 41.7666 37.1935 41.8809 35.7949C41.998 34.3613 42 32.5093 42 29.7998Z"/>
  <path d="M17.3881 15.2933V33.7009C17.3881 33.8937 17.3036 33.99 17.1346 33.9899H13.7253C13.5749 33.9899 13.4997 33.8936 13.5 33.7009V15.2933C13.5 15.1393 13.5845 15.0622 13.7535 15.0621H17.1627C17.292 15.0432 17.4065 15.1606 17.3881 15.2933Z"/>
  <path d="M27.4748 34.2788C26.178 34.299 24.8931 34.0226 23.7134 33.4696C21.2091 32.2808 20.1209 29.6498 20.1212 26.9388C20.0995 24.2345 21.5318 21.6578 23.8684 20.3791C25.4814 19.4627 27.3787 19.2299 29.1935 19.3966V13.7038C29.1935 13.5692 29.2499 13.5015 29.3626 13.5015H32.9126C33.0096 13.4873 33.0955 13.5754 33.0817 13.6749V30.7533C33.0817 31.4579 33.1515 32.1601 33.1944 32.8628C33.2013 32.9828 33.1318 33.1015 33.0253 33.1518C32.1094 33.5435 31.1555 33.8341 30.1796 34.0187C29.2874 34.1876 28.3822 34.2746 27.4748 34.2788ZM29.1935 30.6955V22.8065C26.6318 22.0947 24.1216 24.0506 24.122 26.7654C24.06 29.6086 26.5951 31.4749 29.1935 30.6955Z"/>
</svg>


                </span>
                <span className="slide-in-left font-semibold text-xs">
                  InDesign
                </span>
              </div>
            </div>
            <div>
              <div
                aria-label="Tech Card"
                className="border-2 border-fuchsia-400 bg-fuchsia-950 bg-opacity-40 p-6 rounded-lg shadow-lg text-slate-100 relative h-32 flex justify-center items-center flex-col gap-1.5 overflow-hidden"
                >
                <span className="slide-in-right mb-2">
                <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 48 48"
  className="w-12 h-12 text-white"
  fill="currentColor"
>
  <title>Pr</title>
  <path d="M29.7998 42V45H18.2002V42H29.7998Z"/>
  <path d="M42 29.7998V18.2002C42 15.4907 41.998 13.6387 41.8809 12.2051C41.7666 10.8065 41.5583 10.0715 41.292 9.54883C40.6688 8.32578 39.6742 7.33119 38.4512 6.70801C37.9285 6.44169 37.1935 6.23341 35.7949 6.11914C34.7198 6.03132 33.4095 6.0081 31.6787 6.00195L29.7998 6H18.2002C15.4907 6 13.6387 6.00204 12.2051 6.11914C10.8065 6.23341 10.0715 6.44169 9.54883 6.70801C8.32578 7.33118 7.33118 8.32578 6.70801 9.54883C6.44169 10.0715 6.23341 10.8065 6.11914 12.2051C6.00204 13.6387 6 15.4907 6 18.2002V29.7998C6 32.5093 6.00204 34.3613 6.11914 35.7949C6.23341 37.1935 6.44169 37.9285 6.70801 38.4512C7.33119 39.6742 8.32578 40.6688 9.54883 41.292C10.0715 41.5583 10.8065 41.7666 12.2051 41.8809C13.6387 41.998 15.4907 42 18.2002 42V45L16.3252 44.998C12.5171 44.9849 10.2975 44.8859 8.57617 44.1465L8.1875 43.9648C6.39996 43.054 4.94595 41.6 4.03516 39.8125C2.99994 37.7804 3 35.1199 3 29.7998V18.2002C3 13.2123 3.00036 10.5624 3.85352 8.57617L4.03516 8.1875C4.88894 6.51185 6.2198 5.12958 7.85547 4.21289L8.1875 4.03516C9.96552 3.12938 12.2245 3.01611 16.3252 3.00195L18.2002 3H29.7998C35.1199 3 37.7804 2.99994 39.8125 4.03516C41.6 4.94595 43.054 6.39996 43.9648 8.1875C45.0001 10.2196 45 12.8801 45 18.2002V29.7998C45 35.1199 45.0001 37.7804 43.9648 39.8125L43.7871 40.1445C42.8704 41.7802 41.4882 43.1111 39.8125 43.9648L39.4238 44.1465C37.4376 44.9996 34.7877 45 29.7998 45V42C32.5093 42 34.3613 41.998 35.7949 41.8809C37.1935 41.7666 37.9285 41.5583 38.4512 41.292C39.6742 40.6688 40.6688 39.6742 41.292 38.4512C41.5583 37.9285 41.7666 37.1935 41.8809 35.7949C41.998 34.3613 42 32.5093 42 29.7998Z"/>
  <path d="M12 32.6935V13.8119C12 13.6835 12.0527 13.6101 12.1755 13.6101C13.9894 13.6101 15.8024 13.5 17.6167 13.5C20.5607 13.5 23.7484 14.526 24.8658 17.6653C25.1291 18.436 25.2695 19.225 25.2695 20.0508C25.2695 21.6288 24.9184 22.9316 24.2164 23.9592C22.2551 26.8296 18.8559 26.785 15.8088 26.785V32.6752C15.8327 32.8495 15.6869 32.9321 15.5456 32.9321H12.2106C12.0702 32.9321 12 32.8587 12 32.6935ZM15.8264 17.1515V23.317C17.0346 23.4072 18.2988 23.417 19.4597 23.0234C20.7413 22.6466 21.4431 21.5158 21.4431 20.1608C21.4787 19.0063 20.8615 17.8985 19.8107 17.4818C18.6639 16.9958 17.0644 16.9667 15.8264 17.1515Z"/>
  <path d="M27.6488 18.3179H30.7291C30.8989 18.3194 31.0514 18.4421 31.0964 18.6133C31.3222 19.1373 31.35 19.7692 31.3508 20.3349C31.879 19.6919 32.516 19.1561 33.2299 18.7544C33.9957 18.3014 34.8637 18.0719 35.7434 18.0897C35.8894 18.0679 36.0186 18.203 35.9978 18.3556V21.9302C35.9978 22.0682 35.9032 22.137 35.7152 22.137C34.4114 22.043 32.3816 22.365 31.4342 23.4369V32.7315C31.4342 32.9088 31.3588 32.9974 31.2081 32.9974H27.9032C27.7408 33.0218 27.5976 32.869 27.6205 32.702V22.6097C27.6205 21.2573 27.6486 19.8643 27.451 18.5247C27.4206 18.4015 27.5335 18.2868 27.6488 18.3179Z"/>
</svg>
                </span>
                <span className="slide-in-left font-semibold text-xs">Première Pro</span>
              </div>
            </div>
            <div>
              <div
                aria-label="Tech Card"
                className="border-2 border-fuchsia-400 bg-fuchsia-950 bg-opacity-40 p-6 rounded-lg shadow-lg text-slate-100 relative h-32 flex justify-center items-center flex-col gap-1.5 overflow-hidden"
                >
                <span className="slide-in-right mb-2">
                <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 48 48"
  className="w-12 h-12 text-white"
  fill="currentColor"
>
  <title>Ae</title>
  <path d="M29.7998 42V45H18.2002V42H29.7998Z"/>
  <path d="M42 29.7998V18.2002C42 15.4907 41.998 13.6387 41.8809 12.2051C41.7666 10.8065 41.5583 10.0715 41.292 9.54883C40.6688 8.32578 39.6742 7.33118 38.4512 6.70801C37.9285 6.44169 37.1935 6.23341 35.7949 6.11914C34.7198 6.03132 33.4095 6.0081 31.6787 6.00195L29.7998 6H18.2002C15.4907 6 13.6387 6.00204 12.2051 6.11914C10.8065 6.23341 10.0715 6.44169 9.54883 6.70801C8.32578 7.33118 7.33118 8.32578 6.70801 9.54883C6.44169 10.0715 6.23341 10.8065 6.11914 12.2051C6.00204 13.6387 6 15.4907 6 18.2002V29.7998C6 32.5093 6.00204 34.3613 6.11914 35.7949C6.23341 37.1935 6.44169 37.9285 6.70801 38.4512C7.33119 39.6742 8.32578 40.6688 9.54883 41.292C10.0715 41.5583 10.8065 41.7666 12.2051 41.8809C13.6387 41.998 15.4907 42 18.2002 42V45L16.3252 44.998C12.5171 44.9849 10.2975 44.8859 8.57617 44.1465L8.1875 43.9648C6.39996 43.054 4.94595 41.6 4.03516 39.8125C2.99994 37.7804 3 35.1199 3 29.7998V18.2002C3 13.2123 3.00036 10.5624 3.85352 8.57617L4.03516 8.1875C4.88894 6.51185 6.2198 5.12958 7.85547 4.21289L8.1875 4.03516C9.96552 3.12938 12.2245 3.01611 16.3252 3.00195L18.2002 3H29.7998C35.1199 3 37.7804 2.99994 39.8125 4.03516C41.6 4.94595 43.054 6.39996 43.9648 8.1875C45.0001 10.2196 45 12.8801 45 18.2002V29.7998C45 35.1199 45.0001 37.7804 43.9648 39.8125L43.7871 40.1445C42.8704 41.7802 41.4882 43.1111 39.8125 43.9648L39.4238 44.1465C37.4376 44.9996 34.7877 45 29.7998 45V42C32.5093 42 34.3613 41.998 35.7949 41.8809C37.1935 41.7666 37.9285 41.5583 38.4512 41.292C39.6742 40.6688 40.6688 39.6742 41.292 38.4512C41.5583 37.9285 41.7666 37.1935 41.8809 35.7949C41.998 34.3613 42 32.5093 42 29.7998Z"/>
  <path d="M20.684 29.3458H14.1756L12.8514 33.5729C12.8146 33.7296 12.6703 33.8406 12.5133 33.8329H9.21681C9.02882 33.8329 8.96308 33.727 9.01959 33.5151L14.6545 16.9389C14.7109 16.7656 14.7672 16.5961 14.8236 16.3744C14.8973 15.9888 14.9351 15.597 14.9363 15.2041C14.9202 15.088 15.0204 14.9852 15.1336 15.0018H19.6133C19.7446 15.0018 19.8197 15.0499 19.8387 15.1463L26.2345 33.544C26.2908 33.7368 26.2345 33.8331 26.0654 33.8329H22.4026C22.2742 33.8475 22.1515 33.7595 22.1209 33.6307L20.684 29.3458ZM15.1899 25.7816H19.6415C18.9101 23.2823 18.0847 20.8159 17.4157 18.2971C16.6576 20.9099 15.9576 23.333 15.1899 25.7816Z"/>
  <path d="M30.9912 27.7135C31.2502 29.8599 33.0526 30.8832 35.0484 30.8396C36.1738 30.8175 37.3766 30.6428 38.4281 30.2172C38.5219 30.1405 38.569 30.1883 38.569 30.3617V33.107C38.5779 33.2498 38.5182 33.3774 38.3999 33.4537C37.093 34.0475 35.5925 34.2265 34.175 34.2038C29.9483 34.2038 27.0455 31.2257 27.0467 26.8927C27.0357 22.7866 29.6995 19.3225 33.8369 19.3225C37.344 19.2316 39.772 22.0396 39.7818 25.5346C39.7818 26.1712 39.7463 26.8099 39.6691 27.4418C39.6542 27.572 39.5433 27.673 39.4155 27.673C36.6145 27.673 33.7999 27.7135 30.9912 27.7135ZM30.9912 25.0811C32.5522 25.0811 34.1223 25.1362 35.6823 25.0666C35.9168 25.0426 36.0909 24.9982 36.0909 24.7543C36.0584 23.4586 34.9649 22.393 33.6961 22.4425C32.1629 22.3475 31.1818 23.6416 30.9912 25.0811Z"/>
</svg>

                </span>
                <span className="slide-in-left font-semibold text-xs">
                  After Effects
                </span>
              </div>
            </div>
            <div>
              <div
                aria-label="Tech Card"
                className="border-2 border-fuchsia-400 bg-fuchsia-950 bg-opacity-40 p-6 rounded-lg shadow-lg text-slate-100 relative h-32 flex justify-center items-center flex-col gap-1.5 overflow-hidden"
                >
                <span className="slide-in-right mb-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    role="img"
                    viewBox="0 0 24 24"
                    height="32"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title></title>
                    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"></path>
                  </svg>
                </span>
                <span className="slide-in-left font-semibold text-xs">
                  Chat GPT
                </span>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-5 opacity-30"></hr>
        <footer>
          <h3 className="text-xl font-semibold my-3 text-slate-50">
            Merci de votre attention
          </h3>
          <a
            target="_blank"
            href="img/cv.pdf"
            className="bg-darkTwo text-slate-50 px-6 py-3  rounded-full inline-flex items-center transform hover:bg-white hover:text-black hover:-translate-y-1  transition-all duration-300 ease-in-out gap-1 hover:scale-110"
          >
            Voir mon CV
            <span className="inline-block transform rotate-45">
              <svg
                stroke="currentColor"
                fill="currentColor"
                viewBox="0 0 1024 1024"
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M868 545.5L536.1 163a31.96 31.96 0 0 0-48.3 0L156 545.5a7.97 7.97 0 0 0 6 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z"></path>
              </svg>
            </span>
          </a>
        </footer>
      </section>
    </main>
  );
}
