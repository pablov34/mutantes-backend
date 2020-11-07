function isMutantPromise(adn = []){
	return new Promise((resolve, reject) => {
    
            try {
              resolve(isMutant(adn));
            }
            catch (e) {
                ///console.error(e.name);    // registra 'Error'
                //console.error(e.message); // registra 'The message' o un mensaje de error de JavaScript
                reject(e.message)
            }        
	});
}

function isMutant(adn = [])
{

    if (!adn || adn.length == 0) 
       throw new Error('La secuencia esta vacia');

      const rows = adn.length;
      const colums = adn[0].length;

      if (rows <= 3 && colums <= 3)
        throw new Error('DNA debe tener 4 columnas/filas o mas');

      if (rows === colums) 
      {
        return findSequence(rows, colums, adn) > 1;
      } 
      else 
      {
        throw new Error('El numero de filas y columnas deben ser iguales (NxN)');
      }
}
 

function findSequence(rows, colums, array = []) 
{
    let wordFormed1 = '';
    let wordFormed2 = '';
    const diagonalLeftRight = [];
    const diagonalRightLeft = [];
    let findedSequence = 0;

    for (let i = 0; i < rows; i++) {
      if (findedSequence !== 2) {
        if (rows !== array[i].length)
          throw new Error('El numero de filas y columnas deben ser iguales (NxN)');

        for (let z = colums - 1, h = 0; z >= 0; z--, h++) {
          if (!validate(array[i].charAt(h).toUpperCase()))
            throw new Error('ADN puede ser solo A-C-T-G');

          if (!validate(array[h].charAt(i).toUpperCase()))
            throw new Error('ADN puede ser solo A-C-T-G');

          wordFormed1 += array[i].charAt(h).toUpperCase();
          wordFormed2 += array[h].charAt(i).toUpperCase();

          if (!diagonalRightLeft[i + h] || !diagonalLeftRight[i + h]) {
            if (!validate(array[i].charAt(h).toUpperCase()))
              throw new Error('ADN puede ser solo A-C-T-G');

            if (!validate(array[i].charAt(z).toUpperCase()))
              throw new Error('ADN puede ser solo A-C-T-G');

            diagonalLeftRight[i + h] = array[i].charAt(h).toUpperCase();
            diagonalRightLeft[i + h] = array[i].charAt(z).toUpperCase();
          } else {
            diagonalLeftRight[i + h] += array[i].charAt(h).toUpperCase();
            diagonalRightLeft[i + h] += array[i].charAt(z).toUpperCase();
          }
        }

        if (helpContent(wordFormed1) || helpContent(wordFormed2))
          findedSequence += 1;
      } else {
        return findedSequence;
      }
    }

    for (let w = 0; w < diagonalRightLeft.length; w++) {
        if (findedSequence === 2) return findedSequence;
  
        if (diagonalRightLeft[w].length > 3) {
          if (
            helpContent(diagonalRightLeft[w]) ||
            helpContent(diagonalLeftRight[w])
          ) {
            findedSequence += 1;
          }
        }
      }
  
      return findedSequence;
}

function validate(Word){
    switch (Word) {
      case 'C':
      case 'A':
      case 'G':
      case 'T':
        return true;
      default:
        return false;
    }
}

function helpContent(Word){
    if (
      Word.includes('CCCC') ||
      Word.includes('TTTT') ||
      Word.includes('AAAA') ||
      Word.includes('GGGG')
    ) {
      return true;
    }
    return false;
}

exports.isMutantPromise = isMutantPromise;