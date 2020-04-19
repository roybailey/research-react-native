import React from "react";
import {StyleSheet, View, Text, Button, TouchableOpacity} from "react-native";

const HomeScreen = ({navigation}) => {
    return (
        <View>
            <Text style={styles.text}>My First App HomeScreen</Text>
            <Button
                title="Goto Box Demo"
                onPress={() => navigation.navigate("Box")}
            />
            <Button
                title="Goto Text Demo"
                onPress={() => navigation.navigate("Text")}
            />
            <Button
                title="Goto Square Reducer Demo"
                onPress={() => navigation.navigate("SquareReducer")}
            />
            <Button
                title="Goto Square State Demo"
                onPress={() => navigation.navigate("SquareState")}
            />
            <Button
                title="Goto Color Demo"
                onPress={() => navigation.navigate("Color")}
            />
            <Button
                title="Goto Counter Demo"
                onPress={() => navigation.navigate("Counter")}
            />
            <Button
                title="Goto Images Demo"
                onPress={() => navigation.navigate("Images")}
            />
            <Button
                title="Goto List Demo"
                onPress={() => navigation.navigate("Images")}
            />
            <Button
                title="Goto Components Demo"
                onPress={() => navigation.navigate("Components")}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default HomeScreen;
