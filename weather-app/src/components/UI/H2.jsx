/* eslint-disable react/prop-types */
export default function H2({ children, className }) {
  const classes = "sm:text-2xl text-3xl font-bold " + className;
  return <h2 className={classes}>{children}</h2>;
}
