import { Button, Radio } from 'native-base';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import { AppStyles } from '../../AppStyle/AppStyle';
import OtrixDivider from '../../Component/OtrixDivider';



export default function Home(props) {
    const buttons = [
        {
            title: "Suspect Defect",
            onPress: () => props?.navigation?.navigate('suspectDefectHome' , {
                suspect:true
            })
        },
        {
            title: "Blocked Piece",
            onPress: () => props?.navigation?.navigate('suspectDefectHome' , {
                suspect:false
            })
        },
        {
            title: "Team Management",
            onPress: () => props?.navigation?.navigate('TeamHome')
        },
        {
            title: "Dashboard",
            onPress: () => console.log('Suspect Defect')
        },
    ]
    return (
        <View style={{ flex: 1, backgroundColor: AppStyles.color.primaryColor }} >
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: '4%',
                elevation: 2,
                backgroundColor: AppStyles.color.primaryColor
            }}>
                <Button
                    onPress={() => props?.navigation.navigate('ToDoList')}
                    leftIcon={<Feather name='list' color='black' size={18} />}
                    colorScheme="dark"
                >
                    <Text style={{
                        fontSize: AppStyles.fontSize.small,
                        fontFamily: AppStyles.fontName.bold,
                        color: AppStyles.color.textColor,

                    }}>To Do List</Text>
                </Button>
                <View style={{ justifyContent: "center" }}>
                    <Feather onPress={() => props?.navigation?.navigate('Profile')} name='user' color='black' size={20} />
                </View>

            </View>
            <View style={{
                flex: 1,
                paddingHorizontal: '4%'
            }}>
                <OtrixDivider size={'md'} />
                {buttons.map((item, index) => {
                    return (
                        <View key={index}>
                            <TouchableOpacity
                                onPress={item?.onPress}
                                style={{
                                    backgroundColor: AppStyles.color.primaryColor,
                                    paddingHorizontal: '4%',
                                    paddingVertical: "5%",
                                    elevation: 1,
                                    borderRadius: 6,
                                    borderColor: AppStyles.color.grayLightColor,
                                    borderWidth: 1,

                                }}
                            >
                                <View style={{ justifyContent: "center", alignItems: "center" }} >
                                    <Text
                                        style={{
                                            fontSize: AppStyles.fontSize.normal,
                                            fontFamily: AppStyles.fontName.bold,
                                            color: AppStyles.color.textColor,

                                        }}
                                    >{item?.title}</Text>
                                </View>

                            </TouchableOpacity>
                            <OtrixDivider size={'md'} />
                        </View>
                    )
                })}
            </View>
            <Button
                size="md"
                variant="solid"
                bg={'#000'}
                style={[styles.button]}
                onPress={() => {
                    props.navigation.navigate('Login');
                }}>
                <Text style={[styles.buttonText]}>LOGOUT</Text>
            </Button>
            <OtrixDivider size={'lg'} />
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