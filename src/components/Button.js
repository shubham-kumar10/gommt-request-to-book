import "../scss/components/_button.scss";

export default function Button({
  text,
  variant,
  disabled,
  disableShadow,
  size,
  color,
  startIcon,
  endIcon,
  ...otherProps
}) {
  return (
    <button
      className={`btn ${variant} ${disableShadow} ${size} ${color}`}
      disabled={disabled}
      {...otherProps}
    >
      <span className="material-icons">{startIcon}</span>
      {text}
      <span className="material-icons">{endIcon}</span>
    </button>
  );
}
