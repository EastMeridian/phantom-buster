import classNames from "classnames";

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const Card = ({ className, ...rest }: Props) => {
  return (
    <div
      {...rest}
      className={classNames(
        "shadow-md h-44 rounded-xl bg-surface p-8 flex flex-col justify-between",
        className,
      )}
    />
  );
};

export default Card;
