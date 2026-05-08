interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  accent?: string;
}

export function SectionTitle({ eyebrow, title, accent }: SectionTitleProps) {
  return (
    <div className="mb-16">
      {eyebrow && (
        <p
          className="
            uppercase
            tracking-[0.35em]
            text-amberAccent
            text-sm
            mb-4
          "
        >
          {eyebrow}
        </p>
      )}

      <h2
        className="
          font-heading
          uppercase
          leading-[0.9]
          text-5xl
          md:text-7xl
        "
      >
        {title}

        {accent && <span className="text-amberAccent"> {accent}</span>}
      </h2>
    </div>
  );
}
