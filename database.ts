import { connect } from 'mongoose';
let username = process.env.username
let password = process.env.password
let database = process.env.database
let url = `mongodb+srv://${username}:${password}@cluster0.fnxid.mongodb.net/${database}?retryWrites=true&w=majority`

connect(url)
.catch(error => console.error(error));
