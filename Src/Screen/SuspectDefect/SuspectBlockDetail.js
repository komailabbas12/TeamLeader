import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, Modal, StyleSheet, Image } from 'react-native';
import Header from '../../Component/Header';
import OtrixDivider from '../../Component/OtrixDivider';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Button } from 'native-base';
import { AppStyles } from '../../AppStyle/AppStyle';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'

export default function SuspectBlockDetail(props) {
    const { item } = props?.route?.params
    const [BlockModal, setBlockModal] = useState(false)
    return (
        <View style={{
            flex: 1,
            backgroundColor: AppStyles.color.primaryColor
        }} >
            <Header
                title=''
                navigation={props?.navigation}

            />
            <View style={{
                flex: 1,
                marginHorizontal: '4%'
            }}>
                <OtrixDivider size={'md'} />
                <Text style={{
                    fontSize: AppStyles.fontSize.normal,
                    fontFamily: AppStyles.fontName.bold,
                    color: AppStyles.color.textColor,

                }}>Defect ID: {item?.defectid}</Text>
                <OtrixDivider size={'sm'} />
                <Text style={{
                    fontSize: AppStyles.fontSize.small,
                    fontFamily: AppStyles.fontName.bold,
                    color: AppStyles.color.textseconday,

                }}>Worker ID: {item?.worderid}</Text>
                <OtrixDivider size={'sm'} />
                <Text style={{
                    fontSize: AppStyles.fontSize.small,
                    fontFamily: AppStyles.fontName.bold,
                    color: AppStyles.color.textseconday,

                }}>Product ID: {item?.productid}</Text>
                <OtrixDivider size={'sm'} />
                <Text style={{
                    fontSize: AppStyles.fontSize.small,
                    fontFamily: AppStyles.fontName.bold,
                    color: AppStyles.color.textseconday,

                }}>Date: {item?.date}</Text>
                <OtrixDivider size={'md'} />
                <Image
                    resizeMode="stretch"
                    source={{ uri: 'https://media.istockphoto.com/id/478335060/photo/tqm-zero-defect.jpg?s=612x612&w=0&k=20&c=aXrBWU0_V4ianfe5smk9SoL-BMSjMSGibAmyZjO-rbE=' }}
                    style={{
                        width: "100%",
                        height: heightPercentageToDP('50%')
                    }}
                />
                <OtrixDivider size={'lg'} />
                <Text style={{
                    fontSize: AppStyles.fontSize.normal,
                    fontFamily: AppStyles.fontName.bold,
                    color: AppStyles.color.textColor,

                }}>Defect Description</Text>
                <Text
                    style={{
                        fontSize: AppStyles.fontSize.small,
                        fontFamily: AppStyles.fontName.bold,
                        color: AppStyles.color.textseconday,

                    }}>**********************</Text>

                <View style={{
                    position: "absolute",
                    right: 20,
                    bottom: 40,
                    flexDirection: "row"
                }}>
                    <Entypo
                        onPress={() => props?.navigation.navigate('SuspectWorkerProfile')}
                        style={{ marginRight: 12 }}
                        name='circle-with-cross' color='black'
                        size={20} />
                    <AntDesign
                        onPress={() => setBlockModal(true)}
                        name='checkcircle'
                        color={AppStyles.color.greenColor}
                        size={20} />

                </View>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={BlockModal}
            >
                <View style={{
                    flex: 1,
                    justifyContent: "center",
                    paddingHorizontal: "4%",
                    backgroundColor: 'rgba(0,0,0,0.5)'
                }}>
                    <View style={{
                        paddingHorizontal: "4%",
                        paddingVertical: "10%",
                        backgroundColor: AppStyles.color.primaryColor,
                        borderRadius: 12,
                    }}>
                        <View style={{
                            alignSelf: "center",
                            width: wp('30%'),
                            height: wp('30%'),
                            borderRadius: 100,
                            backgroundColor: "red",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>

                            <Ionicons name='warning' color='yellow' size={50} />
                        </View>
                        <OtrixDivider size={'lg'} />
                        <Text
                            style={{
                                fontSize: AppStyles.fontSize.normal,
                                fontFamily: AppStyles.fontName.bold,
                                color: AppStyles.color.textColor,
                                textAlign: "center"

                            }}
                        >
                            {item?.suspect ? 'Do you wanna add this defect to the defect list' : ' Do you wanna add this product to scrap'}
                        </Text>
                        <OtrixDivider size={'lg'} />
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "center"
                        }}>
                            <Button
                                size="lg"
                                variant="solid"
                                bg={'#000'}
                                style={{
                                    paddingHorizontal: 24,
                                    width: wp('30%'),
                                    marginRight: 12
                                }}
                                onPress={() => {
                                    setBlockModal(false);
                                    if (!item?.suspect) {
                                        props?.navigation.goBack()
                                    } else {
                                        props?.navigation?.navigate('AddToScrap')
                                    }


                                }}
                            >
                                <Text style={[styles.buttonText]}>Yes</Text>
                            </Button>
                            <Button
                                size="md"
                                variant="solid"
                                bg={'#000'}
                                style={{
                                    paddingHorizontal: 24,
                                    width: wp('30%')
                                }}
                                onPress={() => {
                                    setBlockModal(false)
                                }}
                            >
                                <Text style={[styles.buttonText]}>No</Text>
                            </Button>

                        </View>

                    </View>

                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonText: {
        color: 'white',
        fontSize: wp('3.5%'),
    },
    button: {
        height: wp('11%'),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 2,
        marginHorizontal: wp('5%'),
    },
});