import { IoIosSearch } from "react-icons/io";
import TextField from "../TextField";
import { TextFieldProps } from "../TextField/TextField";

type Props = Omit<TextFieldProps, "children">;

const SearchField = (props: Props) => {
  return (
    <TextField {...props}>
      <IoIosSearch size={20} className="absolute left-3" />
    </TextField>
  );
};

export default SearchField;
