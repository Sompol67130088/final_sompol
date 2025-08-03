const pool = require('../db');

exports.getAllReferences = async () => {
  const result = await pool.query('SELECT * FROM references ORDER BY id DESC');
  return result.rows;
};

exports.createReference = async (title, pdf_link) => {
  await pool.query(
    'INSERT INTO references (title, pdf_link) VALUES ($1, $2)',
    [title, pdf_link]
  );
};

exports.deleteReference = async (id) => {
  await pool.query('DELETE FROM references WHERE id = $1', [id]);
};