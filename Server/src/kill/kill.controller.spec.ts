import { Test, TestingModule } from '@nestjs/testing';
import { KillController } from './kill.controller';

describe('Kill Controller', () => {
  let controller: KillController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KillController],
    }).compile();

    controller = module.get<KillController>(KillController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
