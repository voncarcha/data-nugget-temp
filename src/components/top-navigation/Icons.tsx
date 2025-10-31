export const MenuOpen = () => {
  return (
    <svg
      width="30"
      height="17"
      viewBox="0 0 30 17"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-[#E2EBED] transition-colors hover:fill-[#1a2224]"
    >
      <path
        d="M0 14h30v3H0zm0-7h30v3H0zm0-7h30v3H0z"
        fillRule="evenodd"
      />
    </svg>
  );
};

export const MenuClose = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-[#E2EBED] transition-colors hover:fill-[#1a2224]"
    >
      <g fillRule="evenodd">
        <path
          d="M13.5-3.5V9.999L27 10v3l-13.5-.001V26.5h-3V12.999L-3 13v-3l13.5-.001V-3.5h3z"
          mask="url(#3eyo9wwxkb)"
          transform="rotate(45 12 11.5)"
        />
      </g>
    </svg>
  );
};
