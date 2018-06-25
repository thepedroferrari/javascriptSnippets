// Switch between two strings (available/unavailable)

// 1. Get the availability
const status = this.props.details.status // example for a React Component, might as well be a querySelector or textnode/boolean.

// 2. Create the switch
const isAvailable = status === 'available';

// 3. Ternary operator
{isAvailable ? 'Add To Cart' : 'Sold Out!'}

// React example: <button disabled={!isAvailable}>{isAvailable ? 'Add To Cart' : 'Sold Out!'}</button>
