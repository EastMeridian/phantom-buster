import classNames from "classnames";

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  outlined?: boolean;
};

const Button = ({ className, outlined, ...rest }: Props) => (
  <button
    {...rest}
    className={classNames(
      className,
      "rounded-full py-2 px-4",
      outlined
        ? "bg-surface text-primary border border-primary"
        : "bg-primary text-surface",
    )}
  />
);

export default Button;
