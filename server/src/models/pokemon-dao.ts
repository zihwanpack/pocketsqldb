import { pool } from '../../config/db-config';
import { errStatus } from '../../config/errorStatus';
import { getPokemonQuery, getPokemonQueryByNumber } from './pokemon-sql';
import { BaseError } from '../../config/baseError';

export const getPokemon = async (id = null) => {
  try {
    const conn = await pool.getConnection();

    let data;
    if (id === undefined || id === null) {
      [data] = await pool.query(getPokemonQuery);
    } else {
      [data] = await pool.query(getPokemonQueryByNumber, [parseInt(id)]);
    }

    conn.release();
    return data;
  } catch (err) {
    throw new BaseError(errStatus.PARAMETER_IS_WRONG);
  }
};
