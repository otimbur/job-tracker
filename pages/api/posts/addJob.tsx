import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import prisma from "@/prisma/client";
interface Data {
  position: string;
  company: string;
  description: string;
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // in order to add a new job into the DB we need to make sure we are logged in
  if (req.method === "POST") {
    const session = await getServerSession(req, res, authOptions);
    //else the response will be 401 and a message
    if (!session)
      return res
        .status(401)
        .json({ message: "Please sign in to your account" });
    const data: Data = req.body.data;

    // get the user who has the list

    const prismaUser = await prisma.user.findUnique({
      where: { email: session?.user?.email },
    });
    //add job
    try {
      const result = await prisma.Job.create({
        data: {
          data,
          userId: prismaUser.id,
        },
      });
      res.status(200).json(result);
    } catch (error) {
      res.status(403).json({ error: "Error occured" });
    }
  }
}
