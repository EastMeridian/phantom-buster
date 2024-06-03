import classNames from "classnames";

export type TextFieldProps = {
  onChange: (value: string) => void;
  value: string;
  children?: React.ReactNode;
};

const TextField = ({ onChange, value, children }: TextFieldProps) => {
  return (
    <div
      className={classNames(
        "flex gap-2  bg-surface items-center rounded-xl border border-disabled text-secondaryText relative",
      )}
      tabIndex={0}
    >
      {children}
      <input
        className="py-3 px-10 rounded-xl  focus:outline-none focus:ring-2 focus:ring-blue-500 font-normal text-primaryText min-w-0"
        onChange={(e) => onChange(e.target.value)}
        value={value}
        placeholder="Search"
      />
    </div>
  );
};

export default TextField;
