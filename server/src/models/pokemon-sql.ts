const getPokemonQuery = `SELECT * 
                        FROM pokemon
                        WHERE number > ?
                        ORDER BY number ASC
                        LIMIT ?`;

const getPokemonQueryByNumber = `SELECT * FROM pokemon WHERE number = ?;`;

const deletePokemonQueryByNumber = `DELETE FROM pokemon WHERE number = ?;`;

const createPokemonQuery = `INSERT INTO pokemon (name, types, imageUrl) VALUES (?, ?, ?);`;

const updatePokemonQuery = `UPDATE pokemon SET name = ?, types = ?, imageUrl = ? WHERE number = ?;`;

export { getPokemonQuery, getPokemonQueryByNumber, deletePokemonQueryByNumber, createPokemonQuery, updatePokemonQuery };
