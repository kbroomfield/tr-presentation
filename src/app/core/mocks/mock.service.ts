import {InMemoryDbService, RequestInfo, ResponseOptions, STATUS} from 'angular-in-memory-web-api';
import {UserModel} from '../models/user.model';
import {Observable} from 'rxjs';

export class MockService implements InMemoryDbService {
  createDb() {
    const users: UserModel[] = [
      {id: 1, name: 'Name Name', email: 'my@email.com', token: 'thisaafaketoken'}
    ];

    return {users};
  }

  // This intercepts requests with token to return a model that we want.
  post(request: RequestInfo): Observable<Response> | null | undefined {
    const url = request.utils.parseRequestUrl(request.url);

    if (url.collectionName === 'token') {
      return request.utils.createResponse$(() => {
        const opts: ResponseOptions = {
          body: {id: 1, displayName: 'Name Name', email: 'my@email.com', token: 'thisaafaketoken'},
          status: STATUS.OK
        };

        return opts;
      });
    }

    return null;
  }
}
