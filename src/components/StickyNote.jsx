function StickyNote({ href, children, position, size, fontSize }) {
  const baseClasses = `
    bg-sticky border-brutal font-thinking font-normal text-black text-center
    flex items-center justify-center p-5
    no-underline cursor-pointer
    transition-all duration-200
    hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-hover
    active:translate-x-1 active:translate-y-1 active:shadow-brutal-active
    max-lg:shadow-[1rem_1rem_0_0_black]
  `;

  return (
    <a
      href={href}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      className={`${baseClasses} ${position} ${size} ${fontSize}`}
    >
      {children}
    </a>
  );
}

export default StickyNote;
