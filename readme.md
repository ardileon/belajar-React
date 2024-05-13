Setup belajar react simple

1. yarn init -y pada sebuah project folder baru
2. buat folder public,src
3. pada folder public add index.html
````html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="shortcut icon" href="#">
  <title>Belajar React</title>
</head>
<body>
  <div id="root"></div>
  <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
  <script type="text/javascript" src="app.js"></script>
</body>
</html>
````
3. yarn add @babel/core @babel/cli @babel/preset-react
4. yarn add lite-server
5. pada root folder add .babelrc // untuk kasih tau ke babel kita ngecompilenya dari react ke js murni
````json
{
  "presets": [
    "@babel/preset-react"
  ]
}
````
4. lakukan configurasi untuk menjalankan compilasi babel dan lite server pada "package.json"
````json
  ,"scripts": {
    "build": "babel src --out-dir public",
    "watch": "babel src --out-dir public --watch",
    "serve": "lite-server --baseDir public",
    "start": "yarn build && yarn serve"
}
````
## Explain no 4
scripts :
- "build" untuk mengcompile file yang ada di folder src dan hasil compilenya kita letakkan pada folder public
- "watch" pada script watch hampir sama dengan build tetapi build cuma akan dijalankan 1x, sedangkan watch ketika ada perubahan didalam sebuah file maka akan otomatis ikut tercompile juga.
- "serve" dia yang menyediakan live serve
- "start" jadi ketika build dan yarn serve dijalankan makan pertama kali dia akan ngecompile terlebih dahulu baru selanjutnya dia melakukan serve

# Untuk menjalnkannya 
1. buat 2 new terminal
2. 1 terminal menjalankan yarn start dan 1 lagi menjalnkan yarn watch