const { Router } = require("express");
const router = Router();

const db = require('../../models')
const Temple = db.t_temple

router.get("/temple", (req, res) => {
    Temple.findAll({order: [["year"],["month"],["day"]]}).then(temple => {
        res.json(temple);
    }).catch((err) => {
        console.error(err);
        res.json(err);
    });
});

router.post("/temple", (req, res) => {
    Temple.create( req.body).then(temple => {
        res.status(201).json(temple);
    }).catch((err) => {
        console.error(err)
        res.json(err);
    });
});

router.get("/temple/:id", async (req, res) => {
    const row = await Temple.findOne({
        where: {
            id: req.params.id
        }
    })  

    if (row) { 
        res.json(row);
    } else {
        res.sendStatus(404);
    } 
});

router.delete("/temple/:id", (req, res) => {
    Temple.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        res.send('');
    }).catch((err) => {
        console.error(err)
        res.json(err);
    });
});

router.patch("/temple/:id", async (req, res) => {
    const row = await Temple.findOne({
        where: {
            id: req.params.id
        }
    })  

    if (!row) { res.sendStatus(404);}

    const whiteList = ['year','month','day', 'temple', 'memo', 'address', 'station']
    whiteList.forEach(val => {
        if (req.body[val] !== undefined) {
            row[val] = req.body[val]
        }
    })

    row.save().then(() => {
        res.json(row);
    }).catch((err) => {
        console.error(err)
        res.json(err);
    });
});

module.exports = router;
