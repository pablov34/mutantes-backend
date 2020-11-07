
var mutant = require('../service/mutanservice');

module.exports = {   
      isMutant: async function(req, resp, next) {
        //recoger parametros por post   
        var params = req.body;
        console.log(req.body.dna);
        try{
            var ismutant = await mutant.isMutantPromise(req.body.dna);
            console.log(ismutant);
            if(ismutant)
            {
                return resp.status(200).send({
                    message:'Es mutante'
                })
            }
            else{
                return resp.status(403).send({
                    message:'Es humano'
                })
            }
        }
        catch(e)
        {
            var error = e.toString();
            //console.log(error);
            resp.status(400).send({error});
        }
        
        
        
        
    }
}