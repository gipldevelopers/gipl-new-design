export default function Container({ children, className = "" }) {
  const classes = ["mx-auto w-full max-w-[1440px] px-[34px]", className]
    .filter(Boolean)
    .join(" ");

  return <div className={classes}>{children}</div>;
}
