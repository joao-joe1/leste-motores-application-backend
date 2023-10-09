import { Test, TestingModule } from '@nestjs/testing';
import { TypecategoryService } from './typecategory.service';

describe('TypecategoryService', () => {
  let service: TypecategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypecategoryService],
    }).compile();

    service = module.get<TypecategoryService>(TypecategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
