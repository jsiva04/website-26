import StickyNote from './components/StickyNote';

function App() {
  return (
    <div className="bg-primary min-h-screen relative overflow-hidden p-8 max-xl:p-5 max-lg:p-5 max-md:p-4">
      {/* Main Name Header */}
      <div className="
        font-zensult font-normal uppercase select-none whitespace-nowrap
        text-offwhite text-shadow-brutal leading-[0.8]
        absolute top-0 left-8
        text-[21.875rem] tracking-[0.65625rem]
        max-xl:text-[15.625rem] max-xl:left-5
        max-lg:relative max-lg:left-0 max-lg:text-[11.25rem] max-lg:mb-10
        max-md:text-[7.5rem] max-md:tracking-[0.3125rem] max-md:text-shadow-brutal-sm
        max-sm:text-[5rem] max-sm:tracking-[0.1875rem]
      ">
        <p className="m-0">JANAHAN</p>
        <p className="m-0">SIVA</p>
      </div>

      {/* Social Panel */}
      <div className="
        bg-white border-brutal shadow-brutal
        flex items-center justify-center gap-10 p-10
        absolute left-8 top-[39.125rem]
        w-[41.125rem] h-[18.97188rem]
        max-xl:left-5 max-xl:top-[28.75rem] max-xl:w-[31.25rem] max-xl:h-[15.625rem]
        max-lg:relative max-lg:left-0 max-lg:top-0 max-lg:w-full max-lg:max-w-[31.25rem] max-lg:h-auto max-lg:mb-10
        max-md:max-w-full max-md:p-5 max-md:gap-5
        max-sm:flex-col max-sm:gap-4 max-sm:p-4
      ">
        <a
          href="https://www.linkedin.com/in/jan-siva"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="
            w-32 h-32 cursor-pointer transition-transform duration-200
            hover:scale-110
            max-xl:w-24 max-xl:h-24
            max-md:w-16 max-md:h-16
            max-sm:w-14 max-sm:h-14
          "
        >
          <img src="/assets/linkedin.svg" alt="LinkedIn" className="w-full h-full object-contain" />
        </a>
        <a
          href="https://github.com/jsiva04"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="
            w-32 h-32 cursor-pointer transition-transform duration-200
            hover:scale-110
            max-xl:w-24 max-xl:h-24
            max-md:w-16 max-md:h-16
            max-sm:w-14 max-sm:h-14
          "
        >
          <img src="/assets/github.svg" alt="GitHub" className="w-full h-full object-contain" />
        </a>
        <a
          href="mailto:sivanj07@gmail.com"
          aria-label="Email"
          className="
            w-32 h-32 cursor-pointer transition-transform duration-200
            hover:scale-110
            max-xl:w-24 max-xl:h-24
            max-md:w-16 max-md:h-16
            max-sm:w-14 max-sm:h-14
          "
        >
          <img src="/assets/email.svg" alt="Email" className="w-full h-full object-contain" />
        </a>
      </div>

      {/* Sticky Notes */}
      <div className="
        absolute right-0 top-80
        max-xl:top-[12.5rem] max-xl:right-5
        max-lg:relative max-lg:top-0 max-lg:right-0
        max-lg:grid max-lg:grid-cols-2 max-lg:gap-8 max-lg:max-w-[37.5rem] max-lg:mx-auto
        max-md:grid-cols-1 max-md:gap-5
      ">
        <StickyNote
          href="https://www.mcmaster.ca/"
          position="absolute top-0 right-176 max-xl:right-[23.75rem]"
          size="w-[22.125rem] h-[14.65625rem] max-xl:w-[17.5rem] max-xl:h-[11.875rem]"
          fontSize="text-[4.6875rem] leading-[1.11] tracking-[0.140625rem] max-xl:text-[3.75rem] max-md:!text-[3.125rem] max-sm:!text-[2.5rem]"
        >
          TRON @<br/>MCMASTER
        </StickyNote>

        <StickyNote
          href="https://en.wikipedia.org/wiki/Toronto"
          position="absolute top-0 right-36 max-xl:right-5"
          size="w-96 h-[16.75rem] max-xl:w-[13.75rem] max-xl:h-[13.75rem]"
          fontSize="text-[8.125rem] leading-[1.11] tracking-[0.24375rem] max-xl:text-[6.25rem] max-md:!text-[3.125rem] max-sm:!text-[2.5rem]"
        >
          YYZ
        </StickyNote>

        <StickyNote
          href="https://x.com/@whoscado"
          position="absolute top-90 right-12 max-xl:right-5"
          size="w-120 h-[16.75rem] max-xl:w-[13.75rem] max-xl:h-[13.75rem]"
          fontSize="text-[8.125rem] leading-[1.11] tracking-[0.24375rem] max-xl:text-[6.25rem] max-md:!text-[3.125rem] max-sm:!text-[2.5rem]"
        >
          building
        </StickyNote>

        <StickyNote
          href="#"
          position="absolute top-70 right-176 max-xl:right-[23.75rem]"
          size="w-85 h-85 max-xl:w-[13.75rem] max-xl:h-[13.75rem]"
          fontSize="text-[6rem] leading-[1.11] tracking-[0.140625rem] max-xl:text-[3.75rem] max-md:!text-[3.125rem] max-sm:!text-[2.5rem]"
        >
          SOFT<br/>ENG
        </StickyNote>

        <StickyNote
          href="https://getconvene.com"
          position="absolute top-32 right-86"
          size="w-110 h-110 max-xl:w-[21.875rem] max-xl:h-[21.875rem]"
          fontSize=""
        >
          <img
            src="/assets/logo.svg"
            alt="Logo"
            className="w-3/4 h-2/3 object-contain max-lg:w-36 max-lg:h-36 max-md:w-28 max-md:h-28"
          />
        </StickyNote>
      </div>
    </div>
  )
}

export default App
