import { Test, TestingModule } from '@nestjs/testing';
import { NoaaService } from './noaa.service';

describe('NoaaService', () => {
  let service: NoaaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NoaaService],
    }).compile();

    service = module.get<NoaaService>(NoaaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
