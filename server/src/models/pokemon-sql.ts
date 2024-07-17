// store.sql.js

export const getPokemonQuery = `SELECT * 
                                FROM pokemon;`;

export const getPokemonQueryByNumber = `SELECT * 
                                        FROM pokemon WHERE number = 1;`;
