/*
  Warnings:

  - You are about to drop the `participants_events` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "participants_events" DROP CONSTRAINT "participants_events_event_id_fkey";

-- DropForeignKey
ALTER TABLE "participants_events" DROP CONSTRAINT "participants_events_participant_id_fkey";

-- AlterTable
ALTER TABLE "participants" ADD COLUMN     "event_id" INTEGER;

-- DropTable
DROP TABLE "participants_events";

-- AddForeignKey
ALTER TABLE "participants" ADD CONSTRAINT "participants_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "events"("id") ON DELETE SET NULL ON UPDATE CASCADE;
