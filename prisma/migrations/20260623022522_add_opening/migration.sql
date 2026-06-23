-- CreateTable
CREATE TABLE "Opening" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "group" TEXT NOT NULL,
    "job" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "employment" TEXT NOT NULL,
    "career" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "hot" BOOLEAN NOT NULL DEFAULT false,
    "applyUrl" TEXT,
    "description" TEXT,
    "appeal" TEXT[],
    "responsibilities" TEXT[],
    "qualifications" TEXT[],
    "preferred" TEXT[],
    "published" BOOLEAN NOT NULL DEFAULT true,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Opening_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Opening_published_sortOrder_idx" ON "Opening"("published", "sortOrder");
