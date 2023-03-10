const users = [];

const createUser = (req, res) => {
    const body = req.body;
    const name = body.name;
    const email = body.email;
    
    const user = users.find( (user) => user.email === email );
    
    if(!user){
        users.push(body);
    }
    else{
        res.status(400).send("User already exists");
    }

    res.status(201).send(users);
};

function getUsers(req, res){
    console.log(users);
    res.status(201).send(users);
}

const updateUser = ( req, res ) => {
    const body = req.body;
    const name = body.name;
    const email = req.params.email;

    const user = users.find( user => user.email === email );

    if(!user) return res.status(400).send('User not found!');

    user.name = name;
    res.status(201).send(users);
}

const deleteUser = ( req, res ) => {
    const email = req.params.email;
    const user = users.find( user => user.email === email);

    if(!user) return res.status(400).send('User not found');

    const userIndex = users.findIndex( user => user.email === email );
    const deletedUser = users.splice(userIndex, 1);
    res.status(201).send(deletedUser);
}

module.exports.createUser = createUser;
module.exports.getUsers = getUsers;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;