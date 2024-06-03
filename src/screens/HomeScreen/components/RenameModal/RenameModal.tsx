import { useEffect, useState } from "react";
import Button from "src/components/Button";
import Modal from "src/components/Modal";
import TextField from "src/components/TextField";

type Props = {
  onRename: (name: string) => void;
  isOpen: boolean;
  name?: string;
  onClose: () => void;
};

const RenameModal = ({ onRename, isOpen, name, onClose }: Props) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(name || "");
  }, [name]);

  return (
    <Modal isOpen={isOpen}>
      <div className="flex flex-col gap-4">
        <TextField value={value} onChange={setValue} />
        <div className="flex items-center justify-between">
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={() => onRename(value)}>Confirm</Button>
        </div>
      </div>
    </Modal>
  );
};

export default RenameModal;
