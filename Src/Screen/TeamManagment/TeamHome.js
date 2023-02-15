import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import Header from '../../Component/Header';
import { AppStyles } from '../../AppStyle/AppStyle';
import OtrixDivider from '../../Component/OtrixDivider';
import { Button } from 'native-base';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons'



export default function TeamHome(props) {
    const [BlockModal, setBlockModal] = useState(false)
    const [blockstatus, setblockstatus] = useState('UNBLOCK')
    const data = [
        {
            name: 'Worker Name',
            workerid: '12312',
            teamid: "23423",
            status: true
        },
        {
            name: 'Worker Name',
            workerid: '12312',
            teamid: "23423",
            status: true
        },
        {
            name: 'Worker Name',
            workerid: '12312',
            teamid: "23423",
            status: false
        },
    ]
    return (
        <View style={{ flex: 1, backgroundColor: '#fff', }}>
            <Header
                title="Team"
                navigation={props?.navigation}
            />
            <View style={{

            }}>
                <OtrixDivider size={'md'} />
                <FlatList
                    data={data}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item, index }) => {
                        return (
                            <>
                                <TouchableOpacity
                                    onPress={() => props?.navigation?.navigate('WorkerProfile')}
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        padding: "4%",
                                        backgroundColor: AppStyles.color.primaryColor,
                                        elevation: 4,
                                        borderRadius: 4,
                                        marginHorizontal: "4%"
                                    }}
                                >
                                    <View>
                                        <Text
                                            style={{
                                                fontSize: AppStyles.fontSize.normal,
                                                fontFamily: AppStyles.fontName.bold,
                                                color: AppStyles.color.textColor,

                                            }}>
                                            {item?.name}
                                        </Text>
                                        <OtrixDivider size={'sm'} />
                                        <Text
                                            style={{
                                                fontSize: AppStyles.fontSize.small,
                                                fontFamily: AppStyles.fontName.main,
                                                color: '#1C1C1C',

                                            }}>
                                            WorkerID: {item?.workerid}
                                        </Text>
                                        <OtrixDivider size={'sm'} />
                                        <Text
                                            style={{
                                                fontSize: AppStyles.fontSize.small,
                                                fontFamily: AppStyles.fontName.main,
                                                color: '#1C1C1C',

                                            }}>
                                            TeamID: {item?.teamid}
                                        </Text>
                                    </View>
                                    <View style={{
                                        justifyContent: "center"
                                    }}>
                                        <Button
                                            size="md"
                                            variant="solid"
                                            bg={item?.status ? AppStyles.color.greenColor : AppStyles.color.red}
                                            style={{
                                                width: widthPercentageToDP('25%')
                                            }}
                                            onPress={() => {
                                                setBlockModal(true)
                                                setblockstatus(item?.status ? "BLOCK" : "UNBLOCK")
                                            }}
                                        >

                                            <Text style={{
                                                color: AppStyles.color.primaryColor,
                                                fontFamily: AppStyles.fontName.semibold
                                            }}>{item?.status ? "UNBLOCK" : "BLOCK"}</Text>

                                        </Button>
                                    </View>

                                </TouchableOpacity>
                                <OtrixDivider size={'md'} />
                            </>
                        )
                    }}
                />

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
                            >Do you wanna {blockstatus} this profile</Text>
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
