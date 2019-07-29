Create an object which can be used to specify action names when using redux promise middleware.

##Installation

You need to install this library as well as redux-promise-middleware.

```sh
npm install redux-promise-action-util redux-promise-middleware
```
Include redux-promise-middleware when you create your store:

```js
import promiseMiddleware from 'redux-promise-middleware';
 
composeStoreWithMiddleware = applyMiddleware(
  promiseMiddleware(),
)(createStore);
```

##Usage

in your action file generate a new action object

```js
import PromiseAction from 'redux-promise-action-util';
```

create a new action as follows, you can pass a prefix for the actual action name as the optional second argument
```js
const GET_DATA = new PromiseAction('GET_DATA', 'app/section')
```

and use it in your acrtion creator as follows
```js
export const getData = () => dispatch => dispatch({
  type: GET_DATA,
  payload: axios.get('/api/data')
})
```
in your reducer you can call it as 

```js
case GET_DATA.PEDNING: {

}

case GET_DATA.FULFILLED: {

}

case GET_DATA.REJECTED: {

}
```

in your test cases 

```js

it('should handle get data action' ,() => {
  const expectedActions = [
    { type: GET_DATA.PENDING },
    {
      type: GET_DATA.PENDING,
      payload: {},
    },
  ];
  return store.dispatch(getData())
    .catch(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
})

it('should reduce GET_DATA', () => {
  const state = reducer(INITIAL_STATE, {
    type: GET_DATA.PENDING,
  });
  expect(state.fetching).toBeTruthy();
})

```

