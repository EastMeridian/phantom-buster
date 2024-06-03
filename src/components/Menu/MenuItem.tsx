import classNames from "classnames";

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const MenuItem = ({ className, ...rest }: Props) => {
  return (
    <div
      {...rest}
      className={classNames(
        "px-4 py-3.5 bg-surface hover:bg-background rounded-xl cursor-pointer font-light text-sm",
        className,
      )}
    />
  );
};

export default MenuItem;
