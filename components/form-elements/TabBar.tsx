import React, { useState } from "react"
import { View, Text } from 'react-native'

type props = {
    name: string
    value: string
}

export default function TabBar({
    tabData,
}: {
    tabData: props[]
}) {
    const [tabValue, setTabValue] = useState<string>(tabData.length > 0 ? tabData[0].value : "")

    return (
        <View className='w-full flex flex-row  rounded-[20px] p-1 bg-[#2C2F38]'>
            {tabData.length > 0 && tabData.map((data: props, index: number) => (
                <Text
                    key={index}
                    onPress={() => setTabValue(data.value)}
                    className={`rounded-[20px] transition-all duration-300 font-poppins-medium flex-1 text-center p-1 text-white ${tabValue === data.value ? "bg-[#3D474E]" : "bg-[#2C2F38]"}`}>
                    {data.name}
                </Text>
            ))}
        </View>
    )
}