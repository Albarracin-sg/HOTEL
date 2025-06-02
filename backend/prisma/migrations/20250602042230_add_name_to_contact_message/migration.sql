/*
  Warnings:

  - You are about to drop the column `asunto` on the `contactmessage` table. All the data in the column will be lost.
  - You are about to drop the column `mensaje` on the `contactmessage` table. All the data in the column will be lost.
  - You are about to drop the column `nombre` on the `contactmessage` table. All the data in the column will be lost.
  - Added the required column `message` to the `ContactMessage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `ContactMessage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subject` to the `ContactMessage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `contactmessage` DROP COLUMN `asunto`,
    DROP COLUMN `mensaje`,
    DROP COLUMN `nombre`,
    ADD COLUMN `message` VARCHAR(191) NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `subject` VARCHAR(191) NOT NULL;
