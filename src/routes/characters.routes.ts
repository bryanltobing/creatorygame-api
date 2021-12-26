import express from 'express'

import CharacterModel from '../models/character.model'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const characters = await CharacterModel.find()
    res.send(characters)
  } catch (err) {
    console.error(err)
    res.status(500).send('Internal server error')
  }
})

router.get('/:slug', async (req, res) => {
  const slug = req.params.slug

  if (!slug) {
    throw new Error('Slug required')
  }

  try {
    const character = (await CharacterModel.findOne({ slug })) || {}
    res.send(character)
  } catch (err) {
    console.error(err)
    res.send('Internal server error')
  }
})

// Create Character
router.post('/', async (req, res) => {
  const character = new CharacterModel(req.body)

  try {
    await character.save()
    res.status(200).send('Character Created')
  } catch (err) {
    console.error(err)
    res.status(500).send('Internal server error')
  }
})

router.delete('/:slug', async (req, res) => {
  const slug = req.params.slug

  if (!slug) {
    throw new Error('Slug required')
  }

  try {
    await CharacterModel.deleteOne({ slug })
    res.status(200).send('Character Deleted')
  } catch (err) {
    console.error(err)
    res.status(500).send('Internal server error')
  }
})

export default router
