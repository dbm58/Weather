import { Test, TestingModule } from '@nestjs/testing';
import { BustimeController } from './bustime.controller';

describe('Bustime Controller', () => {
  let controller: BustimeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BustimeController],
    }).compile();

    controller = module.get<BustimeController>(BustimeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
