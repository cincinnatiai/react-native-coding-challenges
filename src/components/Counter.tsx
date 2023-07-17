import React, { useState } from 'react';
import { View } from 'react-native';
import { CounterButton } from './CounterButton';

export const Counter = () => {
    const [count, setCount] = useState(0);
    const updateCounter = () => {
        setCount(count => count + 1)
    }

    return (
        <View>
            <CounterButton
                count={count}
                onButtonClicked={updateCounter} />
        </View>
    )
}