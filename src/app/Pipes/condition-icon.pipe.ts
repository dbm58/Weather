import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conditionIcon'
})
export class ConditionIconPipe implements PipeTransform
{
  transform( value: string ): string
  {
    switch( value )
    {
      case 'rain':  return 'wi-raindrops';
      case 'snow':  return 'wi-snowflake-cold';
      case 'sleet': return 'wi-sleet';
      default:      return '';
    }
  }
}
