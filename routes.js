const express = require('express');
const router = express.Router();

const pensador = require('pensador-api')

router.get('/', (req, res) => {
    return res.json({status:true}).send();
})

router.get('/frases/clarice', async function (req,res){
    const dados_autor =  await pensador({ term: "Clarice Lispector", max: 50})
    const array_phases = (dados_autor.phrases);
    const variavel = Math.floor(Math.random() * 50) + 1;
    return res.json(array_phases[variavel]);
} );

module.exports = router;