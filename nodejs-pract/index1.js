// let fs = require("fs");
// const express = require("express");

// const app = express();
// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log("your port is working now on port 3000 "))

// app.use('/images', express.static('./images'));


// app.get("/", (request, response) =>{
//     response.send("Welcome");
// });

// app.get("/list", (request, response) => {
//     let result = " ";
//     const path = "E:\\GUVI Tasks\\Zen\\nodejs-pract";
//     let image;

//     fs.readdir("E:\\GUVI Tasks\\Zen\\nodejs-pract", "utf-8", (err, data) => {
//         if (err) throw err;
//         console.log(data);

//         data.forEach((elem) => {

//        result+=`${elem}`+`<br>`
//             let stats = fs.statSync(path + elem);

//             if (stats.isDirectory()) {
//                 image = `<img src="E:\\GUVI Tasks\\Zen\\nodejs-pract\\images\\folder.png" width="25px" height="25px">`;
//             }
//             else {
//                 image = `<img src="E:\\GUVI Tasks\\Zen\\nodejs-pract\\images\\text.png" width="25px" height="25px">`;

//             }
//             result += image + elem + `<br>`;


//         // })

//         response.send(result);

//     })

// })

// })



const express = require("express");
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Your app is running with port:3000 "));

app.use('/images',express.static('./images'))

app.get("/", (request, response) =>{
    response.send("Welcome to Home Page!!");
});

app.get("/list", function(request, response) {
    const path = "E:/GUVI Tasks/Zen/nodejs-pract/my-custom-package" ;
    fs.readdir(
       path,
       "utf-8",
       (err, files) =>{
           if(err) throw err;
           let result = "";
           let icon ;
           
           files.forEach(file=>{
               console.log(file);
               let stats = fs.statSync(path + file);
               
               if(stats.isDirectory()) {
                   icon = '<img src="images/folder.png" height="100px" width="100px">';
               } else {
                icon = '<img src="images/file.png" height="100px" width="100px">';
               }
               result+= '<div>' + icon + file + '</div>' + '<br>';
           })
           response.send(result);
       }
    );
});

