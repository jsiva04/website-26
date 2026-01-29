function App() {
  return (
    <div className="bg-[#6394ff] min-h-screen relative overflow-hidden p-[1.875rem]
                    max-xl:p-5 max-lg:p-5 max-md:p-[0.9375rem]">
      {/* Main Name Header */}
      <div
        style={{ fontFamily: 'Zensult, Impact, "Arial Black", sans-serif' }}
        className="absolute top-0 left-[1.875rem] text-[21.875rem] font-normal leading-[0.8] text-[#faf9f6]
                      text-shadow-brutal tracking-[0.65625rem] whitespace-nowrap uppercase select-none
                      max-xl:text-[15.625rem] max-xl:left-5
                      max-lg:relative max-lg:left-0 max-lg:text-[11.25rem] max-lg:mb-10
                      max-md:text-[7.5rem] max-md:tracking-[0.3125rem] max-md:text-shadow-brutal-sm
                      max-sm:text-[5rem] max-sm:tracking-[0.1875rem]">
        <p className="m-0">JANAHAN</p>
        <p className="m-0">SIVA</p>
      </div>

      {/* Social Panel */}
      <div className="absolute left-[1.875rem] top-[39.125rem] w-[41.125rem] h-[18.97188rem] bg-white border-[0.25rem] border-black
                      shadow-[1rem_1rem_0_0_black] flex items-center justify-center gap-10 p-10
                      max-xl:left-5 max-xl:top-[28.75rem] max-xl:w-[31.25rem] max-xl:h-[15.625rem]
                      max-lg:relative max-lg:left-0 max-lg:top-0 max-lg:w-full max-lg:max-w-[31.25rem] max-lg:h-auto max-lg:mb-10
                      max-md:max-w-full max-md:p-5 max-md:gap-5
                      max-sm:flex-col max-sm:gap-[0.9375rem] max-sm:p-[0.9375rem]">
        <a
          href="https://www.linkedin.com/in/jan-siva"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[7.875rem] h-[7.875rem] transition-transform duration-200 ease-in-out cursor-pointer hover:scale-110
                     max-xl:w-[6.25rem] max-xl:h-[6.25rem]
                     max-md:w-[4.375rem] max-md:h-[4.375rem]
                     max-sm:w-[3.75rem] max-sm:h-[3.75rem]"
          aria-label="LinkedIn"
        >
          <img src="/assets/linkedin.svg" alt="LinkedIn" className="w-full h-full object-contain" />
        </a>
        <a
          href="https://github.com/jsiva04"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[7.875rem] h-[7.875rem] transition-transform duration-200 ease-in-out cursor-pointer hover:scale-110
                     max-xl:w-[6.25rem] max-xl:h-[6.25rem]
                     max-md:w-[4.375rem] max-md:h-[4.375rem]
                     max-sm:w-[3.75rem] max-sm:h-[3.75rem]"
          aria-label="GitHub"
        >
          <img src="/assets/github.svg" alt="GitHub" className="w-full h-full object-contain" />
        </a>
        <a
          href="mailto:your.email@example.com"
          className="w-[7.875rem] h-[7.875rem] transition-transform duration-200 ease-in-out cursor-pointer hover:scale-110
                     max-xl:w-[6.25rem] max-xl:h-[6.25rem]
                     max-md:w-[4.375rem] max-md:h-[4.375rem]
                     max-sm:w-[3.75rem] max-sm:h-[3.75rem]"
          aria-label="Email"
        >
          <img src="/assets/email.svg" alt="Email" className="w-full h-full object-contain" />
        </a>
      </div>

      {/* Sticky Notes */}
      <div className="absolute right-0 top-[19.40625rem]
                      max-xl:top-[12.5rem] max-xl:right-5
                      max-lg:relative max-lg:top-0 max-lg:right-0 max-lg:grid max-lg:grid-cols-2 max-lg:gap-[1.875rem] max-lg:max-w-[37.5rem] max-lg:mx-auto
                      max-md:grid-cols-1 max-md:gap-5">
        <a
          href="https://www.mcmaster.ca/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontFamily: '"Thinking Square", "Comic Sans MS", cursive, sans-serif' }}
          className="absolute top-0 right-[33.75rem] w-[22.125rem] h-[14.65625rem] bg-[#ffdc83] border-[0.25rem] border-black
                     shadow-[1rem_1rem_0_0_black] flex items-center justify-center text-center font-normal
                     text-black no-underline transition-all duration-200 ease-in-out cursor-pointer p-5
                     text-[4.6875rem] leading-[1.11] tracking-[0.140625rem]
                     hover:translate-x-[-0.25rem] hover:translate-y-[-0.25rem] hover:shadow-[1.25rem_1.25rem_0_0_black]
                     active:translate-x-1 active:translate-y-1 active:shadow-[0.75rem_0.75rem_0_0_black]
                     max-xl:text-[3.75rem] max-xl:w-[17.5rem] max-xl:h-[11.875rem] max-xl:right-[23.75rem]
                     max-lg:!relative max-lg:!top-auto max-lg:!right-auto max-lg:!left-auto max-lg:!w-full max-lg:!h-[15.625rem]
                     max-md:!h-[12.5rem] max-md:!text-[3.125rem]
                     max-sm:!h-[9.375rem] max-sm:!text-[2.5rem]">
          TRON @<br/>MCMASTER
        </a>

        <a
          href="https://en.wikipedia.org/wiki/Toronto"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontFamily: '"Thinking Square", "Comic Sans MS", cursive, sans-serif' }}
          className="absolute top-[2.21875rem] right-[6.5625rem] w-[16.75rem] h-[16.75rem] bg-[#ffdc83] border-[0.25rem] border-black
                     shadow-[1rem_1rem_0_0_black] flex items-center justify-center text-center font-normal
                     text-black no-underline transition-all duration-200 ease-in-out cursor-pointer p-5
                     text-[8.125rem] leading-[1.11] tracking-[0.24375rem]
                     hover:translate-x-[-0.25rem] hover:translate-y-[-0.25rem] hover:shadow-[1.25rem_1.25rem_0_0_black]
                     active:translate-x-1 active:translate-y-1 active:shadow-[0.75rem_0.75rem_0_0_black]
                     max-xl:text-[6.25rem] max-xl:w-[13.75rem] max-xl:h-[13.75rem] max-xl:right-5
                     max-lg:!relative max-lg:!top-auto max-lg:!right-auto max-lg:!left-auto max-lg:!w-full max-lg:!h-[15.625rem]
                     max-md:!h-[12.5rem] max-md:!text-[3.125rem]
                     max-sm:!h-[9.375rem] max-sm:!text-[2.5rem]">
          YYZ
        </a>

        <a
          href="#"
          style={{ fontFamily: '"Thinking Square", "Comic Sans MS", cursive, sans-serif' }}
          className="absolute top-[18.78125rem] right-[33.3125rem] w-[17.5625rem] h-[17.5625rem] bg-[#ffdc83] border-[0.25rem] border-black
                     shadow-[1rem_1rem_0_0_black] flex items-center justify-center text-center font-normal
                     text-black no-underline transition-all duration-200 ease-in-out cursor-pointer p-5
                     text-[4.6875rem] leading-[1.11] tracking-[0.140625rem]
                     hover:translate-x-[-0.25rem] hover:translate-y-[-0.25rem] hover:shadow-[1.25rem_1.25rem_0_0_black]
                     active:translate-x-1 active:translate-y-1 active:shadow-[0.75rem_0.75rem_0_0_black]
                     max-xl:text-[3.75rem] max-xl:w-[13.75rem] max-xl:h-[13.75rem] max-xl:right-[23.75rem]
                     max-lg:!relative max-lg:!top-auto max-lg:!right-auto max-lg:!left-auto max-lg:!w-full max-lg:!h-[15.625rem]
                     max-md:!h-[12.5rem] max-md:!text-[3.125rem]
                     max-sm:!h-[9.375rem] max-sm:!text-[2.5rem]">
          SOFT<br/>ENG
        </a>

        <a
          href="https://getconvene.com"
          target="_blank"
          style={{ fontFamily: '"Thinking Square", "Comic Sans MS", cursive, sans-serif' }}
          className="absolute top-[10.28125rem] right-0 w-[28.4375rem] h-[28.4375rem] bg-[#ffdc83] border-[0.25rem] border-black
                     shadow-[1rem_1rem_0_0_black] flex items-center justify-center text-center font-normal
                     text-black no-underline transition-all duration-200 ease-in-out cursor-pointer p-5
                     hover:translate-x-[-0.25rem] hover:translate-y-[-0.25rem] hover:shadow-[1.25rem_1.25rem_0_0_black]
                     active:translate-x-1 active:translate-y-1 active:shadow-[0.75rem_0.75rem_0_0_black]
                     max-xl:w-[21.875rem] max-xl:h-[21.875rem]
                     max-lg:!relative max-lg:!top-auto max-lg:!right-auto max-lg:!left-auto max-lg:!w-full max-lg:!h-[15.625rem]
                     max-md:!h-[12.5rem]
                     max-sm:!h-[9.375rem]">
          <img src="/assets/logo.svg" alt="Logo" className="w-[12.5rem] h-[12.5rem] object-contain
                                                             max-lg:w-[9.375rem] max-lg:h-[9.375rem]
                                                             max-md:w-[7.5rem] max-md:h-[7.5rem]" />
        </a>
      </div>
    </div>
  )
}

export default App
