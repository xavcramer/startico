const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const path = require('path');
const PORT = process.env.PORT || 3010;

const app = express();

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '1234',
    port: 5432,
});

app.use(cors());
app.use(express.json());

app.get('/api/reviews', async (req, res) => {
    const q = req.query.q || '';
    try {
        const { rows } = await pool.query(
            `SELECT stars, text_reviews, avatar, name, position FROM reviews 
             WHERE id ILIKE $1
             ORDER BY id
             LIMIT 10`,
            [q + '%']
        );

        res.json(rows.map(r => r.model));
    } catch (err) {
        console.error('Error fetching models:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server starting on port ${PORT}`);
});