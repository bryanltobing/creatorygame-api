# Creatory Game API

With this api you can create all game character that you want


## API Docs

**Character Routes**:\
`GET /characters` - Get all characters\
`GET /characters/:slug` - Get one character. `/characters?category=all&query=archer` - For filter \
`POST /characters` - Create characters
```sh
POST REQUEST DATA
  name: string
  slug: string
  characterCode: 1 | 2
  power: number
  wealth: number
  categories: string[]
  pictureUrl: string
```


`DELETE /characters/:slug` - Delete one character


## Installation

> Note: Only available for dev environment.\
> Note: For simplicity to run the app locally db configured without auth.\
> No need to configure .env

```sh
# Make sure you have docker-compose installed

docker-compose up
```

![Sample response image](https://res.cloudinary.com/itdel/image/upload/v1640532437/Screen_Shot_2021-12-26_at_22.24.56_fi4ja0.png)


## Future Improvement
- Organize filter
- Update functinoality

Feel free to submit PR :)

## Related link

- [Frontend Implementation](https://github.com/bryantobing12/creatorygame)

