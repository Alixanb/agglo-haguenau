import { cn } from "@/lib/utils";
import React from "react";
import { Small } from "../typos";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

interface NavSVG {
  [key: string]: {
    outline: React.ReactNode;
    fill: React.ReactNode;
  };
}

const NavSVG: NavSVG = {
  home: {
    outline: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 -960 960 960"
        width="24"
      >
        <path d="M242-200h108.85v-201.54q0-20.36 14.39-34.76 14.4-14.39 34.76-14.39h160q20.36 0 34.76 14.39 14.39 14.4 14.39 34.76V-200H718v-351.85q0-3.07-1.35-5.57-1.34-2.5-3.65-4.43L487.31-731q-3.08-2.69-7.31-2.69-4.23 0-7.31 2.69L247-561.85q-2.31 1.93-3.65 4.43-1.35 2.5-1.35 5.57V-200Zm-86 0v-351.85q0-23.4 10.61-44.35 10.6-20.94 29.31-34.49l225.7-169.54q26.95-19.46 58.32-19.46t58.44 19.46l225.7 169.54q18.71 13.55 29.31 34.49Q804-575.25 804-551.85V-200q0 36.54-24.73 61.27Q754.54-114 718-114H572.31q-20.37 0-34.76-14.4-14.4-14.39-14.4-34.76v-201.53h-86.3v201.53q0 20.37-14.4 34.76-14.39 14.4-34.76 14.4H242q-36.54 0-61.27-24.73Q156-163.46 156-200Zm324-267.23Z" />
      </svg>
    ),
    fill: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 -960 960 960"
        width="24"
      >
        <path d="M156-200v-351.85q0-23.17 10.68-44.03 10.69-20.87 29.24-34.81l225.7-169.54q26.95-19.46 58.32-19.46t58.44 19.46l225.7 169.54q18.55 13.94 29.24 34.81Q804-575.02 804-551.85V-200q0 36.54-24.73 61.27Q754.54-114 718-114H615.31q-20.37 0-34.76-14.4-14.4-14.39-14.4-34.76v-195.38q0-20.36-14.39-34.76-14.39-14.39-34.76-14.39h-74q-20.37 0-34.76 14.39-14.39 14.4-14.39 34.76v195.38q0 20.37-14.4 34.76-14.39 14.4-34.76 14.4H242q-36.54 0-61.27-24.73Q156-163.46 156-200Z" />
      </svg>
    ),
  },
  news: {
    outline: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 -960 960 960"
        width="24"
      >
        <path d="M206.31-108q-41.03 0-69.67-28.64T108-206.31v-547.38q0-41.03 28.64-69.67T206.31-852h398.3q19.9 0 38.16 7.7 18.27 7.71 31.84 21.38l148.31 148.31q13.67 13.57 21.38 31.84 7.7 18.26 7.7 38.16v398.3q0 41.03-28.64 69.67T753.69-108H206.31Zm0-86h547.38q5.39 0 8.85-3.46t3.46-8.85V-602H651.15q-20.46 0-34.8-14.35Q602-630.69 602-651.15V-766H206.31q-5.39 0-8.85 3.46t-3.46 8.85v547.38q0 5.39 3.46 8.85t8.85 3.46ZM643-272q17.77 0 30.38-12.62Q686-297.23 686-315t-12.62-30.38Q660.77-358 643-358H317q-17.77 0-30.38 12.62Q274-332.77 274-315t12.62 30.38Q299.23-272 317-272h326ZM437-602q17.77 0 30.38-12.62Q480-627.23 480-645t-12.62-30.38Q454.77-688 437-688H317q-17.77 0-30.38 12.62Q274-662.77 274-645t12.62 30.38Q299.23-602 317-602h120Zm206 165q17.77 0 30.38-12.62Q686-462.23 686-480t-12.62-30.38Q660.77-523 643-523H317q-17.77 0-30.38 12.62Q274-497.77 274-480t12.62 30.38Q299.23-437 317-437h326ZM194-766v164-164V-194v-572Z" />
      </svg>
    ),
    fill: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 -960 960 960"
        width="24"
      >
        <path d="M212.31-140Q182-140 161-161q-21-21-21-51.31v-535.38Q140-778 161-799q21-21 51.31-21h389.3q14.64 0 27.9 5.62 13.26 5.61 23.1 15.46l146.31 146.31q9.85 9.84 15.46 23.1 5.62 13.26 5.62 27.9v389.3Q820-182 799-161q-21 21-51.31 21H212.31ZM600-760v123.85q0 15.36 10.39 25.76Q620.79-600 636.15-600H760L600-760Zm40 460q12.75 0 21.37-8.63 8.63-8.63 8.63-21.38 0-12.76-8.63-21.37Q652.75-360 640-360H320q-12.75 0-21.37 8.63-8.63 8.63-8.63 21.38 0 12.76 8.63 21.37Q307.25-300 320-300h320ZM450-600q12.75 0 21.38-8.63 8.62-8.63 8.62-21.38 0-12.76-8.62-21.37Q462.75-660 450-660H320q-12.75 0-21.37 8.63-8.63 8.63-8.63 21.38 0 12.76 8.63 21.37Q307.25-600 320-600h130Zm190 150q12.75 0 21.37-8.63 8.63-8.63 8.63-21.38 0-12.76-8.63-21.37Q652.75-510 640-510H320q-12.75 0-21.37 8.63-8.63 8.63-8.63 21.38 0 12.76 8.63 21.37Q307.25-450 320-450h320Z" />
      </svg>
    ),
  },
  agenda: {
    outline: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 -960 960 960"
        width="24"
      >
        <path d="M206.31-70q-41.03 0-69.67-28.64T108-168.31v-547.38q0-41.03 28.64-69.67T206.31-814h23.38v-36.85q0-18.15 12.81-30.96 12.81-12.8 30.96-12.8 18.16 0 30.96 12.8 12.81 12.81 12.81 30.96V-814h327.08v-37.61q0-17.77 12.61-30.39 12.62-12.61 30.39-12.61 17.77 0 30.38 12.61 12.62 12.62 12.62 30.39V-814h23.38q41.03 0 69.67 28.64T852-715.69v547.38q0 41.03-28.64 69.67T753.69-70H206.31Zm0-86h547.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-399.38H194v399.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85ZM194-653.69h572v-62q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H206.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v62Zm0 0V-728v74.31Zm286 262.77q-16.69 0-29.04-12.35-12.34-12.34-12.34-29.04 0-16.69 12.34-29.04 12.35-12.34 29.04-12.34 16.69 0 29.04 12.34 12.34 12.35 12.34 29.04 0 16.7-12.34 29.04-12.35 12.35-29.04 12.35Zm-160 0q-16.69 0-29.04-12.35-12.34-12.34-12.34-29.04 0-16.69 12.34-29.04 12.35-12.34 29.04-12.34 16.69 0 29.04 12.34 12.34 12.35 12.34 29.04 0 16.7-12.34 29.04-12.35 12.35-29.04 12.35Zm320 0q-16.69 0-29.04-12.35-12.34-12.34-12.34-29.04 0-16.69 12.34-29.04 12.35-12.34 29.04-12.34 16.69 0 29.04 12.34 12.34 12.35 12.34 29.04 0 16.7-12.34 29.04-12.35 12.35-29.04 12.35ZM480-234q-16.69 0-29.04-12.35-12.34-12.34-12.34-29.03 0-16.7 12.34-29.04 12.35-12.35 29.04-12.35 16.69 0 29.04 12.35 12.34 12.34 12.34 29.04 0 16.69-12.34 29.03Q496.69-234 480-234Zm-160 0q-16.69 0-29.04-12.35-12.34-12.34-12.34-29.03 0-16.7 12.34-29.04 12.35-12.35 29.04-12.35 16.69 0 29.04 12.35 12.34 12.34 12.34 29.04 0 16.69-12.34 29.03Q336.69-234 320-234Zm320 0q-16.69 0-29.04-12.35-12.34-12.34-12.34-29.03 0-16.7 12.34-29.04 12.35-12.35 29.04-12.35 16.69 0 29.04 12.35 12.34 12.34 12.34 29.04 0 16.69-12.34 29.03Q656.69-234 640-234Z" />
      </svg>
    ),
    fill: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 -960 960 960"
        width="24"
      >
        <path d="M206.31-70q-41.03 0-69.67-28.64T108-168.31v-547.38q0-41.03 28.64-69.67T206.31-814h23.38v-36.85q0-18.15 12.81-30.96 12.81-12.8 30.96-12.8 18.16 0 30.96 12.8 12.81 12.81 12.81 30.96V-814h327.08v-37.61q0-17.77 12.61-30.39 12.62-12.61 30.39-12.61 17.77 0 30.38 12.61 12.62 12.62 12.62 30.39V-814h23.38q41.03 0 69.67 28.64T852-715.69v547.38q0 41.03-28.64 69.67T753.69-70H206.31Zm0-86h547.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-399.38H194v399.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85ZM194-653.69h572v-62q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H206.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v62Zm0 0V-728v74.31Zm286 262.77q-16.69 0-29.04-12.35-12.34-12.34-12.34-29.04 0-16.69 12.34-29.04 12.35-12.34 29.04-12.34 16.69 0 29.04 12.34 12.34 12.35 12.34 29.04 0 16.7-12.34 29.04-12.35 12.35-29.04 12.35Zm-160 0q-16.69 0-29.04-12.35-12.34-12.34-12.34-29.04 0-16.69 12.34-29.04 12.35-12.34 29.04-12.34 16.69 0 29.04 12.34 12.34 12.35 12.34 29.04 0 16.7-12.34 29.04-12.35 12.35-29.04 12.35Zm320 0q-16.69 0-29.04-12.35-12.34-12.34-12.34-29.04 0-16.69 12.34-29.04 12.35-12.34 29.04-12.34 16.69 0 29.04 12.34 12.34 12.35 12.34 29.04 0 16.7-12.34 29.04-12.35 12.35-29.04 12.35ZM480-234q-16.69 0-29.04-12.35-12.34-12.34-12.34-29.03 0-16.7 12.34-29.04 12.35-12.35 29.04-12.35 16.69 0 29.04 12.35 12.34 12.34 12.34 29.04 0 16.69-12.34 29.03Q496.69-234 480-234Zm-160 0q-16.69 0-29.04-12.35-12.34-12.34-12.34-29.03 0-16.7 12.34-29.04 12.35-12.35 29.04-12.35 16.69 0 29.04 12.35 12.34 12.34 12.34 29.04 0 16.69-12.34 29.03Q336.69-234 320-234Zm320 0q-16.69 0-29.04-12.35-12.34-12.34-12.34-29.03 0-16.7 12.34-29.04 12.35-12.35 29.04-12.35 16.69 0 29.04 12.35 12.34 12.34 12.34 29.04 0 16.69-12.34 29.03Q656.69-234 640-234Z" />
      </svg>
    ),
  },
  alert: {
    outline: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 -960 960 960"
        width="24"
      >
        <path d="M191-172.62q-17.75 0-30.37-12.62Q148-197.87 148-215.63q0-17.75 12.63-30.37 12.62-12.61 30.37-12.61h29.31v-300.47q0-88.69 54.81-158.69 54.8-70 140.88-92.31V-827q0-26.67 18.69-45.33Q453.38-891 480.07-891q26.7 0 45.31 18.67Q544-853.67 544-827v16.92q86.08 22.31 141.38 91.61 55.31 69.3 55.31 159.39v300.47H770q17.75 0 30.37 12.62Q813-233.36 813-215.6q0 17.75-12.63 30.37-12.62 12.61-30.37 12.61H191Zm290-323.07Zm-1.1 447.38q-34.82 0-59.51-24.76-24.7-24.77-24.7-59.55h168.62q0 34.93-24.8 59.62-24.79 24.69-59.61 24.69Zm-173.59-210.3h348.38v-300.47q0-72.46-51.19-123.07-51.2-50.62-123.58-50.62t-123 50.62q-50.61 50.61-50.61 123.07v300.47Z" />
      </svg>
    ),
    fill: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 -960 960 960"
        width="24"
      >
        <path d="M210-204.62q-12.75 0-21.37-8.62-8.63-8.63-8.63-21.39 0-12.75 8.63-21.37 8.62-8.61 21.37-8.61h42.31v-298.47q0-80.69 49.81-142.69 49.8-62 127.88-79.31V-810q0-20.83 14.57-35.42Q459.14-860 479.95-860q20.82 0 35.43 14.58Q530-830.83 530-810v24.92q78.08 17.31 127.88 79.31 49.81 62 49.81 142.69v298.47H750q12.75 0 21.37 8.62 8.63 8.63 8.63 21.39 0 12.75-8.63 21.37-8.62 8.61-21.37 8.61H210ZM479.93-92.31q-29.85 0-51.04-21.24-21.2-21.24-21.2-51.07h144.62q0 29.93-21.26 51.12-21.26 21.19-51.12 21.19Z" />
      </svg>
    ),
  },
  settings: {
    outline: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 -960 960 960"
        width="24"
      >
        <path d="M411.69-68q-19.46 0-34.8-13.29-15.33-13.28-18.66-32.71l-10.77-82.85q-10.07-4.38-23.24-11.53-13.16-7.15-22.91-15.31L223-191.23q-18.85 8.31-37.88 1.61-19.04-6.69-28.58-24.3L87.46-338.08q-9.54-17.61-6.07-36.27 3.46-18.65 19.46-30.42l64.92-50q-.38-6.85-.96-13.92-.58-7.08-.58-13.93 0-5.94.58-12.34.58-6.4.96-14.27l-63.92-48q-16-11.77-19.27-31.12-3.27-19.34 6.27-36.96l68.69-120q9.54-17.23 28.08-23.61 18.53-6.39 37.38.92l73.92 30.08q11.47-8.46 25.39-15.96t25.77-13.27L358.23-848q2.23-19.85 18.12-32.92Q392.23-894 411.69-894h136.62q19.46 0 35.34 13.08 15.89 13.07 18.12 32.92l9.77 82.23q13 6.54 25.57 13.27 12.58 6.73 24.43 15.58L736.39-768q18.56-8.31 37.32-1.42 18.75 6.88 29.13 24.11l68.7 120.39q9.54 17.61 6.07 36.77-3.46 19.15-19.46 30.92l-67.46 51.15q1.15 6.69 1.35 13.62.19 6.92.19 12.46 0 5.15-.39 12.08-.38 6.92-.76 14.77l64.3 48.38q16 11.77 20.16 30.92 4.15 19.16-5.39 36.77l-68.31 122.77q-9.53 17.62-29.1 24.31-19.56 6.69-38.74-1.62l-77.46-32.46q-10.85 7.85-21.81 14.46-10.96 6.62-22.19 11.39L601.77-114q-3.33 19.43-18.66 32.71Q567.77-68 548.31-68H411.69ZM439-154h79.46L533-262.15q31.62-8 58.37-23.32 26.76-15.32 51.48-39.3L740.23-284l40.39-68-84.77-65.38q5-15.54 7.3-31.7 2.31-16.15 2.31-32.65 0-16.89-1.81-31.42-1.8-14.54-6.8-32.7L781.38-610 743-678l-99.54 40.38q-20.08-22.46-50.01-39.71-29.93-17.26-60.83-24.52L521-808h-82.38l-11.24 104.77q-34.61 8.23-62.53 24.65-27.93 16.43-51.47 40.96L217-678l-40.38 68L260-545.62q-5 18.24-7 33.62-2 15.38-2 29.81 0 13.19 2 29.19t6.62 36.62l-83 64.38L217-284l97-41q26.77 25.38 54.19 40.81 27.43 15.42 58.81 23.42L439-154Zm38.46-180q61.52 0 104.76-43.24T625.46-482q0-61.52-43.24-104.76T477.46-630q-61.54 0-104.77 43.24T329.46-482q0 61.52 43.23 104.76T477.46-334ZM479-481Z" />
      </svg>
    ),
    fill: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 -960 960 960"
        width="24"
      >
        <path d="M435.69-100q-20.46 0-35.34-13.58-14.89-13.57-18.12-33.42l-9.77-74.85q-16.07-5.38-32.96-15.07-16.88-9.7-30.19-20.77L240-228.23q-18.85 8.31-37.88 1.61-19.04-6.69-29.58-24.3l-45.08-78.16q-10.54-17.61-6.07-37.27 4.46-19.65 20.46-32.42l59.92-45q-1.38-8.92-1.96-17.92-.58-9-.58-17.93 0-8.53.58-17.34t1.96-19.27l-59.92-45q-16-12.77-20.27-32.62-4.27-19.84 6.27-37.46l44.69-77q10.54-17.23 29.58-24.11 19.03-6.89 37.88 1.42l68.92 29.08q14.47-11.46 30.89-20.96t32.27-15.27L382.23-813q3.23-19.85 18.12-33.42Q415.23-860 435.69-860h88.62q20.46 0 35.34 13.58 14.89 13.57 18.12 33.42l9.77 75.23q18 6.54 32.57 15.27 14.58 8.73 29.43 20.58L720.39-731q18.84-8.31 37.88-1.42 19.04 6.88 29.57 24.11l44.7 77.39q10.54 17.61 6.07 37.27-4.46 19.65-20.46 32.42l-61.46 46.15q2.15 9.69 2.35 18.12.19 8.42.19 16.96 0 8.15-.39 16.58-.38 8.42-2.76 19.27l60.3 45.38q16 12.77 20.66 32.42 4.65 19.66-5.89 37.27l-45.31 77.77q-10.53 17.62-29.76 24.31-19.23 6.69-38.08-1.62l-68.46-29.46q-14.85 11.85-30.31 20.96-15.46 9.12-31.69 14.89L577.77-147q-3.23 19.85-18.12 33.42Q544.77-100 524.31-100h-88.62Zm44.77-260q49.92 0 84.96-35.04 35.04-35.04 35.04-84.96 0-49.92-35.04-84.96Q530.38-600 480.46-600q-50.54 0-85.27 35.04T360.46-480q0 49.92 34.73 84.96Q429.92-360 480.46-360Z" />
      </svg>
    ),
  },
};

interface NavElement extends React.HTMLAttributes<HTMLLIElement> {
  label: string;
  SVG: {
    outline: React.ReactNode;
    fill: React.ReactNode;
  };
  isActive?: boolean;
  href: Url;
}

/**
 * NavElement Component
 *
 * Renders a navigation element within a navigation bar.
 *
 * @param className Additional CSS classes for the navigation element.
 * @param label Label text for the navigation element.
 * @param isActive Whether the navigation element is active or not.
 * @param SVG SVG icons for the navigation element.
 * @param href URL for the navigation link.
 * @param props Additional HTML attributes to be passed to the li element.
 * @returns JSX.Element or React.HTMLAttributes<HTMLLIElement>.
 */
const NavElement = React.forwardRef<HTMLLIElement, NavElement>(
  ({ className, label, isActive = false, SVG, href, ...props }, ref) => (
    <li className={cn(className, "w-full z-50")} {...props} ref={ref}>
      <Link
        href={href}
        className="flex flex-col items-center gap-2 w-full h-16 justify-center fill-slate-800 text-slate-800"
      >
        {isActive ? (
          <>
            {SVG.fill}
            <Small className="font-semibold">{label}</Small>
          </>
        ) : (
          SVG.outline
        )}
      </Link>
    </li>
  )
);
NavElement.displayName = "NavElement";

interface NavProps extends React.HTMLAttributes<HTMLElement> {
  active?: "home" | "news" | "agenda" | "alert" | "settings" | undefined | null;
}

/**
 * Nav Component
 *
 * Renders a navigation bar with multiple navigation elements.
 *
 * @param active Currently active navigation item.
 * @param props Additional HTML attributes to be passed to the nav element.
 * @returns JSX.Element or React.HTMLAttributes<HTMLElement>.
 */
const Nav = React.forwardRef<HTMLElement, NavProps>(
  ({ active, ...props }, ref) => (
    <nav
      className="flex fixed bottom-0 left-0 bg-slate-50 w-full rounded-t-3xl"
      {...props}
      ref={ref}
    >
      <ul className="flex px-6 pb-4 flex-grow flex-shrink-0 ">
        <NavElement
          label="Menu"
          SVG={NavSVG.home}
          isActive={active == "home"}
          href="./"
        />
        <NavElement
          label="Actu"
          SVG={NavSVG.news}
          isActive={active == "news"}
          href="./"
        />
        <NavElement
          label="Agenda"
          SVG={NavSVG.agenda}
          isActive={active == "agenda"}
          href="./"
        />
        <NavElement
          label="Alertes"
          SVG={NavSVG.alert}
          isActive={active == "alert"}
          href="./"
        />
        <NavElement
          label="Paramètres"
          SVG={NavSVG.settings}
          isActive={active == "settings"}
          href="./"
        />
      </ul>
    </nav>
  )
);
Nav.displayName = "Nav";

export { Nav };
