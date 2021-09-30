import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsNumber, IsArray } from 'class-validator';

export class UpdateCatDTO {

    @ApiProperty()
    @IsOptional()
    @IsString()
    name: string;

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    age: number;

    @ApiProperty()
    @IsOptional()
    @IsString()
    breed: string;

    @ApiProperty()
    @IsArray()
    @IsOptional()
    tags: string[];
}