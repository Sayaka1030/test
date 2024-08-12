import { View, TextInput, StyleSheet } from "react-native";
import Header from "../../components/Header";
import CircleButton from "../../components/CircleButton";
import Icon from "../../components/Icon";

const Edit = (): JSX.Element => {
    return (
        <View>
            <Header />
            <View>
                <TextInput value='買い物リスト' />
            </View>
            <CircleButton>
                <Icon name='check' size={40} color='#fff' />
            </CircleButton>
        </View>
    )
}

export default Edit
