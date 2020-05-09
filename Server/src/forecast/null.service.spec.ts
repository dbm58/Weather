import { Test, TestingModule } from '@nestjs/testing';
import { NullService } from './null.service';

describe('NullService', () => {
  let service: NullService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NullService],
    }).compile();

    service = module.get<NullService>(NullService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
