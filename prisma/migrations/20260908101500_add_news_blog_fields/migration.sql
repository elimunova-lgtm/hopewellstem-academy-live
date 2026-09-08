-- AlterTable
ALTER TABLE "NewsPost" ADD COLUMN "category" TEXT NOT NULL DEFAULT 'News',
ADD COLUMN "content" TEXT NOT NULL DEFAULT '',
ADD COLUMN "slug" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "NewsPost_slug_key" ON "NewsPost"("slug");