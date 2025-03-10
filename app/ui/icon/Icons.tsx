import { JSX } from "react";
import HomeIcon from "./Icons/Home";
import MoreIcon from "./Icons/More";
import NotificationIcon from "./Icons/Notification";
import PinIcon from "./Icons/Pin";
import PlusIcon from "./Icons/Plus";
import ProfileIcon from "./Icons/Profile";
import SearchIcon from "./Icons/Search";
import ThreadsIcon from "./Icons/Threads";
import CommentIcon from "./Icons/Comment";
import RepostIcon from "./Icons/Repost";
import ShareIcon from "./Icons/Share";

type IconType = Record<
  string,
  ({ className }: { className?: string }) => JSX.Element
>;

const Icons: IconType = {
  Threads: ThreadsIcon,
  Home: HomeIcon,
  Search: SearchIcon,
  Notification: NotificationIcon,
  Profile: ProfileIcon,
  Pin: PinIcon,
  More: MoreIcon,
  Plus: PlusIcon,
  Comment: CommentIcon,
  Repost: RepostIcon,
  Share: ShareIcon,

};

export default Icons;
