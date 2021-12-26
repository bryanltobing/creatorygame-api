import mongoose from 'mongoose'
import slugify from 'slugify'

interface Character {
  name: string
  slug: string
  characterCode: 1 | 2
  power: number
  wealth: number
}

const { Schema } = mongoose

const characterSchema = new Schema<Character>(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      unique: true,
    },
    characterCode: {
      type: Number,
      enum: [1, 2],
      default: 1,
      required: true,
    },
    power: {
      type: Number,
      min: 0,
      max: 100,
      required: true,
    },
    wealth: {
      type: Number,
      min: 0,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

// Hide unecessary mongoose return
characterSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id
  },
})

characterSchema.pre<Character>('save', function (next) {
  this.slug = slugify(this.name, { lower: true })

  next()
})

const characterModel = mongoose.model<Character>('Character', characterSchema)

export default characterModel
