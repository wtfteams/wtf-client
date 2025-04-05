import React from "react"
import * as ImagePicker from "expo-image-picker"
import { Alert, ImageSourcePropType, Linking, Modal, Pressable, TouchableOpacity, View } from "react-native"

import FeatherIcons from "./FeatherIcons"

const UploadImageCropper = ({
    children,
    setImage,
    showModal,
    setShowModal
}: {
    children: React.ReactNode
    setImage: React.Dispatch<React.SetStateAction<ImageSourcePropType>>
    showModal: boolean
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}) => {

    const requestCameraPermission = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync()
        if (status !== "granted") {
            Alert.alert(
                "Permission required",
                "We need camera access to take photos",
                [
                    {
                        text: "Open Settings",
                        onPress: () => Linking.openSettings(),
                    },
                    { text: "Cancel" },
                ]
            )
        }
        return status === "granted"
    }

    const requestGalleryPermission = async () => {
        const { status, canAskAgain } = await ImagePicker.getMediaLibraryPermissionsAsync()
        if (status === "granted") return true
        if (!canAskAgain) return false
        const { status: newStatus } = await ImagePicker.requestMediaLibraryPermissionsAsync()
        return newStatus === "granted"
    }

    const handleImagePick = async (type: "camera" | "gallery") => {
        try {
            const hasPermission =
                type === "camera"
                    ? await requestCameraPermission()
                    : await requestGalleryPermission()
            if (!hasPermission) return
            const result = await (type === "camera"
                ? ImagePicker.launchCameraAsync({
                    cameraType: ImagePicker.CameraType.front,
                    allowsEditing: true,
                    aspect: [1, 1],
                    quality: 1,
                })
                : ImagePicker.launchImageLibraryAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.Images,
                    allowsEditing: true,
                    aspect: [1, 1],
                    quality: 1,
                }))
            if (!result.canceled && result.assets?.[0]?.uri) {
                setImage({ uri: result.assets[0].uri })
                setShowModal(false)
            }
        } catch (error) {
            console.error(`${type} Error:`, error)
            Alert.alert("Error", `Could not open ${type}`)
        }
    }

    const iconOptions = [
        {
            id: 1,
            iconName: "camera-icon",
            onPress: () => handleImagePick("camera")
        },
        {
            id: 2,
            iconName: "gallery-icon",
            onPress: () => handleImagePick("gallery")
        },
    ]

    return (
        <>
            {children}
            <Modal
                visible={showModal}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setShowModal(false)}
            >
                <Pressable
                    className="flex-1 justify-end"
                    onPress={() => setShowModal(false)}
                >
                    <View className="bg-white rounded-tl-[20px] rounded-tr-[20px] h-1/4">
                        <TouchableOpacity onPress={() => setShowModal(false)} className="flex-row w-full justify-end p-4">
                            <FeatherIcons
                                icon={"plus-icon"}
                                iconWidth={20}
                                iconHeight={20}
                                iconStrokeColor={"#000000"}
                                iconStrokeWidth={2}
                            />
                        </TouchableOpacity>
                        <View className="flex-row gap-8 justify-center items-center flex-1">
                            {iconOptions.map((data) => (
                                <TouchableOpacity
                                    key={data.id}
                                    onPress={data.onPress}
                                >
                                    <FeatherIcons
                                        icon={data.iconName}
                                        iconWidth={60}
                                        iconHeight={60}
                                        iconStrokeColor={"#000000"}
                                        iconStrokeWidth={1.5}
                                    />
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                </Pressable>
            </Modal>
        </>
    )
}

export default UploadImageCropper