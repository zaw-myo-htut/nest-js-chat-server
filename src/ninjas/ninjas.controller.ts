import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('ninjas')
export class NinjasController {
    
    @Get()
    getNinjas(){
        return [];
    }

    @Get(':id')
    getOneNinjas(){
        return {};
    }

    @Post()
    createNinja() {
        return {}
    }

    @Put(':id')
    updateNinjas(){
        return {}
    }

    @Delete(':id')
    removeNinja(){
        return {}
    }



}


