import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AppStyles } from '../../AppStyle/AppStyle';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather'
import OtrixDivider from '../../Component/OtrixDivider';
import { Button } from 'native-base';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
export default function SuspectWorkerProfile(props) {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff', }} >
            <View style={{
                padding: '4%',
                flexDirection: "row",
                elevation: 2,
                backgroundColor: AppStyles.color.primaryColor
            }}>
                <View style={{
                    justifyContent: "center",
                    marginRight: 8
                }}>
                    <Ionicons onPress={() => props.navigation.goBack()} name='arrow-back-outline' color='black' size={20} />
                </View>
                <View style={{
                    justifyContent: "center",

                }}>
                    <Text
                        style={{
                            fontSize: AppStyles.fontSize.content,
                            fontFamily: AppStyles.fontName.semibold,
                            color: AppStyles.color.textColor,

                        }}
                    >Profile</Text>
                </View>

            </View>
            <View style={{ flex: 1, backgroundColor: AppStyles.color.primaryColor }}>
                <View style={{
                    width: "100%",
                    height: hp('28%'),
                    backgroundColor: '#C0CCDA'
                }} />

                <View style={{
                    justifyContent: "center",
                    alignItems: 'center'
                }}>
                    <View style={{
                        backgroundColor: '#F0F2F7',
                        width: 110,
                        height: 110,
                        borderRadius: 100,
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: '-18%'
                    }}>
                        <Feather name='user' color='#C0CCDA' size={50} />
                    </View>
                    <OtrixDivider size={'sm'} />
                    <Text
                        style={{
                            fontSize: AppStyles.fontSize.content,
                            fontFamily: AppStyles.fontName.semibold,
                            color: AppStyles.color.textColor,

                        }}
                    >Flen Ben Folen</Text>
                    <OtrixDivider size={'md'} />
                    <Text
                        style={{
                            fontSize: AppStyles.fontSize.normal,
                            fontFamily: AppStyles.fontName.main,
                            color: AppStyles.color.textColor,

                        }}
                    >Worker ID</Text>
                    <OtrixDivider size={'md'} />
                    <Text
                        style={{
                            fontSize: AppStyles.fontSize.normal,
                            fontFamily: AppStyles.fontName.main,
                            color: AppStyles.color.textColor,

                        }}
                    >Pieces to Control</Text>
                </View>
                <View style={{
                    flex: 1,
                    justifyContent: 'flex-end'
                }}>
                    <View style={{
                        flexDirection: "row",
                        marginHorizontal: "4.8%",
                        justifyContent: "space-between"
                    }}>
                        <Button
                            size="md"
                            variant="solid"
                            bg={'#000'}
                            style={{ flex: 0.48, }}

                        >
                            <Text style={[styles.buttonText]}>Send Training</Text>
                        </Button>
                        <Button
                            size="md"
                            variant="solid"
                            bg={AppStyles.color.red}
                            style={{ flex: 0.48, }}

                        >
                            <Text style={[styles.buttonText]}>Block the Worker</Text>
                        </Button>
                    </View>
                    <OtrixDivider size={'sm'} />
                    <Button
                        size="md"
                        variant="solid"
                        bg={'#000'}
                        style={[styles.button]}
                        onPress={() => {
                            props?.navigation?.goBack()
                        }}
                    >
                        <Text style={[styles.buttonText]}>Cancel</Text>
                    </Button>
                    <OtrixDivider size={'md'} />
                </View>
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