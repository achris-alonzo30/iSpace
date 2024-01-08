import { db } from "./db";
import { getSelf } from "./auth-service";

export const getRecommended = async () => {
  // only for users
  const users = await db.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return users;
};
