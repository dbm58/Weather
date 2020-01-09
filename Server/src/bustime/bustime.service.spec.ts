import { Test, TestingModule } from '@nestjs/testing';
import { BustimeService } from './bustime.service';

describe('BustimeService', () => {
  let service: BustimeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BustimeService],
    }).compile();

    service = module.get<BustimeService>(BustimeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
