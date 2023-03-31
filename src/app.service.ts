import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '这是yike的5003小组Project网页';
    // return process.env.DATABASE_URL;
  }
}
