import "./button.module.scss";

export default function Button({
  text,
  variant,
  disabled,
  disableShadow,
  size,
  color,
  startIcon,
  endIcon,
}) {
  return (
    <button
      className={`btn ${variant} ${disableShadow} ${size} ${color}`}
      disabled={disabled}
    >
      <span className="material-icons">{startIcon}</span>
      {text}
      <span className="material-icons">{endIcon}</span>
    </button>
  );
}
