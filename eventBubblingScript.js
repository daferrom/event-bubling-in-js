/* The HTML events receive different type of events, like blur
click, scroll and so on.

The behavior aff all those events have in common is the event bubbling

What is a event bubbling ?

Is a concept in the DOM

When an element receives an event this is
transmitted or propagated, "bubbled" to its elements :

PARENTS AND ANCESTORS IN THE DOM until arrives to its root element.
Default behavior:
(unless you stop propagation)

see the html example, when a user clicks the button , the click event "bubbles" until the root element
since the button, the span ,the div, the body the html root and the document.

However if you click on the span, the behavior stars in the span but the button doesn't receive the event

The pattern of handling the event in an ancester element is called: Event delegation.
*/

const body = document.getElementsByTagName("body")[0]
const div = document.getElementsByTagName("div")[0]
const span = document.getElementsByTagName("span")[0]
const button = document.getElementsByTagName("button")[0]

body.addEventListener('click', (event) => {
  console.log("se hizo clic en el body", event)
})

div.addEventListener('click', (event) => {
  console.log("se hizo clic en el div", event)
})

/* addEventListener listen the event,
and it can be passed as parameter to the callbackfunction/2nd parameter
*/
span.addEventListener('click', (event) => {
    /* the method stopPropagation of the events
    disables the event bubbling to the ancesters
    */
    event.stopPropagation()
  console.log("se hizo clic en el span", event)
})

button.addEventListener('click', (event) => {
  console.log("se hizo clic en el button", event)
})






