-- CreateTable
CREATE TABLE "Application" (
    "id" TEXT NOT NULL,
    "openingId" TEXT NOT NULL,
    "openingTitle" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "agreedTerms" TEXT[],
    "files" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Application_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Application_openingId_idx" ON "Application"("openingId");

-- CreateIndex
CREATE INDEX "Application_createdAt_idx" ON "Application"("createdAt");
