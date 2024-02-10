import {ExceptionFilter, Catch, ArgumentsHost, HttpException} from '@nestjs/common';
import {FastifyReply} from 'fastify';

@Catch(HttpException)
export class ResponseTransformFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<FastifyReply>();
    const status = exception.getStatus();
    const exceptionBody: any = exception.getResponse();
    let messages = [];
    if (exceptionBody && exceptionBody.message) {
      messages = exceptionBody.message;
    }

    response.status(status).send({
      statusCode: status,
      success: false,
      messages,
    });
  }
}
