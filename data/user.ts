import { db } from "@/lib/db";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({
      where: { email },
    });
    return user;
  } catch {
    return null;
  }
};
export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({
      where: { id },
    });
    return user;
  } catch {
    return null;
  }
};
export const getInfoUser = async (id: string) => {
  try {
    const user = await db.user.findMany({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
      },
    });
    return user;
  } catch {
    return null;
  }
};
