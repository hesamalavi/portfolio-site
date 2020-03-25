import React from 'react';

const Action = props => (
  <div>
    {/* below, we are only referencing handle pick hence no (), it will get called when someone clicks */}
    <button onClick={props.handlePick} disabled={!props.hasOptions}>
      What should I do?
    </button>
  </div>
);
// class Action extends React.Component {
//   render() {
//     return (
//       <div>
//         {/* below, we are only referencing handle pick hence no (), it will get called when someone clicks */}
//         <button
//           onClick={this.props.handlePick}
//           disabled={!this.props.hasOptions}
//         >
//           What should I do?
//         </button>
//       </div>
//     );
//   }
// }

export default Action;
