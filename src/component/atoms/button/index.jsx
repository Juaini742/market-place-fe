function Button(props) {
  // eslint-disable-next-line react/prop-types
  const {type, onClick, variant, className, children} = props;
  let buttonStyle = "";

  switch (variant) {
    case "primary":
      buttonStyle += "btn-primary";
      break;
    case "primary-no-rounded":
      buttonStyle += "btn-primary-no-rounded";
      break;
    case "primary-rounded":
      buttonStyle += "btn-primary-rounded";
      break;
    case "gray":
      buttonStyle += "btn-gray";
      break;
    case "white":
      buttonStyle += "btn-white";
      break;
    default:
      buttonStyle += "";
      break;
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={` ${buttonStyle} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
