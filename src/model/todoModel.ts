export enum Status{
      NOT_STARTED="NOT_STARTED",
      IN_PROGRESS="IN_PROGRESS",
      DONE="DONE"
}
import mongoose from "mongoose";
interface todoDoc extends mongoose.Document{
         user: mongoose.Schema.Types.ObjectId
         title: string
         description: string
         status: string
}
//user-title-description-status
const todoSchema = new mongoose.Schema({
      user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
      },
      title:{
            type: String,
            required: true
      },
      description:{
            type: String,
            required: true
      },
      status:{
            type:String,
            required: true,
            default: Status.NOT_STARTED,
            enum: Object.values(Status),
      }
}, { timestamps: true});

const todoModel:mongoose.Model<todoDoc> = mongoose.model<todoDoc>("todos", todoSchema);
export default todoModel;
