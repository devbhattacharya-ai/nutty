/** Decorative Creamy jar — no photo asset available for crop */
export default function JarVisual({ className = "" }: { className?: string }) {
  return (
    <div className={`jar-visual ${className}`.trim()} aria-hidden="true">
      <div className="jar-callout">
        SAME SIMPLE INGREDIENTS.
        <br />
        A BRIGHTER YOU.
      </div>
      <svg
        className="jar-svg"
        viewBox="0 0 280 360"
        role="img"
        aria-label="Nutty Creamy peanut butter jar"
      >
        <ellipse cx="140" cy="48" rx="72" ry="18" fill="#1a1a1a" />
        <rect x="68" y="48" width="144" height="28" rx="4" fill="#1a1a1a" />
        <ellipse cx="140" cy="76" rx="72" ry="16" fill="#2a2a2a" />
        <path
          d="M78 76 L70 300 Q70 330 140 330 Q210 330 210 300 L202 76 Z"
          fill="#f7f4ec"
          stroke="#111"
          strokeWidth="4"
        />
        <rect
          x="88"
          y="120"
          width="104"
          height="150"
          rx="6"
          fill="#fff"
          stroke="#111"
          strokeWidth="3"
        />
        <text
          x="140"
          y="168"
          textAnchor="middle"
          fontFamily="Arial Black, Impact, sans-serif"
          fontSize="28"
          fontWeight="900"
          fill="#111"
        >
          NUTTY
        </text>
        <rect x="108" y="178" width="64" height="22" rx="3" fill="#c75300" />
        <text
          x="140"
          y="194"
          textAnchor="middle"
          fontFamily="Arial, sans-serif"
          fontSize="12"
          fontWeight="800"
          fill="#fff"
        >
          CREAMY
        </text>
        <text
          x="140"
          y="222"
          textAnchor="middle"
          fontFamily="Arial, sans-serif"
          fontSize="8"
          fill="#333"
        >
          NO ADDED SUGAR
        </text>
        <text
          x="140"
          y="236"
          textAnchor="middle"
          fontFamily="Arial, sans-serif"
          fontSize="8"
          fill="#333"
        >
          RICH IN PROTEIN · 100% NATURAL
        </text>
        <text
          x="140"
          y="254"
          textAnchor="middle"
          fontFamily="Arial, sans-serif"
          fontSize="10"
          fontWeight="700"
          fill="#111"
        >
          340g
        </text>
        <ellipse cx="95" cy="318" rx="18" ry="10" fill="#c47a2c" />
        <ellipse cx="130" cy="328" rx="14" ry="8" fill="#a86520" />
        <ellipse cx="168" cy="320" rx="16" ry="9" fill="#d4893a" />
      </svg>
    </div>
  );
}
