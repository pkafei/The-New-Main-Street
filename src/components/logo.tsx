export function Logo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main curved line (thick, smooth curve - right half of S or open C) */}
      <path
        d="M 35 25 Q 55 35, 75 45 Q 85 55, 80 65 Q 75 75, 55 80 Q 35 85, 25 75"
        stroke="#00FF88"
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Network pattern on the left - mesh-like structure */}
      {/* Network dots (6-7 visible dots) */}
      <circle cx="28" cy="38" r="3.5" fill="#00FF88" />
      <circle cx="22" cy="48" r="3.5" fill="#00FF88" />
      <circle cx="28" cy="58" r="3.5" fill="#00FF88" />
      <circle cx="33" cy="53" r="3.5" fill="#00FF88" />
      <circle cx="20" cy="43" r="3.5" fill="#00FF88" />
      <circle cx="25" cy="53" r="3.5" fill="#00FF88" />
      <circle cx="30" cy="48" r="3.5" fill="#00FF88" />
      
      {/* Focal point - larger black circle at junction where network meets main curve */}
      <circle cx="30" cy="48" r="6" fill="#000000" />
      
      {/* Network connecting lines - thin green lines forming mesh */}
      <line x1="28" y1="38" x2="30" y2="48" stroke="#00FF88" strokeWidth="2.5" />
      <line x1="22" y1="48" x2="30" y2="48" stroke="#00FF88" strokeWidth="2.5" />
      <line x1="28" y1="58" x2="30" y2="48" stroke="#00FF88" strokeWidth="2.5" />
      <line x1="33" y1="53" x2="30" y2="48" stroke="#00FF88" strokeWidth="2.5" />
      <line x1="20" y1="43" x2="30" y2="48" stroke="#00FF88" strokeWidth="2.5" />
      <line x1="25" y1="53" x2="30" y2="48" stroke="#00FF88" strokeWidth="2.5" />
      <line x1="28" y1="38" x2="22" y2="48" stroke="#00FF88" strokeWidth="2" />
      <line x1="22" y1="48" x2="28" y2="58" stroke="#00FF88" strokeWidth="2" />
      <line x1="28" y1="38" x2="33" y2="53" stroke="#00FF88" strokeWidth="1.5" />
    </svg>
  );
}

