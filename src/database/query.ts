import { connect } from '../db'


// await knex('users').insert({
//   FullName: 'Thiago Benedicto',
//   CPF: 48688138893,
//   Email: 'benedict.thiago@gmail.com',
//   FavoriteColor: 'azul',
// });


export async function insertUser() {
  const connection = await connect()
  const res = await connection.query('SELECT * FROM users')
  console.log(res);
  
}