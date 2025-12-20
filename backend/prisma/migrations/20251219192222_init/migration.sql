-- CreateTable
CREATE TABLE "articles" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "published_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "meta_keywords" TEXT[],
    "is_hub" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "articles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "related_articles" (
    "id" SERIAL NOT NULL,
    "source_article_id" INTEGER NOT NULL,
    "target_article_id" INTEGER NOT NULL,
    "display_order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "related_articles_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "articles_slug_key" ON "articles"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "related_articles_source_article_id_target_article_id_key" ON "related_articles"("source_article_id", "target_article_id");

-- AddForeignKey
ALTER TABLE "related_articles" ADD CONSTRAINT "related_articles_source_article_id_fkey" FOREIGN KEY ("source_article_id") REFERENCES "articles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "related_articles" ADD CONSTRAINT "related_articles_target_article_id_fkey" FOREIGN KEY ("target_article_id") REFERENCES "articles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
