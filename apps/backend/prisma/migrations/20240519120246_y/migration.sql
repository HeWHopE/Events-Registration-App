/*
  Warnings:

  - Made the column `event_id` on table `participants` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "participants" DROP CONSTRAINT "participants_event_id_fkey";

-- AlterTable
ALTER TABLE "participants" ALTER COLUMN "event_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "participants" ADD CONSTRAINT "participants_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "events"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
