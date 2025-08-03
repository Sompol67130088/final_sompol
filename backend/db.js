const { Pool } = require('pg');

const pool = new Pool({
  host: 'db',          // ชื่อตาม docker-compose
  user: 'examuser',
  password: 'exampass',
  database: 'examdb',
  port: 5432
});
