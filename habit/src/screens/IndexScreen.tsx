import React, {useContext, useEffect} from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity
} from 'react-native';
import {Context} from '../context/HabitContext';
import {Feather} from '@expo/vector-icons';
import {NavigationParams, NavigationScreenProp, NavigationState} from "react-navigation";

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const IndexScreen = ({navigation}:Props) => {
    const ctxt = useContext(Context);
    const {state, deleteHabit, getHabits} = ctxt;

    console.log(JSON.stringify(ctxt,null,2));

    useEffect(() => {
        getHabits();

        const listener = navigation.addListener('didFocus', () => {
            getHabits();
        });

        return () => {
            listener.remove();
        };
    }, []);

    return (
        <View>
            <FlatList
                data={state.habits}
                keyExtractor={habit => habit.title}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Show', {id: item.id})}
                        >
                            <View style={styles.row}>
                                <Text style={styles.title}>
                                    {item.title} - {item.id}
                                </Text>
                                <TouchableOpacity onPress={() => deleteHabit(item.id)}>
                                    <Feather style={styles.icon} name="trash"/>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

IndexScreen.navigationOptions = ({navigation}:Props) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Feather name="plus" size={30}/>
            </TouchableOpacity>
        )
    };
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
});

export default IndexScreen;
