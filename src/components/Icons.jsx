export function Logo({ size = 36 }) {
  return (
    <span className="logo-mark" style={{ width: size, height: size }}>
      <svg width={size * 0.6} height={size * 0.6} viewBox="0 0 64 64" aria-hidden="true">
        <path
          d="M16 14 H48 L27 31 H39 L16 50 H48"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinejoin="miter"
          strokeLinecap="square"
        />
      </svg>
    </span>
  )
}

export function Arrow() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

const perkPaths = {
  box: (
    <>
      <path d="M3 7l9-4 9 4v10l-9 4-9-4z" />
      <path d="M3 7l9 4 9-4M12 11v10" />
    </>
  ),
  card: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
      <path d="M2.5 10h19M6 15h4" />
    </>
  ),
  truck: (
    <>
      <path d="M2 6h12v10H2zM14 9h4l3 3v4h-7" />
      <circle cx="6" cy="17.5" r="1.8" />
      <circle cx="17" cy="17.5" r="1.8" />
    </>
  ),
  headset: (
    <>
      <path d="M4 13v-1a8 8 0 0116 0v1" />
      <rect x="3" y="13" width="4" height="6" rx="1.5" />
      <rect x="17" y="13" width="4" height="6" rx="1.5" />
      <path d="M19 19c0 1.5-2 2.5-5 2.5" />
    </>
  ),
}

export function PerkIcon({ name }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
      strokeLinecap="round"
      aria-hidden="true"
    >
      {perkPaths[name]}
    </svg>
  )
}

export function ConnectorIcon({ name }) {
  return (
    <svg width="72" height="72" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
      {name === 'gbt' && (
        <>
          <circle cx="24" cy="24" r="20" />
          <circle cx="17" cy="17" r="3.2" />
          <circle cx="31" cy="17" r="3.2" />
          <circle cx="24" cy="24" r="3.2" />
          <circle cx="17" cy="31" r="3.2" />
          <circle cx="31" cy="31" r="3.2" />
        </>
      )}
      {name === 'mnk' && (
        <>
          <path d="M10.5 12 H37.5 A20 20 0 1 1 10.5 12 Z" />
          <circle cx="19" cy="17.5" r="2.4" />
          <circle cx="29" cy="17.5" r="2.4" />
          <circle cx="14.5" cy="26" r="3" />
          <circle cx="24" cy="26" r="3" />
          <circle cx="33.5" cy="26" r="3" />
          <circle cx="19" cy="35" r="3" />
          <circle cx="29" cy="35" r="3" />
        </>
      )}
      {name === 'super' && (
        <>
          <rect x="5" y="9" width="38" height="30" rx="15" />
          <circle cx="16" cy="24" r="5.5" />
          <circle cx="32" cy="24" r="5.5" />
          <path d="M25 14 L21 22 H26 L23 30" strokeLinejoin="round" />
        </>
      )}
    </svg>
  )
}

/* Wallbox illustration. `variant="hero"` is drawn for the yellow panel; the default follows the theme tokens. */
export function Wallbox({ variant, className, label }) {
  const hero = variant === 'hero'
  return (
    <svg
      viewBox="0 0 240 260"
      className={className}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : 'true'}
    >
      <rect x="48" y="10" width="120" height="180" rx="26" className={hero ? 'ill-ink' : 'ill-body'} />
      <rect x="68" y="34" width="80" height="44" rx="10" className={hero ? 'ill-screen-hero' : 'ill-screen'} />
      <rect x="78" y="52" width="48" height="8" rx="4" fill="#E1FF27" />
      <path d="M112 100 L96 128 H108 L102 152 L122 120 H110 Z" className={hero ? 'ill-accent' : 'ill-bolt'} />
      {hero && <circle cx="108" cy="172" r="7" fill="#2A2A27" />}
      <path
        d="M108 190 C108 236 186 244 200 200 C210 168 190 150 176 162"
        fill="none"
        strokeWidth="10"
        strokeLinecap="round"
        className={hero ? 'ill-ink-stroke' : 'ill-body-stroke'}
      />
      <rect x="164" y="146" width="26" height="34" rx="8" transform="rotate(-28 177 163)" className={hero ? 'ill-ink' : 'ill-body'} />
    </svg>
  )
}

export function PortableIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden="true">
      <rect x="10" y="14" width="28" height="36" rx="8" className="port-body" />
      <path d="M26 22 L19 33 H25 L22 42 L30 30 H24 Z" stroke="none" className="port-bolt" />
      <path d="M38 32 C50 32 54 40 54 50" />
      <rect x="48" y="48" width="12" height="10" rx="3" />
    </svg>
  )
}

export function ThemeIcon({ theme }) {
  return theme === 'dark' ? (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  ) : (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 14.5A8 8 0 019.5 4 8 8 0 1020 14.5z" />
    </svg>
  )
}

export function Social({ name }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden="true">
      {name === 'instagram' && (
        <>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
        </>
      )}
      {name === 'whatsapp' && <path d="M4 20l1.3-3.9A8 8 0 1112 20a8 8 0 01-3.9-1z" />}
      {name === 'email' && (
        <>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </>
      )}
    </svg>
  )
}
