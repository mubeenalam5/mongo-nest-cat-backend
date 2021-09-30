import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, IsNumber, IsArray } from 'class-validator';

export class CreateCatDTO {

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    age: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    breed: string;

    @ApiProperty()
    @IsArray()
    @IsOptional()
    tags: string[];
}