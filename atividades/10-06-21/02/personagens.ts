class Personagem {
    id: number;
    nome: string;
    energia: number;

    constructor(id: number, nome:string, energia:number){
        this.id = id;
        this.nome = nome;
        this.energia = energia;
    }

    
    estaVivo(energia: number){
        if (this.energia > 0) {
            return true;
        }
        return false;
    }


    defenderAtaque(dano: number){
        if ( dano > this.energia){
            this.energia = 0;
        } else {
            this.energia = this.energia - dano;
        }
    }
}

class Soldado extends Personagem{
    atackForce: number;

    constructor(id: number, nome:string, energia:number, atackForce: number){
        super(id, nome, energia);
        this.atackForce = atackForce;
    }


    atacar(p: Personagem){
        // atacar => ataca um personagem p
        // p => defende o ataque
        p.defenderAtaque(this.atackForce);
    }

    // 
    defenderAtaque(dano: number){
        dano = dano / 2
        if ( (dano) > this.energia){
            this.energia = 0;
        } else {
            this.energia = this.energia - (dano);
        }
    }
}

class Cavaleiro extends Soldado{
    constructor(id: number, nome:string, energia:number, atackForce: number){
        super(id, nome, energia, atackForce);
    }

    // causa o dobro de dano
    atacar(p: Personagem){
        p.defenderAtaque(this.atackForce * 2);
    }

    defenderAtaque(dano: number){
        dano = dano / 3;
        if ( (dano) > this.energia){
            this.energia = 0;
        } else {
            this.energia = this.energia - (dano);
        }
    }
}