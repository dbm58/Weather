import { Test, TestingModule } from '@nestjs/testing';
import { ClimacellService } from './climacell.service';

describe('ClimacellService', () => {
  let service: ClimacellService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClimacellService],
    }).compile();

    service = module.get<ClimacellService>(ClimacellService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
