import { PrismaClient } from "@prisma/client";

//first check if prisma client exist and and inicilize it
const prisma = globalThis.prisma || new PrismaClient();
//check if NODDE_ENV is set to production, if not it's sets it to the global
if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;

export default prisma;
