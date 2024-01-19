import { Pool, QueryResult, PoolClient } from "pg";

const dbPortStr = process.env.DB_PORT ?? "5432";

export class Database {
  private pool: Pool;

  constructor() {
    // Configurações de conexão com o banco de dados
    this.pool = new Pool({
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE,
      password: process.env.DB_PASSWORD,
      port: parseInt(dbPortStr), // Porta padrão do PostgreSQL
    });
  }

  async query(
    queryText: string,
    values?: Array<unknown>
  ): Promise<QueryResult> {
    const client = await this.pool.connect();

    try {
      // Executa a consulta e retorna o resultado
      const result = await client.query(queryText, values);
      return result;
    } finally {
      // Libera o cliente de volta ao pool
      client.release();
    }
  }

  async getClient(): Promise<PoolClient> {
    // Retorna um cliente diretamente do pool
    return this.pool.connect();
  }
}
