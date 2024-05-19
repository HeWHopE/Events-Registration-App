/*
  Warnings:

  - Changed the type of `date_of_birth` on the `participants` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropIndex
DROP INDEX "participants_email_key";

-- AlterTable
ALTER TABLE "participants" DROP COLUMN "date_of_birth",
ADD COLUMN     "date_of_birth" TIMESTAMP(3) NOT NULL;
