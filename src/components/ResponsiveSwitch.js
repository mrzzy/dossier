/*
 * components/ResponsiveImage.js
 * Responsive Switch Component
*/


import React from 'react';

/* ResponsiveCase Wraps components swapped around by its parent Responsive Switch.
 * The component wrapped is given by the component prop.
 * The minWidth prop specfies the minimum width this component will render
 */
function ResponsiveCase(props) {
    return props.component;
}

/* Responsive Switch allows the swapping of components for different viewport
 * sizes. The switch uses responsive components that are its children.
*/
class ResponsiveSwitch extends React.Component {
    // Setup object state, bind handlers 
    constructor(props) {
        super(props);

        this.state = {
            currentWidth: 0
        }

        // Bind callbacks
        this.onViewportChange = this.onViewportChange.bind(this);
    }

    // Responsively select and render a single children case component
    render() {
        console.log(this.state.currentWidth);
        
        // Order components by decreasing min width 
        const cases = React.Children.toArray(this.props.children);
        const orderedCases = cases.sort((a, b) => {
            return a.props.minWidth <= b.props.minWidth;
        });
        
        // Select component to render by short circuit selecting the components
        // with the largest minWidth that is still statisfied by currentWidth
        var selectedCase = null;
        for(var i = 0; i < orderedCases.length; i++) {
            if(orderedCases[i].props.minWidth <= this.state.currentWidth) {
                // Select this case
                selectedCase = orderedCases[i];
                break;
            }
        }

        return selectedCase;
    }

    // Event handlers
    onViewportChange() {
        console.log("rendering....");
        // Trigger rerender on viewport width change
        if(window.innerWidth !== this.state.currentWidth) {
            this.setState({currentWidth: window.innerWidth});
        }
    }

    componentDidMount() {
        // Start listening for viewport changes with handler
        window.onresize = this.onViewportChange;

        this.onViewportChange();
    }
}

export {
    ResponsiveCase,
    ResponsiveSwitch
}
