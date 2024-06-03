type Props = {
  children: React.ReactNode;
  isOpen: boolean;
};

const Modal = ({ children, isOpen }: Props) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-white bg-opacity-75 backdrop-blur-sm z-40" />
      <div className="bg-surface rounded-lg shadow-lg p-4 z-50">{children}</div>
    </div>
  );
};

export default Modal;
