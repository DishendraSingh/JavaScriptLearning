const sql = require('mssql');

const config = {
    server: 'LAPTOP-G6H04KSK\\SQLEXPRESS01',
    database: 'EmployeeDB',
    options: {
        encrypt: true,
        trustServerCertificate: true
    },
    authentication: {
        type: 'ntlm',
        options: {
            domain: 'local',      // Fill in if needed
            userName: '',    // Fill in your username
            password: ''     // Fill in your password
        }
    }
};

async function connectToSqlServer() {
    try {
        await sql.connect(config);
        console.log('Connected to SQL Server!');
        // You can run queries here
    } catch (err) {
        console.error('Connection failed:', err);
    } finally {
        await sql.close();
    }
}

connectToSqlServer();
