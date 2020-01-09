import { Controller, Get, Logger } from '@nestjs/common';
import { Observable }              from 'rxjs';

import { TrashService } from './trash.service';

const ENDPOINT: string = 'trash';

@Controller( ENDPOINT )
export class TrashController
{
  constructor( 
               private readonly logger:       Logger,
               private readonly trashService: TrashService,
             )
  {
    this.logger.setContext( TrashController.name );
    this.logger.log( 'Loading...' );
  }

  @Get( )
  async getDate( )
  {
    this.logger.log( `Handling /${ENDPOINT} request` );

    const observable =
      new Observable(
                      subscriber =>
                      {
                        this.trashService.getDate( subscriber );
                      }
                    );
    return observable;
  }
}
