function Container({className, children}) {
  return <section className={`container ${className}`}>{children}</section>;
}

export default Container;
