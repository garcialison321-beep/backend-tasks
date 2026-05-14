import { ObjectId } from "mongodb";
import { getDb } from "../../config/database";

export class TagsService {

  async create(data: any, userId: string) {

    const db = getDb();

    const newTag = {

      name: data.name,

      color: data.color,

      createdBy: new ObjectId(userId),

      createdAt: new Date(),
    };

    const result =
      await db.collection("tags")
      .insertOne(newTag);

    return {
      _id: result.insertedId,
      ...newTag,
    };
  }

  async findAll() {

    const db = getDb();

    return await db
      .collection("tags")
      .find()
      .toArray();
  }

  async findById(id: string) {

    const db = getDb();

    return await db
      .collection("tags")
      .findOne({
        _id: new ObjectId(id),
      });
  }

  async update(id: string, data: any) {

    const db = getDb();

    await db
      .collection("tags")
      .updateOne(
        {
          _id: new ObjectId(id),
        },
        {
          $set: {
            name: data.name,
            color: data.color,
            updatedAt: new Date(),
          },
        }
      );

    return await db
      .collection("tags")
      .findOne({
        _id: new ObjectId(id),
      });
  }

  async delete(id: string) {

    const db = getDb();

    return await db
      .collection("tags")
      .deleteOne({
        _id: new ObjectId(id),
      });
  }

}