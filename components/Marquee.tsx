interface MarqueeProps {
  items: string[];
  bgColor?: string;
  textColor?: string;
  italic?: boolean;
  separator?: string;
  speed?: string;
}

export function Marquee({
  items,
  bgColor = "bg-[#F0A0B5]",
  textColor = "text-white",
  italic = true,
  separator = "✦",
  speed = "30s",
}: MarqueeProps) {
  const doubled = [...items, ...items];

  return (
    <div
      className={`${bgColor} py-3 overflow-hidden whitespace-nowrap`}
      aria-hidden="true"
    >
      <div
        className="inline-block animate-marquee"
        style={{ animationDuration: speed }}
      >
        {doubled.map((item, i) => (
          <span key={i} className={`${textColor} px-6`}>
            {italic ? <em style={{ fontFamily: "var(--font-serif)" }}>{item}</em> : item}
            <span className="mx-6 opacity-50">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}