import React, { useState } from 'react';
import { Button, View, Text } from 'react-native';

const ON_LABEL = 'On';
const OFF_LABEL = 'Off';
const MESSAGE = 'I was clicked!';

export const LabeledButton: React.FC = () => {

    const [isOn, setIsOn] = useState(false);
    const [message, displayMessage] = useState('');

    const onButtonPressed = () => {
        setIsOn(isOn => !isOn)
        displayMessage(MESSAGE)
    }

    return (
        <View>
            <Button
                title={isOn ? ON_LABEL : OFF_LABEL}
                onPress={onButtonPressed}
                accessibilityLabel='Labeled button' />
            <Text>
                {message}
            </Text>
        </View>
    )
}
