class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'usou um ataque desconhecido';
                break;
        }

        const mensagem = `o ${this.tipo} atacou usando ${ataque}`;
        return mensagem;
    }
}

// Exemplo de uso da classe Heroi
const heroi1 = new Heroi('Herói1', 25, 'mago');
const heroi2 = new Heroi('Herói2', 30, 'guerreiro');
const heroi3 = new Heroi('Herói3', 22, 'monge');
const heroi4 = new Heroi('Herói4', 28, 'ninja');

console.log(heroi1.atacar());  // Saída: o mago atacou usando magia
console.log(heroi2.atacar());  // Saída: o guerreiro atacou usando espada
console.log(heroi3.atacar());  // Saída: o monge atacou usando artes marciais
console.log(heroi4.atacar());  // Saída: o ninja atacou usando shuriken
