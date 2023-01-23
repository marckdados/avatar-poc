# Avatar-POC

## Documentacion



### First, install all dependeces:
```
npm install
```
### Secound, fill the .env with the information that is in the .env.example:

```
HOSTNAME =
USERNAME =
PASSWORD =
PORT =
DATABASE =
```

### Third, run the following developer command: 

```
npm run dev
```

### Extra, production command:

```
npx tsc
```

## Routers

### Avatars
```
POST: /avatar
Body: {
     "name": "Koe", "age": 22, "superPower":"Brabo", "idCategory": 1 

}

GET: /avatar?name=koe
    or
GET: /avatar

UPDATE: /avatar/:id
Body:{
     "name": "KoeAtualizado", "age": 25, "superPower":"Brabo Muito mesmo", "idCategory": 2 

}

DELETE: /avatar/:id

//////////

POST: /category
Body: {
    "name":"Alien"
}
```