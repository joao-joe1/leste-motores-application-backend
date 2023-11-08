import { Test, TestingModule } from '@nestjs/testing';
import { TypecategoryController } from './typecategory.controller';
import { TypecategoryService } from './typecategory.service';

describe('TypecategoryController', () => {
  let controller: TypecategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypecategoryController],
      providers: [TypecategoryService],
    }).compile();

    controller = module.get<TypecategoryController>(TypecategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
