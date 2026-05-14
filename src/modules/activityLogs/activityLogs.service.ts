import { ObjectId } from "mongodb";
import { getDb } from "../../config/database";

export class ActivityLogsService {

  async create(data: any, userId: string) {

    const db = getDb();

    const newActivityLog = {

      action: data.action,

      description: data.description,

      taskId: data.taskId,

      userId: new ObjectId(userId),

      createdAt: new Date(),
    };

    const result =
      await db.collection("activityLogs")
      .insertOne(newActivityLog);

    return {
      _id: result.insertedId,
      ...newActivityLog,
    };
  }

  async findAll() {

    const db = getDb();

    return await db
      .collection("activityLogs")
      .find()
      .toArray();
  }

  async findById(id: string) {

    const db = getDb();

    return await db
      .collection("activityLogs")
      .findOne({
        _id: new ObjectId(id),
      });
  }

  async update(id: string, data: any) {

    const db = getDb();

    await db
      .collection("activityLogs")
      .updateOne(
        {
          _id: new ObjectId(id),
        },
        {
          $set: {
            action: data.action,
            description: data.description,
            updatedAt: new Date(),
          },
        }
      );

    return await db
      .collection("activityLogs")
      .findOne({
        _id: new ObjectId(id),
      });
  }

  async delete(id: string) {

    const db = getDb();

    return await db
      .collection("activityLogs")
      .deleteOne({
        _id: new ObjectId(id),
      });
  }

}