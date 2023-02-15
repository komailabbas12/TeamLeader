import { Checkbox } from 'native-base';
import React from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { AppStyles } from '../../AppStyle/AppStyle';
import Header from '../../Component/Header';
import OtrixDivider from '../../Component/OtrixDivider';
import Feather from 'react-native-vector-icons/Feather'
const data = [
    {
        title: "Task 1",
        value: true
    },
    {
        title: "Task 2",
        value: true
    },
    {
        title: "Task 3",
        value: true
    },
    {
        title: "Task 4",
        value: true
    },
    {
        title: "Task 5",
        value: true
    },
    {
        title: "Task 6",
        value: true
    },
    {
        title: "Task 7",
        value: true
    },
    {
        title: "Task 7",
        value: true
    },
    {
        title: "Task 7",
        value: true
    },
    {
        title: "Task 7",
        value: true
    },
    {
        title: "Task 7",
        value: true
    },
    {
        title: "Task 7",
        value: true
    },
    {
        title: "Task 7",
        value: true
    },
    {
        title: "Task 7",
        value: true
    },
    {
        title: "Task 7",
        value: true
    },
    {
        title: "Task 7",
        value: true
    },
    {
        title: "Task 7",
        value: true
    },
    {
        title: "Task 7",
        value: true
    },
]
export default function ToDoList(props) {
    return (
        <View style={{ flex: 1, backgroundColor: AppStyles.color.primaryColor }}>
            <Header
                title='To Do List'
                navigation={props?.navigation} />
            <View style={{ flex: 1 }}>
                <OtrixDivider size={'md'} />
                <FlatList
                    data={data}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item, index }) => {
                        return (
                            <View>
                                <View
                                    style={{
                                        backgroundColor: index % 2 == 0 ? AppStyles.color.primaryLight : AppStyles.color.primaryColor,
                                        paddingHorizontal: '4%',
                                        paddingVertical: "5%",
                                        elevation: 2,
                                        borderRadius: 6,
                                        marginHorizontal: 10,
                                        marginTop: index == 0 ? 5 : 0,
                                        flexDirection: "row",
                                        justifyContent: "space-between"

                                    }}

                                >
                                    <View style={{
                                        justifyContent: "center"
                                    }}>
                                        <Text
                                            style={{
                                                fontSize: AppStyles.fontSize.normal,
                                                fontFamily: AppStyles.fontName.semibold,
                                                color: AppStyles.color.textColor,

                                            }}
                                        >{item.title}</Text>

                                    </View>
                                    <View>
                                        <Checkbox onChange={(value) => console.log(value)} color="green" />
                                    </View>
                                </View>
                                <OtrixDivider size={'md'} />
                            </View>
                        )
                    }}

                />
            </View>
            <TouchableOpacity
                style={{
                    backgroundColor: AppStyles.color.textColor,
                    width: 50,
                    height: 50,
                    borderRadius: 100,
                    position: "absolute",
                    bottom: 35,
                    right: 25,
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Feather  name='plus' color={AppStyles.color.primaryColor} size={25} />
            </TouchableOpacity>
        </View>
    )
}