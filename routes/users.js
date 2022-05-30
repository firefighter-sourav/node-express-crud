import express from 'express';
const router = express.Router();

const mockUsers = [
    {
        "_id": 1,
        "name": "Sourav Purkait",
        "age": 24,
        "roll": 21
    },
    {
        "_id": 2,
        "name": "Chhanda Naskar",
        "age": 25,
        "roll": 68
    }
]

router.get('/', function(req, res){
    return res.json(mockUsers);
})

router.get('/:id', function(req, res){
    const user = mockUsers.find(user => user._id === Number(req.params.id));
    return res.json(user);
})

router.post('/', function(req, res){
    mockUsers.push({
        _id: parseInt(Math.random()*100),
        ...req.body.data
    });
    return res.json(mockUsers);
})

router.put('/:id', function(req, res){
    const id = Number(req.params.id);
    mockUsers.map(user => {
        if(user._id === id){
            return {
                ...user,
                ...req.body.data
            }
        }
        return user;
    })
})

router.delete('/:id', function(req, res){
    const id = Number(req.params.id);
    mockUsers = mockUsers.filter(user => user._id !== id);
})


export default router;