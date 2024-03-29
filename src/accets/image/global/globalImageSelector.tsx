interface Props {
  id: string | number;
}

const GlobalImageSelector = ({ id }: Props) => {
  switch (id) {
    case "header-logo":
      return (
        <img
          src="https://cdn-icons-png.flaticon.com/64/1599/1599017.png"
          alt="icon"
        ></img>
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
};
function checkerRain(res: number | string) {
  const rain = ["rain", 61, 63, 65, 66, 67, 80, 81, 82];
  if (rain.includes(res)) {
    return rain.includes(res) ? res : {};
  }
}
function checkerSmallRain(res: number | string) {
  const small_rain = ["small_rain", 51, 53, 55, 56, 57];
  if (small_rain.includes(res)) {
    return small_rain.includes(res) ? res : {};
  }
}
function checkerSun(res: number | string) {
  const sun = ["sun", 0, 1];
  if (sun.includes(res)) {
    return sun.includes(res) ? res : {};
  }
}
function chekerMainlyCloudy(res: number | string) {
  const mainly_cloudy = ["mainly_cloudy", 2, 3];
  if (mainly_cloudy.includes(res)) {
    return mainly_cloudy.includes(res) ? res : {};
  }
}

function chekerFog(res: number | string) {
  const Fog = ["Fog", 45, 48];
  if (Fog.includes(res)) {
    return Fog.includes(res) ? res : {};
  }
}
function chekerThunderstorm(res: number | string) {
  const Thunderstorm = ["Thunderstorm", 95, 96, 93, 99];
  if (Thunderstorm.includes(res)) {
    return Thunderstorm.includes(res) ? res : {};
  }
}
function chekerSnow(res: number | string) {
  const chekerSnow = ["Snow", 71, 73, 75, 77, 85, 86];
  if (chekerSnow.includes(res)) {
    return chekerSnow.includes(res) ? res : {};
  }
}
const GlobalSVGSelector = ({ id }: Props) => {
  switch (id) {
    case checkerRain(id):
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
            fill="url(#paint0_linear_2_525)"
          />
          <path
            d="M16 15C16 19.97 20.03 24 25 24C29.502 24 33.23 20.696 33.894 16.38C34.55 16.134 35.258 16 36 16C39.314 16 42 18.686 42 22C42 25.314 39.314 28 36 28H14C9.582 28 6 24.418 6 20C6 15.582 9.582 12 14 12C14.834 12 15.636 12.128 16.392 12.364C16.136 13.198 16 14.082 16 15Z"
            fill="url(#paint1_radial_2_525)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2_525"
              x1="24"
              y1="6"
              x2="24"
              y2="40.0051"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#9FC7FF" />
              <stop offset="1" stop-color="#9BC1F5" />
            </linearGradient>
            <radialGradient
              id="paint1_radial_2_525"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(10.7539 -24.6966) rotate(-90) scale(20.9574 6.69705)"
            >
              <stop stop-color="#486DA8" stop-opacity="0.4" />
              <stop offset="1" stop-color="#486DA8" stop-opacity="0" />
            </radialGradient>
          </defs>
        </svg>
      );
    case checkerSmallRain(id):
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
            fill="url(#paint0_linear_2_537)"
          />
          <path
            d="M16 15C16 19.97 20.03 24 25 24C29.502 24 33.23 20.696 33.894 16.38C34.55 16.134 35.258 16 36 16C39.314 16 42 18.686 42 22C42 25.314 39.314 28 36 28H14C9.582 28 6 24.418 6 20C6 15.582 9.582 12 14 12C14.834 12 15.636 12.128 16.392 12.364C16.136 13.198 16 14.082 16 15Z"
            fill="url(#paint1_radial_2_537)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2_537"
              x1="24"
              y1="6"
              x2="24"
              y2="28"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#9FC7FF" />
              <stop offset="1" stop-color="#9BC1F5" />
            </linearGradient>
            <radialGradient
              id="paint1_radial_2_537"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(10.7539 -24.6966) rotate(-90) scale(20.9574 6.69705)"
            >
              <stop stop-color="#486DA8" stop-opacity="0.4" />
              <stop offset="1" stop-color="#486DA8" stop-opacity="0" />
            </radialGradient>
          </defs>
        </svg>
      );
    case checkerSun(id):
      return (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.0092 35.5016C30.3585 35.5016 35.5056 30.3548 35.5056 24.0058C35.5056 17.6568 30.3585 12.51 24.0092 12.51C17.6599 12.51 12.5128 17.6568 12.5128 24.0058C12.5128 30.3548 17.6599 35.5016 24.0092 35.5016Z"
            fill="url(#paint0_linear_24717_4)"
          />
          <path
            d="M34.8135 2.40051L32.1118 8.92324C31.2312 11.0477 28.0444 9.72795 28.925 7.60352L31.6267 1.08079C32.5073 -1.04363 35.6941 0.276087 34.8135 2.40051ZM19.0727 40.3988L16.371 46.9215C15.4904 49.0459 12.3036 47.7262 13.1842 45.6018L15.8859 39.0791C16.7665 36.9546 19.9533 38.2743 19.0727 40.3988ZM46.9215 16.3748L40.3984 19.0763C38.2739 19.9569 36.9541 16.7703 39.0786 15.8897L45.6017 13.1882C47.7262 12.3076 49.046 15.4942 46.9215 16.3748ZM8.92137 32.1149L2.39833 34.8164C0.273802 35.697 -1.04598 32.5104 1.07855 31.6298L7.60158 28.9283C9.72611 28.0477 11.0459 31.2343 8.92137 32.1149ZM45.6017 34.8187L39.0786 32.1172C36.9541 31.2366 38.2739 28.05 40.3984 28.9306L46.9215 31.6321C49.046 32.5127 47.7262 35.6993 45.6017 34.8187ZM7.60158 19.0786L1.07855 16.3771C-1.04598 15.4965 0.273802 12.3099 2.39833 13.1905L8.92137 15.892C11.0459 16.7726 9.72611 19.9592 7.60158 19.0786ZM16.3687 1.0785L19.0704 7.60122C19.951 9.72565 16.7642 11.0454 15.8836 8.92094L13.1819 2.39821C12.3013 0.273788 15.4881 -1.04593 16.3687 1.0785ZM32.1095 39.0768L34.8112 45.5995C35.6918 47.7239 32.505 49.0436 31.6244 46.9192L28.9227 40.3965C28.0421 38.2721 31.2289 36.9523 32.1095 39.0768Z"
            fill="#FFB300"
          />
          <defs>
            <linearGradient
              id="paint0_linear_24717_4"
              x1="24"
              y1="0"
              x2="24"
              y2="47.3602"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFC227" />
              <stop offset="1" stop-color="#FFB300" />
            </linearGradient>
          </defs>
        </svg>
      );
    case chekerMainlyCloudy(id):
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
    case chekerFog(id):
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 20 20"
          height="48px"
          viewBox="0 0 20 20"
          width="40px"
          fill="#9CC3F9"
        >
          <rect fill="none" height="20" width="20" />
          <path d="M14.44,5.76C14.09,3.63,12.23,2,10,2C8.36,2,6.87,2.88,6.09,4.3C4.07,4.57,2.5,6.3,2.5,8.37c0,2.27,1.85,4.12,4.12,4.12h7.5 c1.86,0,3.38-1.52,3.38-3.38C17.5,7.37,16.16,5.93,14.44,5.76z M14.5,14c0.41,0,0.75,0.34,0.75,0.75s-0.34,0.75-0.75,0.75 s-0.75-0.34-0.75-0.75S14.09,14,14.5,14z M6.25,16.5C6.66,16.5,7,16.84,7,17.25S6.66,18,6.25,18S5.5,17.67,5.5,17.25 S5.84,16.5,6.25,16.5z M4.75,14.75C4.75,14.34,5.09,14,5.5,14h6.75c0.41,0,0.75,0.34,0.75,0.75s-0.34,0.75-0.75,0.75H5.5 C5.09,15.5,4.75,15.17,4.75,14.75z M7.75,17.25c0-0.41,0.34-0.75,0.75-0.75h5.25c0.41,0,0.75,0.34,0.75,0.75S14.16,18,13.75,18H8.5 C8.09,18,7.75,17.67,7.75,17.25z" />
        </svg>
      );
    case chekerThunderstorm(id):
      return (
        <svg
          width="33"
          height="48"
          viewBox="0 0 33 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.38 8.02C25.68 3.56 21.88 0.12 17.22 0.02C17.14 -1.86265e-08 17.08 0 17 0C13.38 0 10.2 2.04 8.6 5.04C4.42 5.48 1.1 8.98 1 13.3C0.9 18 4.62 21.88 9.3 22H26C29.86 22 33 18.86 33 15C33 11.26 30.08 8.2 26.38 8.02Z"
            fill="#9DC3F9"
          />
          <path
            d="M22.1 24L17.12 29.36L20.68 31.4L16.74 36H20.68L25.32 30.6L21.88 28.64L26.2 24H22.1Z"
            fill="#FFBD1A"
          />
          <path
            d="M12.1 24L7.12 29.36L10.68 31.4L6.74 36H10.68L15.32 30.6L11.88 28.64L16.2 24H12.1Z"
            fill="#FFBD1A"
          />
        </svg>
      );
    case chekerSnow(id):
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          viewBox="0 -960 960 960"
          width="48"
          fill="#9CC3F9"
        >
          <path d="M450-80v-195L301-126l-43-42 192-192v-90h-90L172-262l-44-41 147-147H80v-60h195L125-660l43-43 192 193h90v-91L262-789l42-44 146 147v-194h60v194l150-150 42 43-192 192v91h91l189-189 43 42-147 147h194v60H686l148 149-41 43-192-192h-91v90l192 193-41 43-151-151v195h-60Z" />
        </svg>
      );
    default:
      return null;
  }
};

const PopupSelector = ({ id }: Props) => {
  switch (id) {
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
};

const GlobalSVGSelector2 = ({ id }: Props) => {
  switch (id) {
    case "Snow":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70px"
          height="70%"
          viewBox="0 -960 960 960"
          fill="#9CC3F9"
        >
          <path d="M450-80v-195L301-126l-43-42 192-192v-90h-90L172-262l-44-41 147-147H80v-60h195L125-660l43-43 192 193h90v-91L262-789l42-44 146 147v-194h60v194l150-150 42 43-192 192v91h91l189-189 43 42-147 147h194v60H686l148 149-41 43-192-192h-91v90l192 193-41 43-151-151v195h-60Z"></path>
        </svg>
      );
    case "rain":
      return (
        <svg
          width="70px"
          height="70%"
          viewBox="0 0 36 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.21799 26.926L6.11799 31.924C5.79799 32.688 6.15599 33.568 6.91999 33.888C7.68399 34.208 8.56399 33.85 8.88399 33.086L10.984 28.088C11.304 27.324 10.946 26.444 10.182 26.124C9.41799 25.804 8.53799 26.162 8.21799 26.926ZM24.218 26.926L22.118 31.924C21.798 32.688 22.156 33.568 22.92 33.888C23.684 34.208 24.564 33.85 24.884 33.086L26.984 28.088C27.304 27.324 26.946 26.444 26.182 26.124C25.418 25.804 24.538 26.162 24.218 26.926ZM16.218 24.926L14.118 29.924C13.798 30.688 14.156 31.568 14.92 31.888C15.684 32.208 16.564 31.85 16.884 31.086L18.984 26.088C19.304 25.324 18.946 24.444 18.182 24.124C17.418 23.804 16.538 24.162 16.218 24.926Z"
            fill="#66AFEB"
          />
          <path
            d="M8 22C3.582 22 0 18.418 0 14C0 9.582 3.582 6 8 6C8.834 6 9.636 6.128 10.392 6.364C11.518 2.68 14.946 0 19 0C23.97 0 28 4.03 28 9C28 9.47 27.964 9.93 27.894 10.38C28.55 10.134 29.258 10 30 10C33.314 10 36 12.686 36 16C36 19.314 33.314 22 30 22H8Z"
            fill="url(#paint0_linear_24701_3)"
          />
          <path
            d="M10 9C10 13.97 14.03 18 19 18C23.502 18 27.23 14.696 27.894 10.38C28.55 10.134 29.258 10 30 10C33.314 10 36 12.686 36 16C36 19.314 33.314 22 30 22H8C3.582 22 0 18.418 0 14C0 9.582 3.582 6 8 6C8.834 6 9.636 6.128 10.392 6.364C10.136 7.198 10 8.082 10 9Z"
            fill="url(#paint1_radial_24701_3)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_24701_3"
              x1="18"
              y1="0"
              x2="18"
              y2="34.0051"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#9FC7FF" />
              <stop offset="1" stop-color="#9BC1F5" />
            </linearGradient>
            <radialGradient
              id="paint1_radial_24701_3"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(4.75395 -30.6966) rotate(-90) scale(20.9574 6.69705)"
            >
              <stop stop-color="#486DA8" stop-opacity="0.4" />
              <stop offset="1" stop-color="#486DA8" stop-opacity="0" />
            </radialGradient>
          </defs>
        </svg>
      );
    case "Clear":
      return (
        <svg
          width="70px"
          height="70%"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          preserveAspectRatio="xMidYMid meet"
        >
          <g fill="#ffe62e">
            <path d="M20.5 59.7l7-7.2c-2.5-.5-4.8-1.5-6.9-2.9l-.1 10.1"></path>

            <path d="M43.5 4.3l-7 7.2c2.5.5 4.8 1.5 6.9 2.9l.1-10.1"></path>

            <path d="M4.3 43.5l10.1-.1C13 41.3 12 39 11.5 36.5l-7.2 7"></path>

            <path d="M59.7 20.5l-10.1.1c1.3 2.1 2.3 4.4 2.9 6.9l7.2-7"></path>

            <path d="M4.3 20.5l7.2 7c.5-2.5 1.5-4.8 2.9-6.9l-10.1-.1"></path>

            <path d="M59.7 43.5l-7.2-7c-.5 2.5-1.5 4.8-2.9 6.9l10.1.1"></path>

            <path d="M20.5 4.3l.1 10.1c2.1-1.3 4.4-2.3 6.9-2.9l-7-7.2"></path>

            <path d="M43.5 59.7l-.1-10.1C41.3 51 39 52 36.5 52.5l7 7.2"></path>
          </g>

          <g fill="#ffce31">
            <path d="M14.8 44l-4 9.3l9.3-4C18 47.8 16.2 46 14.8 44"></path>

            <path d="M49.2 20l4-9.3l-9.2 4c2 1.5 3.8 3.3 5.2 5.3"></path>

            <path d="M11.4 28.3L2 32l9.4 3.7c-.3-1.2-.4-2.4-.4-3.7s.1-2.5.4-3.7"></path>

            <path d="M52.6 35.7L62 32l-9.4-3.7c.2 1.2.4 2.5.4 3.7c0 1.3-.1 2.5-.4 3.7"></path>

            <path d="M20 14.8l-9.3-4l4 9.3c1.5-2.1 3.3-3.9 5.3-5.3"></path>

            <path d="M44 49.2l9.3 4l-4-9.3C47.8 46 46 47.8 44 49.2"></path>

            <path d="M35.7 11.4L32 2l-3.7 9.4c1.2-.2 2.5-.4 3.7-.4s2.5.1 3.7.4"></path>

            <path d="M28.3 52.6L32 62l3.7-9.4c-1.2.3-2.4.4-3.7.4s-2.5-.1-3.7-.4"></path>

            <circle cx="32" cy="32" r="19"></circle>
          </g>
        </svg>
      );
    case "Clouds":
      return (
        <svg
          width="70px"
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
};
export { GlobalImageSelector };
export { GlobalSVGSelector };
export { PopupSelector };
export { GlobalSVGSelector2 };
