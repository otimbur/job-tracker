/*
  Warnings:

  - You are about to drop the column `applyied` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `company` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `desc` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `job` on the `Job` table. All the data in the column will be lost.
  - Added the required column `data` to the `Job` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Job` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Job" DROP COLUMN "applyied",
DROP COLUMN "company",
DROP COLUMN "desc",
DROP COLUMN "job",
ADD COLUMN     "data" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
