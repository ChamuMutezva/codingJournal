# Node 
## Setting debug for node and express
If you are used to powershell, I recommend this setup in your package.json,
then you can just run `npm start` so you don't type all that out every time.
```
"scripts": {
    "start": "@powershell $env:DEBUG='*,-express:router*' ; node app.js"
},
```
