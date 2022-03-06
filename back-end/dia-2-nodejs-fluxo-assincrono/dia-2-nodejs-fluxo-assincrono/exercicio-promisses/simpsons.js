const { json } = require('stream/consumers');

const fs = require('fs').promises;

const simpsons = 'simpsons.json';

async function main() {
  try {
    const personagens = await fs.readFile(simpsons);
    JSON.parse(personagens).forEach(personagem => {
      console.log(`${personagem.id} - ${personagem.name}`);
    });
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
}

main()