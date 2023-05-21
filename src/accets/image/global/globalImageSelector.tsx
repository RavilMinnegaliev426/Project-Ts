import React from "react";

interface Props {
  id: string;
}

const GlobalImageSelector = ({ id }: Props) => {
  switch (id) {
    case "header-logo":
      return (
        <img src="https://cdn-icons-png.flaticon.com/64/1599/1599017.png"></img>
      );
    case "change-theme":
      return (
        <svg
          width="24"
          height="28"
          viewBox="0 0 24 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.6667 4.09792V24.7917C6.83958 24.7917 2.91667 20.9562 2.91667 16.2312C2.91667 13.9562 3.82083 11.8125 5.46875 10.1937L11.6667 4.09792ZM11.6667 0L3.42708 8.10833C1.3125 10.1937 0 13.0667 0 16.2312C0 22.575 5.22083 27.7083 11.6667 27.7083C18.1125 27.7083 23.3333 22.575 23.3333 16.2312C23.3333 13.0667 22.0208 10.1937 19.9062 8.10833L11.6667 0Z"
            fill="#4793FF"
          />
        </svg>
      );
    case "sun":
      return (
        <svg
          width="119"
          height="119"
          viewBox="0 0 119 119"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M59.5229 88.0144C75.2638 88.0144 88.0243 75.2545 88.0243 59.5144C88.0243 43.7742 75.2638 31.0143 59.5229 31.0143C43.782 31.0143 31.0215 43.7742 31.0215 59.5144C31.0215 75.2545 43.782 88.0144 59.5229 88.0144Z"
            fill="url(#paint0_linear_2_179)"
          />
          <path
            d="M86.3084 5.95127L79.6106 22.1222C77.4274 27.389 69.5268 24.1172 71.71 18.8504L78.4078 2.67947C80.591 -2.58734 88.4916 0.684466 86.3084 5.95127ZM47.2843 100.155L40.5865 116.326C38.4033 121.593 30.5027 118.321 32.6859 113.054L39.3837 96.8835C41.5669 91.6167 49.4675 94.8885 47.2843 100.155ZM116.326 40.5959L100.154 47.2934C94.8873 49.4765 91.6154 41.5763 96.8824 39.3932L113.054 32.6957C118.321 30.5126 121.593 38.4128 116.326 40.5959ZM22.1176 79.6182L5.94586 86.3157C0.6788 88.4988 -2.59316 80.5986 2.6739 78.4155L18.8456 71.718C24.1127 69.5349 27.3846 77.4351 22.1176 79.6182ZM113.054 86.3214L96.8824 79.6239C91.6154 77.4408 94.8873 69.5406 100.154 71.7237L116.326 78.4212C121.593 80.6043 118.321 88.5045 113.054 86.3214ZM18.8456 47.2991L2.6739 40.6016C-2.59316 38.4185 0.6788 30.5183 5.94586 32.7014L22.1176 39.3989C27.3846 41.582 24.1127 49.4822 18.8456 47.2991ZM40.5808 2.67377L47.2786 18.8447C49.4618 24.1115 41.5612 27.3833 39.378 22.1165L32.6802 5.94557C30.497 0.678766 38.3976 -2.59304 40.5808 2.67377ZM79.6049 96.8778L86.3027 113.049C88.4859 118.316 80.5853 121.587 78.4021 116.321L71.7043 100.15C69.5211 94.8828 77.4217 91.611 79.6049 96.8778Z"
            fill="#FFB300"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2_179"
              x1="59.5229"
              y1="31.0143"
              x2="59.5229"
              y2="87.2546"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFC227" />
              <stop offset="1" stop-color="#FFB300" />
            </linearGradient>
          </defs>
        </svg>
      );
    default:
      return null;
  }
  return <div>GlobalImageSelector</div>;
};
const GlobalSVGSelector = ({ id }: Props) => {
  switch (id) {
    case "rain":
      return (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.218 32.926L12.118 37.924C11.798 38.688 12.156 39.568 12.92 39.888C13.684 40.208 14.564 39.85 14.884 39.086L16.984 34.088C17.304 33.324 16.946 32.444 16.182 32.124C15.418 31.804 14.538 32.162 14.218 32.926ZM30.218 32.926L28.118 37.924C27.798 38.688 28.156 39.568 28.92 39.888C29.684 40.208 30.564 39.85 30.884 39.086L32.984 34.088C33.304 33.324 32.946 32.444 32.182 32.124C31.418 31.804 30.538 32.162 30.218 32.926ZM22.218 30.926L20.118 35.924C19.798 36.688 20.156 37.568 20.92 37.888C21.684 38.208 22.564 37.85 22.884 37.086L24.984 32.088C25.304 31.324 24.946 30.444 24.182 30.124C23.418 29.804 22.538 30.162 22.218 30.926Z"
            fill="#66AFEB"
          />
          <path
            d="M14 28C9.582 28 6 24.418 6 20C6 15.582 9.582 12 14 12C14.834 12 15.636 12.128 16.392 12.364C17.518 8.68 20.946 6 25 6C29.97 6 34 10.03 34 15C34 15.47 33.964 15.93 33.894 16.38C34.55 16.134 35.258 16 36 16C39.314 16 42 18.686 42 22C42 25.314 39.314 28 36 28H14Z"
            fill="url(#paint7_linear)"
          />
          <path
            d="M16 15C16 19.97 20.03 24 25 24C29.502 24 33.23 20.696 33.894 16.38C34.55 16.134 35.258 16 36 16C39.314 16 42 18.686 42 22C42 25.314 39.314 28 36 28H14C9.582 28 6 24.418 6 20C6 15.582 9.582 12 14 12C14.834 12 15.636 12.128 16.392 12.364C16.136 13.198 16 14.082 16 15Z"
            fill="url(#paint1_radial)"
          />
          <defs>
            <linearGradient
              id="paint7_linear"
              x1="24"
              y1="6"
              x2="24"
              y2="28"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9FC7FF" />
              <stop offset="1" stopColor="#9BC1F5" />
            </linearGradient>
            <radialGradient
              id="paint1_radial"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(10.7539 -24.6966) rotate(-90) scale(20.9574 6.69705)"
            >
              <stop stopColor="#486DA8" stopOpacity="0.4" />
              <stop offset="1" stopColor="#486DA8" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      );
    case "small_rain":
      return (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.218 32.926L14.118 37.924C13.798 38.688 14.156 39.568 14.92 39.888C15.684 40.208 16.564 39.85 16.884 39.086L18.984 34.088C19.304 33.324 18.946 32.444 18.182 32.124C17.418 31.804 16.538 32.162 16.218 32.926ZM26.218 30.926L24.118 35.924C23.798 36.688 24.156 37.568 24.92 37.888C25.684 38.208 26.564 37.85 26.884 37.086L28.984 32.088C29.304 31.324 28.946 30.444 28.182 30.124C27.418 29.804 26.538 30.162 26.218 30.926Z"
            fill="#66AFEB"
          />
          <path
            d="M14 28C9.582 28 6 24.418 6 20C6 15.582 9.582 12 14 12C14.834 12 15.636 12.128 16.392 12.364C17.518 8.68 20.946 6 25 6C29.97 6 34 10.03 34 15C34 15.47 33.964 15.93 33.894 16.38C34.55 16.134 35.258 16 36 16C39.314 16 42 18.686 42 22C42 25.314 39.314 28 36 28H14Z"
            fill="url(#paint6_linear)"
          />
          <path
            d="M16 15C16 19.97 20.03 24 25 24C29.502 24 33.23 20.696 33.894 16.38C34.55 16.134 35.258 16 36 16C39.314 16 42 18.686 42 22C42 25.314 39.314 28 36 28H14C9.582 28 6 24.418 6 20C6 15.582 9.582 12 14 12C14.834 12 15.636 12.128 16.392 12.364C16.136 13.198 16 14.082 16 15Z"
            fill="url(#paint1_radial)"
          />
          <defs>
            <linearGradient
              id="paint6_linear"
              x1="24"
              y1="6"
              x2="24"
              y2="28"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9FC7FF" />
              <stop offset="1" stopColor="#9BC1F5" />
            </linearGradient>
            <radialGradient
              id="paint1_radial"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(10.7539 -24.6966) rotate(-90) scale(20.9574 6.69705)"
            >
              <stop stopColor="#486DA8" stopOpacity="0.4" />
              <stop offset="1" stopColor="#486DA8" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      );
    case "small_rain_sun":
      return (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32 24C36.4183 24 40 20.4183 40 16C40 11.5817 36.4183 8 32 8C27.5817 8 24 11.5817 24 16C24 20.4183 27.5817 24 32 24Z"
            fill="url(#paint5_linear)"
          />
          <path
            d="M30.96 1.45999L31.48 4.41399C31.828 6.38399 28.872 6.90399 28.526 4.93399L28.006 1.97999C27.658 0.00998566 30.614 -0.510014 30.96 1.45999ZM41.546 4.98199L39.826 7.43999C38.678 9.07799 36.222 7.35799 37.368 5.71999L39.088 3.26199C40.236 1.62399 42.692 3.34399 41.546 4.98199ZM20.984 6.45399L23.442 8.17399C25.08 9.32199 23.36 11.778 21.722 10.632L19.264 8.91199C17.626 7.76399 19.346 5.30799 20.984 6.45399ZM42.282 21.366L44.74 23.086C46.378 24.234 44.658 26.69 43.02 25.544L40.562 23.824C38.924 22.676 40.644 20.22 42.282 21.366ZM46.542 14.958L43.588 15.478C41.618 15.826 41.098 12.87 43.068 12.524L46.022 12.004C47.992 11.656 48.512 14.612 46.542 14.958Z"
            fill="#FFB300"
          />
          <path
            d="M14.218 38.926L12.118 43.924C11.798 44.688 12.156 45.568 12.92 45.888C13.684 46.208 14.564 45.85 14.884 45.086L16.984 40.088C17.304 39.324 16.946 38.444 16.182 38.124C15.418 37.804 14.538 38.162 14.218 38.926ZM24.218 36.926L22.118 41.924C21.798 42.688 22.156 43.568 22.92 43.888C23.684 44.208 24.564 43.85 24.884 43.086L26.984 38.088C27.304 37.324 26.946 36.444 26.182 36.124C25.418 35.804 24.538 36.162 24.218 36.926Z"
            fill="#66AFEB"
          />
          <path
            d="M12 34C7.582 34 4 30.418 4 26C4 21.582 7.582 18 12 18C12.834 18 13.636 18.128 14.392 18.364C15.518 14.68 18.946 12 23 12C27.97 12 32 16.03 32 21C32 21.47 31.964 21.93 31.894 22.38C32.55 22.134 33.258 22 34 22C37.314 22 40 24.686 40 28C40 31.314 37.314 34 34 34H12Z"
            fill="url(#paint1_linear)"
          />
          <path
            d="M14 21C14 25.97 18.03 30 23 30C27.502 30 31.23 26.696 31.894 22.38C32.55 22.134 33.258 22 34 22C37.314 22 40 24.686 40 28C40 31.314 37.314 34 34 34H12C7.582 34 4 30.418 4 26C4 21.582 7.582 18 12 18C12.834 18 13.636 18.128 14.392 18.364C14.136 19.198 14 20.082 14 21Z"
            fill="url(#paint2_radial)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="40"
              y1="8"
              x2="28.7832"
              y2="19.0723"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFB301" />
              <stop offset="1" stopColor="#FFC533" />
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="22"
              y1="12"
              x2="22"
              y2="34"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9FC7FF" />
              <stop offset="1" stopColor="#9BC1F5" />
            </linearGradient>
            <radialGradient
              id="paint2_radial"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(15.0679 -22.6966) rotate(-90) scale(20.9574 6.69705)"
            >
              <stop stopColor="#486DA8" stopOpacity="0.4" />
              <stop offset="1" stopColor="#486DA8" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      );
    case "sun":
      return (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.0092 35.5016C30.3585 35.5016 35.5056 30.3547 35.5056 24.0058C35.5056 17.6568 30.3585 12.5099 24.0092 12.5099C17.6599 12.5099 12.5128 17.6568 12.5128 24.0058C12.5128 30.3547 17.6599 35.5016 24.0092 35.5016Z"
            fill="url(#paint5_linear)"
          />
          <path
            d="M34.8135 2.40051L32.1118 8.92324C31.2312 11.0477 28.0444 9.72795 28.925 7.60352L31.6267 1.08079C32.5073 -1.04363 35.6941 0.276087 34.8135 2.40051ZM19.0727 40.3988L16.371 46.9215C15.4904 49.0459 12.3036 47.7262 13.1842 45.6018L15.8859 39.0791C16.7665 36.9546 19.9533 38.2743 19.0727 40.3988ZM46.9215 16.3748L40.3984 19.0763C38.2739 19.9569 36.9541 16.7703 39.0786 15.8897L45.6017 13.1882C47.7262 12.3076 49.046 15.4942 46.9215 16.3748ZM8.92137 32.1149L2.39833 34.8164C0.273802 35.697 -1.04598 32.5104 1.07855 31.6298L7.60158 28.9283C9.72611 28.0477 11.0459 31.2343 8.92137 32.1149ZM45.6017 34.8187L39.0786 32.1172C36.9541 31.2366 38.2739 28.05 40.3984 28.9306L46.9215 31.6321C49.046 32.5127 47.7262 35.6993 45.6017 34.8187ZM7.60158 19.0786L1.07855 16.3771C-1.04598 15.4965 0.273802 12.3099 2.39833 13.1905L8.92137 15.892C11.0459 16.7726 9.72611 19.9592 7.60158 19.0786ZM16.3687 1.0785L19.0704 7.60122C19.951 9.72565 16.7642 11.0454 15.8836 8.92094L13.1819 2.39821C12.3013 0.273788 15.4881 -1.04593 16.3687 1.0785ZM32.1095 39.0768L34.8112 45.5995C35.6918 47.7239 32.505 49.0436 31.6244 46.9192L28.9227 40.3965C28.0421 38.2721 31.2289 36.9523 32.1095 39.0768Z"
            fill="#FFB300"
          />
          <defs>
            <linearGradient
              id="paint5_linear"
              x1="24.0092"
              y1="12.5099"
              x2="24.0092"
              y2="35.1951"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFC227" />
              <stop offset="1" stopColor="#FFB300" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "mainly_cloudy":
      return (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.32"
            d="M38 28C41.314 28 44 25.314 44 22C44 18.686 41.314 16 38 16H37.938C37.978 15.672 38 15.338 38 15C38 10.582 34.418 7 30 7C26.5 7 23.524 9.248 22.44 12.378C21.67 12.132 20.852 12 20 12C15.582 12 12 15.582 12 20C12 24.418 15.582 28 20 28C20.69 28 21.36 27.912 22 27.748V28H38Z"
            fill="#73A5E6"
          />
          <path
            d="M12 38C7.582 38 4 34.418 4 30C4 25.582 7.582 22 12 22C12.834 22 13.636 22.128 14.392 22.364C15.518 18.68 18.946 16 23 16C27.97 16 32 20.03 32 25C32 25.47 31.964 25.93 31.894 26.38C32.55 26.134 33.258 26 34 26C37.314 26 40 28.686 40 32C40 35.314 37.314 38 34 38H12Z"
            fill="url(#paint0_linear)"
          />
          <path
            d="M14 25C14 29.97 18.03 34 23 34C27.502 34 31.23 30.696 31.894 26.38C32.55 26.134 33.258 26 34 26C37.314 26 40 28.686 40 32C40 35.314 37.314 38 34 38H12C7.582 38 4 34.418 4 30C4 25.582 7.582 22 12 22C12.834 22 13.636 22.128 14.392 22.364C14.136 23.198 14 24.082 14 25Z"
            fill="url(#paint1_radial)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="22"
              y1="16"
              x2="22"
              y2="38"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9FC7FF" />
              <stop offset="1" stopColor="#9BC1F5" />
            </linearGradient>
            <radialGradient
              id="paint1_radial"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(17.9439 -22.6966) rotate(-90) scale(20.9574 6.69705)"
            >
              <stop stopColor="#486DA8" stopOpacity="0.4" />
              <stop offset="1" stopColor="#486DA8" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      );
    case "close":
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.25 8.25C16.836 8.25 16.5 8.586 16.5 9C16.5 13.1355 13.1355 16.5 9 16.5C4.8645 16.5 1.5 13.1355 1.5 9C1.5 4.8645 4.8645 1.5 9 1.5C11.0134 1.5 12.9034 2.28675 14.322 3.7155C14.6138 4.00912 15.0889 4.011 15.3825 3.71925C15.6765 3.4275 15.678 2.95238 15.3862 2.65838C13.6841 0.94425 11.4157 0 9 0C4.03725 0 0 4.03725 0 9C0 13.9628 4.03725 18 9 18C13.9624 18 18 13.9628 18 9C18 8.586 17.664 8.25 17.25 8.25Z"
            fill="#4793FF"
          />
          <path
            d="M10.0605 9L11.7803 7.28025C12.0731 6.98737 12.0731 6.51262 11.7803 6.21975C11.4874 5.92687 11.0126 5.92687 10.7198 6.21975L9.00003 7.9395L7.28028 6.21975C6.98778 5.92687 6.51228 5.92687 6.21978 6.21975C5.9269 6.51262 5.9269 6.98737 6.21978 7.28025L7.93953 9L6.21978 10.7197C5.9269 11.0126 5.9269 11.4874 6.21978 11.7802C6.36603 11.9269 6.55803 12 6.75003 12C6.94203 12 7.13403 11.9269 7.28028 11.7802L9.00003 10.0605L10.7198 11.7802C10.8664 11.9269 11.058 12 11.25 12C11.442 12 11.6336 11.9269 11.7803 11.7802C12.0731 11.4874 12.0731 11.0126 11.7803 10.7197L10.0605 9Z"
            fill="#4793FF"
          />
        </svg>
      );
    default:
      return null;
  }
  return <div>GlobalSVGSelector</div>;
};

const GlobalSVGSelector2 = ({ id }: Props) => {
  switch (id) {
    case "rain":
      return (
        <svg
          width="70%"
          height="70%"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.218 32.926L12.118 37.924C11.798 38.688 12.156 39.568 12.92 39.888C13.684 40.208 14.564 39.85 14.884 39.086L16.984 34.088C17.304 33.324 16.946 32.444 16.182 32.124C15.418 31.804 14.538 32.162 14.218 32.926ZM30.218 32.926L28.118 37.924C27.798 38.688 28.156 39.568 28.92 39.888C29.684 40.208 30.564 39.85 30.884 39.086L32.984 34.088C33.304 33.324 32.946 32.444 32.182 32.124C31.418 31.804 30.538 32.162 30.218 32.926ZM22.218 30.926L20.118 35.924C19.798 36.688 20.156 37.568 20.92 37.888C21.684 38.208 22.564 37.85 22.884 37.086L24.984 32.088C25.304 31.324 24.946 30.444 24.182 30.124C23.418 29.804 22.538 30.162 22.218 30.926Z"
            fill="#66AFEB"
          />
          <path
            d="M14 28C9.582 28 6 24.418 6 20C6 15.582 9.582 12 14 12C14.834 12 15.636 12.128 16.392 12.364C17.518 8.68 20.946 6 25 6C29.97 6 34 10.03 34 15C34 15.47 33.964 15.93 33.894 16.38C34.55 16.134 35.258 16 36 16C39.314 16 42 18.686 42 22C42 25.314 39.314 28 36 28H14Z"
            fill="url(#paint7_linear)"
          />
          <path
            d="M16 15C16 19.97 20.03 24 25 24C29.502 24 33.23 20.696 33.894 16.38C34.55 16.134 35.258 16 36 16C39.314 16 42 18.686 42 22C42 25.314 39.314 28 36 28H14C9.582 28 6 24.418 6 20C6 15.582 9.582 12 14 12C14.834 12 15.636 12.128 16.392 12.364C16.136 13.198 16 14.082 16 15Z"
            fill="url(#paint1_radial)"
          />
          <defs>
            <linearGradient
              id="paint7_linear"
              x1="24"
              y1="6"
              x2="24"
              y2="28"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9FC7FF" />
              <stop offset="1" stopColor="#9BC1F5" />
            </linearGradient>
            <radialGradient
              id="paint1_radial"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(10.7539 -24.6966) rotate(-90) scale(20.9574 6.69705)"
            >
              <stop stopColor="#486DA8" stopOpacity="0.4" />
              <stop offset="1" stopColor="#486DA8" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      );
    case "Clear":
      return (
        <svg
          width="70%"
          height="70%"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.0092 35.5016C30.3585 35.5016 35.5056 30.3547 35.5056 24.0058C35.5056 17.6568 30.3585 12.5099 24.0092 12.5099C17.6599 12.5099 12.5128 17.6568 12.5128 24.0058C12.5128 30.3547 17.6599 35.5016 24.0092 35.5016Z"
            fill="url(#paint5_linear)"
          />
          <path
            d="M34.8135 2.40051L32.1118 8.92324C31.2312 11.0477 28.0444 9.72795 28.925 7.60352L31.6267 1.08079C32.5073 -1.04363 35.6941 0.276087 34.8135 2.40051ZM19.0727 40.3988L16.371 46.9215C15.4904 49.0459 12.3036 47.7262 13.1842 45.6018L15.8859 39.0791C16.7665 36.9546 19.9533 38.2743 19.0727 40.3988ZM46.9215 16.3748L40.3984 19.0763C38.2739 19.9569 36.9541 16.7703 39.0786 15.8897L45.6017 13.1882C47.7262 12.3076 49.046 15.4942 46.9215 16.3748ZM8.92137 32.1149L2.39833 34.8164C0.273802 35.697 -1.04598 32.5104 1.07855 31.6298L7.60158 28.9283C9.72611 28.0477 11.0459 31.2343 8.92137 32.1149ZM45.6017 34.8187L39.0786 32.1172C36.9541 31.2366 38.2739 28.05 40.3984 28.9306L46.9215 31.6321C49.046 32.5127 47.7262 35.6993 45.6017 34.8187ZM7.60158 19.0786L1.07855 16.3771C-1.04598 15.4965 0.273802 12.3099 2.39833 13.1905L8.92137 15.892C11.0459 16.7726 9.72611 19.9592 7.60158 19.0786ZM16.3687 1.0785L19.0704 7.60122C19.951 9.72565 16.7642 11.0454 15.8836 8.92094L13.1819 2.39821C12.3013 0.273788 15.4881 -1.04593 16.3687 1.0785ZM32.1095 39.0768L34.8112 45.5995C35.6918 47.7239 32.505 49.0436 31.6244 46.9192L28.9227 40.3965C28.0421 38.2721 31.2289 36.9523 32.1095 39.0768Z"
            fill="#FFB300"
          />
          <defs>
            <linearGradient
              id="paint5_linear"
              x1="24.0092"
              y1="12.5099"
              x2="24.0092"
              y2="35.1951"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFC227" />
              <stop offset="1" stopColor="#FFB300" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "Clouds":
      return (
        <svg
          width="70%"
          height="70%"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.32"
            d="M38 28C41.314 28 44 25.314 44 22C44 18.686 41.314 16 38 16H37.938C37.978 15.672 38 15.338 38 15C38 10.582 34.418 7 30 7C26.5 7 23.524 9.248 22.44 12.378C21.67 12.132 20.852 12 20 12C15.582 12 12 15.582 12 20C12 24.418 15.582 28 20 28C20.69 28 21.36 27.912 22 27.748V28H38Z"
            fill="#73A5E6"
          />
          <path
            d="M12 38C7.582 38 4 34.418 4 30C4 25.582 7.582 22 12 22C12.834 22 13.636 22.128 14.392 22.364C15.518 18.68 18.946 16 23 16C27.97 16 32 20.03 32 25C32 25.47 31.964 25.93 31.894 26.38C32.55 26.134 33.258 26 34 26C37.314 26 40 28.686 40 32C40 35.314 37.314 38 34 38H12Z"
            fill="url(#paint0_linear)"
          />
          <path
            d="M14 25C14 29.97 18.03 34 23 34C27.502 34 31.23 30.696 31.894 26.38C32.55 26.134 33.258 26 34 26C37.314 26 40 28.686 40 32C40 35.314 37.314 38 34 38H12C7.582 38 4 34.418 4 30C4 25.582 7.582 22 12 22C12.834 22 13.636 22.128 14.392 22.364C14.136 23.198 14 24.082 14 25Z"
            fill="url(#paint1_radial)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="22"
              y1="16"
              x2="22"
              y2="38"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9FC7FF" />
              <stop offset="1" stopColor="#9BC1F5" />
            </linearGradient>
            <radialGradient
              id="paint1_radial"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(17.9439 -22.6966) rotate(-90) scale(20.9574 6.69705)"
            >
              <stop stopColor="#486DA8" stopOpacity="0.4" />
              <stop offset="1" stopColor="#486DA8" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      );
    default:
      return null;
  }
  return <div>GlobalSVGSelector2</div>;
};
export { GlobalImageSelector };
export { GlobalSVGSelector };
export { GlobalSVGSelector2 };
