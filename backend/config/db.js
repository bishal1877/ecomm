import {neon} from "@neondatabase/serverless";
import dotenv from 'dotenv';
import path from 'path';


const __dirname = path.resolve();
dotenv.config({ path: path.join(__dirname, '../.env') });
let PGHOST = process.env.PGHOST;
let PGPASSWORD = process.env.PGPASSWORD;
let PGDATABASE = process.env.PGDATABASE;
let PGUSER = process.env.PGUSER;

console.log('PGHOST (destructured):', PGHOST);
console.log('PGDATABASE (destructured):', PGDATABASE);
console.log('PGUSER (destructured):', PGUSER);
console.log('PGPASSWORD (destructured):', PGPASSWORD);
let con= `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`;

let sql = neon( 
`${con}`
);
export default sql;