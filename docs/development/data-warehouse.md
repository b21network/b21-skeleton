# Data Warehouse

Building 21 maintains a PostgreSQL data warehouse for centralized analysis of data across client schools. To facilitate this, the `b21-skeleton` Slate blueprint includes a `DataWarehouse` connector that can execute a configurable set of `data-exporters/**` scripts and write their results into a configured remote PostgreSQL server.

## Local development

The `b21-skeleton` development studio includes an installed PostgreSQL server with default connection details preconfigured in both the site instance's `DataWarehouse` connector and the studio shell environment.

1. Enter studio
2. Start emergence services: `start-all`
3. Build site: `update-site`
4. Load fixtures data with `load-fixtures` or a server dump with `load-sql`
5. Load the PostgreSQL server:

    ```bash
    start-warehouse
    ```

6. Visit [`/connectors/data-warehouse/synchronize`](http://localhost:2180/connectors/data-warehouse/synchronize) and execute a sync against the local warehouse
7. Use the command line `psql` client to connect to the local warehouse with the connection details preconfigured in the studio shell's environment:

    ```bash
    psql
    ```

### Connecting graphical clients

The `b21-skeleton` studio exposes its built-in PostgreSQL server on port `2185`, so GUI client applications on your development workstation can access the local warehouse by being configured to connect to:

- **Host**: `localhost`
- **Port**: `2185`
- **Username**: `admin`
- **Password**: `admin`
- **Database**: `postgres`
