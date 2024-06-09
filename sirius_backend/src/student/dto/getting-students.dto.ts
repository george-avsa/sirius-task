import { IsArray, IsEmail, IsString, MinLength } from "class-validator";

export class StudentsDto {
    @IsArray()
    ids: string[]

    @IsString()
    id: string
}