import {Entity, model, property} from '@loopback/repository';

@model()
export class TipoDocumento extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  nombre?: string;

  @property({
    type: 'string',
    required: true,
  })
  abreviatura?: string;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: string;


  constructor(data?: Partial<TipoDocumento>) {
    super(data);
  }
}

export interface TipoMovimientoRelations {
  // describe navigational properties here
}

export type TipoMovimientoWithRelations = TipoDocumento & TipoMovimientoRelations;
