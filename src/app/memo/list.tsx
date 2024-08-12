import { View, StyleSheet } from 'react-native'

import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'
import { router, useNavigation } from 'expo-router'

const handlePress = (): void => {
    router.push('/memo/create')
}

const List = (): JSX.Element => {
    const navigation = useNavigation()
    navigation.setOptions({
        headerRight: () => { return <Text>Test</Text>}
    })
    return (
        <View style={styles.container}>
            <View>
                <MemoListItem />
                <MemoListItem />
                <MemoListItem />
            </View>

            <CircleButton onPress={handlePress}>
                <Icon name='plus' size={40} color='#fff' />
            </CircleButton>
        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff'
    }
})

export default List
