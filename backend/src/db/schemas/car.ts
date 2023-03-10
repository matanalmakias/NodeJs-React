import { Car } from "../../validators/@types.js";
import { Schema } from "mongoose";
const carSchema = new Schema<Car>({
  vandor: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  color: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  image: String,
  model: String,
});
