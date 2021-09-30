import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCatDTO } from './dto/create-cat.dto';
import { UpdateCatDTO } from './dto/update-cat.dto';
import { Cat, CatDocument } from './schemas/cat.schema';

@Injectable()
export class CatService {
    constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) {}

  async create(createCatDto: CreateCatDTO): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }

  async findById(id: string): Promise<Cat> {
    return this.catModel.findById(id).exec();
  }

  async deleteById(id: string): Promise<any> {
    return this.catModel.deleteOne({_id: id}).exec();
  }

  async updateById(id: string, updateCatDTO: UpdateCatDTO): Promise<any> {
    return await this.catModel.updateOne({_id: id}, updateCatDTO).exec();
  }
}
