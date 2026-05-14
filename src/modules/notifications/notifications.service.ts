import { ObjectId } from "mongodb";
import { getDb } from "../../config/database";

export class NotificationsService {

  async create(data: any, userId: string) {

    const db = getDb();

    const newNotification = {

      title: data.title,

      message: data.message,

      type: data.type,

      isRead: false,

      userId: new ObjectId(userId),

      createdAt: new Date(),
    };

    const result =
      await db.collection("notifications")
      .insertOne(newNotification);

    return {
      _id: result.insertedId,
      ...newNotification,
    };
  }

  async findAll() {

    const db = getDb();

    return await db
      .collection("notifications")
      .find()
      .toArray();
  }

  async findById(id: string) {

    const db = getDb();

    return await db
      .collection("notifications")
      .findOne({
        _id: new ObjectId(id),
      });
  }

  async update(id: string, data: any) {

    const db = getDb();

    await db
      .collection("notifications")
      .updateOne(
        {
          _id: new ObjectId(id),
        },
        {
          $set: {
            title: data.title,
            message: data.message,
            type: data.type,
            isRead: data.isRead,
            updatedAt: new Date(),
          },
        }
      );

    return await db
      .collection("notifications")
      .findOne({
        _id: new ObjectId(id),
      });
  }

  async delete(id: string) {

    const db = getDb();

    return await db
      .collection("notifications")
      .deleteOne({
        _id: new ObjectId(id),
      });
  }

}