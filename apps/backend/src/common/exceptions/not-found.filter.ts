import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    NotFoundException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(NotFoundException)
export class NotFoundExceptionFilter implements ExceptionFilter {
    catch(_exception: NotFoundException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const res = ctx.getResponse<Response>();

        res.inertia.render('not-found');
    }
}
