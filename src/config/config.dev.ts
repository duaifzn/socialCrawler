export const dev = {
    youtubeKey: 'AIzaSyBKgc_Q_DYQ6kDUAQMPKcbzK75BngqvKUs',
    puppeteer: {
        headless: false,
    },
    facebook: {
        email: 'duaifzn@gmail.com',
        password: 'QAZwsx1234',
    },
    instagram: {
        sessionId: '13371201014%3AHR0DY0KxykP3L4%3A21'
    },
    allowOrigins: [
        'http://localhost:3000',
    ],
    mongoDb: {
        mongoUri: 'mongodb://0.0.0.0:27018/rt',
        authSource: 'admin',
        user: 'eagle',
        pass: 'eagle-eye',
    },
    wordpressDb: {
        username: "root",
        password: "root",
        database: "wordpress",
        host: "127.0.0.1",
        port: 3313,
        dialect: "mysql"
    }
    
}
