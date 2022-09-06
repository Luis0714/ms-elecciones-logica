import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {TipoDocumento} from './tipo-documento.model';
import {Bloque} from './bloque.model';
import {BloqueVotante} from './bloque-votante.model';

@model()
export class Votante extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  PrimerNombre: string;

  @property({
    type: 'string',
  })
  SegundoNombre?: string;

  @property({
    type: 'string',
    required: true,
  })
  PrimerApellido: string;

  @property({
    type: 'string',
  })
  SegundoApellido?: string;

  @property({
    type: 'string',
    required: true,
  })
  documento: string;

  @property({
    type: 'string',
    required: true,
  })
  correo: string;

  @property({
    type: 'string',
    required: true,
  })
  numeroCelular: string;

  @property({
    type: 'string',
  })
  hash?: string;

  @belongsTo(() => TipoDocumento)
  tipoDocumentoId: number;

  @hasMany(() => Bloque, {through: {model: () => BloqueVotante}})
  bloques: Bloque[];

  constructor(data?: Partial<Votante>) {
    super(data);
  }
}

export interface VotanteRelations {
  // describe navigational properties here
}

export type VotanteWithRelations = Votante & VotanteRelations;
