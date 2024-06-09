import { Type } from "class-transformer";
import { IsDate, IsEmail, IsString, MinLength } from "class-validator";

export class LessonDTO {
    @IsDate()
    @Type(() => Date)
    startsAt: Date
    
    @IsDate()
    @Type(() => Date)
    endsAt: Date

    @IsString()
    groupId: string

    @IsString()
    teacherId: string

    @IsString()
    name: string
}