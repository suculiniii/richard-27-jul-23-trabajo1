const data = require("./MOCK_DATA.json");

module.exports = {
    getUsers: () => data,
    getUser: (id) => {
        let idf = Number (id);
        let user = data.filter((person) => person.id === idf)[0];
        return user;
    },
    createUser:(dataUser) => {
        let newUSer = {
            id: data.length + 1,
            ...dataUser
        }
        data.push(newUSer);
        return newUSer;
    }
}