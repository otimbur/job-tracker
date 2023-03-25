-- CreateTable
CREATE TABLE "Job" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "company" VARCHAR(255) NOT NULL,
    "job" TEXT NOT NULL,
    "desc" TEXT,
    "applyied" BOOLEAN NOT NULL,

    CONSTRAINT "Job_pkey" PRIMARY KEY ("id")
);
