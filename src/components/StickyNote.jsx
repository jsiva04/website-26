function StickyNote({ href, children, position, size, fontSize }) {
  const baseClasses = `
    bg-sticky border-brutal shadow-brutal
    font-thinking font-normal text-black text-center
    flex items-center justify-center p-5
    no-underline cursor-pointer
    transition-all duration-200
    hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-hover
    active:translate-x-1 active:translate-y-1 active:shadow-brutal-active
  `;

  const responsiveClasses = `
    max-lg:!relative max-lg:!top-auto max-lg:!right-auto max-lg:!left-auto
    max-lg:!w-full max-lg:!h-64
    max-md:!h-52
    max-sm:!h-40
  `;

  return (
    <a
      href={href}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      className={`${baseClasses} ${position} ${size} ${fontSize} ${responsiveClasses}`}
    >
      {children}
    </a>
  );
}

export default StickyNote;
