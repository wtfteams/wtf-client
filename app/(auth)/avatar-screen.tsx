import { router } from "expo-router"
import React, { useState } from "react"
import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from "react-native"

import { Button, FeatherIcons, Header, UploadImageCropper } from "@/components"
import PROFILE1 from "../../assets/images/profile-1.png"
import PROFILE2 from "../../assets/images/profile-2.png"
import PROFILE3 from "../../assets/images/profile-3.png"
import PROFILE4 from "../../assets/images/profile-4.png"
import PROFILE5 from "../../assets/images/profile-5.png"
import PROFILE6 from "../../assets/images/profile-6.png"
import PROFILE from "../../assets/images/no-profile.png"

interface AvatarType {
    id: number,
    image: ImageSourcePropType
}

const AvatarScreen = () => {
    const [image, setImage] = useState<ImageSourcePropType>(PROFILE)
    const [selectedAvatarId, setSelectedAvatarId] = useState<number | null>(null)
    const [showModal, setShowModal] = useState(false)

    const avatars: AvatarType[] = [
        { id: 1, image: PROFILE1 },
        { id: 2, image: PROFILE2 },
        { id: 3, image: PROFILE3 },
        { id: 4, image: PROFILE4 },
        { id: 5, image: PROFILE5 },
        { id: 6, image: PROFILE6 },
    ]

    return (
        <View className='flex-1 bg-[#192230] px-5'>
            <Header />
            <View className="flex-1 gap-[68px]">
                <Text className="font-poppins-semibold text-xl tracking-wider text-white">Choose profile picture</Text>
                <View className="gap-9">
                    <View style={{ backgroundColor: "#1B2A3A" }} className="w-[230px] h-[230px] rounded-full mx-auto border-2 border-dashed border-[#3D474E] relative">
                            <Image
                                source={image}
                                className="w-full h-full rounded-full"
                                resizeMode="contain"
                            />
                        <UploadImageCropper setImage={setImage} showModal={showModal} setShowModal={setShowModal}>
                            <TouchableOpacity onPress={() => setShowModal(true)} className="w-[50px] h-[50px] absolute top-5 right-0 bg-[#FFCD00] rounded-full flex justify-center items-center">
                                <FeatherIcons icon={"plus-icon"} iconWidth={12.52} iconHeight={12.52} iconStrokeColor={"#000000"} iconStrokeWidth={2} />
                            </TouchableOpacity>
                        </UploadImageCropper>
                    </View>
                    <Text className="font-poppins-regular text-xs leading-[13px] tracking-wider text-[#FFFFFF80] text-center">or choose a WTF avatar</Text>
                    <View className="flex-row flex-wrap gap-[30px] w-full justify-center">
                        {avatars.map((data: AvatarType) => (
                            <TouchableOpacity key={data.id} onPress={() => {
                                setImage(data.image)
                                setSelectedAvatarId(data.id)
                            }}>
                                <View className={`w-[70px] h-[70px] bg-white rounded-full overflow-hidden ${data.id === selectedAvatarId && "border-2 border-solid border-[#FFCD00]"}`}>
                                    <Image
                                        source={data.image}
                                        className="w-full h-full"
                                        resizeMode="cover"
                                    />
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <Button
                        text="Continue"
                        buttonColor="bg-[#FFCD00]"
                        textColor="text-black"
                        onPress={() => router.push("/(auth)/friend-suggestion-screen")}
                        className="rounded-[38px] w-full h-[63px]"
                        textClassName="font-poppins-semibold text-base tracking-wider"
                    />
                </View>
            </View>
        </View>
    )
}

export default AvatarScreen