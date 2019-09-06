const pg = require("pg");
const dotenv = require("dotenv").config();

const Pool = pg.Pool;

const DBConfig = {
	host: process.env.PG_IP,
	port: process.env.PG_PORT,
	user: process.env.PG_USER,
	password: process.env.PG_PW,
	database: process.env.PG_DB,
	connectionTimeoutMillis: 30000,
	max: 40
};

const pool = new Pool(DBConfig);

pool.on("error", (err) => {
	console.log("idle client error", err.message, err.stack);
});

const runQuery = (query, values, cb) => pool.query(query, values, cb);

const transQuery = async (query, values, cb) => {
	try {
		await pool.query("BEGIN");
		let data = await pool.query(query, values);
		await pool.query("COMMIT");
		cb(null, data);
		// cb();
	} catch (err) {
		await pool.query("ROLLBACK");
		cb(err);
	}
};

module.exports = {
	"pool": pool,
	"runQuery": runQuery,
	"transQuery": transQuery
};