import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Shubham",
    lastName: "Singh",
    username: "shubham",
    password: "shubham870@",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1459824041930358789/4OOch29W_400x400.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
