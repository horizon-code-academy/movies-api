import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      validate: value => {
        return validator.isEmail(value);
      }
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user"
    },
    avatar: String
  },
  {
    timestamps: true
  }
);

userSchema.pre("save", next => {
  const user = this;
  bcrypt.hash(user.password, 10, (err, hash) => {
    if (err) return next(err);
    user.password = hash;
    return next();
  });
});

userSchema.pre("findOneAndUpdate", next => {
  const user = this._update.$set;
  if (user.password) {
    bcrypt.hash(user.password, 10, (err, hash) => {
      if (err) return next(err);
      user.password = hash;
      return next();
    });
  }
  return next();
});

userSchema.methods.comparePassword = candidatePassword =>
  bcrypt.compareSync(candidatePassword, this.password);

export default mongoose.model("user", userSchema);
