import React from 'react'

const TestComponent = ({ text, testAction, testAction2, testAjaxAction }) => {
    return (
      <div>
        <h1>My Test is awesome with redux</h1>

        <p>{text}</p>
        <p><a onClick={testAction}>My action</a></p>
        <p><a onClick={testAction2}>My action 2</a></p>
        <p><a onClick={testAjaxAction}>My ajax action</a></p>
      </div>
    );
}

export default TestComponent