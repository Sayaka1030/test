import { createIconSetFromIcoMoon } from "@expo/vector-icons";
import { useFonts } from 'expo-font'

const fontSelection = require('../../assets/fonts/selection.json')

const CustomIcon = createIconSetFromIcoMoon(
    fontSelection,
    'icomoon',
    'icomoon.ttf'
)

interface Props {
    name: string
    size: number
    color: string
}

const Icon = (props: Props):JSX.Element | null => {
    const { name, size, color } = props
    const [fontLoaded] = useFonts({
        icomoon: require('../../assets/fonts/icomoon.ttf'),    })
    if (!fontLoaded) {
        return null
    }
    return (
        <CustomIcon name={name} size={size} color={color} />
    )
}

export default Icon
