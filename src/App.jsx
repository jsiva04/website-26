import StickyNote from './components/StickyNote';

function App() {
  return (
    <div className="bg-primary min-h-screen relative overflow-hidden p-8 max-xl:p-5 max-lg:p-4 max-lg:pb-52">
      {/* Main Name Header */}
      <div className="
        font-zensult font-normal uppercase select-none whitespace-nowrap
        text-offwhite text-shadow-brutal leading-[0.8]
        absolute top-0 left-8
        text-[21.875rem] tracking-[0.65625rem]
        max-xl:text-[15.625rem] max-xl:left-5
        max-lg:text-[5rem] max-lg:tracking-[0.15rem] max-lg:left-1/2 max-lg:-translate-x-1/2 max-lg:top-6 max-lg:text-center max-lg:text-shadow-brutal-sm
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
        max-lg:fixed max-lg:bottom-4 max-lg:left-4 max-lg:right-4 max-lg:top-auto max-lg:w-auto max-lg:h-auto max-lg:shadow-[0.5rem_0.5rem_0_0_black] max-lg:py-138 max-lg:px-4 max-lg:gap-6
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
            max-lg:w-16 max-lg:h-16
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
            max-lg:w-16 max-lg:h-16
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
            max-lg:w-16 max-lg:h-16
          "
        >
          <img src="/assets/email.svg" alt="Email" className="w-full h-full object-contain" />
        </a>
      </div>

      {/* Sticky Notes */}
      <div className="
        absolute right-0 top-80
        max-xl:top-[12.5rem] max-xl:right-5
        max-lg:absolute max-lg:inset-x-0 max-lg:top-45 max-lg:bottom-52 max-lg:right-0
      ">
        <StickyNote
          href="https://www.mcmaster.ca/"
          position="absolute top-0 right-176 max-xl:right-[23.75rem] max-lg:left-2 max-lg:top-0 max-lg:right-auto"
          size="w-[22.125rem] h-[14.65625rem] max-xl:w-[17.5rem] max-xl:h-[11.875rem] max-lg:w-[11.5rem] max-lg:h-[9.65rem]"
          fontSize="text-[4.6875rem] leading-[1.11] tracking-[0.140625rem] max-xl:text-[3.75rem] max-lg:!text-[2.5rem]"
        >
          TRON @<br/>MCMASTER
        </StickyNote>

        <StickyNote
          href="https://en.wikipedia.org/wiki/Toronto"
          position="absolute top-0 right-36 max-xl:right-5 max-lg:right-2 max-lg:top-7"
          size="w-96 h-[16.75rem] max-xl:w-[13.75rem] max-xl:h-[13.75rem] max-lg:w-[8.75rem] max-lg:h-[8.75rem]"
          fontSize="text-[8.125rem] leading-[1.11] tracking-[0.24375rem] max-xl:text-[6.25rem] max-lg:!text-[4.375rem]"
        >
          YYZ
        </StickyNote>

        <StickyNote
          href="https://x.com/@whoscado"
          position="absolute top-90 right-12 max-xl:right-5 max-lg:right-4 max-lg:top-72"
          size="w-120 h-[16.75rem] max-xl:w-[13.75rem] max-xl:h-[13.75rem] max-lg:w-64 max-lg:h-24"
          fontSize="text-[8.125rem] leading-[1.11] tracking-[0.24375rem] max-xl:text-[6.25rem] max-lg:!text-[3.5rem]"
        >
          building
        </StickyNote>

        <StickyNote
          href="#"
          position="absolute top-70 right-176 max-xl:right-[23.75rem] max-lg:left-1 max-lg:top-[13.5rem] max-lg:right-auto"
          size="w-85 h-85 max-xl:w-[13.75rem] max-xl:h-[13.75rem] max-lg:w-[12rem] max-lg:h-[12rem]"
          fontSize="text-[6rem] leading-[1.11] tracking-[0.140625rem] max-xl:text-[3.75rem] max-lg:!text-[4.375rem]"
        >
          SOFT<br/>ENG
        </StickyNote>

        <StickyNote
          href="https://getconvene.com"
          position="absolute top-32 right-86 max-lg:left-36 max-lg:top-[7.25rem]"
          size="w-110 h-110 max-xl:w-[21.875rem] max-xl:h-[21.875rem] max-lg:w-48 max-lg:h-48"
          fontSize=""
        >
          <img
            src="/assets/logo.svg"
            alt="Logo"
            className="w-3/4 h-2/3 object-contain max-lg:w-[9.3rem] max-lg:h-[9.3rem]"
          />
        </StickyNote>
      </div>
    </div>
  )
}

export default App
