import { Controller, Get, Logger } from '@nestjs/common';

@Controller( 'kill' )
export class KillController
{
  constructor( private readonly logger: Logger )
  {
    this.logger.setContext( KillController.name );
    this.logger.log( 'Loading...' );
  }

  @Get( )
  async kill( )
  {
    this.logger.log( 'Shutting down...' );
    process.exit( 2 );
  }
}
