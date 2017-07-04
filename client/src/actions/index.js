let nextTodoId = 0
export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const testAction = text => {
    console.log('Accessing action');
    console.log(text);
    return {
        type: 'TEST_ACTION',
        text
    }
}

export const testAjaxAction = () => {
  return dispatch => {
    dispatch(testAction('loading...'));

    fetch('http://localhost:3000/list-books')
            .then((response) => response.json())
            .then((responseJson) => {
                var books = [];

                responseJson.forEach(book => {
                    books.push({
                      'key': book.id,
                      'name': book.name
                    });
                });

                dispatch(testAction(books[0].name));
            });
  }
}