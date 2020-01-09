import { Test, TestingModule } from '@nestjs/testing';
import { Forecast } from './forecast';

describe('Forecast', () => {
  let provider: Forecast;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Forecast],
    }).compile();

    provider = module.get<Forecast>(Forecast);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
