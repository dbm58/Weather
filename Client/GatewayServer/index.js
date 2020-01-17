if( ! process.env.darkSkyKey )
{
  console.info( '"darkSkyKey" environment variable is not set' );
  process.exit( 1 );
}

if( ! process.env.mctsKey )
{
  console.info( '"mctsKey" environment variable is not set' );
  process.exit( 1 );
}

const express = require( 'express' );
const unirest = require( 'unirest' );
const cors    = require( 'cors'    );

const app = express();

app.use( cors( ) )
   .get( '/',
         ( req, res ) =>
         {
           res.send( 'Hello world!' );
         }
       )
   .get( '/kill',
         ( req, res ) =>
         {
           res.send( 'Shutting down...' );
           process.exit( 2 );
         }
       )
   .get( '/forecast',
         ( req, res ) =>
         {
           console.info( 'Handling /forecast request' );

           const lat = '43.044';
           const lon = '-88.002';
           const key = process.env.darkSkyKey;
           const url = `https://api.darksky.net/forecast/${key}/${lat},${lon}`;

           let request = unirest( 'GET', url );
           request.query
                   (
                     {
                       lang:  'en',
                       units: 'auto'
                     }
                   )
                  .end( 
                        response =>
                        {
                          if( response.error )
                          {
                            console.info( response.error );
                            res.status( 500 )
                               .end( );
                          }
                          res.status( 200 )
                             .send( response.body );
                        }
                      );
         }
       )
   .get( '/bus',
         ( req, res ) =>
         {
           console.info( `${new Date( ).toISOString( )} Handling /bus request` );

           const key  = `key=${process.env.mctsKey}`;
           const rte  = 'rt=GOL';
           const stop = 'stpid=582,2974';
           const fmt  = 'format=json';
           const url  = `http://realtime.ridemcts.com/bustime/api/v3/getpredictions?${key}&${rte}&${stop}&${fmt}`;

           let request = unirest( 'GET', url );
           request.query
                   (
                     {
                       lang:  'en',
                       units: 'auto'
                     }
                   )
                  .end( 
                        response =>
                        {
                          if( response.error )
                          {
                            console.info( response.error );
                            res.status( 500 )
                               .end( );
                          }
                          res.status( 200 )
                             .send( response.body );
                        }
                      );
         }
       )
   .listen( 3000,
            ( ) =>
            {
              console.info( 'Listening on port :3000' );
            }
          );
