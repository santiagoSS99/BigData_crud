import { Test, TestingModule } from '@nestjs/testing';
import { MencionService } from './mencion.service';

describe('MencionService', () => {
  let service: MencionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MencionService],
    }).compile();

    service = module.get<MencionService>(MencionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
