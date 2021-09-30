import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CatService } from './cat.service';
import { CreateCatDTO } from './dto/create-cat.dto';
import { UpdateCatDTO } from './dto/update-cat.dto';
import { Cat } from './schemas/cat.schema';

@Controller('cat')
export class CatController {
    constructor(
        private catService: CatService
    ) {}
    
    @Post()
    create(@Body() createCatDTO: CreateCatDTO ): Promise<Cat>{
        return this.catService.create(createCatDTO);
    }

    @Get()
    findAll(): Promise<Cat[]> {
        return this.catService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: string): Promise<Cat> {
        console.log('id:', id)
        return this.catService.findById(id);
    }

    @Delete(':id')
    deleteById(@Param('id') id: string): Promise<Cat> {
        return this.catService.deleteById(id);
    }

    @Patch('update/:id')
    updateById(
        @Param('id') id: string,
        @Body() updateCatDTO: UpdateCatDTO 
        ){
            return this.catService.updateById(id,updateCatDTO);
    }
}
