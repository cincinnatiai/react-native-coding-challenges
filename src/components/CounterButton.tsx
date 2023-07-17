import { Button } from "react-native";

type CounterButtonProps = {
    count?: number | undefined,
    onButtonClicked: () => void
}

export const CounterButton: React.FC<CounterButtonProps> = (props: CounterButtonProps): JSX.Element => {
    return (
        <Button
            onPress={props.onButtonClicked}
            title={`Clicks: ${props.count || 0}`}
            accessibilityLabel="Counter button" />
    )
}