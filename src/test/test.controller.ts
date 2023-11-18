import { Controller, Get } from '@nestjs/common';

@Controller('test')
export class TestController {
    @Get("/")
    async function(){
        return {"Hello": "World"}
    }
}
