import { forwardRef } from "react";

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const IconButton = forwardRef<HTMLButtonElement, Props>(
  ({ className, ...rest }, ref) => {
    return <button {...rest} className={className} type="button" ref={ref} />;
  },
);

export default IconButton;
