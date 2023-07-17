import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

export const Clock = () => {

    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    return (
        <View>
            <Text>
                {time.toLocaleTimeString()}
            </Text>
        </View>
    )
}