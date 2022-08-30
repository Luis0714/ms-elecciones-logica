import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {TipoDocumento, TipoMovimientoRelations} from '../models';

export class TipoMovimientoRepository extends DefaultCrudRepository<
TipoDocumento,
  typeof TipoDocumento.prototype.id,
  TipoMovimientoRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(TipoDocumento, dataSource);
  }
}
