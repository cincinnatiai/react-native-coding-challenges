import React, { Component } from "react";
import { View, Text } from "react-native";

type ClockState = {
    currentTime: Date;
}

class ClockClass extends Component<{}, ClockState> {

    timer?: NodeJS.Timer;

    constructor(props: {}) {
        super(props);
        this.state = { currentTime: new Date() };
    }

    componentDidMount(): void {
        this.timer = setInterval(() => {
            this.increaseTimer();
        }, 1000)
    }

    componentWillUnmount(): void {
        if (this.timer) {
            clearInterval(this.timer)
        }
    }

    increaseTimer() {
        this.setState({ currentTime: new Date() });
    }

    render() {
        return (<View>
            <Text>
                {this.state.currentTime.toLocaleTimeString()}
            </Text>
        </View>)
    }
}

export default ClockClass;