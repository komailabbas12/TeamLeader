import React from 'react';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AppStyles } from '../../AppStyle/AppStyle';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather'
import OtrixDivider from '../../Component/OtrixDivider';
export default function Profile(props) {
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
                    >Team Lead</Text>
                    <OtrixDivider size={'md'} />
                    <Text
                        style={{
                            fontSize: AppStyles.fontSize.normal,
                            fontFamily: AppStyles.fontName.main,
                            color: AppStyles.color.textColor,

                        }}
                    >ID</Text>
                </View>


            </View>
        </View>
    )
}