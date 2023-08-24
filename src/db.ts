import pg from "pg";
const { Pool } = pg;

const connect = async () => {
  const pool = new Pool({
    connectionString: "postgres://altyrgqm:1GZrEDx-vBO5X7zqcUROWA_Xu0xYnp89@bubble.db.elephantsql.com/altyrgqm",
  });
  console.log("Connection with DB.");
  return pool.connect();
};
export { connect };