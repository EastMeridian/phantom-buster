import { IPhantom } from "src/models/phantom";
import { MdMoreHoriz } from "react-icons/md";
import Card from "src/components/Card";
import IconButton from "src/components/IconButton";
import { Menu, MenuItem } from "src/components/Menu";
import { useState } from "react";

type Props = {
  phantom: IPhantom;
  onDuplicate: () => void;
  onRename: () => void;
  onRemove: () => void;
  onClick: () => void;
};

const PhantomCard = ({
  phantom,
  onDuplicate,
  onRename,
  onRemove,
  onClick,
}: Props) => {
  console.log({ phantom });
  const [menuOpen, setMenuOpen] = useState(false);
  const { name, nextLaunchIn, repeatedLaunchTimes, launchType } = phantom;

  const launchFrenquency = repeatedLaunchTimes
    ? repeatedLaunchTimes.simplePreset
    : launchType;

  return (
    <Card>
      <div className="flex justify-end text-secondaryText curs">
        <div className="relative">
          <IconButton onClick={() => setMenuOpen(true)}>
            <MdMoreHoriz />
          </IconButton>
          <Menu open={menuOpen} onClose={() => setMenuOpen(false)}>
            <MenuItem onClick={onRename}>Rename</MenuItem>
            <MenuItem onClick={onDuplicate}>Duplicate</MenuItem>
            <MenuItem onClick={onRemove}>Remove</MenuItem>
          </Menu>
        </div>
      </div>
      <div
        className="text-xl font-bold text-primaryText hover:underline cursor-pointer"
        onClick={onClick}
      >
        {name}
      </div>
      <div className="flex gap-2 items-center">
        <div className="text-secondaryText text-xs">{launchFrenquency}</div>
        {nextLaunchIn && (
          <div className="text-secondaryText text-sm opacity-50">|</div>
        )}
        {nextLaunchIn && (
          <div className="text-secondaryText text-xs">{launchFrenquency}</div>
        )}
      </div>
    </Card>
  );
};

export default PhantomCard;
