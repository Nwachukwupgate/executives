export function CheckIcon({ isChecked }: { isChecked: boolean }) {
  return (
    <span
      className={`shadow-checkBox bg-appWhite100 flex aspect-square h-5 items-center justify-center overflow-hidden rounded border-[2px] transition-all duration-300 ${isChecked ? "border-appBlue100" : "border-appGray300"}`}
    >
      <span
        className={`flex h-full w-full items-center justify-center rounded bg-appBlue100 transition-all ${
          isChecked ? "scale-105" : "scale-0"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="9"
          height="9"
          fill="none"
          viewBox="0 0 15 11"
        >
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M14.707.293a1 1 0 010 1.414l-9 9a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L5 8.586 13.293.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          ></path>
        </svg>
      </span>
    </span>
  );
}
