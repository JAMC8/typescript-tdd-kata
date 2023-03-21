export class Reflexion {
    
    nom:string | undefined;
    valeur: number | undefined;


    constructor(arg1: string, arg2: number) {
      this.nom = arg1;
      this.valeur = arg2;
    }
  }

  (globalThis as any).Reflexion = Reflexion;

  