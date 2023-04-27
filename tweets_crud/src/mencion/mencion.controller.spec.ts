import { Test, TestingModule } from '@nestjs/testing';
import { MencionController } from './mencion.controller';
import { MencionService } from './mencion.service';

describe('MencionController', () => {
  let controller: MencionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MencionController],
      providers: [MencionService],
    }).compile();

    controller = module.get<MencionController>(MencionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
