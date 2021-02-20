#Marvel&Toys API  
_Api de prueba para consumir una api de terceros_

##Comenzando
_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas. Puedes descargar la api directamente del repositorio de Github_

###Instalar
_Si es la primera vez que descargas un proyecto, se deben descargar las dependencias, para essto ejecutar: 
```
npm install
```

_Si existe el archivo package-lock.json, npm partirá de esa definición para ir a buscar las dependencias y bajarlas a tu directorio node_modules.
Si deseas descargar cada una de las dependencias deberás ejecutar lo siguiente:_
```
npm i express
npm i nodemon
npm i morgan
npm i axios
```

###Método GET
_Muestra todos los personajes_
_GET_ (http://localhost:3000/marvel)
```
{
    "characters": "http://localhost:3000/marvel/:id",
    "comics": "http://localhost:3000/marvel/comics/:comicid",
    "stories": "http://localhost:3000/marvel/stories/:storyid",
    "series": "http://localhost:3000/marvel/series/:serieid"
}
```

| Nombre  | Tipo | Descripción
| ------- | ---- | ----------
| id      | int  | El id del personaje
| comicid | int  | El id del cómic
| storyid | int  | El id de la historia
| serieid | int  | El id de la serie


_Puedes obtener un solo personaje añadiendo el id como parámetro_
_GET_ (http://localhost:3000/marvel/:id)
```
{
                "id": 1009718,
                "name": "Wolverine",
                "description": "Born with super-human senses and the power to heal from almost any wound, Wolverine was captured by a secret Canadian organization and given an unbreakable skeleton and claws. Treated like an animal, it took years for him to control himself. Now, he's a premiere member of both the X-Men and the Avengers.",
                "modified": "2016-05-02T12:21:44-0400",
                "thumbnail": {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf",
                    "extension": "jpg"
}
```

_Muestra un cómic en específico añadiendo el id del cómic como parámetro_
_GET_ (http://localhost:3000/marvel/comics/:comicid)
```
{
                "id": 11,
                "digitalId": 7776,
                "title": "X-Men (2004) #164",
                "issueNumber": 164,
                "variantDescription": "",
                "description": "\"HEROES AND VILLAINS\" PART 4 (OF 4) The explosive conclusion to the battle between the X-Men and the newly re-formed Brotherhood of Mutants! When the dust clears, will everyone remain standing?",
                "modified": "2013-11-22T15:09:09-0500",
                "isbn": "",
                "upc": "5960601772-16411",
                "diamondCode": "",
                "ean": "",
                "issn": "",
                "format": "Comic",
                "pageCount": 0
}
```

_Puedes obtener historias añadiendo un id como parámetro_
_GET_ (http://localhost:3000/marvel/stories/:storyid)
```
{
                "id": 1009718,
                "name": "Wolverine",
                "description": "Born with super-human senses and the power to heal from almost any wound, Wolverine was captured by a secret Canadian organization and given an unbreakable skeleton and claws. Treated like an animal, it took years for him to control himself. Now, he's a premiere member of both the X-Men and the Avengers.",
                "modified": "2016-05-02T12:21:44-0400",
                "thumbnail": {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf",
                    "extension": "jpg"
}
```


_Muestra series específicas añadiendo el id como parámetro_
_GET_ (http://localhost:3000/marvel/series/:serieid)
```
{
                "id": 10,
                "title": "Captain Britain Vol. I (1999)",
                "description": null,
                "resourceURI": "http://gateway.marvel.com/v1/public/series/10",
                "urls": [
                    {
                        "type": "detail",
                        "url": "http://marvel.com/comics/series/10/captain_britain_vol_i_1999?utm_campaign=apiRef&utm_source=7a6670e04402e4f3097475f3b61f99b2"
                    }
                ],
                "startYear": 1999,
                "endYear": 1999,
                "rating": "MARVEL PSR",
                "type": "collection",
                "modified": "-0001-11-30T00:00:00-0500",
                "thumbnail": {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/90/4bc670dbb9d85",
                    "extension": "jpg"
                }
}
```

###Método POST

| Nombre  | Tipo | Descripción
| ------- | ---- | ----------
| num     | int  | Lado del dado
| flip    | int  | Lado de la moneda
| random  | int  | Número de sílabas
| number  | int  | Número del nombre aleatorio
| ana     | int  | Número del anagrama

_POST_ (http://localhost:3000/dice/:num)
```
{
    "dice": "d6",
    "rolls": [
        1
    ]
}
```

_POST_ (http://localhost:3000/coin/:flip)
```
{
    "result": "heads"
}
```

_POST_ (http://localhost:3000/syllables/:random)
```
{
            "words": [
                "Selfilyoh",
                "Sorwuff",
                "Catpthrizvue",
                "Nuxhidfur",
                "Qixpupmez",
                "Mir+Herkunhov%27koxfei",
                "Yen+Xeffcagsedtogg",
                "Cujsoj",
                "Viw",
                "Pemputhdew"
              ]
}
```

_POST_ (http://localhost:3000/worm/:number)
```
{
            "results": [
                "Joshie"
              ]
}
```

_POST_ (http://localhost:3000/countdown/:ana)
```
{
            "anagram": "HEARTCORS",
            "answers": [
            "CARTHORSE",
            "ORCHESTRA"
            ]
}
```


##Autores
_-Jokebed Aguirre_


