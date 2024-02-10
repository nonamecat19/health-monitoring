import {ExceptionFilter, Catch, ArgumentsHost, HttpException} from '@nestjs/common';
import {FastifyReply} from 'fastify';

@Catch(HttpException)
export class ResponseTransformFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<FastifyReply>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    console.log(exception.getResponse());
    const exceptionBody = exception.getResponse();

    // if (typeof exceptionBody !== 'string' && exceptionBody?.message) {
    // }
    response.status(status).send({
      statusCode: status,
      success: false,
    });
  }
}
