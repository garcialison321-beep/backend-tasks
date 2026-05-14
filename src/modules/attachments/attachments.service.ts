import { ObjectId } from "mongodb";
import { getDb } from "../../config/database";

export class AttachmentsService {

  async create(data: any, userId: string) {

    const db = getDb();

    const newAttachment = {

      fileName: data.fileName,

      fileUrl: data.fileUrl,

      taskId: data.taskId,

      uploadedBy: new ObjectId(userId),

      createdAt: new Date(),
    };

    const result =
      await db.collection("attachments")
      .insertOne(newAttachment);

    return {
      _id: result.insertedId,
      ...newAttachment,
    };
  }

  async findAll() {

    const db = getDb();

    return await db
      .collection("attachments")
      .find()
      .toArray();
  }

  async findById(id: string) {

    const db = getDb();

    return await db
      .collection("attachments")
      .findOne({
        _id: new ObjectId(id),
      });
  }

  async update(id: string, data: any) {

    const db = getDb();

    await db
      .collection("attachments")
      .updateOne(
        {
          _id: new ObjectId(id),
        },
        {
          $set: {
            fileName: data.fileName,
            fileUrl: data.fileUrl,
            updatedAt: new Date(),
          },
        }
      );

    return await db
      .collection("attachments")
      .findOne({
        _id: new ObjectId(id),
      });
  }

  async delete(id: string) {

    const db = getDb();

    return await db
      .collection("attachments")
      .deleteOne({
        _id: new ObjectId(id),
      });
  }

}