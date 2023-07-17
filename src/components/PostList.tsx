import React from 'react';
import { Text, View, FlatList } from 'react-native';

type PostListProps = {
    titles: string[]
}

export const PostList = (props: PostListProps) => {

    return (
        <FlatList
            data={props.titles}
            renderItem={({ item }) => <Text>{item}</Text>}
        />
    )
}