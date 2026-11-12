// SAM CODECRAFT badge, redrawn as vector in the site palette
// (--dark--main #0d0d0d, --light--main #fafafa). Works on dark and light backgrounds.
export default function Logo({ className = '', title = 'Sam Codecraft' }) {
  return (
    <svg className={className} viewBox="0 0 200 232" xmlns="http://www.w3.org/2000/svg" role="img" aria-label={title} preserveAspectRatio="xMidYMid meet">
      <path d="M100 5 L187 33 V104 C187 161 149 201 100 227 C51 201 13 161 13 104 V33 Z" fill="#0d0d0d" stroke="#fafafa" strokeWidth="4" strokeLinejoin="round" />
      <path d="M100 19 L174 43 V104 C174 153 142 188 100 210 C58 188 26 153 26 104 V43 Z" fill="#171717" stroke="#fafafa" strokeOpacity="0.35" strokeWidth="1.5" strokeLinejoin="round" />
      <text x="100" y="82" textAnchor="middle" fill="#fafafa" fontSize="56" letterSpacing="1" style={{ fontFamily: 'var(--font--display), Impact, sans-serif', textTransform: 'uppercase' }}>SAM</text>
      <path d="M6 96 H194 L185 114 L194 132 H6 L15 114 Z" fill="#fafafa" />
      <path d="M6 132 L18 139 L18 132 Z M194 132 L182 139 L182 132 Z" fill="#9a9a9a" />
      <text x="100" y="122" textAnchor="middle" fill="#0d0d0d" fontSize="21" letterSpacing="0.4" style={{ fontFamily: 'var(--font--heading), Arial, sans-serif', fontWeight: 500, textTransform: 'uppercase' }}>CodeCraft</text>
      <g fill="none" stroke="#fafafa" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M78 156 L62 171 L78 186" />
        <path d="M122 156 L138 171 L122 186" />
        <path d="M108 153 L92 189" />
      </g>
    </svg>
  );
}
