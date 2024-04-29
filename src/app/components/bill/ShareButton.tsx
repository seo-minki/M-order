export default function ShareButton() {
  return (
    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-0.5 px-2 py-1.5 rounded-[100px] border border-neutral-200">
      <svg
        width={18}
        height={18}
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] relative"
        preserveAspectRatio="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.25 12.4395V12.0465V10.425H10.5C7.81272 10.425 5.67672 11.0055 3.95097 12.2265C5.01822 10.0477 6.98697 8.00921 10.6065 7.49246L11.25 7.40021V5.56046L14.6895 8.99996L11.25 12.4395ZM16.2802 8.46971L11.0302 3.21971C10.8157 3.00521 10.4932 2.94221 10.2127 3.05696C9.93222 3.17321 9.74997 3.44696 9.74997 3.74996V6.11696C5.57772 6.94121 2.70822 9.82121 1.63797 14.2905C1.54347 14.6872 1.73322 15.09 2.09997 15.2692C2.22372 15.33 2.35497 15.3592 2.48472 15.3592C2.74347 15.3592 2.99622 15.243 3.16797 15.0277C4.72572 13.0747 6.82947 12.084 9.74997 11.943V14.25C9.74997 14.553 9.93222 14.8275 10.2127 14.943C10.3057 14.982 10.4032 15 10.5 15C10.695 15 10.887 14.9242 11.0302 14.7802L16.2802 9.53021C16.5735 9.23696 16.5735 8.76296 16.2802 8.46971Z"
          fill="black"
        />
      </svg>
      <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative pt-0.5">
        <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-black">
          청구서 전달
        </p>
      </div>
    </div>
  );
}
