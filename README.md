# React custom hooks

- <b>useInput</b>

  Managed component logic.

- <b>useHover</b>

  Hover effect.

- <b>useScroll(useInfinitePagination)</b>

  For example, we parse a list of tasks. Hundreds of tasks are loaded to us at once. But we don't want this behavior, we want to do dynamic pagination. That is, we scroll through, reach the end and the next batch is loaded for us.

- <b>useDebounce</b>

  We write something in the "input" field and a search request is sent to us - "give me a task with such and such a name."
  And we want this request to be sent not when the button is clicked,
  but the moment we enter something.

  <b>P.S.</b>There are a lot of options for using such a hook.
  It doesn't have to be "input".
  For example, we want to track when the user stops moving the mouse.
  or something like that.

- <b>useRequest</b>

  Request logic.
