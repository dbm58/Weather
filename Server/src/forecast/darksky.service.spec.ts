import { Test, TestingModule } from '@nestjs/testing';
import { DarkskyService }      from './darksky.service';

describe('DarkskyService', () => {
  let provider: DarkskyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DarkskyService],
    }).compile();

    provider = module.get<DarkskyService>(DarkskyService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
