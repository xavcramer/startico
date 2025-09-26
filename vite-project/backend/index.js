const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const path = require('path');
const PORT = process.env.PORT || 3009;

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
            `SELECT text_reviews, avatar, name, position FROM reviews 
             WHERE name ILIKE $1 OR text_reviews ILIKE $1
             ORDER BY id
             LIMIT 10`,
            [`%${q}%`]
        );

        res.json(rows);
    } catch (err) {
        console.error('Error fetching reviews:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/api/plan', async (req, res) => {
    const q = req.query.q || '';
    try {
        const { rows } = await pool.query(
            `SELECT name, price, alternative, includes, include1, include2, include3, include4, include5 FROM plan
             WHERE name ILIKE $1 OR price ILIKE $1
             ORDER BY id
             LIMIT 10`,
            [`%${q}%`]
        );

        res.json(rows);
    } catch (err) {
        console.error('Error fetching plan:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/api/blog', async (req, res) => {
    const q = req.query.q || '';
    try {
        const { rows } = await pool.query(
            `SELECT blogimg, first_tag, time_of_read, tittle, description FROM blog
             WHERE tittle ILIKE $1 OR description ILIKE $1
             ORDER BY id
             LIMIT 10`,
            [`%${q}%`]
        );

        res.json(rows);
    } catch (err) {
        console.error('Error fetching blog:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/api/subscribe', async (req, res) => {
    const { email } = req.body;

    if (!email || !email.includes('@')) {
        return res.status(400).json({ error: 'Invalid email address' });
    }

    try {
        const { rows } = await pool.query(
            `INSERT INTO subscribers (email) 
             VALUES ($1) 
             ON CONFLICT (email) DO NOTHING 
             RETURNING id, email, created_at`,
            [email.trim().toLowerCase()]
        );

        if (rows.length > 0) {
            res.status(201).json({
                message: 'Subscription successful',
                subscriber: rows[0]
            });
        } else {
            res.status(200).json({
                message: 'Email already subscribed'
            });
        }
    } catch (err) {
        console.error('Error subscribing:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server starting on port ${PORT}`);
});