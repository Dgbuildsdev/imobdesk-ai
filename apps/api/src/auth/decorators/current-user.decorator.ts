import { createParamDecorator, ExecutionContext } from '@nestjs/common';

import { AuthUser } from '../auth.types';


interface RequestWithUser {
  user: AuthUser;
}


export const CurrentUser = createParamDecorator(
  (
    data: keyof AuthUser | undefined,
    ctx: ExecutionContext,
  ) => {

    const request =
      ctx
        .switchToHttp()
        .getRequest<RequestWithUser>();

    const user = request.user;


    if (data) {
      return user[data];
    }


    return user;
  },
);