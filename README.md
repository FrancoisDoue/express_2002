# How to run:

```shell
npm install
```

Make sure MongoDB service is running, then

```shell
# Run this command to populate the database
npm run fixtures
```
```shell
npm start
# or if you have nodemon installed globally:
npm run serve
```

## Endpoints:

|**METHOD**|**uri**|**description**|
|-|-|-|
|**GET** | `/film` | Get all the movies |
|**GET** | `/film/<movie_full_name>`| get a movie|
|**PUT** | `/film/update/<movie_full_name>`| update a movie|
|**POST** | `/film` | add a new movie |
|**DELETE** | `/film/delete/<movie_full_name>` | delete a movie |

## Validation schema

```js
{
    "title":        {type: String, required: true}, 
    "description":  {type: String},
    "director":     {type: String, required: true},
    "releaseDate":  {type: Date},
    "slug":         {type: String} // set by default, there is no need to modify it
}
```