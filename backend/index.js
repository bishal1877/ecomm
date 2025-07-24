import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import sql from './config/db.js';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import path from 'path';


const __dirname = path.resolve();
dotenv.config({ path: path.join(__dirname, '../.env') });
const app= express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', async (req, res) => {
  try {
    console.log('Connecting to the database...');
      const result = await sql `SELECT * FROM products`;
      res.json({bata: result});
    }
catch (error) {
    console.log('Error connecting to the database:', error);
    res.status(500).send('Internal Server Error');
  }
});
app.post('/add/test', async (req, res) => {
  try {
    console.log('Connecting to the database...');
    const result = await sql `INSERT INTO products (name,image, price) VALUES (${req.body.name},${req.body.image}, ${req.body.price}) RETURNING * `;
    console.log('Inserted data:', result);
    res.status(201).json({message:"added succesfully"}) ; // Respond with 201 Created status
  } catch (error) {
    console.log('Error connecting to the database:', error);
    res.status(590).send('Internal Server Error');
  }});

app.delete('/api/test/:id', async (req, res) => {
  try {
    const id = req.params.id; // Assuming the ID is sent in the request body
    console.log('Deleting product with ID:', id);
    const result = await sql `DELETE FROM products WHERE id = ${id}`;
   
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.post('/api/test', async (req, res) => {
  try {
    console.log('Connecting to the database...');
    const result = await sql `INSERT INTO products (name,image, price) VALUES (${req.body.name},${req.body.image}, ${req.body.price}) RETURNING * `;
  console.log('Inserted data:', result);
  
    res.json({data: result});
  } catch (error) {
    
    console.log('Error connecting to the database:', error);
    res.status(590).send('Internal Server Error');
  }
});

 let PORT=process.env.PORT || 3000;
 console.log('Server is running on port:', PORT);
 
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
