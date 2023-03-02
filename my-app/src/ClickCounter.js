import React from "react";
import Counter from "./Counter";

export default class ClickCounter extends React.Component{
    state = { count: 0}
    handleButton = () => {
      this.setState ((prevState) => {
        return {count: state.count +1}
    }}
      }
    })

    }
    render(){
        return (
            <div>
                <button ></button>
                <Counter />
            </div>
        )
    }
}