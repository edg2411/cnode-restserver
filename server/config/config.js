/* 

    PUERTO

 */

process.env.PORT = process.env.PORT || 3000;

/* 

    ENTORNO

 */

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

/*

    BD

*/

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    // urlDB = 'mongodb+srv://edg2411:VUs5UFbfCEiNL5SS@cluster0-y7edp.mongodb.net/cafe';
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;