import React from 'react';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { AppStyles } from '../AppStyle/AppStyle';

export default function Header(props) {
    return (
        <View style={{
            padding: '4%',
            flexDirection: "row",
            elevation: 2,
            backgroundColor: AppStyles.color.primaryColor,
            justifyContent: "space-between"
        }}>
            <View style={{ flexDirection: "row" }}>
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
                    >{props?.title}</Text>
                </View>
            </View>
            {props?.LeftIcon ? (
                props.LeftIcon

            ) : null}


        </View>
    )
}