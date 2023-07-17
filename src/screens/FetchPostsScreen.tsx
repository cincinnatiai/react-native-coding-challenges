import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { PostList } from '../components/PostList';

const postEndpoint = 'https://jsonplaceholder.typicode.com/posts';

type PostResponse = {
    userId: number,
    id: number,
    title: string,
    body?: string
}

export const FetchPostsScreen = (): JSX.Element => {

    // const [titles, setTitles] = useState<string[]>([]);

    // useEffect(() => {
    //     fetch(postEndpoint)
    //         .then((response) => response.json())
    //         .then((json) => {
    //             const postTitles = json.map((post: PostResponse) => (post.title))
    //             setTitles(postTitles)
    //         })
    //         .catch(console.error);

    //     return () => { setTitles([]) }
    // }, [])

    const [titles, setTitles] = useState<string[] | undefined>(undefined);

    useEffect(() => {
        const fetchPosts = async (): Promise<void> => {
            try {
                const response: Response = await fetch(postEndpoint);
                if (!response.ok) {
                    throw new Error("HTTP error " + response.status);
                }
                const json: PostResponse[] | undefined = await response.json();
                const postTitles = json?.map(post => post.title);
                setTitles(postTitles ?? []);
                console.log(postTitles);
            } catch (error) {
                console.error(error);
            }
        }

        fetchPosts();
    }, []);

    if (!titles) {
        return <View><Text>Loading...</Text></View>;
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <PostList titles={titles} />
        </View>
    )
}
